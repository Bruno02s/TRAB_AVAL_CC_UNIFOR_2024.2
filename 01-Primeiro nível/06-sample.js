const nome = "Pedro";
const idade = 25;
const statusAtividade = true;

function confirmarStatusAtividade(nome, idade, status) {
    if (status) {
        console.log(`${nome} tem ${idade} anos e está ativo.`);
    } else {
        console.log(`${nome} está inativo.`);
    }
}

confirmarStatusAtividade(nome, idade, statusAtividade);