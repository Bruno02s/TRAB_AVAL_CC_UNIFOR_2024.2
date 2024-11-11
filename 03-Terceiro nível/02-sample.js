async function filtrarPessoas(pessoas, filtro) {
    try {
        const pessoasComFiltro = pessoas.results.filter(pessoa =>
            pessoa.name.startsWith(filtro)
        );
  
        console.log(`Pessoas cujo nome começa com ${filtro}:`);
  
        pessoasComFiltro.forEach(pessoa => {
            console.log(pessoa.name);
        });
    } catch (erro) {
        console.error("Erro ao filtrar pessoas:", erro);
    }
}
  
async function buscarPessoas(nomeComecaCom) {
    try {
        const resposta = await fetch("https://swapi.dev/api/people/");
        const pessoas = await resposta.json();
      
        console.log(`Total de pessoas encontradas: ${pessoas.results.length}`);
      
        filtrarPessoas(pessoas, nomeComecaCom);
    } catch(erro) {
        console.error("Erro ao buscar pessoas:", erro);
    }
}
  
const LETRA_INICIAL = "B";
buscarPessoas(LETRA_INICIAL);
