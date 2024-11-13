let nome = "Pedro";
let idade = 25;
let statusAtividade = true;

function confirmarStatusAtvidade(nome, idade, status) {
    if (status) {
        console.log(nome + " tem " + idade + " anos e está ativo.");
    } else {
        console.log(nome + " está inativo.");
    }
}

confirmarStatusAtvidade(nome, idade, statusAtividade);
