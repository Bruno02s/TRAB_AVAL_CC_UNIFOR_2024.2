const BONUS_GERENTE = 1000;
const BONUS_SUPERVISOR = 500;
const BONUS_OUTROS = 200;
const DESCONTO_FIXO = 300;
const TAXA_IMPOSTO_ALTO = 0.27;
const TAXA_IMPOSTO_MEDIO = 0.18;
const TAXA_IMPOSTO_BAIXO = 0.11;

function validarParametros(horasTrabalhadas, valorHora, cargo) {
    if (typeof horasTrabalhadas !== 'number' || horasTrabalhadas <= 0) {
        throw new Error('Horas trabalhadas inválidas.');
    }
    if (typeof valorHora !== 'number' || valorHora <= 0) {
        throw new Error('Valor por hora inválido.');
    }
    const cargosValidos = ['gerente', 'supervisor', 'outros'];
    if (!cargosValidos.includes(cargo)) {
        throw new Error('Cargo inválido.');
    }
}

function calcularSalarioBase(horasTrabalhadas, valorHora) {
    return horasTrabalhadas * valorHora;
}

function calcularBonus(cargo, salarioBase) {
    switch (cargo) {
        case 'gerente':
            return salarioBase + BONUS_GERENTE;
        case 'supervisor':
            return salarioBase + BONUS_SUPERVISOR;
        default:
            return salarioBase + BONUS_OUTROS;
    }
}

function calcularDesconto(salarioComBonus) {
    return salarioComBonus - DESCONTO_FIXO;
}

function calcularImposto(salarioComDesconto) {
    if (salarioComDesconto > 5000) {
        return salarioComDesconto * TAXA_IMPOSTO_ALTO;
    } else if (salarioComDesconto > 3000) {
        return salarioComDesconto * TAXA_IMPOSTO_MEDIO;
    } else {
        return salarioComDesconto * TAXA_IMPOSTO_BAIXO;
    }
}

function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    validarParametros(horasTrabalhadas, valorHora, cargo); 

    const salarioBase = calcularSalarioBase(horasTrabalhadas, valorHora);
    const salarioComBonus = calcularBonus(cargo, salarioBase);
    const salarioComDesconto = calcularDesconto(salarioComBonus);
    const imposto = calcularImposto(salarioComDesconto);

    return salarioComDesconto - imposto;
}

try {
    const salario = calcularSalarioFuncionario(160, 25, 'gerente');
    console.log(`O salário final é: R$ ${salario.toFixed(2)}`);
} catch (erro) {
    console.error(erro.message);
}
