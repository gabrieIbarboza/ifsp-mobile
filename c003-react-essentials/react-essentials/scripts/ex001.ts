interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

const biblioteca: Livro[] = [
  {
    titulo: "Os Sete Maridos de Evelyn Hugo",
    autor: "Taylor Jenkins Reid",
    ano: 2017,
    disponivel: true,
  },
  {
    titulo: "Manifesto Comunista",
    autor: "Karl Marx e Friedrich Engels",
    ano: 1848,
    disponivel: true,
  },
  {
    titulo: "Daisy Jones e os Six",
    autor: "Taylor Jenkins Reid",
    ano: 2019,
    disponivel: false,
  },
];

function listarTitulosDisponiveis(livros: Livro[]): string[] {
    return livros
      .filter((livro) => livro.disponivel)
      .map((livro) => livro.titulo);
}

// Debbuging
console.log("Livros disponíveis:");
listarTitulosDisponiveis(biblioteca).forEach((titulo) => {
  console.log(`- ${titulo}`);
});