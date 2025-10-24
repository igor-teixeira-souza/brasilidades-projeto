// script.js

// Dados detalhados dos atletas (obtidos na fase 6 - Pesquisa)
const athleteDetails = {
  Pelé: {
    details: `**Nome Completo:** Edson Arantes do Nascimento
        **Esporte:** Futebol
        **Legado:** Considerado o **Rei do Futebol** e o maior jogador de todos os tempos. Único tricampeão mundial (1958, 1962 e 1970).
        **Conquistas:** Duas Copas Libertadores e dois Mundiais Interclubes pelo Santos. Maior artilheiro da história da Seleção Brasileira com 77 gols (oficial FIFA).
        **Curiosidade:** Marcou 1.283 gols em sua carreira, reconhecido pelo Guinness World Records.`,
    imageSrc: "img/pele_b109b2f9f8.png",
  },
  Marta: {
    details: `**Nome Completo:** Marta Vieira da Silva
        **Esporte:** Futebol Feminino
        **Legado:** Conhecida como a **Rainha do Futebol**. É a maior artilheira da história da Seleção Brasileira (masculina e feminina) e a maior goleadora em Copas do Mundo (17 gols).
        **Conquistas:** Seis vezes eleita a Melhor Jogadora do Mundo pela FIFA (recorde). Medalhas de prata nas Olimpíadas de 2004 e 2008.
        **Curiosidade:** É Embaixadora Global da ONU Mulheres.`,
    imageSrc: "img/Marta 12172024.jpg.png",
  },
  "Ayrton Senna": {
    details: `**Nome Completo:** Ayrton Senna da Silva
        **Esporte:** Fórmula 1
        **Legado:** Um dos maiores pilotos da história do automobilismo, símbolo de determinação e perfeccionismo.
        **Conquistas:** Tricampeão Mundial de Fórmula 1 (1988, 1990 e 1991). Venceu o Grande Prêmio de Mônaco seis vezes, um recorde.
        **Curiosidade:** Sua rivalidade com Alain Prost é considerada uma das maiores da história do esporte.`,
    imageSrc: "img/ayrton-senna-race-2880x1800-1909.png",
  },
  "Gabi Guimarães": {
    details: `**Nome Completo:** Gabriela Braga Guimarães
        **Esporte:** Voleibol
        **Legado:** Uma das maiores ponteiras da história do vôlei brasileiro, conhecida por sua liderança e técnica apurada.
        **Conquistas:** Medalha de prata nas Olimpíadas de Tóquio 2020. Múltiplas medalhas em Grand Prix e Campeonatos Sul-americanos.
        **Curiosidade:** É a capitã da Seleção Brasileira e foi MVP (Jogadora Mais Valiosa) em diversas competições.`,
    imageSrc: "img/Foto_-FIBV-1-jpg.png",
  },
  "Daniel Dias": {
    details: `**Nome Completo:** Daniel de Faria Dias
        **Esporte:** Natação Paralímpica
        **Legado:** O maior medalhista paralímpico brasileiro e um dos maiores do mundo. Símbolo de superação e inspiração.
        **Conquistas:** 27 medalhas em Paralimpíadas (sendo 14 de ouro). Mais de 40 pódios em Mundiais.
        **Curiosidade:** Nasceu com má-formação congênita dos membros superiores e da perna direita.`,
    imageSrc: "img/Daniel_Dias_100mlivre_Washington_Alves_1.jpg",
  },
  "Petrúcio Ferreira": {
    details: `**Nome Completo:** Petrúcio Ferreira dos Santos
        **Esporte:** Atletismo Paralímpico (Velocidade)
        **Legado:** Considerado o atleta paralímpico mais rápido do mundo.
        **Conquistas:** Tricampeão mundial e detentor do recorde mundial dos 100 metros rasos na sua classe (T47).
        **Curiosidade:** Perdeu parte do braço esquerdo em um acidente com uma máquina de moer capim aos 8 anos.`,
    imageSrc: "img/padrao-folha_24.png",
  },
  "Ronaldo Fenômeno": {
    details: `**Nome Completo:** Ronaldo Luís Nazário de Lima
        **Esporte:** Futebol
        **Legado:** Conhecido como **Fenômeno**, é considerado um dos maiores atacantes da história.
        **Conquistas:** Bicampeão da Copa do Mundo FIFA (1994 e 2002). Duas vezes eleito o Melhor Jogador do Mundo pela FIFA (1996 e 1997).
        **Curiosidade:** Superou graves lesões no joelho para voltar ao topo do futebol mundial.`,
    imageSrc: "img/sportbuzz_10_MV3Up9g-1.png",
  },
  "André Brasil": {
    details: `**Nome Completo:** André Brasil Esteves
        **Esporte:** Natação Paralímpica
        **Legado:** Um dos maiores nadadores paralímpicos do Brasil, dono de múltiplos recordes mundiais.
        **Conquistas:** 14 medalhas em Paralimpíadas. Recordista mundial nos 50m, 100m e 800m livre.
        **Curiosidade:** Sua carreira na natação começou como forma de reabilitação, após um acidente.`,
    imageSrc: "img/7896590046_016b98093d_o-scaled-e.png",
  },
  "Anderson Silva": {
    details: `**Nome Completo:** Anderson da Silva
        **Esporte:** MMA (Artes Marciais Mistas)
        **Legado:** Conhecido como **"Spider"**, é uma lenda do MMA e ex-campeão do UFC.
        **Conquistas:** Recordista de maior número de defesas de título consecutivas no UFC (10).
        **Curiosidade:** É conhecido por sua técnica de luta em pé e por sua postura tranquila fora do octógono.`,
    imageSrc: "img/if-anderson-silva-retired-before.png",
  },
  Falcão: {
    details: `**Nome Completo:** Alessandro Rosa Vieira
        **Esporte:** Futsal
        **Legado:** Considerado o maior jogador de futsal de todos os tempos.
        **Conquistas:** Quatro vezes eleito o Melhor Jogador de Futsal do Mundo pela FIFA. Bicampeão Mundial de Futsal (2008 e 2012).
        **Curiosidade:** É o maior artilheiro da história das Copas do Mundo de Futsal.`,
    imageSrc: "img/falcao-futsal.png",
  },
  "Daiane dos Santos": {
    details: `**Nome Completo:** Daiane Garcia dos Santos
        **Esporte:** Ginástica Artística
        **Legado:** Ginasta pioneira, a primeira brasileira a conquistar uma medalha de ouro em um Campeonato Mundial.
        **Conquistas:** Campeã Mundial no solo em 2003. Criadora do movimento "Dos Santos" e "Duplo twist carpado" (também conhecido como "Dos Santos II").
        **Curiosidade:** Seu movimento "Dos Santos" é um dos mais difíceis e foi batizado com seu nome no Código de Pontuação.`,
    imageSrc: "img/411543694-4508128-daiane-dos-san.png",
  },
  Neymar: {
    details: `**Nome Completo:** Neymar da Silva Santos Júnior
        **Esporte:** Futebol
        **Legado:** Um dos maiores talentos do futebol moderno, conhecido por sua criatividade e habilidade no drible.
        **Conquistas:** Medalha de Ouro Olímpica (Rio 2016). Campeão da Liga dos Campeões da UEFA (2015). Maior artilheiro da história da Seleção Brasileira.
        **Curiosidade:** Começou a jogar futebol profissionalmente aos 17 anos no Santos FC.`,
    imageSrc: "img/GettyImages-1446977379.png",
  },
  "Gabriel Medina": {
    details: `**Nome Completo:** Gabriel Medina Pinto Ferreira
        **Esporte:** Surfe
        **Legado:** O primeiro surfista brasileiro a ser campeão mundial. Responsável por colocar o Brasil no topo do surfe mundial (Brazilian Storm).
        **Conquistas:** Tricampeão Mundial de Surfe (2014, 2018 e 2021).
        **Curiosidade:** Venceu sua primeira etapa do circuito mundial com apenas 17 anos.`,
    imageSrc: "img/gabriel-medina.png",
  },
  "Rayssa Leal": {
    details: `**Nome Completo:** Jhúlia Rayssa Mendes Leal
        **Esporte:** Skate Street
        **Legado:** A mais jovem medalhista olímpica brasileira. Símbolo de carisma e renovação no esporte.
        **Conquistas:** Medalha de Prata nas Olimpíadas de Tóquio 2020. Campeã Mundial de Skate Street (2022).
        **Curiosidade:** Ganhou destaque mundial aos 7 anos com um vídeo viral vestida de fada.`,
    imageSrc: "img/Rayssa-Leal-Paris-4-scaled-aspec.png",
  },
  Giba: {
    details: `**Nome Completo:** Gilberto Amauri de Godoy Filho
        **Esporte:** Voleibol
        **Legado:** Um dos maiores e mais carismáticos jogadores de vôlei do mundo, líder da "Geração de Ouro".
        **Conquistas:** Medalha de Ouro Olímpica (Atenas 2004). Tricampeão Mundial (2002, 2006 e 2010).
        **Curiosidade:** Superou um câncer na infância e uma grave lesão no joelho para se tornar um ícone.`,
    imageSrc: "img/331e690fc6fbf7ee753a86dd6b11a245.png",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // Funções de Acessibilidade
  const body = document.body;
  const darkModeButton = document.getElementById("toggle-dark-mode");
  const contrastButton = document.getElementById("toggle-contrast");

  // Função para alternar o Modo Escuro
  if (darkModeButton) {
    darkModeButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      // Salva a preferência
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Função para alternar o Alto Contraste
  if (contrastButton) {
    contrastButton.addEventListener("click", () => {
      body.classList.toggle("high-contrast");
      // Salva a preferência
      if (body.classList.contains("high-contrast")) {
        localStorage.setItem("contrast", "on");
      } else {
        localStorage.setItem("contrast", "off");
      }
    });
  }

  // Carrega as preferências salvas ao carregar a página
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }
  if (localStorage.getItem("contrast") === "on") {
    body.classList.add("high-contrast");
  }

  // 1. Smooth Scroll Navigation
  document.querySelectorAll(".menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Verifica se o link é para uma seção interna (começa com #)
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.offsetTop -
              document.querySelector("header").offsetHeight, // Ajusta para a altura do header fixo
            behavior: "smooth",
          });
        }
      }
    });
  });

  // 2. Modal Pop-up Logic
  const modal = document.getElementById("athlete-modal");
  const modalClose = document.querySelector(".modal-close");
  const modalName = document.getElementById("modal-athlete-name");
  const modalImage = document.getElementById("modal-athlete-image");
  const modalDetails = document.getElementById("modal-athlete-details");
  const modalBackground = document.querySelector(".modal-background");

  // Função para abrir o modal
  const openModal = (name, detailsHTML) => {
    const athleteData = athleteDetails[name];
    if (!athleteData) return;

    modalName.textContent = name;
    modalImage.src = athleteData.imageSrc;
    modalDetails.innerHTML = detailsHTML; // Usando innerHTML para o Markdown formatado
    modal.classList.add("is-active");
    document.body.classList.add("modal-open"); // Para evitar o scroll da página principal
  };

  // Função para fechar o modal
  const closeModal = () => {
    modal.classList.remove("is-active");
    document.body.classList.remove("modal-open");
  };

  // Event listeners para fechar o modal
  modalClose.addEventListener("click", closeModal);
  modalBackground.addEventListener("click", closeModal);

  // Event listener para as cartas dos ídolos
  document.querySelectorAll(".idolo-card").forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.querySelector("h3").textContent.trim();
      const detailsHTML = athleteDetails[name]
        ? formatDetails(athleteDetails[name].details)
        : "Detalhes não encontrados.";

      openModal(name, detailsHTML);
    });
  });

  // Função auxiliar para formatar o texto (simulando Markdown para HTML)
  function formatDetails(text) {
    // Substitui **texto** por <strong>texto</strong>
    let html = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Adiciona quebras de linha para o texto
    html = html.replace(/\n/g, " ");
    // Adiciona parágrafos para cada linha que começa com **
    html = html.replace(
      /(\s*?)<strong>/g,
      '</p><p class="modal-detail-item"><strong>'
    );
    html = '<p class="modal-detail-item">' + html + "</p>";
    return html;
  }

  // 3. Animação de Fade-in ao Scroll (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observa todas as seções e cards
  document.querySelectorAll("section, .idolo-card, footer").forEach((el) => {
    el.classList.add("fade-in-scroll");
    observer.observe(el);
  });

  // Animação para o header/menu
  document.querySelector("header").classList.add("fade-in-scroll", "visible");

  const track = document.querySelector(".carrossel-track");
  const btnPrev = document.querySelector(".carrossel-btn.prev");
  const btnNext = document.querySelector(".carrossel-btn.next");

  function scrollToCard(direction) {
    const card = track.querySelector(".idolo-card");
    if (!card) return;
    const cardWidth =
      card.offsetWidth + parseInt(getComputedStyle(track).gap || 24);
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  btnPrev.addEventListener("click", () => scrollToCard(-1));
  btnNext.addEventListener("click", () => scrollToCard(1));

  // Acessibilidade: setas no teclado
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") scrollToCard(1);
    if (e.key === "ArrowLeft") scrollToCard(-1);
  });
});
