async function detalharNave(nave) {
    const mediaTamanho = 100;
  
    try {
        const detalhesNave = `
            Nome: ${nave.name}
            Modelo: ${nave.model}
            Fabricante: ${nave.manufacturer}
        `;
  
        console.log("Detalhes da Nave:");
        console.log(detalhesNave);
  
        const tamanhoTripulacao = parseInt(nave.crew);

        if (tamanhoTripulacao > mediaTamanho) {
            console.log("Esta é uma nave grande.");
        } else {
            console.log("Esta é uma nave pequena.");
        }
    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);
    }
}
  
async function buscarNave(numNave) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/starships/${numNave}/`);
        const nave = await resposta.json();
       
        detalharNave(nave);
    } catch (erro) {
        console.error("ERRO ao encontrar nave especificada:", erro);
    }
}
  
const NUMERO_NAVE = 9;

buscarNave(NUMERO_NAVE);
