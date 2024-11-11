async function calcularCustoVeiculo(veiculos) {
    console.log(veiculos);
    try {
        const custoMedio = 10000;
        const veiculosCaros = veiculos.results.filter(veiculo => parseInt(veiculo.cost_in_credits) > custoMedio);

        console.log("Veículos caros (mais de 10.000 créditos):");

        veiculosCaros.forEach(veiculo => {
            console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
        });

        const custoTotal = veiculosCaros.reduce((total, veiculo) => {
            return total + parseInt(veiculo.cost_in_credits);
        }, 0);

        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);

    } catch (erro) {
        console.error("Erro ao calcular custo veiculo:", erro);
    }
}

async function buscarVeiculos() {
    try {
        const resposta = await fetch("https://swapi.dev/api/vehicles/");
        const veiculos = await resposta.json();

        return veiculos;
    } catch(erro) {
        console.error("Erro ao buscar veículos:", erro);

        return [];
    }
}

const VEICULOS = await buscarVeiculos();
calcularCustoVeiculo(VEICULOS);
