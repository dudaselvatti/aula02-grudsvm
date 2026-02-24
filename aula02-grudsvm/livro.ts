interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

const biblioteca: Livro[] = [
  {titulo: "Matemática", autor: "Nerd1", ano: 1954, disponivel: true},
  {titulo: "A vida de um nerd", autor: "Gabriel Feitoza e Gabriel de Souza", ano: 2008, disponivel: false},
  {titulo: "Estruturas de Dados", autor: "Professor Antonio", ano: 2009, disponivel: true}
];

function listarTitulosDisponiveis(livros: Livro[]): string[] {
  return livros
    .filter(livro => livro.disponivel)
    .map(livro => livro.titulo);
}

console.log(listarTitulosDisponiveis(biblioteca)); 