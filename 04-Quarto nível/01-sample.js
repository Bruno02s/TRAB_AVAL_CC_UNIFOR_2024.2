async function buscarPlaneta() {
    const resposta = await fetch("https://swapi.dev/api/planets/1/");
    const planeta = await resposta.json();
    console.log(planeta.name);

    exibirNomePlaneta(planeta.name);
}
function exibirNomePlaneta(nome) {
    return nome;
}

buscarPlaneta();
