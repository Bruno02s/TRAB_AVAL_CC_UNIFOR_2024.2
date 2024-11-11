async function buscarNavePersonagem(personagem) {
    try {
        const tripulacaoMedia = 100;

        if (personagem.starships.length > 0) {
            const respostaNave = await fetch(personagem.starships[0]);
            const nave = await respostaNave.json();

            const tripulacao = parseInt(nave.crew);
            if (tripulacao > tripulacaoMedia) {
                console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
            } else {
                console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
            }
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error("Erro ao buscar a nave:", erro);
    }
}

async function buscarPersonagem(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        const personagem = await respostaPersonagem.json();

        return personagem;
    } catch(erro) {
        console.error("Erro ao buscar o personagem:", erro);

        return [];
    }
}

const ID_PERSONAGEM = 1;
const PERSONAGEM = await buscarPersonagem(ID_PERSONAGEM);

buscarNavePersonagem(PERSONAGEM);
