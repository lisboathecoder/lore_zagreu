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
let podeSair = vidaSuficiente && (ataqueForte || nivelSuficiente);

console.log(`===========================================================`);
console.log("📜 Prólogo 📜");
console.log(`===========================================================`);
console.log(`${NOMEPERSONAGEM}, filho de Hades, quer buscar uma nova aventura fora do Reino Infernal, mas para isso terá que enfrentar diversos inimigos nas prisões do inferno...`);
console.log(`${NOMEPERSONAGEM} está em ${localAtual}`)
console.log(`Sua arma principal é uma lâmina, mais conhecida como ${NOMEARMA}. ${NOMEARMA} é uma espada longa com golpes amplos e direcionais.`);
console.log(`Nyx a Mãe Noite. é a conselheira de ${NOMEPERSONAGEM}, e ela quer dizer algo para ${NOMEPERSONAGEM}`);
if (podeSair) {
    console.log(`🌑 Nyx: Você está preparado para sua jornada meu querido ${NOMEPERSONAGEM}, te presentei-o com ${NOMEARMADURA}`);
    defesaTotal += 100;
} else {
    console.log(`🌑 Nyx: Treine mais querido, desse jeito você não irá vencer seu pai`);
    console.log(`===========================================================`);
    console.log(`🩻 Treino de ${NOMEPERSONAGEM}`);
    console.log(`Skelly já está pronto para ser espancado, ele é o boneco de treino de ${NOMEPERSONAGEM}`);
    console.log(`===========================================================`);
    console.log(`Após um longo treino, ${NOMEPERSONAGEM} está pronto e Nyx o chama novamente.`);
    console.log(`🌑 Nyx: Você está preparado para sua jornada meu querido ${NOMEPERSONAGEM}, te presentei-o com ${NOMEARMADURA}`);
    defesaTotal += 100;
}
console.log(`Suas defesas é um dos seus pontos fortes, ainda mais com uma ajuda de Nyx, com isso seus pontos de defesa são ${defesaTotal}.`);
console.log(`${NOMEPERSONAGEM} está pronto para partir e enfrentar seu pai em busca da liberdade do Submundo.`);
console.log(`===========================================================`);
console.log("🔴 Capítulo 1 - A primeira tentativa");
console.log(`===========================================================`);
localAtual = "Tártaro";
console.log(`${NOMEPERSONAGEM} entra furtivamente no ${localAtual} e surge Poseidon que surpreende ${NOMEPERSONAGEM}`);
if (ataqueForte || vidaSuficiente) {
    ataqueTotal += 100;
    vida += 50
    console.log(`🔱 Poseindon: Meu sobrinho ${NOMEPERSONAGEM}, concedo para ti o poder dos MARES! (Ataque e Vida Atuais: ${ataqueTotal} pontos de ataque e ${vida} pontos de vida)`);
} else {
    console.log(`🔱 Poseindon: ${NOMEPERSONAGEM}, você não merece nenhum dos meus poderes! Mas pode continuar com a sua jornada.`);
}
console.log(`${NOMEPERSONAGEM} agora etá com ${vida} pontos de vida, ${defesaTotal} pontos de defesa e ${ataqueTotal} pontos de ataque!`);
console.log(`===========================================================`);
console.log(`${NOMEPERSONAGEM} depois de aniquilar com algumas almas mais fracas, tropeça de frente com os gemêos Bombardeiros do Inferno, e tem que fazer uma escolha!`);
let podeEnfrentarBombardeiros = ataqueForte && vidaSuficiente && defesaTotal >= 70;
if (podeEnfrentarBombardeiros) {
    console.log(`${NOMEPERSONAGEM} não veio até aqui a toa, ele irá enfrentar esses inimigos que estão no seu caminho!`);
} else {
    console.log(`${NOMEPERSONAGEM} não está preparado para essa luta, ele voltará para a Casa de Hades!`);
}