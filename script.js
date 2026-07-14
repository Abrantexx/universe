/* =========================================================
                        CONFIGURAÇÕES
========================================================= */

const CONFIG = {
    velocidadeDigitacao: 80,
    atrasoDigitacao: 1800,
    totalEstrelas: 180
};

/* =========================================================
                        ELEMENTOS
========================================================= */

const stars = document.getElementById("stars");

const portal = document.querySelector(".portal");

const intro = document.getElementById("intro");
const introTexto = document.getElementById("introTexto");

const segundaFrase = document.getElementById("segundaFrase");
const startButton = document.getElementById("startButton");

const universo000 = document.getElementById("universo000");

const flash = document.getElementById("flash");

const music = document.getElementById("music");
/* =========================================================
                        CAPÍTULOS
========================================================= */

const tituloCapitulo = document.getElementById("tituloCapitulo");
const subtituloCapitulo = document.getElementById("subtituloCapitulo");
const textoHistoria = document.getElementById("textoHistoria");
const nextButton = document.getElementById("nextButton");
const cena = document.getElementById("capitulo");

const capitulos = [
{
    titulo: "Capítulo I",

    subtitulo: "Antes de Nós",

    frases: [

        "Existe uma versão minha...",

        "que você nunca conheceu.",

        "Ela não sorria muito.",

        "Também não acreditava muito no futuro.",

        "As vezes ele se sentia um personagem.",

        "Rick Sanchez.",

        "Talvez porque, por muito tempo...",

        "eu também achasse que viver sozinho era mais fácil."

    ]
},

{
    titulo: "Capítulo II",

    subtitulo: "Uma Conversa Qualquer",

    frases: [

        "Até que um dia...",

        "entre bilhões de pessoas...",

        "uma conversa qualquer começou.",

        "Sem roteiro. Sem expectativa.",

        "Só duas pessoas tentando entender a vida.",
        
        "E quem diria que uma curtida no tiktok ia nos trazer aqui.",

        "E, sem perceber...",

        "eu comecei a esperar pelas próximas mensagens."

    ]
   },

{
    titulo: "Capítulo III",

    subtitulo: "Onde os Girassóis Olham para o Sol",

    frases: [

        "E então...",

        "eu conheci uma garota.",

        "Ela morava a centenas de quilômetros.",

        "Mas, de alguma forma... parecia perto.",

        "Ela me apresentou um lugar que eu pouco tinha andado.",

        "Recife.",

        "Não pelas ruas, Nem pelos mapas.",

        "Mas pelas histórias que ela me contava. E Pelo brilho nos olhos dela quando falava da própria terra.",

        "Foi aí que eu percebi...",

        "existem pessoas que carregam um universo inteiro dentro delas."

    ]
},

{
    titulo: "Capítulo IV",

    subtitulo: "Dois Universos",

    frases: [

        "Existe um momento...",

        "em que deixa de existir 'eu' e 'você'.",

        "E começa a existir 'nós'.",

        "Foi acontecendo devagar.",

        "Sem que eu percebesse.",

        "Minhas manhãs passaram a começar esperando uma mensagem sua. E minhas noites terminavam pensando em você.",

        "Você virou a primeira pessoa para quem eu queria contar tudo.",

        "As coisas boas.",

        "As ruins.",

        "As pequenas.",

        "As que pareciam não ter importância.",

        "Porque, quando era você, tudo parecia importante.",

        "A primeira vez que você disse que estava orgulhosa de mim...",

        "eu sorri sozinho.",

        "Talvez você nunca tenha imaginado o quanto aquelas palavras ficaram comigo."

    ]
},
 {
    titulo: "Capítulo V",

    subtitulo: "Lápis Lazuli",

    frases: [

        "Um dia...",

        "eu te perguntei qual era o seu personagem favorito de Steven Universo.",

        "Você respondeu:",

        "\"Lápis Lazuli.\"", 

        "E, naquele momento, eu entendi completamente o porquê.",

        "Fui conhecendo um pouco mais sobre ela.",

        "E, ao mesmo tempo... fui conhecendo um pouco mais sobre você.",

        "Então percebi que ela ser a sua personagem favorita não era por acaso.",

        "Talvez seja por isso que hoje, quando penso na Lápis Lazuli...",

        "é o seu rosto que aparece primeiro na minha cabeça.",

        "Porque algumas pessoas, deixam de ser apenas uma referência.",

        "E passam a ter o próprio significado."

    ]
},
{
    titulo: "Capítulo VI",

    subtitulo: "Você Não Faz Ideia",

    frases: [

        "Talvez você nunca saiba...",

        "o quanto mudou a minha vida.",

        "Você esteve comigo...",

        "nos dias mais felizes, E também nos mais difíceis.",

        "Mesmo sem perceber.",

        "Você comemorou as minhas vitórias.",

        "E tornou as derrotas um pouco mais leves.",

        "Quando eu duvidei de mim... você acreditou.",

        "Quando eu achei que estava sozinho...",

        "você apareceu.",

        "E talvez esse seja o seu maior superpoder.",

        "Fazer alguém se sentir em casa, mesmo estando a centenas de quilômetros.",

        "Você não faz ideia... do quanto eu sou grato por ter encontrado você."

    ]
},
{
    titulo: "Capítulo VII",

    subtitulo: "Nosso Universo",

    frases: [

        "Se existe um Universo 000...",

        "um lugar onde todas as possibilidades começaram...",

        "eu gosto de pensar...",

        "que, entre infinitas versões da realidade...",

        "houve uma...",

        "em que eu encontrei você.",

        "E, sinceramente...",

        "não consigo imaginar uma versão melhor da minha história.",

        "Porque, depois de tantos caminhos...",

        "tantas escolhas...",

        "tantos universos...",

        "foi você.",

        "Obrigado por existir.",

        "E por fazer parte da minha história.",

        "Essa história...",

        "ainda está sendo escrita."

    ]
},
{
    titulo: "Epílogo",

    subtitulo: "∞",

    frases: [

        "Nossa historia Continua em Recife.",

        "Obrigado por existir, Chelly.",

        "∞"

    ]
} ];
let capituloAtual = 0;

let fraseAtual = 0;
   function escreverFraseCapitulo() {

    textoHistoria.textContent = "";

    const frase = capitulos[capituloAtual].frases[fraseAtual];
if(frase === ""){

    setTimeout(() => {

        fraseAtual++;

        escreverFraseCapitulo();

    },2000);

    return;

}
    let letra = 0;

    function escrever() {

        if (letra < frase.length) {

            textoHistoria.textContent += frase.charAt(letra);

            letra++;

            setTimeout(escrever, CONFIG.velocidadeDigitacao / 2);

        } else {

            nextButton.style.display = "inline-block";

        }

    }

    escrever();

}function mostrarCapitulo() {

    criarParticulasDouradas();

    cena.classList.remove(
    "universo1",
    "universo2",
    "universo3",
    "universo4",
    "universo5",
    "universo6",
    "universo7"
);

cena.classList.add(
    "universo" + (capituloAtual + 1)
);

    tituloCapitulo.textContent =
        capitulos[capituloAtual].titulo;

    subtituloCapitulo.textContent =
        capitulos[capituloAtual].subtitulo;

    fraseAtual = 0;

    escreverFraseCapitulo();

}nextButton.addEventListener("click", () => {

    nextButton.style.display = "none";

    fraseAtual++;

    if (fraseAtual < capitulos[capituloAtual].frases.length) {

        escreverFraseCapitulo();

    } else {

        capituloAtual++;

       if (capituloAtual >= capitulos.length) {

    nextButton.style.display = "none";

    return;

}
       cena.classList.remove("show");

setTimeout(() => {

    cena.classList.add("show");

    mostrarCapitulo();



},1500);

    }

});
/* =========================================================
                    CRIAR ESTRELAS
========================================================= */

function criarEstrela() {

    const estrela = document.createElement("div");

    const tamanho = Math.random() * 4 + 0.5;

    estrela.style.position = "absolute";
    estrela.style.width = tamanho + "px";
    estrela.style.height = tamanho + "px";

    estrela.style.left = Math.random() * 100 + "%";
    estrela.style.top = Math.random() * 100 + "%";

    const cores = [
    "#ffffff",
    "#dff5ff",
    "#ffeec4",
    "#cfe7ff"
];

estrela.style.background =
    cores[Math.floor(Math.random()*cores.length)];
    estrela.style.borderRadius = "50%";

    estrela.style.opacity = Math.random();

    estrela.style.animation =
        `piscar ${2 + Math.random() * 4}s infinite`;

    stars.appendChild(estrela);

}

function criarCeu() {

    stars.innerHTML = "";

    for (let i = 0; i < CONFIG.totalEstrelas; i++) {

        criarEstrela();

    }

}

/* =========================================================
                DIGITAÇÃO DA INTRODUÇÃO
========================================================= */

const fraseInicial = "Essa é uma delas.";

let letraAtual = 0;

function escreverIntroducao() {

    if (letraAtual < fraseInicial.length) {

        segundaFrase.textContent += fraseInicial.charAt(letraAtual);

        letraAtual++;

        setTimeout(
            escreverIntroducao,
            CONFIG.velocidadeDigitacao
        );

    } else {

        startButton.style.display = "inline-block";

    }

}

/* =========================================================
                    INICIALIZAÇÃO
========================================================= */

window.addEventListener("load", () => {

    criarCeu();

    setTimeout(() => {

        escreverIntroducao();

    }, CONFIG.atrasoDigitacao);

});/* =========================================================
                ANIMAÇÃO DE ABERTURA
========================================================= */

function iniciarUniverso() {

    // Toca a música
    music.play().catch(() => {});

    // Desativa o botão
    startButton.disabled = true;

    // Texto sendo sugado
    introTexto.classList.add("sugado");

    // Portal desperta
    portal.style.transition =
        "transform 3s cubic-bezier(.2,.9,.2,1)";

    portal.style.transform =
        "scale(35) rotate(720deg)";

    // Flash verde começa
    setTimeout(() => {

        flash.classList.add("show");

    }, 1200);

    // Esconde a introdução
    setTimeout(() => {

        intro.style.display = "none";

    }, 2200);

   // Mostra Universo 000
setTimeout(() => {

    universo000.classList.add("show");

}, 2400);

// Depois entra no Capítulo I
setTimeout(() => {

    universo000.classList.remove("show");

    cena.classList.add("show");

    mostrarCapitulo();

}, 5000);
}/* =========================================================
                    EVENTOS
========================================================= */

startButton.addEventListener("click", iniciarUniverso);

/* =========================================================
            POEIRA DOURADA
========================================================= */

function criarParticulasDouradas(){

    document.querySelectorAll(".poeiraDourada").forEach(e => e.remove());

    if(capituloAtual !== 2) return;

    for(let i = 0; i < 70; i++){

        const p = document.createElement("div");

        p.className = "poeiraDourada";

        const tamanho = Math.random()*3 + 1;

        p.style.width = tamanho + "px";
        p.style.height = tamanho + "px";

        p.style.left = Math.random()*100 + "%";
        p.style.top = Math.random()*100 + "%";

        p.style.animationDelay =
        (-Math.random()*12) + "s";

        cena.appendChild(p);

    }

}
