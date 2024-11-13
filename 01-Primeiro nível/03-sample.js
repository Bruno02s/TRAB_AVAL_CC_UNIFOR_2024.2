let dataInicial = "2024-01-01";
let dataFinal = "2024-12-31";

function calculaDiferencaEntreDatas(dataComeco, dataFim) {
    return new Date(dataFim) - new Date(dataComeco);
}

let diferancaEntreDatas = calculaDiferencaEntreDatas(dataInicial, dataFinal);
console.log(diferancaEntreDatas);
