function achaPares(listaNumeros) {

    const listaPares = [];
    const DIVISIVEL = 2;
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % DIVISIVEL === 0) {
            listaPares.push(listaNumeros[i]);
        }
    }
    return listaPares;
}
const AVALIADO1 = 1;
const AVALIADO2 = 2;
const AVALIADO3 = 3;
const AVALIADO4 = 4;
const AVALIADO5 = 5;
const AVALIADO6 = 6;

const numerosAvaliados = [AVALIADO1, AVALIADO2, AVALIADO3, AVALIADO4, AVALIADO5, AVALIADO6];
const numerosPares = achaPares(numerosAvaliados);
console.log(numerosPares);
