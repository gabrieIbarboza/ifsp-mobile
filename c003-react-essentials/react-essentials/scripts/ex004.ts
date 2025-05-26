interface Produto {
    nome: string;
    preco: number;
}

function obterPrimeiro<T>(lista: T[]): T {
    return lista[0];
}

// Debbuging
const numeros = [1, 2, 3, 4, 5]; // inferencia de tipo
const primeiroNumero = obterPrimeiro(numeros);
console.log("Primeiro número:", primeiroNumero);

const textos = ["Texto 1", "Texto 2", "Texto 3"]; // inferencia de tipo
const primeiroTexto = obterPrimeiro(textos);
console.log("Primeiro texto:", primeiroTexto);

const produtos: Produto[] = [
    { nome: "Produto 1", preco: 10 },
    { nome: "Produto 2", preco: 20 },
    { nome: "Produto 3", preco: 30 },
];

const primeiroProduto = obterPrimeiro(produtos);
console.log("Primeiro produto:", primeiroProduto.nome);