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
            if (this.f) {
                console.log("Ativo");
            } else {
                console.log("Inativo");
            }
        } catch (error) {
            console.error("Erro ao verificar o status de atividade:", error);
        }
    }

    y() {
        try {
            if (this.c === ROLE_ADMIN) {
                console.log("Admin pode acessar todas as áreas.");
            } else {
                console.log("Convidado tem acesso limitado.");
            }
        } catch (error) {
            console.error("Erro ao verificar a role do usuário:", error);
        }
    }
}

// Constantes para valores que antes eram números mágicos
const ROLE_ADMIN = 'admin';
const ONE_YEAR_MS = 31536000000; // 1 ano em milissegundos
const LOGIN_ATTEMPT_LIMIT = 4;

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
    }
}

// Função para verificar se o número de tentativas de login é excessivo
function verificarTentativasExcessivas(usuario, limite = LOGIN_ATTEMPT_LIMIT) {
    try {
        if (usuario.h > limite) {
            console.log("Tentativas de login excessivas.");
        } else {
            console.log("Tentativas de login sob controle.");
        }
    } catch (error) {
        console.error("Erro ao verificar tentativas de login:", error);
    }
}

// Função para identificar qual usuário logou mais recentemente
function usuarioMaisRecente(u1, u2) {
    try {
        if (u1.e > u2.e) {
            return `${u1.a} logou mais recentemente.`;
        } else {
            return `${u2.a} logou mais recentemente.`;
        }
    } catch (error) {
        console.error("Erro ao verificar o último login dos usuários:", error);
    }
}

// Função para verificar se o usuário foi criado recentemente
function verificarUsuarioRecente(usuario) {
    try {
        const agora = new Date();
        if (agora - usuario.d < ONE_YEAR_MS) {
            console.log("Usuário criado recentemente.");
        } else {
            console.log("Usuário antigo.");
        }
    } catch (error) {
        console.error("Erro ao verificar a data de criação do usuário:", error);
    }
}

const usrs = [
    new Z({ a: "Carlos", b: 25, c: ROLE_ADMIN, d: new Date(2023, 1, 15), e: new Date(2024, 8, 1), f: true, g: 100, h: 2 }),
    new Z({ a: "Ana", b: 30, c: 'guest', d: new Date(2020, 4, 22), e: new Date(2024, 7, 31), f: true, g: 50, h: 3 }),
    new Z({ a: "José", b: 29, c: ROLE_ADMIN, d: new Date(2022, 10, 5), e: new Date(2024, 6, 10), f: false, g: 200, h: 5 }),
    new Z({ a: "Maria", b: 35, c: 'guest', d: new Date(2021, 2, 10), e: new Date(2023, 12, 25), f: false, g: 80, h: 7 })
];

try {
    console.log("Usuários admin: " + contarAdmins(usrs));
    usrs[0].x();
    usrs[1].y();
    verificarTentativasExcessivas(usrs[2]);
    console.log(usuarioMaisRecente(usrs[0], usrs[3]));
    verificarUsuarioRecente(usrs[3]);
} catch (error) {
    console.error("Erro na execução principal:", error);
}
