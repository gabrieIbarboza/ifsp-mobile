# PROPOSTA DE REESTRUTURAÇÃO ARQUITETURAL — MVVM PARA PokedexScreen

## Padrão Escolhido: MVVM

O padrão MVVM (Model-View-ViewModel) é uma excelente escolha para aplicações React Native porque:
- **Separa claramente responsabilidades**: a ViewModel centraliza a lógica de apresentação e manipulação de estado, enquanto a View (componente de tela) foca apenas na renderização e interação com o usuário.
- **Facilita testes**: a lógica de negócio fica desacoplada da interface, tornando o ViewModel facilmente testável.
- **Escalabilidade**: à medida que a aplicação cresce, a manutenção e evolução do código se tornam mais simples.

**Por que MVVM ao invés de MVP?**
- No MVP, o Presenter manipula diretamente a View via interface, o que pode gerar acoplamento e dificultar o uso de hooks e estados reativos do React.
- O MVVM aproveita o paradigma reativo do React, permitindo que a View consuma estados e ações do ViewModel via hooks, tornando o fluxo de dados mais natural e idiomático para React Native.

---

## Nova Estrutura de Arquivos (para a tela da Pokédex)

```
pokedex-app/
├─ screens/
│  └─ Pokedex/
│     ├─ PokedexScreen.tsx         # View: apenas interface e consumo do ViewModel (a ser criado/movido)
│     ├─ usePokedexViewModel.ts    # ViewModel: lógica de estado, busca, paginação, etc. (a ser criado)
│     └─ types.ts                  # Tipos/interfaces específicos da tela (a ser criado)
├─ components/
│  └─ PokemonCard.tsx
│  └─ ...
├─ services/
│  └─ api.ts
│  └─ ...
├─ types/
│  └─ Pokemon.ts
│  └─ ...
```

---

## Divisão de Responsabilidades

### 1. View (`PokedexScreen.tsx`)
- Responsável apenas pela renderização e interação com o usuário.
- Consome o ViewModel via hook (`const vm = usePokedexViewModel()`).
- Usa os estados e funções expostos pelo ViewModel para exibir a lista, loading, mensagens de erro, etc.
- Não contém lógica de negócio nem manipulação direta de dados.

### 2. ViewModel (`usePokedexViewModel.ts`)
- Centraliza toda a lógica de estado e manipulação de dados da tela.
- Expõe:
  - **Estados:**
    - `pokemons`: lista de Pokémon filtrada/paginada
    - `isLoading`: booleano de carregamento
    - `searchQuery`: texto da busca
    - `error`: mensagem de erro (se houver)
  - **Funções:**
    - `setSearchQuery(query: string)`: atualiza o termo de busca
    - `loadMore()`: paginação
    - `refresh()`: recarrega a lista
- Consome serviços de dados (ex: `PokedexService`) e encapsula efeitos colaterais (fetch, debounce, etc).

---

## Fluxo de Dados — Exemplo de Interação (Busca)


1. **Usuário digita no campo de busca** (campo de busca presente na View, implementado diretamente em `PokedexScreen.tsx` ou como componente futuro).
2. O `onChangeText` do campo chama `setSearchQuery` exposto pelo ViewModel.
3. O ViewModel atualiza o estado `searchQuery`.
4. Um `useEffect` no ViewModel detecta a mudança em `searchQuery` e dispara a busca (com debounce, se necessário).
5. O ViewModel atualiza `isLoading` para `true` e faz a requisição via `PokedexService`.
6. Ao receber os dados, o ViewModel atualiza o estado `pokemons` e `isLoading` para `false`.
7. A View re-renderiza automaticamente, exibindo a lista filtrada.

**Diagrama Simplificado:**

```
[Usuário] → [View: PokedexScreen] → [ViewModel: usePokedexViewModel] → [Service/API]
      ↑                ↓                         ↑
   Renderiza      Consome estados           Busca dados
```

---

**Resumo:**
- O MVVM traz clareza, testabilidade e escalabilidade para a tela da Pokédex.
- A View fica enxuta e reativa, enquanto o ViewModel concentra toda a lógica de apresentação e manipulação de dados.
- A estrutura proposta facilita a manutenção e futuras expansões da aplicação.
