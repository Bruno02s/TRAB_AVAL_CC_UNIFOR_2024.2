const dataInicial = "2024-01-01";
const dataFinal = "2024-12-31";

function calculaDiferencaEntreDatas(dataComeco, dataFim) {
    return new Date(dataFim) - new Date(dataComeco);
}

const diferancaEntreDatas = calculaDiferencaEntreDatas(dataInicial, dataFinal);
console.log(diferancaEntreDatas);
