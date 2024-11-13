
const ANO_2023 = 2023;
const MES_FEVEREIRO = 1;  
const DIA_15 = 15;

const ANO_2024 = 2024;
const MES_AGOSTO = 8;
const DIA_1 = 1;

const ANO_2020 = 2020;
const MES_MAIO = 4;
const DIA_22 = 22;
const MES_NOVEMBRO = 10;
const ANO_2022 = 2022;
const MES_OUTUBRO = 9;
const DIA_5 = 5;

const ANO_2021 = 2021;
const DIA_31 = 31;
const DIA_10 = 10;
const DIA_25 = 25;

const DATA_CRIACAO_CARLOS = new Date(ANO_2023, MES_FEVEREIRO, DIA_15);
const ULTIMO_LOGIN_CARLOS = new Date(ANO_2024, MES_AGOSTO, DIA_1);

const DATA_CRIACAO_ANA = new Date(ANO_2020, MES_MAIO, DIA_22);
const ULTIMO_LOGIN_ANA = new Date(ANO_2024, MES_AGOSTO, DIA_31);

const DATA_CRIACAO_JOSE = new Date(ANO_2022, MES_OUTUBRO, DIA_5);
const ULTIMO_LOGIN_JOSE = new Date(ANO_2024, MES_AGOSTO, DIA_10);

const DATA_CRIACAO_MARIA = new Date(ANO_2021, MES_FEVEREIRO, DIA_10);
const ULTIMO_LOGIN_MARIA = new Date(ANO_2023, MES_NOVEMBRO, DIA_25);

const ROLE_ADMIN = "admin";
const ONE_YEAR_MS = 31536000000; 
const LOGIN_ATTEMPT_LIMIT = 4;
const LOGIN_ATTEMPT_LIMIT_TWO = 2;
const LOGIN_ATTEMPT_LIMIT_THREE = 3;

// Classe Z
class Z {
    constructor({ a, b, c, d, e, f, g, h }) {
        try {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.e = e;
            this.f = f;
            this.g = g;
            this.h = h;
        } catch (error) {
            console.error("Erro ao inicializar a classe Z:", error);
        }
    }

    x() {
        try {
            console.log(this.f ? "Ativo" : "Inativo");
        } catch (error) {
            console.error("Erro ao verificar o status de atividade:", error);
        }
    }

    y() {
        try {
            console.log(this.c === ROLE_ADMIN 
                ? "Admin pode acessar todas as áreas." : "Convidado tem acesso limitado.");
        } catch (error) {
            console.error("Erro ao verificar a role do usuário:", error);
        }
    }
}

function contarAdmins(users) {
    try {
        let contador = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].c === ROLE_ADMIN) {
                contador++;
            }
        }
        return contador; 
    } catch (error) {
        console.error("Erro ao contar usuários com a role de admin:", error);
        return 0; 
    }
}



function verificarTentativasExcessivas(usuario, limite = LOGIN_ATTEMPT_LIMIT) {
    try {
        console.log(usuario.h > limite ? "Tentativas de login excessivas." : "Tentativas de login sob controle.");
    } catch (error) {
        console.error("Erro ao verificar tentativas de login:", error);
    }
}

function usuarioMaisRecente(u1, u2) {
    try {
        if (u1.e > u2.e) {
            return `${u1.a} logou mais recentemente.`;
        } else if (u1.e < u2.e) {
            return `${u2.a} logou mais recentemente.`;
        } else {
            return "Ambos os usuários têm o mesmo último login.";  
        }
    } catch (error) {
        console.error("Erro ao verificar o último login dos usuários:", error);
        return "Erro ao comparar datas de login.";  
    }
}


function verificarUsuarioRecente(usuario) {
    try {
        const agora = new Date();
        console.log(agora - usuario.d < ONE_YEAR_MS ? "Usuário criado recentemente." : "Usuário antigo.");
    } catch (error) {
        console.error("Erro ao verificar a data de criação do usuário:", error);
    }
}

const usrs = [
    new Z({ a: "Carlos", b: 25, c: ROLE_ADMIN, d: DATA_CRIACAO_CARLOS, e: ULTIMO_LOGIN_CARLOS,
        f: true, g: 100, h: LOGIN_ATTEMPT_LIMIT_TWO }),
    new Z({ a: "Ana", b: 30, c: "guest", d: DATA_CRIACAO_ANA, e: ULTIMO_LOGIN_ANA, 
        f: true, g: 50, h: LOGIN_ATTEMPT_LIMIT_THREE }),
    new Z({ a: "José", b: 29, c: ROLE_ADMIN, d: DATA_CRIACAO_JOSE, e: ULTIMO_LOGIN_JOSE, 
        f: false, g: 200, h: 5 }),
    new Z({ a: "Maria", b: 35, c: "guest", d: DATA_CRIACAO_MARIA, e: ULTIMO_LOGIN_MARIA, 
        f: false, g: 80, h: 7 })
];

try {
    const OPERADOR2 = 2;
    const OPERADOR3 = 3;
    console.log(`Usuários admin: ${contarAdmins(usrs)}`);
    usrs[0].x();
    usrs[1].y();
    verificarTentativasExcessivas(usrs[OPERADOR2]);
    console.log(usuarioMaisRecente(usrs[0], usrs[OPERADOR3]));
    verificarUsuarioRecente(usrs[OPERADOR3]);
} catch (error) {
    console.error("Erro na execução principal:", error);
}
