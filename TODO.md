# TODO: Melhorias Gerais no Site Brasilidades

## Informações Coletadas
- **Arquivos analisados:** index.html, style.css, script.js
- **Estrutura atual:** Header com menu, seções hero, história, ídolos (carrossel), curiosidades (animes), inclusão, sobre, footer
- **Funcionalidades existentes:** Modo escuro/contraste, carrossel interativo, modal de atletas, animações scroll, navegação teclado
- **Problemas identificados:** Modo escuro prejudica visibilidade, layout poderia ser mais dinâmico, falta ferramentas de busca/filtros

## Plano Detalhado de Implementação

### 1. Melhorar Visibilidade e Remover Cores Escuras
- [ ] Remover botão "Modo Escuro" do menu de acessibilidade
- [ ] Remover classes CSS relacionadas ao modo escuro (.dark-mode)
- [ ] Ajustar variáveis CSS para garantir cores sempre claras e alto contraste
- [ ] Aumentar tamanhos de fonte para melhor legibilidade (mínimo 16px)
- [ ] Verificar contraste de cores (mínimo 4.5:1) usando ferramentas online

### 2. Melhorar Layout e Dinamismo
- [ ] Implementar efeito parallax na seção hero com movimento sutil
- [ ] Adicionar animações de entrada variadas (slide-in, fade-in, bounce) para seções
- [ ] Melhorar hover effects nos cards: adicionar sombra animada, leve rotação
- [ ] Criar layout grid mais flexível para seções de conteúdo
- [ ] Adicionar micro-interações (botões pulsando, ícones animados)

### 3. Introduzir Novas Ferramentas
- [ ] **Barra de Pesquisa:** Campo de input acima do carrossel para filtrar atletas por nome
- [ ] **Filtros por Esporte:** Botões para filtrar por categoria (Futebol, Vôlei, MMA, etc.)
- [ ] **Botão "Voltar ao Topo":** Aparece ao rolar, com animação suave
- [ ] **Compartilhamento Social:** Botões para compartilhar seções específicas
- [ ] **Estatísticas Dinâmicas:** Contador animado de atletas, esportes, conquistas

### 4. Melhorar Acessibilidade
- [ ] Adicionar mais atributos ARIA (aria-expanded, aria-controls)
- [ ] Melhorar navegação por teclado (atalhos Alt+1 para menu, Alt+2 para topo)
- [ ] Garantir foco visual consistente em todos os elementos
- [ ] Adicionar suporte a leitores de tela com descrições mais detalhadas
- [ ] Implementar skip links adicionais para seções principais

### 5. Otimizações Gerais
- [ ] Implementar lazy loading para imagens do carrossel
- [ ] Otimizar JavaScript (remover event listeners desnecessários, usar debounce)
- [ ] Adicionar preload para imagens críticas
- [ ] Melhorar SEO com meta tags mais descritivas e schema markup
- [ ] Testar performance com Lighthouse

### 6. Novos Recursos Dinâmicos
- [ ] **Galeria Interativa:** Expandir seção de curiosidades com mais imagens
- [ ] **Quiz de Conhecimentos:** Seção interativa sobre atletas brasileiros
- [ ] **Timeline Interativa:** História visual dos esportes brasileiros
- [ ] **Seção de Notícias:** Feed de atualizações sobre atletas (inicialmente estático)

## Ordem de Implementação Prioritária
1. Remover modo escuro e melhorar visibilidade
2. Melhorar layout e adicionar dinamismo básico
3. Implementar barra de pesquisa e filtros
4. Adicionar botão voltar ao topo e compartilhamento
5. Melhorar acessibilidade
6. Otimizações de performance
7. Novos recursos dinâmicos

## Dependências
- Arquivos a modificar: index.html, style.css, script.js
- Novos arquivos possíveis: search.js (para funcionalidades de busca)
- Imagens: Verificar se todas existem no diretório img/

## Testes Necessários
- [ ] Testar em Chrome, Firefox, Safari
- [ ] Testar responsividade em mobile/tablet/desktop
- [ ] Testar navegação por teclado
- [ ] Testar com leitores de tela (NVDA, JAWS)
- [ ] Verificar performance (Lighthouse score >90)

## Status Atual
- [x] Análise inicial dos arquivos concluída
- [x] Planejamento detalhado criado
- [ ] Implementação iniciada
