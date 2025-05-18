interface PropsBotao {
    titulo: string
    ativo?: boolean
}

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
    return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

// Debbuging
const botao1 = renderizarBotao({ titulo: "Enviar" });
const botao2 = renderizarBotao({ titulo: "Sonhar", ativo: true });
const botao3 = renderizarBotao({ titulo: "Cancelar", ativo: false });
console.log(botao1); // [ Enviar ]
console.log(botao2); // [ Sonhar ]
console.log(botao3); // ( Cancelar )
