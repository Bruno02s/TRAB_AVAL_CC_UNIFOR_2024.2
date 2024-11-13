const VALOR_POR_KM = 10;

function validarDistancia(distancia) {
    if (typeof distancia !== 'number' || distancia <= 0 || distancia !== distancia) { 
        throw new Error('Distância inválida. A distância deve ser um número positivo.');
    }
}

function calcularFrete(distancia) {
    validarDistancia(distancia);  
    return distancia * VALOR_POR_KM;
}

try {
    const valorFrete = calcularFrete(50);
    console.log(`O valor do frete é: R$ ${valorFrete}`);
} catch (erro) {
    console.error(erro.message);  
}
