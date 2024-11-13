const acessoPerimitido = true;

function verificarAcesso(user) {
    if (acessoPerimitido && user.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", admin: true };
verificarAcesso(usuario);
