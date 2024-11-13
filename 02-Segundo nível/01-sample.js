function calcularDesconto(preco) {
    return preco - (preco * 0.15);
}

const precoFinal = calcularDesconto(100);
console.log(`Preço com desconto: ${precoFinal}`); 
