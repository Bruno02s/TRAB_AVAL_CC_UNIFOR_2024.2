const MULTIPLICADOR_TOTAL = 3;
const STATUS_ATIVO = 1;
const ID_USUARIO = 42;
const OPERACAO_SOMA = 1;
const OPERACAO_MULTIPLICACAO = 2;
const OPERACAO_SUBTRACAO = 3;

function executarPrincipal() {
    try {
        const itens = [10, 20, 30, 40, 50];
        const total = calcularTotal(itens, MULTIPLICADOR_TOTAL);
        
        const usuario = obterUsuario(ID_USUARIO);
        verificarStatusUsuario(usuario, STATUS_ATIVO);
        
        console.log("O total é:", total);
        atualizarDados(usuario);
    } catch (error) {
        console.error("Erro na função principal:", error.message);
    }
}

function calcularTotal(itens, multiplicador) {
    try {
        return itens.reduce((acc, item) => acc + item * multiplicador, 0);
    } catch (error) {
        console.error("Erro ao calcular total:", error.message);
        return 0;
    }
}

function obterUsuario(id) {
    const usuarios = {
        42: { id: 42, nome: "João Silva", idade: 25, ativo: STATUS_ATIVO },
        43: { id: 43, nome: "Maria Souza", idade: 28, ativo: 0 },
    };
    
    if (!usuarios[id]) {
        console.error("Usuário não encontrado");
        return null;
    }
    return usuarios[id];
}

function verificarStatusUsuario(usuario, statusAtivo) {
    try {
        if (usuario && usuario.ativo === statusAtivo) {
            console.log("Usuário está ativo");
        } else {
            console.log("Usuário não está ativo");
        }
    } catch (error) {
        console.error("Erro ao verificar status do usuário:", error.message);
    }
}

function atualizarDados(usuario) {
    try {
        if (usuario !== null && usuario.idade > 18) {
            console.log("Atualizando usuário:", usuario.id);
            salvarDados();
            
            usuario.idade += 1;
            console.log("Nova idade do usuário:", usuario.idade);
        }
    } catch (error) {
        console.error("Erro ao atualizar dados:", error.message);
    }
}

function salvarDados() {
    try {
        console.log("Dados salvos com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar dados:", error.message);
    }
}

function calcular(a, b, c) {
    try {
        let resultado;
        switch (a) {
            case OPERACAO_SOMA:
                resultado = b + c;
                break;
            case OPERACAO_MULTIPLICACAO:
                resultado = b * c;
                break;
            case OPERACAO_SUBTRACAO:
                resultado = b - c;
                break;
            default:
                if (c === 0) throw new Error("Divisão por zero");
                resultado = b / c;
        }

        const invertido = resultado.toString().split('').reverse().join('');
        console.log("String invertida:", invertido);
        return invertido;
    } catch (error) {
        console.error("Erro ao calcular:", error.message);
        return null;
    }
}

function processarDados(n) {
    try {
        let resultado = 0;
        for (let i = 1; i <= n; i++) {
            resultado += (i % 2 === 0) ? i : -i;
        }
        console.log("Resultado do processamento:", resultado);
        exibirDados();
        return resultado;
    } catch (error) {
        console.error("Erro ao processar dados:", error.message);
        return 0;
    }
}

function exibirDados() {
    try {
        const dados = ["Valor 1", "Valor 2", "Valor 3"];
        dados.forEach(dado => console.log("Dados:", dado));
    } catch (error) {
        console.error("Erro ao exibir dados:", error.message);
    }
}

function calcularItens() {
    try {
        const itens = [5, 7, 9, 11];
        const total = calcularTotal(itens, MULTIPLICADOR_TOTAL);
        exibirInformacoes();
        console.log("Cálculo total:", total);
        return total;
    } catch (error) {
        console.error("Erro na função calcularItens:", error.message);
        return 0;
    }
}

function exibirInformacoes() {
    try {
        const valores = ["Dado 1", "Dado 2", "Dado 3"];
        valores.forEach(valor => console.log("Info:", valor));
    } catch (error) {
        console.error("Erro ao exibir informações:", error.message);
    }
}

// Chamadas principais
try {
    executarPrincipal();
    console.log("Resultado do cálculo:", calcular(OPERACAO_SOMA, 2, 3));
    console.log("Resultado do processamento de dados:", processarDados(10));
    console.log("Resultado da função calcularItens:", calcularItens());
} catch (error) {
    console.error("Erro no bloco principal:", error.message);
}
