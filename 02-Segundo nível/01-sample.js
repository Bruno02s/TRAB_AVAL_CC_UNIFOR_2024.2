const DESCONTO_PERCENTUAL = 0.15;
const VALOR = 100;

function validarPreco(preco) {
    if (typeof preco !== "number" || preco <= 0) {
        throw new Error("Preço inválido. O valor deve ser um número positivo.");
    }
}

function calcularDesconto(preco) {
    validarPreco(preco);
    return preco - (preco * DESCONTO_PERCENTUAL);
}

function exibirPrecoComDesconto(precoOriginal) {
    const casasDecimais = 2;

    try {
        const precoComDesconto = calcularDesconto(precoOriginal);
        console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(casasDecimais)}`);
    } catch (erro) {
        console.error(erro.message);
    }
}


exibirPrecoComDesconto(VALOR);
