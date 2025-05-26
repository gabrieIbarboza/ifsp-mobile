type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };
type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado) : void {
    if (r.tipo === "sucesso") {
        console.log("Dados:", r.dados);
    } else {
        console.log("Erro:", r.mensagem);
    }
}

// Debbuging
const resultadoSucesso: Resultado = {
    tipo: "sucesso",
    dados: ["Dado 1", "Dado 2", "Dado 3"],
};
const resultadoErro: Resultado = {
    tipo: "erro",
    mensagem: "Ocorreu um erro ao processar os dados.",
};
exibirResultado(resultadoSucesso);
exibirResultado(resultadoErro);