// ======== DADOS COMPLETOS DOS ATLETAS ========
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
    imageSrc: "/img/pele_b109b2f9f8.png",
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
    imageSrc: "/img/marta.png.png",
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
    imageSrc: "/img/senna.png.png",
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
    imageSrc: "/img/gabi.png.png",
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
    imageSrc: "/img/daniel-dias.png.jpg",
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
    imageSrc: "/img/giba.png.png",
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
    imageSrc: "/img/anderson-silva.png.png",
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
    imageSrc: "/img/isaquias.png",
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
    imageSrc: "/img/zanetti.png",
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
    imageSrc: "/img/daiane.png",
    sport: "outros",
  },
  "Ronaldinho Gaúcho": {
    details: `**Nome Completo:** Ronaldo de Assis Moreira
**Esporte:** Futebol
**Nascimento:** 21/03/1980 - Porto Alegre, RS
**Legado:** Conhecido como "O Bruxo", é considerado um dos jogadores mais talentosos da história do futebol.
**Conquistas:**
• Copa do Mundo (2002)
• Liga dos Campeões da UEFA (2006)
• Bola de Ouro (2005)
• 2 vezes Melhor Jogador do Mundo pela FIFA
**Curiosidade:** Famoso por seu estilo de jogo alegre e criativo, sempre com um sorriso no rosto.`,
    imageSrc: "/img/ronaldinho.png",
    sport: "futebol",
  },
  "Sheila Castro": {
    details: `**Nome Completo:** Sheila Castro
**Esporte:** Voleibol
**Nascimento:** 01/07/1983 - Belo Horizonte, MG
**Legado:** Uma das maiores opostas da história do vôlei brasileiro.
**Conquistas:**
• Medalha de Ouro Olímpica (Pequim 2008)
• 2 Campeonatos Mundiais (2006, 2010)
• 8 Ligas Mundiais
• MVP do Grand Prix 2005
**Curiosidade:** Conhecida por sua força nos ataques e liderança em quadra.`,
    imageSrc: "/img/sheila.png",
    sport: "volei",
  },
  // NOVOS ATLETAS PARALÍMPICOS
  "Terezinha Guilhermina": {
    details: `**Nome Completo:** Terezinha Aparecida Guilhermina
**Esporte:** Atletismo Paralímpico
**Nascimento:** 03/10/1978 - Betim, MG
**Legado:** Maior velocista paralímpica brasileira e referência mundial nas provas de velocidade.
**Conquistas:**
• 6 medalhas paralímpicas (3 ouros, 2 pratas, 1 bronze)
• 10 medalhas em Mundiais (7 ouros)
• 8 medalhas em Parapan-Americanos
• Detentora de recordes mundiais
**Curiosidade:** Com deficiência visual, é conhecida como "A Usain Bolt paralímpica" pela sua velocidade.`,
    imageSrc: "/img/terezinha-guilhermina.png",
    sport: "outros",
  },
  "Ádria Santos": {
    details: `**Nome Completo:** Ádria Rocha Santos
**Esporte:** Atletismo Paralímpico
**Nascimento:** 12/05/1972 - São Paulo, SP
**Legado:** Pioneira do atletismo paralímpico brasileiro e uma das maiores medalhistas da história.
**Conquistas:**
• 13 medalhas paralímpicas (4 ouros, 8 pratas, 1 bronze)
• 21 medalhas em Mundiais
• 15 medalhas em Parapan-Americanos
**Curiosidade:** Participou de 7 Paralimpíadas consecutivas (1988-2012), recorde brasileiro.`,
    imageSrc: "/img/adria-santos.png",
    sport: "outros",
  },
  "Clodoaldo Silva": {
    details: `**Nome Completo:** Clodoaldo Ferreira da Silva
**Esporte:** Natação Paralímpica
**Nascimento:** 21/03/1979 - Natal, RN
**Legado:** Um dos maiores nadadores paralímpicos do Brasil, conhecido como "Tubarão das Piscinas".
**Conquistas:**
• 14 medalhas paralímpicas (6 ouros, 6 pratas, 2 bronzes)
• 25 medalhas em Mundiais
• 15 medalhas em Parapan-Americanos
**Curiosidade:** Foi o primeiro atleta brasileiro a conquistar 6 medalhas em uma mesma Paralimpíada (Atenas 2004).`,
    imageSrc: "/img/clodoaldo-silva.png",
    sport: "outros",
  },
  "Shirlene Coelho": {
    details: `**Nome Completo:** Shirlene Coelho
**Esporte:** Atletismo Paralímpico (Lançamento de Dardo e Disco)
**Nascimento:** 27/08/1982 - Rio de Janeiro, RJ
**Legado:** Maior lançadora paralímpica brasileira e recordista mundial.
**Conquistas:**
• Medalha de Ouro Paralímpica (Tóquio 2020 - Dardo F56)
• 3 medalhas em Mundiais (2 ouros, 1 prata)
• Recordista mundial do lançamento de dardo
**Curiosidade:** Antes do atletismo, foi jogadora de basquete em cadeira de rodas.`,
    imageSrc: "/img/shirlene-coelho.png",
    sport: "outros",
  },
  "Yeltsin Jacques": {
    details: `**Nome Completo:** Yeltsin Farias Jacques
**Esporte:** Atletismo Paralímpico
**Nascimento:** 27/06/1994 - Camaquã, RS
**Legado:** Destaque do atletismo paralímpico brasileiro nas provas de meio-fundo.
**Conquistas:**
• 2 medalhas paralímpicas (1 ouro, 1 prata - Tóquio 2020)
• 3 medalhas em Mundiais (1 ouro, 2 pratas)
• 4 medalhas em Parapan-Americanos
**Curiosidade:** Foi eleito o melhor atleta paralímpico do mundo em 2021 pela World Para Athletics.`,
    imageSrc: "/img/yeltsin-jacques.png",
    sport: "outros",
  },
  // OUTROS ÍDOLOS IMPORTANTES
  "Maria Lenk": {
    details: `**Nome Completo:** Maria Emma Hulda Lenk
**Esporte:** Natação
**Nascimento:** 15/01/1915 - São Paulo, SP
**Falecimento:** 16/04/2007 - Rio de Janeiro, RJ
**Legado:** Primeira mulher brasileira a participar de uma Olimpíada e pioneira da natação no país.
**Conquistas:**
• Primeira brasileira em Olimpíadas (Los Angeles 1932)
• 2 recordes mundiais (200m e 400m peito)
• 5 medalhas em Jogos Sul-Americanos
• Hall da Fama da Natação Mundial
**Curiosidade:** Aos 17 anos, foi a única mulher na delegação brasileira nos Jogos de 1932.`,
    imageSrc: "/img/maria-lenk.png",
    sport: "outros",
  },
  "Joaquim Cruz": {
    details: `**Nome Completo:** Joaquim Carvalho Cruz
**Esporte:** Atletismo
**Nascimento:** 12/03/1963 - Taguatinga, DF
**Legado:** Único brasileiro campeão olímpico e vice-campeão mundial nos 800 metros.
**Conquistas:**
• Medalha de Ouro Olímpica (800m - Los Angeles 1984)
• Medalha de Prata Olímpica (800m - Seul 1988)
• Medalha de Bronze Mundial (1983)
• Recordista mundial dos 800m (1984)
**Curiosidade:** Sua vitória em Los Angeles 1984 quebrou hegemonia de 24 anos de atletas europeus e africanos.`,
    imageSrc: "/img/joaquim-cruz.png",
    sport: "outros",
  },
  "Torben Grael": {
    details: `**Nome Completo:** Torben Schmidt Grael
**Esporte:** Vela
**Nascimento:** 22/07/1960 - São Paulo, SP
**Legado:** Maior medalhista olímpico brasileiro e lenda da vela mundial.
**Conquistas:**
• 5 medalhas olímpicas (2 ouros, 1 prata, 2 bronzes)
• 6 títulos mundiais
• 2 Copas América (2000, 2024)
• Hall da Fama da Vela Internacional
**Curiosidade:** Pertence à família Grael, a mais vitoriosa família da vela mundial.`,
    imageSrc: "/img/torben-grael.png",
    sport: "outros",
  },
  "Robert Scheidt": {
    details: `**Nome Completo:** Robert Scheidt
**Esporte:** Vela
**Nascimento:** 15/04/1973 - São Paulo, SP
**Legado:** Um dos maiores velejadores da história, com participação em 7 Olimpíadas.
**Conquistas:**
• 5 medalhas olímpicas (2 ouros, 2 pratas, 1 bronze)
• 13 títulos mundiais
• 8 vezes atleta do ano no Brasil
**Curiosidade:** É o brasileiro com mais participações em Olimpíadas (7 edições).`,
    imageSrc: "/img/robert-scheidt.png",
    sport: "outros",
  },
  "Hortência Marcari": {
    details: `**Nome Completo:** Hortência Oliva Fanchini
**Esporte:** Basquete
**Nascimento:** 23/09/1959 - Potirendaba, SP
**Legado:** Maior jogadora de basquete brasileira e lenda do esporte feminino.
**Conquistas:**
• Medalha de Ouro Pan-Americano (1991)
• Medalha de Prata Olímpica (Atlanta 1996)
• Campeã Mundial (1994)
• 3 vezes MVP do Campeonato Mundial
**Curiosidade:** Conhecida como "A Rainha do Basquete Brasileiro", marcou 3.160 pontos pela seleção.`,
    imageSrc: "/img/hortencia.png",
    sport: "outros",
  },
  "Oscar Schmidt": {
    details: `**Nome Completo:** Oscar Daniel Bezerra Schmidt
**Esporte:** Basquete
**Nascimento:** 16/02/1958 - Natal, RN
**Legado:** Maior pontuador da história do basquete e ídolo absoluto do esporte brasileiro.
**Conquistas:**
• Maior pontuador da história do basquete (49.737 pontos)
• 3 medalhas Pan-Americanas (2 ouros, 1 prata)
• 5 participações olímpicas
• Hall da Fama do Basquete (FIBA e Naismith)
**Curiosidade:** Recusou contrato milionário da NBA para manter-se elegível pela seleção brasileira.`,
    imageSrc: "/img/oscar.png",
    sport: "outros",
  },
  "Reinaldo Colucci": {
    details: `**Nome Completo:** Reinaldo Colucci
**Esporte:** Triatlo
**Nascimento:** 22/05/1985 - São Paulo, SP
**Legado:** Maior triatleta brasileiro da história e pioneiro no esporte.
**Conquistas:**
• 7 vezes campeão brasileiro
• Medalhista em Jogos Pan-Americanos
• 12 vitórias em etapas do Ironman
• Representante olímpico brasileiro
**Curiosidade:** É formado em medicina e combina a carreira esportiva com a profissão de médico.`,
    imageSrc: "/img/colucci.png",
    sport: "outros",
  },
};

const athletes = [
  // Futebol
  {
    name: "Pelé",
    image: "/img/pele_b109b2f9f8.png",
    description:
      "Considerado o maior jogador de futebol de todos os tempos, Pelé levou o Brasil ao topo do mundo e inspirou gerações.",
    sport: "futebol",
  },
  {
    name: "Marta",
    image: "/img/marta.png.png",
    description:
      "Rainha do futebol feminino, recordista de prêmios da FIFA e símbolo de força feminina no esporte.",
    sport: "futebol",
  },
  {
    name: "Ronaldinho Gaúcho",
    image: "/img/ronaldinho.png",
    description:
      "O Bruxo do futebol, conhecido por sua magia com a bola e jogadas geniais que encantaram o mundo.",
    sport: "futebol",
  },

  // Vôlei
  {
    name: "Gabi Guimarães",
    image: "/img/gabi.png.png",
    description:
      "Destaque do vôlei brasileiro, reconhecida por sua liderança, técnica apurada e conquistas pela seleção nacional.",
    sport: "volei",
  },
  {
    name: "Giba",
    image: "/img/giba.png.png",
    description:
      "Líder da geração de ouro do vôlei brasileiro, campeão olímpico e tricampeão mundial.",
    sport: "volei",
  },
  {
    name: "Sheila Castro",
    image: "/img/sheila.png",
    description:
      "Uma das maiores opostas do vôlei mundial, medalhista olímpica e múltipla campeã mundial.",
    sport: "volei",
  },

  // Basquete
  {
    name: "Oscar Schmidt",
    image: "/img/oscar.png",
    description:
      "Maior pontuador da história do basquete mundial e ídolo absoluto do esporte brasileiro.",
    sport: "basquete",
  },
  {
    name: "Hortência Marcari",
    image: "/img/hortencia.png",
    description:
      "Rainha do basquete brasileiro, medalhista olímpica e campeã mundial pela seleção feminina.",
    sport: "basquete",
  },

  // Atletismo
  {
    name: "Joaquim Cruz",
    image: "/img/joaquim-cruz.png",
    description:
      "Único brasileiro campeão olímpico dos 800m e recordista mundial da prova.",
    sport: "atletismo",
  },
  {
    name: "Terezinha Guilhermina",
    image: "/img/terezinha-guilhermina.png",
    description:
      "Maior velocista paralímpica brasileira, multicampeã mundial e recordista em provas de velocidade.",
    sport: "atletismo",
  },
  {
    name: "Ádria Santos",
    image: "/img/adria-santos.png",
    description:
      "Pioneira do atletismo paralímpico brasileiro com 13 medalhas paralímpicas em 7 participações.",
    sport: "atletismo",
  },

  // Natação
  {
    name: "Daniel Dias",
    image: "/img/daniel-dias.png.jpg",
    description:
      "Maior nadador paralímpico brasileiro, símbolo de superação e inspiração com múltiplas medalhas mundiais e olímpicas.",
    sport: "natacao",
  },
  {
    name: "Clodoaldo Silva",
    image: "/img/clodoaldo-silva.png",
    description:
      "Lenda da natação paralímpica conhecido como 'Tubarão das Piscinas', com 14 medalhas paralímpicas.",
    sport: "natacao",
  },
  {
    name: "Maria Lenk",
    image: "/img/maria-lenk.png",
    description:
      "Primeira mulher brasileira em Olimpíadas e pioneira que abriu caminho para as mulheres no esporte.",
    sport: "natacao",
  },

  // Ginástica
  {
    name: "Arthur Zanetti",
    image: "/img/zanetti.png",
    description:
      "Primeiro brasileiro campeão olímpico na ginástica artística, especialista nas argolas.",
    sport: "ginastica",
  },
  {
    name: "Daiane dos Santos",
    image: "/img/daiane.png",
    description:
      "Pioneira da ginástica brasileira, primeira campeã mundial e criadora do movimento 'Dos Santos'.",
    sport: "ginastica",
  },

  // Vela
  {
    name: "Torben Grael",
    image: "/img/torben-grael.png",
    description:
      "Maior medalhista olímpico brasileiro com 5 medalhas e lenda da vela mundial.",
    sport: "vela",
  },
  {
    name: "Robert Scheidt",
    image: "/img/robert-scheidt.png",
    description:
      "Lenda da vela com 5 medalhas olímpicas e recordista de participações em Olimpíadas pelo Brasil.",
    sport: "vela",
  },

  // MMA
  {
    name: "Anderson Silva",
    image: "/img/anderson-silva.png.png",
    description:
      "Lenda do MMA, ex-campeão do UFC e referência mundial em técnica e determinação.",
    sport: "mma",
  },

  // Esportes Paralímpicos (diversos)
  {
    name: "Shirlene Coelho",
    image: "/img/shirlene-coelho.png",
    description:
      "Recordista mundial do lançamento de dardo e medalhista de ouro paralímpica em Tóquio 2020.",
    sport: "paralimpico",
  },
  {
    name: "Yeltsin Jacques",
    image: "/img/yeltsin-jacques.png",
    description:
      "Destaque do atletismo paralímpico brasileiro, eleito melhor atleta paralímpico do mundo em 2021.",
    sport: "paralimpico",
  },

  // Outros Esportes
  {
    name: "Ayrton Senna",
    image: "/img/senna.png.png",
    description:
      "Tricampeão mundial de Fórmula 1, símbolo de determinação, coragem e amor ao Brasil.",
    sport: "outros",
  },
  {
    name: "Isaquias Queiroz",
    image: "/img/isaquias.png",
    description:
      "Maior canoísta brasileiro, tricampeão mundial e medalhista olímpico múltiplo.",
    sport: "outros",
  },
  {
    name: "Reinaldo Colucci",
    image: "/img/colucci.png",
    description:
      "Maior triatleta brasileiro da história, médico e multicampeão nacional e internacional.",
    sport: "outros",
  },
];

// ======== DADOS COMPLETOS DOS PERSONAGENS DE ANIME ========
const animeCharacters = {
  futebol: [
    {
      name: "Carlos Santana",
      anime: "Captain Tsubasa",
      image: "/img/carlos-santana.png",
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
      image: "/img/lavinho.png",
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
      image: "/img/rodrigo.png",
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
      image: "/img/falcao-silva.png",
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
    {
      name: "Arthur",
      anime: "Inazuma Eleven",
      image: "/img/arthur.png",
      description:
        "Outro destaque da seleção brasileira 'O Reino', Arthur complementa Falcão com sua técnica apurada e visão de jogo excepcional.",
      abilities: [
        "Visão de Jogo",
        "Passes Precisos",
        "Controle de Meio",
        "Técnica",
      ],
      position: "Meio-campo",
      team: "O Reino (Brasil)",
      rating: 4,
      details: {
        origem: "Brasil",
        especialidade: "Construção de jogadas",
        caracteristica: "Elegância técnica",
      },
    },
    {
      name: "Pelé (Referência)",
      anime: "Blue Lock",
      image: "/img/pele-bl.png",
      description:
        "A lenda do futebol mundial é frequentemente referenciada em Blue Lock como o padrão de excelência e inspiração para todos os jogadores.",
      abilities: [
        "Inspiração",
        "Lenda Viva",
        "Referência Máxima",
        "Excelência",
      ],
      position: "Lenda",
      team: "Seleção Brasileira (Histórica)",
      rating: 5,
      details: {
        origem: "Brasil",
        especialidade: "Inspiração máxima",
        caracteristica: "Lenda do futebol mundial",
      },
    },
  ],
  volei: [
    {
      name: "Nicollas Romero",
      anime: "Haikyuu!!",
      image: "/img/romero.png",
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
    {
      name: "Heitor",
      anime: "Haikyuu!!",
      image: "/img/heitor-santana.png",
      description:
        "Jogador brasileiro que aparece brevemente em Haikyuu!!, representando a força do vôlei brasileiro no cenário internacional.",
      abilities: ["Força Física", "Potência", "Fundamentos", "Experiência"],
      position: "Central",
      team: "Seleção Brasileira (anime)",
      rating: 4,
      details: {
        origem: "Brasil",
        especialidade: "Bloqueio e força",
        caracteristica: "Físico imponente",
      },
    },
  ],
};

// ======== VARIÁVEIS GLOBAIS ========
let currentIndex = 0;
let cardWidth = 0;
let autoScrollInterval;
let lastFocusedElement;
let modalOpen = false;
let filteredAthletes = [...athletes];
let currentSportFilter = "all";
let currentSuggestionIndex = -1;
let suggestionsVisible = false;

// ======== INICIALIZAÇÃO PRINCIPAL ========
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Iniciando Brasilidades...");

  setTimeout(() => {
    try {
      // Atualizar os filtros primeiro
      updateFilterButtons();

      // Depois inicializar os outros sistemas
      initCarousel();
      initSearchSuggestions();
      createAnimeCards();
      initInstructionsModal();
      setupKeyboardNavigation();
      initScrollAnimations();
      initBackToTop();
      setupMobileMenu();
      setupAccessibility();

      console.log("✅ Todos os sistemas inicializados com sucesso!");
      console.log(`🎯 ${athletes.length} atletas carregados`);
      console.log(
        `🎌 ${
          animeCharacters.futebol.length + animeCharacters.volei.length
        } personagens de anime carregados`
      );
    } catch (error) {
      console.error("❌ Erro na inicialização:", error);
    }
  }, 100);
});

// ======== SISTEMA DO CARROSSEL ========
function initCarousel() {
  console.log("🎠 Inicializando carrossel...");

  // Criar cards primeiro
  createCards();
  updateCardWidth();
  createIndicators();
  updateCarousel();
  startAutoScroll();

  // Configurar event listeners
  const prevBtn = document.querySelector(".carrossel-btn.prev");
  const nextBtn = document.querySelector(".carrossel-btn.next");
  const track = document.querySelector(".carrossel-track");
  const indicatorsContainer = document.querySelector(".carrossel-indicators");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => navigate(-1));
    nextBtn.addEventListener("click", () => navigate(1));
  }

  if (track) {
    track.addEventListener("keydown", handleKeyboardNavigation);
  }

  if (indicatorsContainer) {
    indicatorsContainer.addEventListener("click", handleIndicatorClick);
    indicatorsContainer.addEventListener("keydown", handleIndicatorsKeyboard);
  }

  // Configurar filtros
  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilter);
  });

  // Pausar auto-scroll ao interagir
  const carrosselContainer = document.querySelector(".carrossel-container");
  if (carrosselContainer) {
    carrosselContainer.addEventListener("mouseenter", stopAutoScroll);
    carrosselContainer.addEventListener("focusin", stopAutoScroll);
    carrosselContainer.addEventListener("mouseleave", startAutoScroll);
    carrosselContainer.addEventListener("focusout", startAutoScroll);
  }

  window.addEventListener("resize", handleResize);
}

function createCards() {
  const track = document.querySelector(".carrossel-track");
  if (!track) {
    console.error("❌ Elemento .carrossel-track não encontrado!");
    return;
  }

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

    card.addEventListener("click", handleCardClick);
    card.addEventListener("keydown", handleCardKeydown);
    track.appendChild(card);
  });

  console.log(`✅ ${filteredAthletes.length} cards criados no carrossel`);
}

function handleCardClick(e) {
  const card = e.currentTarget;
  const athleteName = card.getAttribute("data-athlete-name");
  lastFocusedElement = card;
  openModal(athleteName);
}

function handleCardKeydown(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const card = e.currentTarget;
    const athleteName = card.getAttribute("data-athlete-name");
    lastFocusedElement = card;
    openModal(athleteName);
  }
}

function createIndicators() {
  const indicatorsContainer = document.querySelector(".carrossel-indicators");
  if (!indicatorsContainer) return;

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
  const card = document.querySelector(".idolo-card");
  const track = document.querySelector(".carrossel-track");

  if (card && track) {
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
  const track = document.querySelector(".carrossel-track");
  const indicators = document.querySelectorAll(".carrossel-indicator");

  if (!track || filteredAthletes.length === 0) return;

  const translateX = -currentIndex * cardWidth;
  track.style.transform = `translateX(${translateX}px)`;

  indicators.forEach((indicator, index) => {
    const isActive = index === currentIndex;
    indicator.setAttribute("aria-selected", isActive);
    indicator.setAttribute("tabindex", isActive ? "0" : "-1");
    indicator.classList.toggle("active", isActive);
  });
}

function handleKeyboardNavigation(e) {
  if (modalOpen) return;

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
  }
}

function handleIndicatorsKeyboard(e) {
  const indicators = document.querySelectorAll(".carrossel-indicator");
  if (indicators.length === 0) return;

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
    const index = Array.from(indicator.parentElement.children).indexOf(
      indicator
    );
    goToSlide(index);
  }
}

function handleFilter(e) {
  const sport = e.target.getAttribute("data-sport");
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    const isActive = button === e.target;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });

  currentSportFilter = sport;

  const searchInput = document.getElementById("athlete-search");
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";

  filterAthletes(searchTerm, sport);
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
  createIndicators();
  currentIndex = 0;
  updateCarousel();
}

function updateFilterButtons() {
  const filterContainer = document.querySelector(".filter-buttons");
  if (!filterContainer) return;

  filterContainer.innerHTML = `
    <button class="filter-btn active" data-sport="all" aria-pressed="true">Todos</button>
    <button class="filter-btn" data-sport="futebol" aria-pressed="false">⚽ Futebol</button>
    <button class="filter-btn" data-sport="volei" aria-pressed="false">🏐 Vôlei</button>
    <button class="filter-btn" data-sport="basquete" aria-pressed="false">🏀 Basquete</button>
    <button class="filter-btn" data-sport="atletismo" aria-pressed="false">🏃 Atletismo</button>
    <button class="filter-btn" data-sport="natacao" aria-pressed="false">🏊 Natação</button>
    <button class="filter-btn" data-sport="ginastica" aria-pressed="false">🤸 Ginástica</button>
    <button class="filter-btn" data-sport="vela" aria-pressed="false">⛵ Vela</button>
    <button class="filter-btn" data-sport="mma" aria-pressed="false">🥋 MMA</button>
    <button class="filter-btn" data-sport="paralimpico" aria-pressed="false">♿ Paralímpico</button>
    <button class="filter-btn" data-sport="outros" aria-pressed="false">🏅 Outros</button>
  `;

  // Reconfigurar event listeners
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilter);
  });
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

// ======== SISTEMA DE SUGESTÕES DE PESQUISA ========
function initSearchSuggestions() {
  console.log("🔍 Inicializando sistema de sugestões...");

  const searchInput = document.getElementById("athlete-search");
  const clearSearch = document.getElementById("clear-search");

  if (!searchInput) {
    console.error("❌ Campo de pesquisa não encontrado!");
    return;
  }

  searchInput.addEventListener("input", function (e) {
    handleSearch(e);
    showSuggestions(e.target.value);
  });

  searchInput.addEventListener("keydown", function (e) {
    handleSearchNavigation(e);
  });

  searchInput.addEventListener("focus", function () {
    if (this.value.length > 0) {
      showSuggestions(this.value);
    }
  });

  if (clearSearch) {
    clearSearch.addEventListener("click", clearSearchInput);
  }

  // Fechar sugestões ao clicar fora
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-bar")) {
      hideSuggestions();
    }
  });
}

function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  filterAthletes(searchTerm, currentSportFilter);

  if (searchTerm.length > 0) {
    showSuggestions(searchTerm);
  } else {
    hideSuggestions();
  }
}

function clearSearchInput() {
  const searchInput = document.getElementById("athlete-search");
  if (searchInput) {
    searchInput.value = "";
    filterAthletes("", currentSportFilter);
    hideSuggestions();
    searchInput.focus();
  }
}

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
    const noResults = document.createElement("div");
    noResults.className = "search-suggestion";
    noResults.innerHTML =
      '<span class="suggestion-name">Nenhum atleta encontrado</span>';
    noResults.style.cursor = "default";
    suggestionsContainer.appendChild(noResults);
  } else {
    matchingAthletes.forEach((athlete) => {
      const suggestion = document.createElement("div");
      suggestion.className = "search-suggestion";
      suggestion.setAttribute("role", "option");
      suggestion.setAttribute("data-athlete-name", athlete.name);
      suggestion.tabIndex = 0;

      let sportText = "";
      let sportEmoji = "";

      switch (athlete.sport) {
        case "futebol":
          sportText = "Futebol";
          sportEmoji = "⚽";
          break;
        case "volei":
          sportText = "Vôlei";
          sportEmoji = "🏐";
          break;
        case "basquete":
          sportText = "Basquete";
          sportEmoji = "🏀";
          break;
        case "atletismo":
          sportText = "Atletismo";
          sportEmoji = "🏃";
          break;
        case "natacao":
          sportText = "Natação";
          sportEmoji = "🏊";
          break;
        case "ginastica":
          sportText = "Ginástica";
          sportEmoji = "🤸";
          break;
        case "vela":
          sportText = "Vela";
          sportEmoji = "⛵";
          break;
        case "mma":
          sportText = "MMA";
          sportEmoji = "🥋";
          break;
        case "paralimpico":
          sportText = "Paralímpico";
          sportEmoji = "♿";
          break;
        default:
          sportText = "Outros";
          sportEmoji = "🏅";
      }

      suggestion.innerHTML = `
        <img src="${athlete.image}" alt="${athlete.name}" />
        <span class="suggestion-name">${athlete.name}</span>
        <span class="suggestion-sport">${sportEmoji} ${sportText}</span>
      `;

      suggestion.addEventListener("click", function () {
        selectSuggestion(athlete.name);
      });

      suggestionsContainer.appendChild(suggestion);
    });
  }

  suggestionsContainer.classList.add("active");
  suggestionsVisible = true;
}

function hideSuggestions() {
  const suggestionsContainer = document.getElementById("search-suggestions");
  if (suggestionsContainer) {
    suggestionsContainer.classList.remove("active");
    suggestionsVisible = false;
    currentSuggestionIndex = -1;
  }
}

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
          suggestions[currentSuggestionIndex].getAttribute("data-athlete-name");
        selectSuggestion(athleteName);
      }
      break;
    case "Escape":
      hideSuggestions();
      break;
  }
}

function navigateSuggestions(direction, suggestions) {
  if (currentSuggestionIndex >= 0) {
    suggestions[currentSuggestionIndex].classList.remove("highlighted");
  }

  currentSuggestionIndex += direction;

  if (currentSuggestionIndex < 0) {
    currentSuggestionIndex = suggestions.length - 1;
  } else if (currentSuggestionIndex >= suggestions.length) {
    currentSuggestionIndex = 0;
  }

  suggestions[currentSuggestionIndex].classList.add("highlighted");
  suggestions[currentSuggestionIndex].focus();
}

function selectSuggestion(athleteName) {
  const searchInput = document.getElementById("athlete-search");

  if (searchInput) {
    searchInput.value = athleteName;
    searchInput.focus();

    filterAthletes(athleteName.toLowerCase(), currentSportFilter);

    const athleteIndex = filteredAthletes.findIndex(
      (athlete) => athlete.name.toLowerCase() === athleteName.toLowerCase()
    );

    if (athleteIndex !== -1) {
      goToSlide(athleteIndex);
    }
  }

  hideSuggestions();
}

// ======== SISTEMA DO MODAL DE ATLETA ========
function openModal(name) {
  const athlete = athleteDetails[name];
  if (!athlete) return;

  const modal = document.getElementById("athlete-modal");
  const modalName = document.getElementById("modal-athlete-name");
  const modalImage = document.getElementById("modal-athlete-image");
  const modalDetails = document.getElementById("modal-athlete-details");

  if (!modal || !modalName || !modalImage || !modalDetails) {
    console.error("❌ Elementos do modal não encontrados!");
    return;
  }

  modalName.textContent = name;
  modalImage.src = athlete.imageSrc;
  modalImage.alt = `Imagem de ${name}`;
  modalDetails.innerHTML = formatDetails(athlete.details);

  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
  modalOpen = true;

  const modalClose = modal.querySelector(".modal-close");
  if (modalClose) {
    modalClose.focus();
  }

  trapFocus(modal);
}

function closeModal() {
  const modal = document.getElementById("athlete-modal");
  if (!modal) return;

  modal.setAttribute("aria-hidden", "true");
  modal.classList.remove("is-active");
  document.body.style.overflow = "";
  modalOpen = false;

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

  if (focusableElements.length === 0) return;

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
}

// ======== SISTEMA DOS CARDS DE ANIME ========
function createAnimeCards() {
  console.log("🎌 Criando cards de anime...");

  const futebolGrid = document.getElementById("futebol-anime-grid");
  const voleiGrid = document.getElementById("volei-anime-grid");

  if (futebolGrid) {
    futebolGrid.innerHTML = "";
    animeCharacters.futebol.forEach((character) => {
      const card = createAnimeCard(character);
      futebolGrid.appendChild(card);
    });
    console.log(
      `✅ ${animeCharacters.futebol.length} cards de futebol criados`
    );
  } else {
    console.error("❌ Grid de futebol anime não encontrado!");
  }

  if (voleiGrid) {
    voleiGrid.innerHTML = "";
    animeCharacters.volei.forEach((character) => {
      const card = createAnimeCard(character);
      voleiGrid.appendChild(card);
    });
    console.log(`✅ ${animeCharacters.volei.length} cards de vôlei criados`);
  } else {
    console.error("❌ Grid de vôlei anime não encontrado!");
  }
}

function createAnimeCard(character) {
  const card = document.createElement("div");
  card.className = "anime-card";
  card.tabIndex = 0;
  card.setAttribute("role", "article");
  card.setAttribute(
    "aria-label",
    `Personagem: ${character.name} do anime ${character.anime}`
  );

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

// ======== SISTEMA DO MODAL DE INSTRUÇÕES ========
function initInstructionsModal() {
  console.log("📋 Inicializando modal de instruções...");

  const instructionsModal = document.getElementById("instructions-modal");
  const helpButton = document.getElementById("help-button");

  if (!instructionsModal) {
    console.error("❌ Modal de instruções não encontrado!");
    return;
  }

  if (!helpButton) {
    console.error("❌ Botão de ajuda não encontrado!");
    return;
  }

  const closeInstructions = document.getElementById("close-instructions");
  const dontShowAgain = document.getElementById("dont-show-again");
  const modalClose = instructionsModal.querySelector(".modal-close");
  const modalBackground = instructionsModal.querySelector(".modal-background");

  // Verificar se já mostrou as instruções
  const hasSeenInstructions = localStorage.getItem(
    "brasilidades-instructions-seen"
  );

  if (!hasSeenInstructions) {
    console.log("📖 Mostrando instruções pela primeira vez");
    setTimeout(() => {
      openInstructionsModal();
    }, 1500);
  }

  // Configurar event listeners
  helpButton.addEventListener("click", openInstructionsModal);

  if (closeInstructions) {
    closeInstructions.addEventListener("click", closeInstructionsModal);
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeInstructionsModal);
  }

  if (modalBackground) {
    modalBackground.addEventListener("click", closeInstructionsModal);
  }

  if (dontShowAgain) {
    dontShowAgain.addEventListener("click", function () {
      this.classList.toggle("checked");
      const checkbox = this.querySelector(".checkbox");
      if (checkbox) {
        checkbox.textContent = this.classList.contains("checked") ? "☑" : "☐";
      }
    });
  }

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
    console.log("🎮 Abrindo modal de instruções");
    instructionsModal.setAttribute("aria-hidden", "false");
    instructionsModal.classList.add("is-active");
    document.body.style.overflow = "hidden";

    if (modalClose) {
      modalClose.focus();
    }

    trapFocusInModal(instructionsModal);
  }

  function closeInstructionsModal() {
    console.log("✅ Fechando modal de instruções");
    instructionsModal.setAttribute("aria-hidden", "true");
    instructionsModal.classList.remove("is-active");
    document.body.style.overflow = "";

    if (dontShowAgain && dontShowAgain.classList.contains("checked")) {
      localStorage.setItem("brasilidades-instructions-seen", "true");
      console.log("💾 Não mostrar instruções novamente salvo");
    }

    helpButton.focus();
  }
}

function trapFocusInModal(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) return;

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
  }

  modal.addEventListener("keydown", handleKeydown);
}

// ======== OUTROS SISTEMAS ========
function setupKeyboardNavigation() {
  console.log("⌨️ Configurando navegação por teclado...");

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
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.altKey && e.key === "1") {
      e.preventDefault();
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.setAttribute("tabindex", "-1");
        mainContent.focus();
      }
    }

    if (e.altKey && e.key === "2") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.querySelector("header h1").focus();
    }
  });
}

function initScrollAnimations() {
  console.log("🎭 Inicializando animações de scroll...");

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
}

function initBackToTop() {
  console.log("⬆️ Inicializando botão voltar ao topo...");

  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

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

  window.addEventListener("scroll", toggleBackToTop);
  backToTopBtn.addEventListener("click", scrollToTop);
  backToTopBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  });
}

function setupMobileMenu() {
  console.log("📱 Configurando menu mobile...");

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);
      menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("active");
      });
    });
  }
}

function setupAccessibility() {
  console.log("♿ Configurando acessibilidade...");

  const body = document.body;
  const contrastButton = document.getElementById("toggle-contrast");
  const increaseFontButton = document.getElementById("increase-font");
  const decreaseFontButton = document.getElementById("decrease-font");

  if (contrastButton) {
    contrastButton.addEventListener("click", function () {
      const isHighContrast = body.classList.toggle("high-contrast");
      this.setAttribute("aria-pressed", isHighContrast);
      localStorage.setItem("contrast", isHighContrast ? "on" : "off");
    });
  }

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

  // Carregar preferências salvas
  if (localStorage.getItem("contrast") === "on") {
    body.classList.add("high-contrast");
    if (contrastButton) contrastButton.setAttribute("aria-pressed", "true");
  }

  const fontSize = localStorage.getItem("fontSize");
  if (fontSize === "large") {
    body.classList.add("large-font");
  } else if (fontSize === "xlarge") {
    body.classList.add("xlarge-font");
  }
}

// ======== CONFIGURAÇÃO DE EVENT LISTENERS GLOBAIS ========
// Configurar fechamento de modais
document.addEventListener("DOMContentLoaded", function () {
  // Fechar modal do atleta
  const athleteModal = document.getElementById("athlete-modal");
  if (athleteModal) {
    athleteModal
      .querySelector(".modal-close")
      .addEventListener("click", closeModal);
    athleteModal
      .querySelector(".modal-background")
      .addEventListener("click", closeModal);
  }

  // Navegação suave
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

        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
        }
        target.focus();
      }
    });
  });
});

// Polyfill para :focus-visible
(function () {
  if (!("focusVisible" in document.documentElement)) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        document.documentElement.classList.add("focus-visible");
      }
    });

    document.addEventListener("mousedown", function () {
      document.documentElement.classList.remove("focus-visible");
    });
  }
})();
