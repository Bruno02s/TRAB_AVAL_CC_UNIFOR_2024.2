const IDADE_MINIMA_PARA_DIRIGIR = 18;

function validarIdade(idade) {
    if (typeof idade !== 'number' || idade <= 0 || idade !== idade) { 
        throw new Error('Idade inválida. A idade deve ser um número positivo.');
    }
}

function verificarSePodeDirigir(idade) {
    validarIdade(idade);  
    return idade >= IDADE_MINIMA_PARA_DIRIGIR ? 'Pode dirigir' : 'Não pode dirigir';
}

try {
    console.log(verificarSePodeDirigir(16));  
} catch (erro) {
    console.error(erro.message); 
}
