// Informações do personagens.
let nome = "Zagreu";
let classe = "Principe do Submundo";
let vida = 100;
let nivel = 10;
let ouro = 50;
let xp = 100;

// Equipamentos do personagem.

const NOMEARMA = "Stygius, a Lâmina do Submundo";
let DANOBASE = 35;
const NOMEARMADURA = "Capa da escuridão";
let DEFESABASE = 50;

// Eventos.

// 1º Evento - O personagem treinou e ganhou 150 pontos de experiência.
xp += 150;
// 2º Evento - Comprou uma poção por 30 moedas de ouro.
ouro -= 30;
// 3º Evento - Usou a poção e recuperou 40 pontos de vida.
vida += 40;
// 4º Evento - A arma foi encantada, e seu dano foi dobrado
DANOBASE *= 2;

let ataqueTotal = nivel + DANOBASE;
let defesaTotal = DEFESABASE + (nivel / 2);

let vidaSuficiente = vida >= 70;
let ataqueForte = ataqueTotal >= 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarThanatos = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(`📜 História de ${nome} 📜`);
console.log(` `);
console.log(`${nome}, filho de Hades, quer buscar uma nova aventura fora do Reino Infernal, mas para isso terá que enfrentar diversos inimigos nas prisões do inferno...`);
console.log(`Sua arma principal é uma lâmina, mais conhecida como ${NOMEARMA}. Stygius é uma espada longa com golpes amplos e direcionais.`);
console.log(`O nível de ${nome} é atualmente ${nivel} e sua imensurável força é de ${ataqueTotal}.`);
console.log(`Nyx a Mãe Noite. é a conselheira de ${nome}, e o presenteou com a sua ${NOMEARMADURA}`);
console.log(`Suas defesas é um dos seus pontos fortes, ainda mais com uma ajuda de Nyx, com isso seus pontos de defesa são ${defesaTotal}`);
console.log(`Após diversos treinamentos e tentativas de fugas, ${nome} acumulou ${xp} de experiência e ${ouro} Coroas de Ouro, o suficente para comprar uma poção para sua vida.`);
console.log(`Com a poção em mãos, ${nome} recuperou sua vida e ficou com ${vida} pontos de vida, pronto para a próxima tentativa.`);
console.log(` `);
console.log(`A Vida suficiente é suficente? ${vidaSuficiente}, O Ataque é forte? ${ataqueForte}, O nível é avançado? ${nivelAvancado}.`);
console.log(`Pode enfrentar Thanatos? ${podeEnfrentarThanatos} - Sendo assim, ${nome} continuará sua jornada e batalhará caso for preciso!`);