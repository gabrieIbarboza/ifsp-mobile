# ANALISE_ARQUITETURA

## Estrutura de Diretórios

A organização atual está clara e segue boas práticas para projetos React Native:

- components: componentes reutilizáveis (ex: `PokemonCard`)
- screens: telas principais da aplicação (`PokedexScreen`, `PokemonDetailsScreen`)
- services: lógica de acesso a dados externos (ex: API)
- types: definição de tipos TypeScript
- utils: funções utilitárias (ex: formatação)

**Sugestão de melhoria:**  
Se o projeto crescer, pode ser interessante criar subpastas dentro de components para agrupar componentes relacionados, ou separar hooks customizados em uma pasta `hooks/`. No momento, a estrutura está adequada e clara.

## Componentização

- **PokemonCard:**  
  É um bom exemplo de componente reutilizável: recebe props, não depende de estado global, e pode ser usado em diferentes telas.

- **PokemonDetailsScreen:**  
  A tela está simples, mas pode ser melhorada extraindo partes em componentes menores:
  - Um componente `PokemonTypeBadge` para exibir cada tipo de Pokémon.
  - Um componente `PokemonImage` para padronizar a exibição da imagem.
  - Se houver mais informações no futuro (habilidades, status, etc.), cada seção pode virar um componente.

## Gerenciamento de Estado e Lógica

- **PokedexScreen:**  
  A lógica de busca, filtragem, paginação e carregamento dos dados está toda dentro do componente de tela, usando hooks (`useState`, `useEffect`).

- **PokemonDetailsScreen:**  
  Recebe o Pokémon via parâmetro de navegação (`route.params.pokemon`). Não há busca adicional de dados nesta tela.

- **Sustentabilidade:**  
  Manter a lógica de estado e dados dentro dos componentes de tela é aceitável para projetos pequenos.  
  **Prós:**  
  - Simplicidade e clareza para projetos pequenos.
  - Fácil de entender o fluxo de dados.

  **Contras:**  
  - Dificulta a reutilização de lógica (ex: hooks customizados).
  - Componentes de tela podem ficar grandes e difíceis de manter.
  - Dificulta testes unitários da lógica de negócio.
  - Se o app crescer, pode ser necessário migrar para um gerenciador de estado global (ex: Context API, Redux, Zustand) ou extrair hooks customizados.

## Pontos Fortes e Fracos

**Pontos Fortes:**
1. **Organização clara:**  
   Separação entre componentes, telas, serviços, tipos e utilitários facilita a manutenção e evolução do projeto.
2. **Componentização básica bem feita:**  
   O `PokemonCard` é reutilizável e desacoplado, seguindo boas práticas.

**Pontos Fracos:**
1. **Lógica de dados acoplada às telas:**  
   Toda a lógica de busca, filtragem e paginação está dentro do componente de tela, o que pode dificultar a escalabilidade e a reutilização.
2. **Pouca extração de componentes na tela de detalhes:**  
   `PokemonDetailsScreen` pode se beneficiar da extração de componentes menores, especialmente se for expandida no futuro.