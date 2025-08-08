let i = 0; // Incremento
//Informações do personagens.
const NOMEPERSONAGEM = "Zagreu";
const CLASSEPERSONAGEM = "Principe do Submundo";
let vida = Math.floor(Math.random() * 100);
let nivel = 10;
let ouro = Math.floor(Math.random() * 500);
let xp = Math.floor(Math.random() * 1000);

// Equipamentos do personagem.
const NOMEARMA = "Stygius, a Lâmina do Submundo";
const NOMEARMADURA = "Capa da escuridão";
let inventario = [NOMEARMA];

// Atributos do personagem
let ataques = [60, 80, 50, 70, 200];
let defesaBase = Math.floor(Math.random() * 50);
let agilidadeBase = Math.floor(Math.random() * 50);

// Locais
let localAtual = "Casa de Hades";

// Wins / Loss  e Ruínas
let batalhasWinsLoss = 0;
let masmorrasAvançadas = 0;

let ataqueAleatorio = ataques[Math.floor(Math.random() * ataques.length)];
let ataqueTotal = ataqueAleatorio + nivel;
console.log (ataqueAleatorio);
let defesaTotal = defesaBase + (nivel / 2);

// Verificação de atributos
let vidaSuficiente = vida >= 70;
let ataqueForte = ataqueTotal >= 50;
let nivelSuficiente = nivel >= 10;

console.log(`===========================================================`);
console.log("📜 Prólogo");
console.log(`===========================================================`);
console.log(`${NOMEPERSONAGEM}, filho de Hades e ${CLASSEPERSONAGEM}, quer encontrar sua mãe Persephone fora do Reino Infernal, mas para isso terá que enfrentar diversos inimigos nas prisões do inferno, inclusive seu pai...`);
console.log(`${NOMEPERSONAGEM} está na ${localAtual}`)
console.log(`Sua arma principal é uma lâmina, mais conhecida como ${NOMEARMA}. ${NOMEARMA} é uma espada longa com golpes amplos e direcionais.`);
console.log(`Nyx a Mãe Noite. é a conselheira de ${NOMEPERSONAGEM}, e ela quer dizer algo para ${NOMEPERSONAGEM}`);
console.log(`🌑 Nyx: Você está preparado para sua jornada meu querido ${NOMEPERSONAGEM}, te presentei-o com ${NOMEARMADURA}`);
inventario.push(NOMEARMADURA); // Novo item no inventário
defesaTotal += 100; // Bônus de defesa da armadura
console.log(`Suas defesas é um dos seus pontos fortes, ainda mais com uma ajuda de Nyx, com isso seus pontos de defesa são ${defesaTotal}.`);
console.log(`${NOMEPERSONAGEM} está pronto para partir e enfrentar seu pai em busca da liberdade do Submundo.`);
console.log(`===========================================================`);
console.log("🟢 Capítulo 1 - Tartarus");
console.log(`===========================================================`);

localAtual = "Quarto";
console.log(`${NOMEPERSONAGEM} está em seu ${localAtual}, planejando sua fuga do Submundo.`);

console.log(`💤 Hypnos: Ei, ${NOMEPERSONAGEM}, você tem certeza que está pronto para partir?`);
// Hypnos faz as verificações para saber se o personagem está realmente pronto.
if (nivel >= 5) {
    console.log(`💤 Hypnos: Uau, parece que você está forte o suficiente para tentar escapar! Boa sorte, ${NOMEPERSONAGEM}!`);
}
if (ouro < 20) {
    console.log(`💤 Hypnos: Você ta pobre, junta mais dinheiro amigão`);
}
if (vida < 30) {
    console.log(`💤 Hypnos: Você ta muito fraco, vai dormir mais um pouco`);
}
console.log(`${NOMEPERSONAGEM} decide ir até a loja do comerciante da ${localAtual} antes de sua fuga e o comerciante lhe da 3 escolhas.`);
let itens = [`Néctar`, `Sangue De Titã`, `Diamante`];
if (itens[0]) {
    ouro -= 150;
    console.log(`Néctar`);
} else if (itens[1]) {
    ouro -= 250;
    console.log(`Sangue de Titã`);
} else {
    ouro -= 300;
    console.log(`Diamante`);
}
console.log(`O ${NOMEPERSONAGEM} decide comprar ${itens[0]} para usar durante suas batalhas`);

if (ouro < 0) {
    ouro = 0;
}

inventario.push(itens[0]);

console.log(`Com tudo pronto, ${NOMEPERSONAGEM} segue para sua jornada no Submundo.`);
console.log(`===========================================================`);
masmorrasAvançadas++;
localAtual = "Tártarus";
console.log(`${NOMEPERSONAGEM} entra furtivamente no ${localAtual} e surge Poseidon que surpreende ${NOMEPERSONAGEM}`);

for(i = 0; i < ataqueTotal; i++){
    
}

if (ataqueTotal || vidaSuficiente) {
    ataqueTotal += 100;
    vida += 50;
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
    batalhasWinsLoss++;
} else {
    console.log(`🔥 Bombardeiros do Inferno: Você não é páreo para nós, ${NOMEPERSONAGEM}!`);
    console.log(`${NOMEPERSONAGEM} não está preparado para essa luta, ele voltará para a Casa de Hades!`);
    batalhasWinsLoss--;
}
console.log(`===========================================================`);
console.log(`🔵 Capitulo 2 - Elysium`);
console.log(`===========================================================`);
localAtual = "Elysium";
masmorrasAvançadas++;
masmorrasAvançadas++;
console.log(`Após ${NOMEPERSONAGEM} ter passado por poucas e boas em Tártarus e Asphodel, ele chega em um lugar aparentemente tranquilo, ${localAtual}`);
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
        console.log(`☠️ Thanatos: Irmão ${NOMEPERSONAGEM}, vejo que está forte, tome esses ouros para trocar com o Caronte quando ele passar com seu barco, encontre seu rumo...`);
        batalhasWinsLoss++;
        xp += 300;
        ouro += 100;
    } else {
        console.log(`Thanatos resiste, mas está gravemente ferido com ${thanatosVida} de vida restante!`);
        console.log(`☠️ Thanatos: Irmão ${NOMEPERSONAGEM}, vejo que está forte, tome esses ouros para trocar com o Caronte quando ele passar com seu barco, encontre seu rumo...`);
        console.log(`${NOMEPERSONAGEM} Segue sua jornada para o última parte, o Templo do Estige`);
        batalhasWinsLoss++;
        xp += 300;
        ouro += 100;

    }
} else if (vida - (thanatosAtaque - defesaTotal) <= 0) {
    console.log(`Thanatos é muito poderoso! ${NOMEPERSONAGEM} sofre um ataque devastador.`);
    vida -= thanatosAtaque - defesaTotal;
    console.log(`☠️ Thanatos: Você não é forte o suficiente ${NOMEPERSONAGEM}, lhe falta ódio para enfrentar seu pai...`)
    console.log(`${NOMEPERSONAGEM} foi derrotado por Thanatos e retorna à Casa de Hades!`);
    batalhasWinsLoss--;
    ouro -= 300;
} else {
    console.log(`Thanatos é muito poderoso! ${NOMEPERSONAGEM} sofre um ataque devastador.`);
    console.log(`☠️ Thanatos: Você não é forte o suficiente ${NOMEPERSONAGEM}, lhe falta ódio para enfrentar seu pai...`)
    vida = 1;
    ouro -= 300;
    console.log(`${NOMEPERSONAGEM} sobrevive, mas está muito ferido com ${vida} de vida restante para voltar para a Casa de Hades.`);
    batalhasWinsLoss--;
}
console.log(`===========================================================`);
console.log(`🔴 Capitulo 3 - Pai...`);
console.log(`===========================================================`);
localAtual = "Templo do Estige";
masmorrasAvançadas++
console.log(`${NOMEPERSONAGEM} suborna seu antigo cachorro Cerberus com um Satyr Sack para deixá-lo passar sem violência pelos Portões do Inferno, mas Hades percebe sua ousadia e percebe que precisa se envolver pessoalmente no ${localAtual}.`);
let hadesVida = Math.floor(Math.random() * 100);
let hadesAtaque = Math.floor(Math.random() * 50);
let hadesDefesa = Math.floor(Math.random() * 50);

console.log(`😈 Hades: Como você ousa me desafiar filho TOLO! ${NOMEPERSONAGEM} VOLTE PARA CASA!`);

if (ataqueTotal > hadesDefesa && vida > hadesAtaque) {
    console.log(`${NOMEPERSONAGEM} ataca com toda sua força e surpreende Hades!`);
    hadesVida -= ataqueTotal - hadesDefesa;
    if (hadesVida <= 0) {
        console.log(`🏆 Hades foi derrotado! ${NOMEPERSONAGEM} segue para encontrar sua mãe no mundo dos vivos!`);
        batalhasWinsLoss++;
        xp += 500;
        ouro += 500;
    }
} else if (vida - (hadesAtaque - defesaTotal) <= 0) {
    console.log(`Hades derrota ${NOMEPERSONAGEM} sem muito esforço e humilha seu filho.`);
    vida -= hadesAtaque - defesaTotal;
    console.log(`😈 Hades: HAHAHA como você é estúpido ${NOMEPERSONAGEM}! Agora volte para casa e limpe o cocô que Cerberus fez no salão principal!`);
    console.log(`${NOMEPERSONAGEM} foi derrotado por Hades e retorna à Casa de Hades!`);
    batalhasWinsLoss--;
    ouro -= 500;
} else {
    console.log(`Hades humilha seu filho ${NOMEPERSONAGEM}, mas deixa ele vivo...`);
    vida = 1;
    ouro -= 300;
    batalhasWinsLoss--;
    console.log(`${NOMEPERSONAGEM} sobrevive por pouco, mas está muito ferido com ${vida} de vida restante!`);
    console.log(`Mesmo ainda vivo, ${NOMEPERSONAGEM} não tem outra escolha a não ser voltar para casa de Hades.`)
}

console.log(`===========================================================`);
console.log("🏛️ Epílogo");
console.log(`===========================================================`);
localAtual = "Grecia Antiga";
masmorrasAvançadas++;
console.log(`${NOMEPERSONAGEM} finalmente encontra sua mãe Persephone na ${localAtual} e descobre a verdade sobre sua família. Sua jornada pelo Submundo o tornou mais forte e sábio.`);
console.log(`Com ${xp} pontos de experiência e ${ouro} moedas de ouro, ${NOMEPERSONAGEM} está pronto para novos desafios além do Submundo.`);
console.log(`===========================================================`);
console.log(`📊 Estatísticas Finais:`);
console.log(`Nome: ${NOMEPERSONAGEM}`);
console.log(`Classe: ${CLASSEPERSONAGEM}`);
console.log(`Experiência: ${xp}`);
console.log(`Ouro: ${ouro}`);
console.log(`Vitórias: ${batalhasWinsLoss}`);
console.log(`Itens encontrados: ${inventario}`)
console.log(`Masmorras Avançadas: ${masmorrasAvançadas}`);