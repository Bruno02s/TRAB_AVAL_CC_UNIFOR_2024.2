function achaPares(listaNumeros) {
    const listaPares = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            listaPares.push(listaNumeros[i]);
        }
    }
    return listaPares;
}

const numerosAvaliados = [1, 2, 3, 4, 5, 6];
const numerosPares = achaPares(numerosAvaliados);
console.log(numerosPares);
