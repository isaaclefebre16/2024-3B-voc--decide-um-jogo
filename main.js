const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No ano 2024 um estudante, Gian, que estava no último ano de Engenharia Elétrica. Quando recebeu a oferta para estagiar na Itaipu Binacional, ele ficou extasiado, mas também um pouco nervoso. Decidiu conversar com seu mentor, o professor Romildo, para obter alguns conselhos antes de tomar sua decisão...  Professor Roberto pergunta a Gian: Você já considerou como esse estágio pode impactar sua vida acadêmica e profissional? Você está preparado para os desafios que virão? ",
        alternativas: [
            {
                texto:"Gian sente que está pronto para os desafios e aceita o estágio com entusiasmo.",
                afirmacao: ""
            },
            {
                texto:"Gian quer iniciar logo sua carreira.",
                afirmacao: ""
            },
        ]
    },
    {
        enunciado: "Gian diz estar preparado para o desafio. Sempre quis trabalhar em um projeto grande e aprender com os melhores. O professor sorri e apoia a decisão de Gian. Ele inicia seu estágio na Itaipu com grande empolgação.",
        alternativas: [
            {
                texto: "Gian Trabalha em um projeto inovador que envolve novas tecnologias de energia.",
                afirmacao: ""
            },
            {
                texto: "Ele está muito feliz pelo começo da sua carreira.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Gian é designado para um projeto inovador. Ele passa semanas mergulhado em novas tecnologias e, finalmente, apresenta um protótipo que impressiona seus supervisores. Como resultado, ele é convidado a liderar uma equipe para desenvolver a tecnologia ainda mais. Gian está um pouco nervoso e reflete sobre.. Qual decisão ele deve tomar?",
        alternativas: [
            {
                texto: " Trabalhar como assistente em um projeto menor.",
                afirmacao: ""
            },
            {
                texto: "Aceitar com o medo mesmo.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Gian começa como assistente em um projeto menor, onde pode observar e aprender. Com o tempo, sua confiança aumenta e ele começa a se envolver em tarefas mais complexas. Seus colegas notam sua dedicação e o promovem para um papel mais ativo no projeto. Onde acaba tendo outras oportunidades:",
        alternativas: [
            {
                texto: "Participar de um grupo de estudo e análise de dados.",
                afirmacao: ""
            },
            {
                texto: "Aceitar uma posição de liderança em um novo projeto inovador.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Gian, agora com mais confiança e experiência, é convidado a liderar um novo projeto inovador. Ele aceita o desafio, coordena uma equipe e apresenta um projeto bem-sucedido que recebe elogios da alta administração da Itaipu. Gian sente que sua escolha de começar com um papel menor foi uma estratégia sábia, Logo após, Gian decide se especializar em um campo técnico específico, aprofundando seus conhecimentos em uma área crucial. Ele se torna um especialista respeitado e contribui para o desenvolvimento de novas tecnologias dentro da Itaipu. :",
        alternativas: [
            {
                texto: "Ele está muito feliz por ter se tornado uns dos melhores especialistas.",
                afirmacao: ""
            },
            {
                texto: "Está satisfeito pelas suas decisões.",
                afirmacao: ""
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Independente das escolhas de Gian, ele aproveita cada oportunidade para crescer e se desenvolver. Ele descobre que a combinação de preparação, experiência gradual e dedicação pode levar a grandes realizações. Ao final de seu estágio na Itaipu, Gian está mais confiante e preparado para sua futura carreira, pronto para enfrentar novos desafios com a experiência adquirida e as lições aprendidas. "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();