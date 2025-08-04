// Informações do personagens.
const NOMEPERSONAGEM = "Zagreu";
const CLASSEPERSONAGEM = "Principe do Submundo";
let vida = 100;
let nivel = 10;
let ouro = 50;
let xp = 100;

// Equipamentos do personagem.
const NOMEARMA = "Stygius, a Lâmina do Submundo";
const NOMEARMADURA = "Capa da escuridão";

// Atributos do personagem
let forcaBase = 70;
let defesaBase = 50;
let agilidadeBase = 50;

// Locais
let localAtual = "Casa de Hades";

// Wins / Loss  e Ruínas
let batalhasWins = 0;
let batalhasLoss = 0;
let masmorrasAvançadas = 0;

let ataqueTotal = nivel + forcaBase;
let defesaTotal = defesaBase + (nivel / 2);

let vidaSuficiente = vida >= 70;
let ataqueForte = ataqueTotal >= 60;
let nivelSuficiente = nivel >= 10;
let podeSair = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log("📜 Prólogo 📜");
console.log(` `);
console.log(`${NOMEPERSONAGEM}, filho de Hades, quer buscar uma nova aventura fora do Reino Infernal, mas para isso terá que enfrentar diversos inimigos nas prisões do inferno...`);
console.log(`${NOMEPERSONAGEM} está em ${localAtual}`)
console.log(`Sua arma principal é uma lâmina, mais conhecida como ${NOMEARMA}. ${NOMEARMA} é uma espada longa com golpes amplos e direcionais.`);
console.log(`Nyx a Mãe Noite. é a conselheira de ${NOMEPERSONAGEM}`);
console.log(`Nyx pergunta se ${NOMEPERSONAGEM} está forte o suficiente para sair da Casa de Hades`);
if (podeSair) {
    console.log(`🌑 Nyx: Você está preparado para sua jornada meu querido ${NOMEPERSONAGEM}, te presentei-o com ${NOMEARMADURA}`);
    defesaBase += 100;
} else {
    console.log(`Treine mais querido, você não está forte o suficiente para enfrentar seu pai.`);
}
console.log(`Suas defesas é um dos seus pontos fortes, ainda mais com uma ajuda de Nyx, com isso seus pontos de defesa são ${defesaTotal}.`);
console.log(`${NOMEPERSONAGEM} está pronto para partir e enfrentar seu pai em busca da liberdade do Submundo.`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------------`)