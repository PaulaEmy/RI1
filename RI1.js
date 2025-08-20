
personagens = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo Americano",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80
    },
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura",
        armaSecundaria: "",
        velocidade: 90,
        forca: 85,
        resistencia: 60
    },
    {
        nome: "Peter Parker",
        codinome: "Homem Aranha",
        armaPrincipal: "Teia",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Punhos",
        armaSecundaria: "",
        velocidade: 60,
        forca: 100,
        resistencia: 80
    }, 
    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Armas de fogo",
        armaSecundaria: "Cassetete",
        velocidade: 40,
        forca: 60,
        resistencia: 30
    },
    {
        nome: "Stephen Vincent Strange",
        codinome: "Doutor Estranho",
        armaPrincipal: "Magia",
        armaSecundaria: "",
        velocidade: 70,
        forca: 70,
        resistencia: 70
    },
    {
        nome: "Illyana Rasputina",
        codinome: "Magia",
        armaPrincipal: "Magia demoníaca",
        armaSecundaria: "Espada",
        velocidade: 70,
        forca: 60,
        resistencia: 80
    },
    {
        nome: "Thanos",
        codinome: "Thanos",
        armaPrincipal: "Luva do infinito",
        armaSecundaria: "",
        velocidade: 90,
        forca: 90,
        resistencia: 90
    }
]

for (let x = 0; x < personagens.length; x++) {
    for (let y = 0; y < personagens.length; y++) {
        let pntA = 0
        let pntB = 0
        if (x !== y) {
            const personagemA = personagens[x];
            const personagemB = personagens[y];

            if (personagemA.velocidade > personagemB.velocidade) {
                console.log(personagemA.codinome + " é mais rápido que " + personagemB.codinome + "\n");
                pntA += 1
            } else if (personagemA.velocidade < personagemB.velocidade) {
                console.log(personagemB.codinome + " é mais rápido que " + personagemA.codinome + "\n");
                pntB += 1
            } else {
                console.log(personagemA.codinome + " e " + personagemB.codinome + " possuem a mesma velocidade \n");
                pntA += 1
                pntB += 1
            }

            if (personagemA.forca > personagemB.forca) {
                console.log(personagemA.codinome + " é mais forte que " + personagemB.codinome + "\n");
                pntA += 1
            } else if (personagemA.forca < personagemB.forca) {
                console.log(personagemB.codinome + " é mais forte que " + personagemA.codinome + "\n");
                pntB += 1
            } else {
                console.log(personagemA.codinome + " e " + personagemB.codinome + " possuem a mesma força \n");
                pntA += 1
                pntB += 1
            }

            if (personagemA.resistencia > personagemB.resistencia) {
                console.log(personagemA.codinome + " é mais resistente que " + personagemB.codinome + "\n");
                pntA += 1
            } else if (personagemA.resistencia < personagemB.resistencia) {
                console.log(personagemB.codinome + " é mais resistente que " + personagemA.codinome + "\n");
                pntB += 1
            } else {
                console.log(personagemA.codinome + " e " + personagemB.codinome + " possuem a mesma resistência \n");
                pntA += 1
                pntB += 1
            }

            if (pntA > pntB) {
                console.log("\x1b[31m" + personagemA.codinome + " ganharia do " + personagemB.codinome + "\x1b[0m\n");
            } else if (pntB > pntA) {
                console.log("\x1b[31m" + personagemB.codinome + " ganharia do " + personagemA.codinome + "\x1b[0m\n");
            } 
        }
    }
}



