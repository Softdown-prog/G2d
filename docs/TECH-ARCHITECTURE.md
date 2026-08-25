# Arquitetura técnica

Este documento registra a separação oficial entre o site público, o cliente do jogo e o backend online do G2d.

## 1. Landing page pública

A landing page central usa tecnologias web simples:

- HTML5
- CSS3
- JavaScript vanilla

Objetivos:

- carregamento rápido;
- SEO simples;
- página institucional independente do jogo;
- notícias, screenshots, facções, ranking, download e comunidade;
- manutenção fácil;
- possibilidade de hospedagem estática/CDN.

A landing não deve carregar o cliente do jogo.

## 2. Cliente principal do jogo

Decisão atual: **cliente nativo Windows em C++20 usando raylib**.

O protótipo React permanece no repositório como referência executável e laboratório visual, mas não é mais considerado o cliente principal de longo prazo.

Motivos da mudança:

- o escopo visual evoluiu de uma aplicação de navegador quase estática para uma cidade viva;
- intenção de ter sprites, barcos, trabalhadores, fumaça, água e outras animações locais;
- maior controle de renderização, memória, cache e desempenho;
- possibilidade de instalador/launcher próprio;
- aprendizado de desenvolvimento de jogos em C++;
- o peso visual fica no computador do jogador, não no servidor.

A raylib foi escolhida para a primeira etapa por fornecer janela, renderização 2D, texturas, áudio e input com uma API pequena, sem esconder C++ atrás de uma engine grande.

Estrutura:

```text
client/
  CMakeLists.txt
  README.md
  src/
    main.cpp
```

Evolução esperada:

```text
client/
  src/
    core/
    game/
    graphics/
    network/
    screens/
    ui/
    world/
  tests/
```

## 3. Site e cliente são produtos separados

```text
Landing / portal web
HTML + CSS + JavaScript
        |
        | Download / conta / notícias
        v
Cliente Windows
C++ + raylib
        |
        | HTTPS
        v
API Fastify
        |
        v
Firebase Auth / Firestore
```

O site permanece útil mesmo com o jogo instalado no Windows.

## 4. Backend online

O backend continua:

- Node.js
- TypeScript
- Fastify
- Firebase Admin SDK
- Firebase Authentication
- Firestore
- Cloud Run inicialmente

O cliente C++ não deverá decidir resultados autoritativos de economia, construção, pesquisa, combate ou inventário. Ele apresenta o estado e envia intenções ao servidor.

Exemplo:

```text
cliente: quero melhorar Academia
         |
         v
API: valida jogador, custo, fila e regras
         |
         v
Firestore: grava novo estado
```

Animações locais não precisam existir no backend. O servidor pode dizer apenas que o porto está ativo; o cliente decide como animar barco e água.

## 5. Assets

Os assets de produção continuam predominantemente em PNG e compartilhados pelo projeto.

```text
assets/
  world/
  cities/
  buildings/
  units/
  factions/
  portraits/
  ui/
  maps/
```

O cliente poderá empacotar ou copiar os assets necessários durante a build. Futuramente será definido um sistema de bundles/patches para evitar reinstalações completas em atualizações de conteúdo.

Edifícios evolutivos devem manter ângulo, escala, iluminação e base coerentes entre níveis.

## 6. Protótipo web

A pasta `game/` com React/Vite não precisa ser apagada neste estágio.

Ela será usada como:

- referência visual;
- protótipo rápido de UI;
- validação de ideias;
- comparação com o cliente nativo.

Nenhuma nova mecânica importante deve depender exclusivamente dela sem decisão explícita de arquitetura.

## 7. Infraestrutura

A infraestrutura deve continuar separando conteúdo estático e regras autoritativas.

- Site: hosting/CDN.
- Assets distribuídos: storage/CDN quando necessário.
- API: Cloud Run ou infraestrutura equivalente.
- Persistência: Firestore.
- Cliente: executado localmente no Windows.

O backend continuará sendo desenhado para trabalhar com timestamps e scale-to-zero sempre que possível.

## 8. Princípios

1. O jogo deve continuar online e persistente mesmo sendo um cliente Windows.
2. Renderização e animação são responsabilidade do cliente.
3. Regras críticas são responsabilidade do servidor.
4. Não simular no servidor aquilo que pode ser reconstruído por timestamp.
5. Assets próprios devem ser reutilizáveis entre site, protótipo e cliente.
6. Não reescrever backend apenas por causa da mudança do frontend.
7. Evoluir por vertical slices pequenos antes de construir sistemas enormes.
