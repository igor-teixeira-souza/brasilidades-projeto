// Dados dos atletas brasileiros
const athleteDetails = {
  Pelé: {
    details: `**Nome Completo:** Edson Arantes do Nascimento
**Esporte:** Futebol
**Nascimento:** 23/10/1940 - Três Corações, MG
**Falecimento:** 29/12/2022 - São Paulo, SP
**Legado:** Considerado o **Rei do Futebol** e o maior jogador de todos os tempos. Único tricampeão mundial (1958, 1962 e 1970).
**Conquistas:** 
• 3 Copas do Mundo (1958, 1962, 1970)
• 2 Copas Libertadores (1962, 1963)
• 2 Mundiais Interclubes (1962, 1963)
• 10 Campeonatos Paulistas
• Maior artilheiro da história da Seleção Brasileira (77 gols)
**Curiosidade:** Marcou 1.283 gols em sua carreira, reconhecido pelo Guinness World Records.`,
    imageSrc: "img/pele_b109b2f9f8.png",
    sport: "futebol",
  },
  Marta: {
    details: `**Nome Completo:** Marta Vieira da Silva
**Esporte:** Futebol Feminino
**Nascimento:** 19/02/1986 - Dois Riachos, AL
**Legado:** Conhecida como a **Rainha do Futebol**. É a maior artilheira da história da Seleção Brasileira (masculina e feminina).
**Conquistas:**
• 6 vezes Melhor Jogadora do Mundo pela FIFA (2006-2010, 2018)
• Maior artilheira em Copas do Mundo (17 gols)
• 2 Medalhas de Prata Olímpicas (2004, 2008)
• 3 Copas América Feminina
**Curiosidade:** É Embaixadora Global da ONU Mulheres e inspiração para milhões de meninas no esporte.`,
    imageSrc: "img/marta.png",
    sport: "futebol",
  },
  "Ayrton Senna": {
    details: `**Nome Completo:** Ayrton Senna da Silva
**Esporte:** Fórmula 1
**Nascimento:** 21/03/1960 - São Paulo, SP
**Falecimento:** 01/05/1994 - Bolonha, Itália
**Legado:** Um dos maiores pilotos da história do automobilismo, símbolo de determinação e perfeccionismo.
**Conquistas:**
• 3 Campeonatos Mundiais (1988, 1990, 1991)
• 41 Vitórias na F1
• 65 Pole Positions
• 6 Vitórias no GP de Mônaco (recorde)
**Curiosidade:** Sua rivalidade com Alain Prost é lendária. Fundou o Instituto Ayrton Senna para educação infantil.`,
    imageSrc: "img/senna.png",
    sport: "outros",
  },
  "Gabi Guimarães": {
    details: `**Nome Completo:** Gabriela Braga Guimarães
**Esporte:** Voleibol
**Nascimento:** 19/05/1994 - Belo Horizonte, MG
**Legado:** Uma das maiores ponteiras da história do vôlei brasileiro, conhecida por sua liderança e técnica apurada.
**Conquistas:**
• Medalha de Prata Olímpica (Tóquio 2020)
• 2 Ligas das Nações (2021, 2022)
• 4 Campeonatos Sul-Americanos
• MVP em diversas competições
**Curiosidade:** É a capitã da Seleção Brasileira e ídolo do Minas Tênis Clube.`,
    imageSrc: "img/gabi.png",
    sport: "volei",
  },
  "Daniel Dias": {
    details: `**Nome Completo:** Daniel de Faria Dias
**Esporte:** Natação Paralímpica
**Nascimento:** 24/05/1988 - Campinas, SP
**Legado:** O maior medalhista paralímpico brasileiro e um dos maiores do mundo.
**Conquistas:**
• 27 medalhas em Paralimpíadas (14 ouros, 7 pratas, 6 bronzes)
• 31 medalhas em Mundiais
• 10 medalhas em Parapan-Americanos
• Detentor de múltiplos recordes mundiais
**Curiosidade:** Superou uma má-formação congênita para se tornar lenda do esporte paralímpico.`,
    imageSrc: "img/daniel-dias.png",
    sport: "outros",
  },
  Giba: {
    details: `**Nome Completo:** Gilberto Amauri de Godoy Filho
**Esporte:** Voleibol
**Nascimento:** 23/12/1976 - Londrina, PR
**Legado:** Um dos maiores jogadores de vôlei de todos os tempos, líder da geração de ouro.
**Conquistas:**
• Medalha de Ouro Olímpica (Atenas 2004)
• 3 Campeonatos Mundiais (2002, 2006, 2010)
• 9 Ligas Mundiais
• 3 Copas dos Campeões
**Curiosidade:** Superou um câncer na infância para se tornar um dos maiores atletas do vôlei mundial.`,
    imageSrc: "img/giba.png",
    sport: "volei",
  },
  "Anderson Silva": {
    details: `**Nome Completo:** Anderson da Silva
**Esporte:** MMA (Artes Marciais Mistas)
**Nascimento:** 14/04/1975 - Curitiba, PR
**Legado:** Conhecido como "Spider", é considerado um dos maiores lutadores de MMA da história.
**Conquistas:**
• Ex-campeão do UFC Middleweight
• Recorde de 16 vitórias consecutivas no UFC
• 10 defesas de título consecutivas
• Hall da Fama do UFC
**Curiosidade:** Detém o recorde de maior sequência invicta na história do UFC.`,
    imageSrc: "img/anderson-silva.png",
    sport: "outros",
  },
  "Isaquias Queiroz": {
    details: `**Nome Completo:** Isaquias Queiroz dos Santos
**Esporte:** Canoagem Velocidade
**Nascimento:** 03/01/1994 - Ubaitaba, BA
**Legado:** Maior canoísta brasileiro da história e um dos maiores do mundo.
**Conquistas:**
• 3 medalhas olímpicas (1 prata, 2 bronzes - Rio 2016)
• 6 medalhas em Mundiais (3 ouros)
• 10 medalhas em Copas do Mundo
• Tricampeão mundial
**Curiosidade:** Primeiro brasileiro a conquistar 3 medalhas em uma mesma Olimpíada.`,
    imageSrc: "img/isaquias.png",
    sport: "outros",
  },
  "Arthur Zanetti": {
    details: `**Nome Completo:** Arthur Nory Oyakawa Mariano
**Esporte:** Ginástica Artística
**Nascimento:** 18/09/1993 - São Paulo, SP
**Legado:** Primeiro brasileiro campeão olímpico na ginástica artística.
**Conquistas:**
• Medalha de Ouro Olímpica (Argolas - Londres 2012)
• Medalha de Prata Olímpica (Solo - Tóquio 2020)
• 2 medalhas em Mundiais
• 5 medalhas em Jogos Pan-Americanos
**Curiosidade:** Especialista nas argolas, é conhecido por sua técnica impecável.`,
    imageSrc: "img/zanetti.png",
    sport: "outros",
  },
  "Daiane dos Santos": {
    details: `**Nome Completo:** Daiane Garcia dos Santos
**Esporte:** Ginástica Artística
**Nascimento:** 10/02/1983 - Porto Alegre, RS
**Legado:** Primeira ginasta brasileira campeã mundial.
**Conquistas:**
• Campeã Mundial no Solo (2003)
• 2 medalhas em Mundiais
• 8 medalhas em Jogos Pan-Americanos
• Criadora do movimento "Dos Santos"
**Curiosidade:** Seu movimento "Dos Santos" foi o primeiro elemento ginástico batizado com o nome de uma atleta brasileira.`,
    imageSrc: "img/daiane.png",
    sport: "outros",
  },
};

const athletes = [
  {
    name: "Pelé",
    image: "img/pele_b109b2f9f8.png",
    description:
      "Considerado o maior jogador de futebol de todos os tempos, Pelé levou o Brasil ao topo do mundo e inspirou gerações.",
    sport: "futebol",
  },
  {
    name: "Marta",
    image: "img/marta.png.png",
    description:
      "Rainha do futebol feminino, recordista de prêmios da FIFA e símbolo de força feminina no esporte.",
    sport: "futebol",
  },
  {
    name: "Ayrton Senna",
    image: "img/senna.png.png",
    description:
      "Tricampeão mundial de Fórmula 1, símbolo de determinação, coragem e amor ao Brasil.",
    sport: "outros",
  },
  {
    name: "Gabi Guimarães",
    image: "img/gabi.png.png",
    description:
      "Destaque do vôlei brasileiro, reconhecida por sua liderança, técnica apurada e conquistas pela seleção nacional.",
    sport: "volei",
  },
  {
    name: "Daniel Dias",
    image: "img/daniel-dias.png.jpg",
    description:
      "Maior nadador paralímpico brasileiro, símbolo de superação e inspiração com múltiplas medalhas mundiais e olímpicas.",
    sport: "outros",
  },
  {
    name: "Giba",
    image: "img/giba.png.png",
    description:
      "Líder da geração de ouro do vôlei brasileiro, campeão olímpico e tricampeão mundial.",
    sport: "volei",
  },
  {
    name: "Anderson Silva",
    image: "img/anderson-silva.png.png",
    description:
      "Lenda do MMA, ex-campeão do UFC e referência mundial em técnica e determinação.",
    sport: "outros",
  },
  {
    name: "Isaquias Queiroz",
    image: "img/isaquias.png",
    description:
      "Maior canoísta brasileiro, tricampeão mundial e medalhista olímpico múltiplo.",
    sport: "outros",
  },
  {
    name: "Arthur Zanetti",
    image: "img/zanetti.png",
    description:
      "Primeiro brasileiro campeão olímpico na ginástica artística, especialista nas argolas.",
    sport: "outros",
  },
  {
    name: "Daiane dos Santos",
    image: "img/daiane.png",
    description:
      "Pioneira da ginástica brasileira, primeira campeã mundial e criadora do movimento 'Dos Santos'.",
    sport: "outros",
  },
];

// Dados dos personagens de anime (com informações reais)
const animeCharacters = {
  futebol: [
    {
      name: "Carlos Santana",
      anime: "Captain Tsubasa",
      image: "img/carlos-santana.jpg",
      description:
        "Conhecido como 'Cyborg do Futebol', Santana é um dos rivais mais formidáveis de Tsubasa Ozora. Representa a técnica e habilidade brasileira em seu mais alto nível.",
      abilities: [
        "Chute Potente",
        "Controle de Bola",
        "Visão de Jogo",
        "Dribles Técnicos",
      ],
      position: "Atacante",
      team: "São Paulo FC (anime)",
      rating: 5,
      details: {
        origem: "Brasil",
        especialidade: "Finalização",
        caracteristica: "Frieza técnica em campo",
      },
    },
    {
      name: "Lavinho",
      anime: "Blue Lock",
      image: "img/lavinho.jpg",
      description:
        "Um dos 'Cinco Craques Mundiais', Lavinho é conhecido por seu estilo de jogo livre e cheio de ginga. Ele personifica o futebol arte brasileiro.",
      abilities: ["Ginga", "Dribles Criativos", "Velocidade", "Improvisação"],
      position: "Atacante",
      team: "Seleção Brasileira (Blue Lock)",
      rating: 5,
      details: {
        origem: "Brasil",
        especialidade: "Dribles e criatividade",
        caracteristica: "Estilo livre e imprevisível",
      },
    },
    {
      name: "Rodrigo",
      anime: "Hungry Heart: Wild Striker",
      image: "img/rodrigo.jpg",
      description:
        "Atacante brasileiro que se muda para o Japão em busca de oportunidades. Mostra a garra e determinação típicas dos jogadores brasileiros.",
      abilities: [
        "Finalização",
        "Força Física",
        "Determinação",
        "Chute de Longa Distância",
      ],
      position: "Atacante",
      team: "Japão (no anime)",
      rating: 4,
      details: {
        origem: "Brasil",
        especialidade: "Finalização",
        caracteristica: "Garra e determinação",
      },
    },
    {
      name: "Falcão da Silva",
      anime: "Inazuma Eleven",
      image: "img/falcao-da-silva.jpg",
      description:
        "Capitão da Seleção Brasileira 'O Reino' em Inazuma Eleven. Conhecido por suas técnicas especiais e liderança em campo.",
      abilities: [
        "Técnicas Especiais",
        "Liderança",
        "Chutes Poderosos",
        "Estratégia",
      ],
      position: "Meio-campo",
      team: "O Reino (Brasil)",
      rating: 5,
      details: {
        origem: "Brasil",
        especialidade: "Técnicas especiais",
        caracteristica: "Liderança carismática",
      },
    },
  ],
  volei: [
    {
      name: "Nicollas Romero",
      anime: "Haikyuu!!",
      image: "img/nicollas-romero.jpg",
      description:
        "Jogador brasileiro de vôlei que atua como oposto. Conhecido por sua experiência internacional e habilidades técnicas refinadas.",
      abilities: [
        "Ataque Poderoso",
        "Experiência",
        "Fundamentos Sólidos",
        "Blocos",
      ],
      position: "Oposto",
      team: "MSBY Black Jackals",
      rating: 5,
      details: {
        origem: "Brasil",
        especialidade: "Ataque e experiência",
        caracteristica: "Profissionalismo internacional",
      },
    },
  ],
};

// Função para criar cards de anime
function createAnimeCards() {
  const futebolGrid = document.getElementById("futebol-anime-grid");
  const voleiGrid = document.getElementById("volei-anime-grid");

  if (futebolGrid) {
    futebolGrid.innerHTML = "";
    animeCharacters.futebol.forEach((character) => {
      futebolGrid.appendChild(createAnimeCard(character));
    });
  }

  if (voleiGrid) {
    voleiGrid.innerHTML = "";
    animeCharacters.volei.forEach((character) => {
      voleiGrid.appendChild(createAnimeCard(character));
    });
  }
}

// Função para criar um card de anime individual
function createAnimeCard(character) {
  const card = document.createElement("div");
  card.className = "anime-card";
  card.tabIndex = 0;
  card.setAttribute("role", "article");
  card.setAttribute(
    "aria-label",
    `Personagem: ${character.name} do anime ${character.anime}`
  );

  // Gerar estrelas de avaliação
  const stars = "★".repeat(character.rating) + "☆".repeat(5 - character.rating);

  card.innerHTML = `
    <div class="anime-card-header">
      <img src="${character.image}" alt="${
    character.name
  }" class="anime-card-image" />
      <div class="anime-card-badge">${character.anime}</div>
    </div>
    <div class="anime-card-content">
      <h4 class="anime-card-title">${character.name}</h4>
      <p class="anime-card-subtitle">${character.position} • ${
    character.team
  }</p>
      <p class="anime-card-description">${character.description}</p>
      
      <div class="anime-card-details">
        <div class="detail-item">
          <span class="detail-label">Origem</span>
          <span class="detail-value">${character.details.origem}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Especialidade</span>
          <span class="detail-value">${character.details.especialidade}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Característica</span>
          <span class="detail-value">${character.details.caracteristica}</span>
        </div>
      </div>
      
      <div class="anime-card-abilities">
        <h5 class="abilities-title">Habilidades Principais</h5>
        <div class="abilities-list">
          ${character.abilities
            .map((ability) => `<span class="ability-tag">${ability}</span>`)
            .join("")}
        </div>
      </div>
      
      <div class="anime-card-footer">
        <div class="anime-rating">
          <span class="rating-stars">${stars}</span>
          <span>${character.rating}/5</span>
        </div>
        <span class="anime-source">${character.anime}</span>
      </div>
    </div>
  `;

  return card;
}

// Sistema do Pop-up de Instruções
function initInstructionsModal() {
  const instructionsModal = document.getElementById("instructions-modal");
  const helpButton = document.getElementById("help-button");
  const closeInstructions = document.getElementById("close-instructions");
  const dontShowAgain = document.getElementById("dont-show-again");
  const modalClose = instructionsModal.querySelector(".modal-close");
  const modalBackground = instructionsModal.querySelector(".modal-background");

  // Verificar se já mostrou as instruções
  const hasSeenInstructions = localStorage.getItem(
    "brasilidades-instructions-seen"
  );

  if (!hasSeenInstructions) {
    // Mostrar pop-up automaticamente na primeira visita
    setTimeout(() => {
      openInstructionsModal();
    }, 1000);
  }

  // Event listeners
  helpButton.addEventListener("click", openInstructionsModal);
  closeInstructions.addEventListener("click", closeInstructionsModal);
  modalClose.addEventListener("click", closeInstructionsModal);
  modalBackground.addEventListener("click", closeInstructionsModal);

  dontShowAgain.addEventListener("click", function () {
    this.classList.toggle("checked");
    const checkbox = this.querySelector(".checkbox");
    checkbox.textContent = this.classList.contains("checked") ? "☑" : "☐";
  });

  // Fechar com ESC
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      instructionsModal.classList.contains("is-active")
    ) {
      closeInstructionsModal();
    }
  });

  function openInstructionsModal() {
    instructionsModal.setAttribute("aria-hidden", "false");
    instructionsModal.classList.add("is-active");
    document.body.style.overflow = "hidden";

    // Foco no botão de fechar
    modalClose.focus();

    // Trap focus
    trapFocus(instructionsModal);
  }

  function closeInstructionsModal() {
    instructionsModal.setAttribute("aria-hidden", "true");
    instructionsModal.classList.remove("is-active");
    document.body.style.overflow = "";

    // Salvar preferência se marcado para não mostrar novamente
    if (dontShowAgain.classList.contains("checked")) {
      localStorage.setItem("brasilidades-instructions-seen", "true");
    }

    // Retornar foco para o botão de ajuda
    helpButton.focus();
  }
}

// Variáveis globais
let currentIndex = 0;
let cardWidth = 0;
let autoScrollInterval;
let lastFocusedElement;
let modalOpen = false;
let filteredAthletes = [...athletes];
let currentSportFilter = "all";
let currentSuggestionIndex = -1;
let suggestionsVisible = false;

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar todos os sistemas
  initSearchSuggestions();
  createAnimeCards();
  initInstructionsModal();
  setupKeyboardNavigation();
  
  console.log('Site inicializado com sucesso!');
  console.log('Atletas carregados:', athletes.length);
  console.log('Personagens de anime carregados:', animeCharacters.futebol.length + animeCharacters.volei.length);
});

document.addEventListener("DOMContentLoaded", function () {
  // ======== ACESSIBILIDADE ========
  const body = document.body;
  const contrastButton = document.getElementById("toggle-contrast");
  const increaseFontButton = document.getElementById("increase-font");
  const decreaseFontButton = document.getElementById("decrease-font");

  // Contraste
  if (contrastButton) {
    contrastButton.addEventListener("click", function () {
      const isHighContrast = body.classList.toggle("high-contrast");
      this.setAttribute("aria-pressed", isHighContrast);
      localStorage.setItem("contrast", isHighContrast ? "on" : "off");
    });

    contrastButton.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  }

  // Tamanho da fonte
  if (increaseFontButton) {
    increaseFontButton.addEventListener("click", function () {
      if (body.classList.contains("xlarge-font")) return;

      if (body.classList.contains("large-font")) {
        body.classList.remove("large-font");
        body.classList.add("xlarge-font");
      } else {
        body.classList.add("large-font");
      }

      localStorage.setItem(
        "fontSize",
        body.classList.contains("xlarge-font")
          ? "xlarge"
          : body.classList.contains("large-font")
          ? "large"
          : "normal"
      );
    });
  }

  if (decreaseFontButton) {
    decreaseFontButton.addEventListener("click", function () {
      if (
        !body.classList.contains("large-font") &&
        !body.classList.contains("xlarge-font")
      )
        return;

      if (body.classList.contains("xlarge-font")) {
        body.classList.remove("xlarge-font");
        body.classList.add("large-font");
      } else {
        body.classList.remove("large-font");
      }

      localStorage.setItem(
        "fontSize",
        body.classList.contains("xlarge-font")
          ? "xlarge"
          : body.classList.contains("large-font")
          ? "large"
          : "normal"
      );
    });
  }

  // Carregar preferências
  if (localStorage.getItem("contrast") === "on") {
    body.classList.add("high-contrast");
    contrastButton.setAttribute("aria-pressed", "true");
  }

  const fontSize = localStorage.getItem("fontSize");
  if (fontSize === "large") {
    body.classList.add("large-font");
  } else if (fontSize === "xlarge") {
    body.classList.add("xlarge-font");
  }

  // Menu mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);
      menu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("active");
      });
    });
  }

  // ======== NAVEGAÇÃO SUAVE ========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Foco no conteúdo para leitores de tela
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
        }
        target.focus();
      }
    });
  });

  // ======== MODAL ========
  const modal = document.getElementById("athlete-modal");
  const modalClose = document.querySelector(".modal-close");
  const modalBackground = document.querySelector(".modal-background");
  const modalName = document.getElementById("modal-athlete-name");
  const modalImage = document.getElementById("modal-athlete-image");
  const modalDetails = document.getElementById("modal-athlete-details");

  function openModal(name) {
    const athlete = athleteDetails[name];
    if (!athlete) return;

    modalName.textContent = name;
    modalImage.src = athlete.imageSrc;
    modalImage.alt = `Imagem de ${name}`;
    modalDetails.innerHTML = formatDetails(athlete.details);

    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-active");
    body.style.overflow = "hidden";
    modalOpen = true;

    // Foco no modal
    modalClose.focus();

    // Trap focus inside modal
    trapFocus(modal);
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("is-active");
    body.style.overflow = "";
    modalOpen = false;

    // Retornar foco para o elemento que abriu o modal
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function formatDetails(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line)
      .map((line) => `<p class="modal-detail-item">${line}</p>`)
      .join("");
  }

  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleKeydown(e) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
      if (e.key === "Escape") {
        closeModal();
      }
    }

    element.addEventListener("keydown", handleKeydown);

    // Remover event listener quando modal fechar
    return function cleanup() {
      element.removeEventListener("keydown", handleKeydown);
    };
  }

  modalClose.addEventListener("click", closeModal);
  modalClose.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeModal();
    }
  });

  modalBackground.addEventListener("click", closeModal);

  // ======== CARROSSEL CORRIGIDO ========
  const track = document.querySelector(".carrossel-track");
  const prevBtn = document.querySelector(".carrossel-btn.prev");
  const nextBtn = document.querySelector(".carrossel-btn.next");
  const indicatorsContainer = document.querySelector(".carrossel-indicators");
  const searchInput = document.getElementById("athlete-search");
  const clearSearch = document.getElementById("clear-search");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function initCarousel() {
    createCards();
    updateCardWidth();
    createIndicators();
    updateCarousel();
    startAutoScroll();

    // Inicializar sistema de sugestões
    initSearchSuggestions();

    // Event listeners para botões do carrossel
    prevBtn.addEventListener("click", () => navigate(-1));
    prevBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(-1);
      }
    });

    nextBtn.addEventListener("click", () => navigate(1));
    nextBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(1);
      }
    });

    // Navegação por teclado
    track.addEventListener("keydown", handleKeyboardNavigation);

    // Indicadores
    indicatorsContainer.addEventListener("click", handleIndicatorClick);
    indicatorsContainer.addEventListener("keydown", handleIndicatorsKeyboard);

    // Pausar auto-scroll ao interagir
    const carrosselContainer = document.querySelector(".carrossel-container");
    carrosselContainer.addEventListener("mouseenter", stopAutoScroll);
    carrosselContainer.addEventListener("focusin", stopAutoScroll);
    carrosselContainer.addEventListener("mouseleave", startAutoScroll);
    carrosselContainer.addEventListener("focusout", startAutoScroll);

    // Redimensionamento
    window.addEventListener("resize", handleResize);

    // Busca e filtros
    if (searchInput) {
      searchInput.addEventListener("input", handleSearch);
    }

    if (clearSearch) {
      clearSearch.addEventListener("click", clearSearchInput);
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", handleFilter);
    });
  }

  function initSearchSuggestions() {
    const searchInput = document.getElementById("athlete-search");
    const suggestionsContainer = document.getElementById("search-suggestions");

    if (searchInput && suggestionsContainer) {
      // Event listener para input
      searchInput.addEventListener("input", function (e) {
        handleSearch(e);
        showSuggestions(e.target.value);
      });

      // Event listener para teclas de navegação
      searchInput.addEventListener("keydown", function (e) {
        handleSearchNavigation(e);
      });

      // Event listener para focar na barra de pesquisa
      searchInput.addEventListener("focus", function () {
        if (this.value.length > 0) {
          showSuggestions(this.value);
        }
      });

      // Event listener para clicar fora das sugestões
      document.addEventListener("click", function (e) {
        if (
          !searchInput.contains(e.target) &&
          !suggestionsContainer.contains(e.target)
        ) {
          hideSuggestions();
        }
      });

      // Event listener para sugestões
      suggestionsContainer.addEventListener("click", function (e) {
        const suggestion = e.target.closest(".search-suggestion");
        if (suggestion) {
          const athleteName = suggestion.getAttribute("data-athlete-name");
          selectSuggestion(athleteName);
        }
      });
    }
  }

  // Função para mostrar sugestões
  function showSuggestions(searchTerm) {
    const suggestionsContainer = document.getElementById("search-suggestions");
    const searchInput = document.getElementById("athlete-search");

    if (!suggestionsContainer || !searchInput) return;

    suggestionsContainer.innerHTML = "";
    currentSuggestionIndex = -1;

    if (searchTerm.length === 0) {
      hideSuggestions();
      return;
    }

    const term = searchTerm.toLowerCase();
    const matchingAthletes = athletes.filter(
      (athlete) =>
        athlete.name.toLowerCase().includes(term) ||
        athlete.description.toLowerCase().includes(term)
    );

    if (matchingAthletes.length === 0) {
      // Mostrar mensagem de nenhum resultado
      const noResults = document.createElement("div");
      noResults.className = "search-suggestion";
      noResults.innerHTML =
        '<span class="suggestion-name">Nenhum atleta encontrado</span>';
      noResults.style.cursor = "default";
      noResults.addEventListener("click", (e) => e.preventDefault());
      suggestionsContainer.appendChild(noResults);
    } else {
      // Mostrar sugestões
      matchingAthletes.forEach((athlete) => {
        const suggestion = document.createElement("div");
        suggestion.className = "search-suggestion";
        suggestion.setAttribute("role", "option");
        suggestion.setAttribute("data-athlete-name", athlete.name);
        suggestion.tabIndex = 0;

        // Determinar o texto do esporte
        let sportText = "";
        switch (athlete.sport) {
          case "futebol":
            sportText = "⚽ Futebol";
            break;
          case "volei":
            sportText = "🏐 Vôlei";
            break;
          default:
            sportText = "🏅 Outros";
        }

        suggestion.innerHTML = `
        <img src="${athlete.image}" alt="${athlete.name}" />
        <span class="suggestion-name">${athlete.name}</span>
        <span class="suggestion-sport">${sportText}</span>
      `;

        suggestionsContainer.appendChild(suggestion);
      });
    }

    suggestionsContainer.classList.add("active");
    suggestionsVisible = true;
  }

  // Função para esconder sugestões
  function hideSuggestions() {
    const suggestionsContainer = document.getElementById("search-suggestions");
    if (suggestionsContainer) {
      suggestionsContainer.classList.remove("active");
      suggestionsVisible = false;
      currentSuggestionIndex = -1;
    }
  }

  // Função para navegação por teclado nas sugestões
  function handleSearchNavigation(e) {
    const suggestionsContainer = document.getElementById("search-suggestions");
    const suggestions = suggestionsContainer
      ? suggestionsContainer.querySelectorAll(".search-suggestion")
      : [];

    if (!suggestionsVisible || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        navigateSuggestions(1, suggestions);
        break;
      case "ArrowUp":
        e.preventDefault();
        navigateSuggestions(-1, suggestions);
        break;
      case "Enter":
        e.preventDefault();
        if (
          currentSuggestionIndex >= 0 &&
          currentSuggestionIndex < suggestions.length
        ) {
          const athleteName =
            suggestions[currentSuggestionIndex].getAttribute(
              "data-athlete-name"
            );
          selectSuggestion(athleteName);
        }
        break;
      case "Escape":
        hideSuggestions();
        break;
      case "Tab":
        hideSuggestions();
        break;
    }
  }

  // Função para navegar entre sugestões
  function navigateSuggestions(direction, suggestions) {
    // Remover destaque atual
    if (currentSuggestionIndex >= 0) {
      suggestions[currentSuggestionIndex].classList.remove("highlighted");
    }

    // Calcular novo índice
    currentSuggestionIndex += direction;

    // Ajustar limites
    if (currentSuggestionIndex < 0) {
      currentSuggestionIndex = suggestions.length - 1;
    } else if (currentSuggestionIndex >= suggestions.length) {
      currentSuggestionIndex = 0;
    }

    // Aplicar destaque
    suggestions[currentSuggestionIndex].classList.add("highlighted");
    suggestions[currentSuggestionIndex].focus();
  }

  // Função para selecionar uma sugestão
  function selectSuggestion(athleteName) {
    const searchInput = document.getElementById("athlete-search");

    if (searchInput) {
      searchInput.value = athleteName;
      searchInput.focus();

      // Filtrar os atletas
      filterAthletes(athleteName.toLowerCase(), currentSportFilter);

      // Encontrar o índice do atleta selecionado
      const athleteIndex = filteredAthletes.findIndex(
        (athlete) => athlete.name.toLowerCase() === athleteName.toLowerCase()
      );

      if (athleteIndex !== -1) {
        goToSlide(athleteIndex);
      }
    }

    hideSuggestions();
  }

  // Atualize a função handleSearch para incluir sugestões:
  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterAthletes(searchTerm, currentSportFilter);

    // Mostrar/ocultar sugestões baseado no termo de pesquisa
    if (searchTerm.length > 0) {
      showSuggestions(searchTerm);
    } else {
      hideSuggestions();
    }
  }

  // Atualize a função clearSearchInput para limpar sugestões também:
  function clearSearchInput() {
    const searchInput = document.getElementById("athlete-search");
    if (searchInput) {
      searchInput.value = "";
      filterAthletes("", currentSportFilter);
      hideSuggestions();
      searchInput.focus();
    }
  }

  // Atualize a função filterAthletes para garantir que as sugestões sejam atualizadas:
  function filterAthletes(searchTerm, sport) {
    filteredAthletes = athletes.filter((athlete) => {
      const matchesSearch =
        athlete.name.toLowerCase().includes(searchTerm) ||
        athlete.description.toLowerCase().includes(searchTerm);
      const matchesSport = sport === "all" || athlete.sport === sport;

      return matchesSearch && matchesSport;
    });

    createCards();

    // Atualizar sugestões se a barra de pesquisa tiver texto
    const searchInput = document.getElementById("athlete-search");
    if (searchInput && searchInput.value.length > 0) {
      showSuggestions(searchInput.value);
    }
  }

  function createCards() {
    track.innerHTML = "";

    filteredAthletes.forEach((athlete, index) => {
      const card = document.createElement("div");
      card.className = "idolo-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute(
        "aria-label",
        `Ver detalhes de ${athlete.name}. ${athlete.description}`
      );
      card.setAttribute("data-athlete-name", athlete.name);
      card.setAttribute("data-sport", athlete.sport);

      card.innerHTML = `
        <img src="${athlete.image}" alt="${athlete.name}" />
        <div class="idolo-card-content">
          <h3>${athlete.name}</h3>
          <p>${athlete.description}</p>
        </div>
      `;

      // Event listeners para o card
      card.addEventListener("click", handleCardClick);
      card.addEventListener("keydown", handleCardKeydown);

      track.appendChild(card);
    });

    // Resetar índice atual
    currentIndex = 0;
    updateCarousel();
    createIndicators();
  }

  function handleCardClick(e) {
    const card = e.currentTarget;
    const athleteName = card.getAttribute("data-athlete-name");
    lastFocusedElement = card;
    openModal(athleteName);
  }

  function handleCardKeydown(e) {
    const card = e.currentTarget;
    const athleteName = card.getAttribute("data-athlete-name");

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      lastFocusedElement = card;
      openModal(athleteName);
    }
  }

  function createIndicators() {
    indicatorsContainer.innerHTML = "";

    filteredAthletes.forEach((_, index) => {
      const indicator = document.createElement("button");
      indicator.className = "carrossel-indicator";
      indicator.setAttribute("role", "tab");
      indicator.setAttribute("aria-label", `Ir para slide ${index + 1}`);
      indicator.setAttribute("aria-selected", index === 0);
      indicator.setAttribute("tabindex", index === 0 ? "0" : "-1");
      indicator.addEventListener("click", () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  }

  function updateCardWidth() {
    const card = track.querySelector(".idolo-card");
    if (card) {
      const style = getComputedStyle(track);
      const gap = parseInt(style.gap) || 0;
      cardWidth = card.offsetWidth + gap;
    }
  }

  function navigate(direction) {
    const newIndex = currentIndex + direction;
    goToSlide(newIndex);
  }

  function goToSlide(index) {
    if (filteredAthletes.length === 0) return;

    if (index < 0) index = filteredAthletes.length - 1;
    if (index >= filteredAthletes.length) index = 0;

    currentIndex = index;
    updateCarousel();
    restartAutoScroll();
  }

  function updateCarousel() {
    if (filteredAthletes.length === 0) {
      track.style.transform = `translateX(0px)`;
      return;
    }

    const translateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${translateX}px)`;

    // Atualizar indicadores
    const indicators = indicatorsContainer.querySelectorAll(
      ".carrossel-indicator"
    );
    indicators.forEach((indicator, index) => {
      const isActive = index === currentIndex;
      indicator.setAttribute("aria-selected", isActive);
      indicator.setAttribute("tabindex", isActive ? "0" : "-1");
      indicator.classList.toggle("active", isActive);
    });
  }

  function handleKeyboardNavigation(e) {
    if (modalOpen) return;

    const cards = track.querySelectorAll(".idolo-card");

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        navigate(-1);
        break;
      case "ArrowRight":
        e.preventDefault();
        navigate(1);
        break;
      case "Home":
        e.preventDefault();
        goToSlide(0);
        break;
      case "End":
        e.preventDefault();
        goToSlide(filteredAthletes.length - 1);
        break;
      case "Tab":
        // Navegação normal entre cards
        const currentCard = document.activeElement;
        if (currentCard.classList.contains("idolo-card")) {
          e.preventDefault();
          const currentCardIndex = Array.from(cards).indexOf(currentCard);
          let nextIndex;

          if (e.shiftKey) {
            nextIndex = (currentCardIndex - 1 + cards.length) % cards.length;
          } else {
            nextIndex = (currentCardIndex + 1) % cards.length;
          }

          cards[nextIndex].focus();
        }
        break;
    }
  }

  function handleIndicatorsKeyboard(e) {
    const indicators = indicatorsContainer.querySelectorAll(
      ".carrossel-indicator"
    );
    const currentIndicator = e.target;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const currentIndex = Array.from(indicators).indexOf(currentIndicator);
      const nextIndex = (currentIndex + 1) % indicators.length;
      indicators[nextIndex].focus();
      goToSlide(nextIndex);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const currentIndex = Array.from(indicators).indexOf(currentIndicator);
      const prevIndex =
        (currentIndex - 1 + indicators.length) % indicators.length;
      indicators[prevIndex].focus();
      goToSlide(prevIndex);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const currentIndex = Array.from(indicators).indexOf(currentIndicator);
      goToSlide(currentIndex);
    }
  }

  function handleIndicatorClick(e) {
    const indicator = e.target.closest(".carrossel-indicator");
    if (indicator) {
      const index = Array.from(indicatorsContainer.children).indexOf(indicator);
      goToSlide(index);
    }
  }

  function startAutoScroll() {
    stopAutoScroll();
    if (filteredAthletes.length > 1) {
      autoScrollInterval = setInterval(() => {
        navigate(1);
      }, 5000);
    }
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  function restartAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
  }

  function handleResize() {
    updateCardWidth();
    updateCarousel();
  }

  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterAthletes(searchTerm, currentSportFilter);
  }

  function clearSearchInput() {
    searchInput.value = "";
    filterAthletes("", currentSportFilter);
    searchInput.focus();
  }

  function handleFilter(e) {
    const sport = e.target.getAttribute("data-sport");

    // Atualizar estado dos botões
    filterButtons.forEach((button) => {
      const isActive = button === e.target;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive);
    });

    currentSportFilter = sport;
    filterAthletes(searchInput.value.toLowerCase(), sport);
  }

  function filterAthletes(searchTerm, sport) {
    filteredAthletes = athletes.filter((athlete) => {
      const matchesSearch =
        athlete.name.toLowerCase().includes(searchTerm) ||
        athlete.description.toLowerCase().includes(searchTerm);
      const matchesSport = sport === "all" || athlete.sport === sport;

      return matchesSearch && matchesSport;
    });

    createCards();
  }

  // ======== ANIMAÇÃO SCROLL ========
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in-scroll").forEach((el) => {
    observer.observe(el);
  });

  // ======== NAVEGAÇÃO POR TECLADO NO SITE TODO ========
  function setupKeyboardNavigation() {
    // Navegação no menu principal
    const menuItems = document.querySelectorAll(".menu a");
    menuItems.forEach((item, index) => {
      item.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          const nextIndex = (index + 1) % menuItems.length;
          menuItems[nextIndex].focus();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
          menuItems[prevIndex].focus();
        } else if (e.key === "Home") {
          e.preventDefault();
          menuItems[0].focus();
        } else if (e.key === "End") {
          e.preventDefault();
          menuItems[menuItems.length - 1].focus();
        }
      });
    });

    // Navegação nos botões de acessibilidade
    const accessibilityButtons = document.querySelectorAll(
      ".accessibility-menu button"
    );
    accessibilityButtons.forEach((button, index) => {
      button.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextIndex = (index + 1) % accessibilityButtons.length;
          accessibilityButtons[nextIndex].focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          const prevIndex =
            (index - 1 + accessibilityButtons.length) %
            accessibilityButtons.length;
          accessibilityButtons[prevIndex].focus();
        }
      });
    });

    // Navegação global com Tab
    document.addEventListener("keydown", function (e) {
      // Pular para o conteúdo principal com Alt + 1
      if (e.altKey && e.key === "1") {
        e.preventDefault();
        const mainContent = document.getElementById("main-content");
        if (mainContent) {
          mainContent.setAttribute("tabindex", "-1");
          mainContent.focus();
        }
      }

      // Voltar ao topo com Alt + 2
      if (e.altKey && e.key === "2") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.querySelector("header h1").focus();
      }
    });
  }

  // ======== BOTÃO VOLTAR AO TOPO ========
  const backToTopBtn = document.getElementById("back-to-top");

  function toggleBackToTop() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (backToTopBtn) {
    window.addEventListener("scroll", toggleBackToTop);
    backToTopBtn.addEventListener("click", scrollToTop);
    backToTopBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTop();
      }
    });
  }

  // ======== INICIALIZAÇÃO ========
  initCarousel();
  setupKeyboardNavigation();

  // Foco inicial no header
  document.querySelector("header h1").setAttribute("tabindex", "-1");
});

// Navegação global adicional
document.addEventListener("keydown", function (e) {
  if (e.altKey) {
    switch (e.key) {
      case "1":
        e.preventDefault();
        document.querySelector(".menu a").focus();
        break;
      case "3":
        e.preventDefault();
        const heroBtn = document.querySelector(".hero-btn");
        if (heroBtn) heroBtn.focus();
        break;
    }
  }
});
