// Dados dos atletas - EXPANDIDO
const athleteDetails = {
  Pelé: {
    details: `**Nome Completo:** Edson Arantes do Nascimento
**Esporte:** Futebol
**Legado:** Considerado o **Rei do Futebol** e o maior jogador de todos os tempos. Único tricampeão mundial (1958, 1962 e 1970).
**Conquistas:** Duas Copas Libertadores e dois Mundiais Interclubes pelo Santos. Maior artilheiro da história da Seleção Brasileira com 77 gols (oficial FIFA).
**Curiosidade:** Marcou 1.283 gols em sua carreira, reconhecido pelo Guinness World Records.`,
    imageSrc: "img/pele_b109b2f9f8.png"
  },
  Marta: {
    details: `**Nome Completo:** Marta Vieira da Silva
**Esporte:** Futebol Feminino
**Legado:** Conhecida como a **Rainha do Futebol**. É a maior artilheira da história da Seleção Brasileira (masculina e feminina) e a maior goleadora em Copas do Mundo (17 gols).
**Conquistas:** Seis vezes eleita a Melhor Jogadora do Mundo pela FIFA (recorde). Medalhas de prata nas Olimpíadas de 2004 e 2008.
**Curiosidade:** É Embaixadora Global da ONU Mulheres.`,
    imageSrc: "img/Marta 12172024.jpg.png"
  },
  "Ayrton Senna": {
    details: `**Nome Completo:** Ayrton Senna da Silva
**Esporte:** Fórmula 1
**Legado:** Um dos maiores pilotos da história do automobilismo, símbolo de determinação e perfeccionismo.
**Conquistas:** Tricampeão Mundial de Fórmula 1 (1988, 1990 e 1991). Venceu o Grande Prêmio de Mônaco seis vezes, um recorde.
**Curiosidade:** Sua rivalidade com Alain Prost é considerada uma das maiores da história do esporte.`,
    imageSrc: "img/ayrton-senna-race-2880x1800-1909.png"
  },
  "Gabi Guimarães": {
    details: `**Nome Completo:** Gabriela Braga Guimarães
**Esporte:** Voleibol
**Legado:** Uma das maiores ponteiras da história do vôlei brasileiro, conhecida por sua liderança e técnica apurada.
**Conquistas:** Medalha de prata nas Olimpíadas de Tóquio 2020. Múltiplas medalhas em Grand Prix e Campeonatos Sul-americanos.
**Curiosidade:** É a capitã da Seleção Brasileira e foi MVP (Jogadora Mais Valiosa) em diversas competições.`,
    imageSrc: "img/Foto_-FIBV-1-jpg.png"
  },
  "Daniel Dias": {
    details: `**Nome Completo:** Daniel de Faria Dias
**Esporte:** Natação Paralímpica
**Legado:** O maior medalhista paralímpico brasileiro e um dos maiores do mundo. Símbolo de superação e inspiração.
**Conquistas:** 27 medalhas em Paralimpíadas (sendo 14 de ouro). Mais de 40 pódios em Mundiais.
**Curiosidade:** Nasceu com má-formação congênita dos membros superiores e da perna direita.`,
    imageSrc: "img/Daniel_Dias_100mlivre_Washington_Alves_1.jpg"
  },
  "Giba": {
    details: `**Nome Completo:** Gilberto Amauri de Godoy Filho
**Esporte:** Voleibol
**Legado:** Um dos maiores jogadores de vôlei de todos os tempos, líder da geração de ouro.
**Conquistas:** Medalha de ouro olímpica em Atenas 2004. Tricampeão mundial (2002, 2006, 2010).
**Curiosidade:** Superou um câncer na infância para se tornar um dos maiores atletas do vôlei mundial.`,
    imageSrc: "img/atleta2.jpg"
  },
  "Anderson Silva": {
    details: `**Nome Completo:** Anderson da Silva
**Esporte:** MMA (Artes Marciais Mistas)
**Legado:** Conhecido como "Spider", é considerado um dos maiores lutadores de MMA da história.
**Conquistas:** Ex-campeão do UFC, recordista de defesas de título consecutivas no peso-médio (10).
**Curiosidade:** Detém o recorde de maior sequência invicta na história do UFC (16 vitórias).`,
    imageSrc: "img/atleta2.jpg"
  },
  "Isaquias Queiroz": {
    details: `**Nome Completo:** Isaquias Queiroz dos Santos
**Esporte:** Canoagem Velocidade
**Legado:** Maior canoísta brasileiro da história e um dos maiores do mundo.
**Conquistas:** Tricampeão mundial e primeiro brasileiro a conquistar 3 medalhas em uma mesma Olimpíada (Rio 2016).
**Curiosidade:** Superou um acidente grave na infância que quase o impediu de praticar esportes.`,
    imageSrc: "img/atleta2.jpg"
  },
  "Arthur Zanetti": {
    details: `**Nome Completo:** Arthur Nory Oyakawa Mariano
**Esporte:** Ginástica Artística
**Legado:** Primeiro brasileiro campeão olímpico na ginástica artística.
**Conquistas:** Medalha de ouro nas argolas em Londres 2012 e prata no solo em Tóquio 2020.
**Curiosidade:** Começou na ginástica aos 5 anos e é conhecido por sua técnica impecável nas argolas.`,
    imageSrc: "img/atleta2.jpg"
  },
  "Daiane dos Santos": {
    details: `**Nome Completo:** Daiane Garcia dos Santos
**Esporte:** Ginástica Artística
**Legado:** Primeira ginasta brasileira campeã mundial.
**Conquistas:** Campeã mundial no solo em 2003. Criadora do movimento "Dos Santos".
**Curiosidade:** Seu movimento "Dos Santos" foi o primeiro elemento ginástico batizado com o nome de uma atleta brasileira.`,
    imageSrc: "img/atleta2.jpg"
  }
};

const athletes = [
  { name: "Pelé", image: "img/atleta1.jpg", description: "Considerado o maior jogador de futebol de todos os tempos, Pelé levou o Brasil ao topo do mundo e inspirou gerações." },
  { name: "Marta", image: "img/atleta2.jpg", description: "Com recordes e títulos, Marta é um ícone mundial do futebol feminino e símbolo de força feminina no esporte." },
  { name: "Ayrton Senna", image: "img/atleta2.jpg", description: "Tricampeão mundial de Fórmula 1, Senna se tornou um símbolo de determinação, coragem e amor ao Brasil." },
  { name: "Gabi Guimarães", image: "img/atleta2.jpg", description: "Gabi Guimarães é destaque do vôlei brasileiro, reconhecida por sua liderança, técnica apurada e conquistas pela seleção nacional." },
  { name: "Daniel Dias", image: "img/atleta2.jpg", description: "Daniel Dias é o maior nadador paralímpico brasileiro, símbolo de superação e inspiração com múltiplas medalhas mundiais e olímpicas." },
  { name: "Giba", image: "img/atleta2.jpg", description: "Líder da geração de ouro do vôlei brasileiro, campeão olímpico e tricampeão mundial." },
  { name: "Anderson Silva", image: "img/atleta2.jpg", description: "Lenda do MMA, ex-campeão do UFC e referência mundial em técnica e determinação." },
  { name: "Isaquias Queiroz", image: "img/atleta2.jpg", description: "Maior canoísta brasileiro, tricampeão mundial e medalhista olímpico múltiplo." },
  { name: "Arthur Zanetti", image: "img/atleta2.jpg", description: "Primeiro brasileiro campeão olímpico na ginástica artística, especialista nas argolas." },
  { name: "Daiane dos Santos", image: "img/atleta2.jpg", description: "Pioneira da ginástica brasileira, primeira campeã mundial e criadora do movimento 'Dos Santos'." }
];

// Variáveis globais
let currentIndex = 0;
let cardWidth = 0;
let autoScrollInterval;
let lastFocusedElement;
let modalOpen = false;

document.addEventListener('DOMContentLoaded', function() {
  // ======== ACESSIBILIDADE ========
  const body = document.body;
  const darkModeButton = document.getElementById('toggle-dark-mode');
  const contrastButton = document.getElementById('toggle-contrast');

  // Modo Escuro
  if (darkModeButton) {
    darkModeButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    darkModeButton.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }

  // Alto Contraste
  if (contrastButton) {
    contrastButton.addEventListener('click', function() {
      body.classList.toggle('high-contrast');
      localStorage.setItem('contrast', body.classList.contains('high-contrast') ? 'on' : 'off');
    });

    contrastButton.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }

  // Carregar preferências
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }
  if (localStorage.getItem('contrast') === 'on') {
    body.classList.add('high-contrast');
  }

  // ======== NAVEGAÇÃO SUAVE ========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Foco no conteúdo para leitores de tela
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus();
      }
    });
  });

  // ======== MODAL ========
  const modal = document.getElementById('athlete-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalBackground = document.querySelector('.modal-background');
  const modalName = document.getElementById('modal-athlete-name');
  const modalImage = document.getElementById('modal-athlete-image');
  const modalDetails = document.getElementById('modal-athlete-details');

  function openModal(name) {
    const athlete = athleteDetails[name];
    if (!athlete) return;

    modalName.textContent = name;
    modalImage.src = athlete.imageSrc;
    modalImage.alt = `Imagem de ${name}`;
    modalDetails.innerHTML = formatDetails(athlete.details);
    
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-active');
    body.style.overflow = 'hidden';
    modalOpen = true;
    
    // Foco no modal
    modalClose.focus();
    
    // Trap focus inside modal
    trapFocus(modal);
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('is-active');
    body.style.overflow = '';
    modalOpen = false;
    
    // Retornar foco para o elemento que abriu o modal
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  function formatDetails(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line)
      .map(line => `<p class="modal-detail-item">${line}</p>`)
      .join('');
  }

  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleKeydown(e) {
      if (e.key === 'Tab') {
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
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    element.addEventListener('keydown', handleKeydown);
  }

  modalClose.addEventListener('click', closeModal);
  modalClose.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeModal();
    }
  });

  modalBackground.addEventListener('click', closeModal);

  // ======== CARROSSEL CORRIGIDO ========
  const track = document.querySelector('.carrossel-track');
  const prevBtn = document.querySelector('.carrossel-btn.prev');
  const nextBtn = document.querySelector('.carrossel-btn.next');
  const indicatorsContainer = document.querySelector('.carrossel-indicators');

  function initCarousel() {
    createCards();
    updateCardWidth();
    createIndicators();
    updateCarousel();
    startAutoScroll();

    // Event listeners para botões do carrossel
    prevBtn.addEventListener('click', () => navigate(-1));
    prevBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigate(-1);
      }
    });

    nextBtn.addEventListener('click', () => navigate(1));
    nextBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigate(1);
      }
    });
    
    // Navegação por teclado
    track.addEventListener('keydown', handleKeyboardNavigation);
    
    // Indicadores
    indicatorsContainer.addEventListener('click', handleIndicatorClick);
    indicatorsContainer.addEventListener('keydown', handleIndicatorsKeyboard);
    
    // Pausar auto-scroll ao interagir
    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.addEventListener('mouseenter', stopAutoScroll);
    carrosselContainer.addEventListener('focusin', stopAutoScroll);
    carrosselContainer.addEventListener('mouseleave', startAutoScroll);
    carrosselContainer.addEventListener('focusout', startAutoScroll);
    
    // Redimensionamento
    window.addEventListener('resize', handleResize);
  }

  function createCards() {
    track.innerHTML = '';
    
    athletes.forEach((athlete, index) => {
      const card = document.createElement('div');
      card.className = 'idolo-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Ver detalhes de ${athlete.name}. ${athlete.description}`);
      card.setAttribute('data-athlete-name', athlete.name);
      
      card.innerHTML = `
        <img src="${athlete.image}" alt="${athlete.name}" />
        <div class="idolo-card-content">
          <h3>${athlete.name}</h3>
          <p>${athlete.description}</p>
        </div>
      `;
      
      // Event listeners para o card
      card.addEventListener('click', handleCardClick);
      card.addEventListener('keydown', handleCardKeydown);
      
      track.appendChild(card);
    });
  }

  function handleCardClick(e) {
    const card = e.currentTarget;
    const athleteName = card.getAttribute('data-athlete-name');
    lastFocusedElement = card;
    openModal(athleteName);
  }

  function handleCardKeydown(e) {
    const card = e.currentTarget;
    const athleteName = card.getAttribute('data-athlete-name');
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      lastFocusedElement = card;
      openModal(athleteName);
    }
  }

  function createIndicators() {
    indicatorsContainer.innerHTML = '';
    
    athletes.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = 'carrossel-indicator';
      indicator.setAttribute('role', 'tab');
      indicator.setAttribute('aria-label', `Ir para slide ${index + 1}`);
      indicator.setAttribute('aria-selected', index === 0);
      indicator.setAttribute('tabindex', index === 0 ? '0' : '-1');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  }

  function updateCardWidth() {
    const card = track.querySelector('.idolo-card');
    if (card) {
      const style = getComputedStyle(track);
      const gap = parseInt(style.gap) || 0;
      // Incluir o padding no cálculo
      const trackStyle = getComputedStyle(track);
      cardWidth = card.offsetWidth + gap;
      console.log('Card width calculado:', cardWidth);
    }
  }

  function navigate(direction) {
    const newIndex = currentIndex + direction;
    goToSlide(newIndex);
  }

  function goToSlide(index) {
    if (index < 0) index = athletes.length - 1;
    if (index >= athletes.length) index = 0;
    
    currentIndex = index;
    updateCarousel();
    restartAutoScroll();
  }

  function updateCarousel() {
    const translateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${translateX}px)`;
    console.log('Movendo para posição:', translateX, 'Índice atual:', currentIndex);
    
    // Atualizar indicadores
    const indicators = indicatorsContainer.querySelectorAll('.carrossel-indicator');
    indicators.forEach((indicator, index) => {
      const isActive = index === currentIndex;
      indicator.setAttribute('aria-selected', isActive);
      indicator.setAttribute('tabindex', isActive ? '0' : '-1');
      indicator.classList.toggle('active', isActive);
    });
  }

  function handleKeyboardNavigation(e) {
    if (modalOpen) return;

    const cards = track.querySelectorAll('.idolo-card');
    
    switch(e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        navigate(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        navigate(1);
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(athletes.length - 1);
        break;
      case 'Tab':
        // Navegação normal entre cards
        const currentCard = document.activeElement;
        if (currentCard.classList.contains('idolo-card')) {
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
    const indicators = indicatorsContainer.querySelectorAll('.carrossel-indicator');
    const currentIndicator = e.target;
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const currentIndex = Array.from(indicators).indexOf(currentIndicator);
      const nextIndex = (currentIndex + 1) % indicators.length;
      indicators[nextIndex].focus();
      goToSlide(nextIndex);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const currentIndex = Array.from(indicators).indexOf(currentIndicator);
      const prevIndex = (currentIndex - 1 + indicators.length) % indicators.length;
      indicators[prevIndex].focus();
      goToSlide(prevIndex);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const currentIndex = Array.from(indicators).indexOf(currentIndicator);
      goToSlide(currentIndex);
    }
  }

  function handleIndicatorClick(e) {
    const indicator = e.target.closest('.carrossel-indicator');
    if (indicator) {
      const index = Array.from(indicatorsContainer.children).indexOf(indicator);
      goToSlide(index);
    }
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      navigate(1);
    }, 5000);
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

  // ======== ANIMAÇÃO SCROLL ========
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-scroll').forEach(el => {
    observer.observe(el);
  });

  // ======== NAVEGAÇÃO POR TECLADO NO SITE TODO ========
  function setupKeyboardNavigation() {
    // Navegação no menu principal
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach((item, index) => {
      item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIndex = (index + 1) % menuItems.length;
          menuItems[nextIndex].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
          menuItems[prevIndex].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          menuItems[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          menuItems[menuItems.length - 1].focus();
        }
      });
    });

    // Navegação nos botões de acessibilidade
    const accessibilityButtons = document.querySelectorAll('.accessibility-menu button');
    accessibilityButtons.forEach((button, index) => {
      button.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIndex = (index + 1) % accessibilityButtons.length;
          accessibilityButtons[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIndex = (index - 1 + accessibilityButtons.length) % accessibilityButtons.length;
          accessibilityButtons[prevIndex].focus();
        }
      });
    });

    // Navegação global com Tab
    document.addEventListener('keydown', function(e) {
      // Pular para o conteúdo principal com Alt + 1
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.setAttribute('tabindex', '-1');
          mainContent.focus();
        }
      }

      // Voltar ao topo com Alt + 2
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector('header h1').focus();
      }
    });
  }

  // ======== INICIALIZAÇÃO ========
  initCarousel();
  setupKeyboardNavigation();

  // Foco inicial no header
  document.querySelector('header h1').setAttribute('tabindex', '-1');
});

// Navegação global adicional
document.addEventListener('keydown', function(e) {
  if (e.altKey) {
    switch(e.key) {
      case '1':
        e.preventDefault();
        document.querySelector('.menu a').focus();
        break;
      case '3':
        e.preventDefault();
        const heroBtn = document.querySelector('.hero-btn');
        if (heroBtn) heroBtn.focus();
        break;
    }
  }
});