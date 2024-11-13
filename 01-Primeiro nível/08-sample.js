let pessoa = { nome: "Maria", idade: 28 };
let maiorIdade = 18;
function avaliaIdade(pessoa) {
    return pessoa.idade >= maiorIdade;
}

console.log(avaliaIdade(pessoa));
