interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

function exibirPerfil(u: UsuarioSemSenha): void {
    console.log("Perfil do Usuário:");
    console.log(`ID: ${u.id}`);
    console.log(`Nome: ${u.nome}`);
    console.log(`Email: ${u.email}`);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
    console.log(`Atualizando usuário com ID ${id}...`);
    console.log("Novos dados:", dados);
}

// Debbuging
const usuario: Usuario = {
    id: 1,
    nome: "João Silva",
    email: "jsilva.email.com",
    senha: "senha123",
};

const usuarioSemSenha: UsuarioSemSenha = {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
};

const usuarioAtualizacao: UsuarioAtualizacao = {
    nome: "João Silva Atualizado"
};

exibirPerfil(usuarioSemSenha);
atualizarUsuario(usuario.id, usuarioAtualizacao);