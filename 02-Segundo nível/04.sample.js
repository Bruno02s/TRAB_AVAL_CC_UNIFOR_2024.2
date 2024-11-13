const MAX_TENTATIVAS = 3;
const SENHA_CORRETA = '12345';

function validarSenha(senha) {
    if (typeof senha !== 'string' || senha.trim() === '') {
        throw new Error('A senha fornecida deve ser uma string válida.');
    }
}

function tentarLogin(senha) {
    validarSenha(senha); 

    let tentativas = 0;
    
    while (tentativas < MAX_TENTATIVAS) {
        if (senha === SENHA_CORRETA) {
            return 'Login efetuado com sucesso!';
        }
        tentativas++;
    }

    return 'Tentativas de login excedidas.';
}

try {
    console.log(tentarLogin('123'));  
} catch (erro) {
    console.error(erro.message);  
}
