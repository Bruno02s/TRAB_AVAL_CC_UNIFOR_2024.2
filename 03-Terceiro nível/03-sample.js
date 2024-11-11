async function detalharPlaneta(planeta) {
    try {
        const populacaoMedia = 1000000;
        const detalhesPlaneta = `
        Nome: ${planeta.name}
        Clima: ${planeta.climate}
        População: ${planeta.population}
        `;

        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        const populacao = parseInt(planeta.population);
      
        if (populacao > populacaoMedia) {
            console.log("Este planeta é muito populado.");
        } else {
            console.log("Este planeta tem uma população pequena.");
        }
    } catch (erro) {
        console.error("Erro ao filtrar o planeta:", erro);
    }
}

async function buscarPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        const planeta = await resposta.json();
      
        detalharPlaneta(planeta);    
    } catch(erro) {
        console.error("Erro ao buscar o planeta:", erro);
    }
}

const ID_PLANETA = 3;

buscarPlaneta(ID_PLANETA);
