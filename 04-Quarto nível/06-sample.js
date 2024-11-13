async function buscarNave(id) {
    const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
    const nave = await resposta.json();
    const nomeNave = nave.name;
    
    console.log(nomeNave);
}
const idDeBusca = 10;
buscarNave(idDeBusca);
