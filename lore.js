// Informações do personagens.
const NOMEPERSONAGEM = "Zagreu";
const CLASSEPERSONAGEM = "Principe do Submundo";
let vida = Math.floor(Math.random() * 100);
let nivel = Math.floor(Math.random() * 10);
let ouro = Math.floor(Math.random() * 50);
let xp = Math.floor(Math.random() * 1000);
// Equipamentos do personagem.
const NOMEARMA = "Stygius, a Lâmina do Submundo";
const NOMEARMADURA = "Capa da escuridão";

// Atributos do personagem
let forcaBase = Math.floor(Math.random() * 100);;
let defesaBase = Math.floor(Math.random() * 50);;
let agilidadeBase = Math.floor(Math.random() * 50);;

// Locais
let localAtual = "Casa de Hades";

// Wins / Loss  e Ruínas
let batalhasWins = 0;
let batalhasLoss = 0;
let masmorrasAvançadas = 0;

let ataqueTotal = nivel + forcaBase;
let defesaTotal = defesaBase + (nivel / 2);

let vidaSuficiente = vida >= 70;
let ataqueForte = ataqueTotal >= 50;
let nivelSuficiente = nivel >= 10;

console.log(`===========================================================`);
console.log("📜 Prólogo 📜");
console.log(`===========================================================`);
console.log(`${NOMEPERSONAGEM}, filho de Hades e ${CLASSEPERSONAGEM}, quer buscar uma nova aventura fora do Reino Infernal, mas para isso terá que enfrentar diversos inimigos nas prisões do inferno...`);
console.log(`${NOMEPERSONAGEM} está em ${localAtual}`)
console.log(`Sua arma principal é uma lâmina, mais conhecida como ${NOMEARMA}. ${NOMEARMA} é uma espada longa com golpes amplos e direcionais.`);
console.log(`Nyx a Mãe Noite. é a conselheira de ${NOMEPERSONAGEM}, e ela quer dizer algo para ${NOMEPERSONAGEM}`);
console.log(`🌑 Nyx: Você está preparado para sua jornada meu querido ${NOMEPERSONAGEM}, te presentei-o com ${NOMEARMADURA}`);
defesaTotal += 100;
console.log(`Suas defesas é um dos seus pontos fortes, ainda mais com uma ajuda de Nyx, com isso seus pontos de defesa são ${defesaTotal}.`);
console.log(`${NOMEPERSONAGEM} está pronto para partir e enfrentar seu pai em busca da liberdade do Submundo.`);
console.log(`===========================================================`);
console.log("🔴 Capítulo 1 - A fuga");
console.log(`===========================================================`);
masmorrasAvançadas++;
localAtual = "Tártarus";
console.log(`${NOMEPERSONAGEM} entra furtivamente no ${localAtual} e surge Poseidon que surpreende ${NOMEPERSONAGEM}`);
if (ataqueTotal || vidaSuficiente) {
    ataqueTotal += 100;
    vida += 50
    console.log(`🔱 Poseindon: Meu sobrinho ${NOMEPERSONAGEM}, concedo para ti o poder dos MARES! (Ataque e Vida Atuais: ${ataqueTotal} pontos de ataque e ${vida} pontos de vida)`);
} else {
    console.log(`🔱 Poseindon: ${NOMEPERSONAGEM}, você não merece nenhum dos meus poderes! Mas pode continuar com a sua jornada.`);
}
console.log(`${NOMEPERSONAGEM} agora etá com ${vida} pontos de vida, ${defesaTotal} pontos de defesa e ${ataqueTotal} pontos de ataque!`);
console.log(`===========================================================`);
console.log(`${NOMEPERSONAGEM} depois de aniquilar com algumas almas mais fracas, tropeça de frente com os gemêos Bombardeiros do Inferno, e tem que fazer uma escolha!`);
let podeEnfrentarInimigos = ataqueTotal && vida && defesaTotal >= 70;
if (podeEnfrentarInimigos) {
    console.log(`${NOMEPERSONAGEM} não veio até aqui a toa, ele irá enfrentar esses inimigos que estão no seu caminho!`);
    console.log(`🔥 Bombardeiros do Inferno: Você não é páreo para nós, ${NOMEPERSONAGEM}!`);
    console.log(`Após uma batalha épica, ${NOMEPERSONAGEM} derrota os Bombardeiros do Inferno e parte para Asphodel!`);
    xp += 300;
    ouro += 100;
    batalhasWins++;
} else {
    console.log(`🔥 Bombardeiros do Inferno: Você não é páreo para nós, ${NOMEPERSONAGEM}!`);
    console.log(`${NOMEPERSONAGEM} não está preparado para essa luta, ele voltará para a Casa de Hades!`);
    batalhasLoss++;
}
console.log(`===========================================================`);
console.log(`Capitulo 2 - Elysium`);
console.log(`===========================================================`);
localAtual = "Elysium";
masmorrasAvançadas++;
masmorrasAvançadas++;
console.log(`Após ${NOMEPERSONAGEM} ter passado por poucas e boas em Tártarus e Asphodel, ele chega em um lugar aparentemente tranquilo, Elysium.`);
console.log(`Mas não é bem assim, ele encontra Thanatos, o deus da morte, que está com uma cara de poucos amigos.`);
console.log(`☠️ Thanatos: Olá irmãozinho ${NOMEPERSONAGEM}, está tentando sair não é? Saiba que não vai conseguir sendo tão FRACO assim!`);
console.log(`⚔️ Thanatos desafia ${NOMEPERSONAGEM} para uma batalha!`);
let thanatosVida = Math.floor(Math.random() * 40) + 60; 
let thanatosAtaque = Math.floor(Math.random() * 20) + 30; 
let thanatosDefesa = Math.floor(Math.random() * 20) + 20; 

if (ataqueTotal > thanatosDefesa && vida > thanatosAtaque) {
    console.log(`${NOMEPERSONAGEM} ataca com sua Stygius direto em Thanatos!`);
    thanatosVida -= ataqueTotal - thanatosDefesa;
    if (thanatosVida <= 0) {
        console.log(`Thanatos foi derrotado! ${NOMEPERSONAGEM} vence a batalha em Elysium!`);
        batalhasWins++;
        xp += 300;
        ouro += 100;
    } else {
        console.log(`Thanatos resiste, mas está gravemente ferido com ${thanatosVida} de vida restante!`);
    }
} else if (vida - (thanatosAtaque - defesaTotal) <= 0) {
    console.log(`Thanatos é muito poderoso! ${NOMEPERSONAGEM} sofre um ataque devastador.`);
    vida -= thanatosAtaque - defesaTotal;
    console.log(`☠️ Thanatos: Você não é forte o suficiente ${NOMEPERSONAGEM}, lhe falta ódio para enfrentar seu pai...`)
    console.log(`${NOMEPERSONAGEM} foi derrotado por Thanatos e retorna à Casa de Hades!`);
    batalhasLoss++;
} else {
    console.log(`Thanatos é muito poderoso! ${NOMEPERSONAGEM} sofre um ataque devastador.`);
    vida = 1;
    console.log(`${NOMEPERSONAGEM} sobrevive, mas está muito ferido com ${vida} de vida restante!`);
}
