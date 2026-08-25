# Arquitetura técnica inicial

Este documento registra a separação oficial entre o site público do projeto e a aplicação do jogo.

## 1. Landing page pública

A landing page central deverá usar somente tecnologias web simples:

- HTML5
- CSS3
- JavaScript vanilla

Objetivos:

- carregamento rápido;
- SEO simples;
- página institucional independente do bundle do jogo;
- manutenção fácil;
- zero dependência de framework para conteúdo público;
- possibilidade de hospedar a landing separadamente no futuro.

A landing poderá conter:

- apresentação do universo;
- screenshots;
- facções;
- notícias;
- roadmap;
- FAQ;
- botão Jogar;
- login/cadastro;
- termos e políticas;
- links para comunidade.

Estrutura planejada:

```text
site/
  index.html
  css/
    main.css
    responsive.css
  js/
    main.js
  assets/
```

A landing não deve depender do React da aplicação do jogo.

## 2. Aplicação do jogo

A aplicação do jogo será separada da landing e poderá usar framework.

Decisão inicial: **React**.

Motivos:

- muitas telas e painéis simultâneos;
- estado de recursos, filas, cidade, tecnologias e relatórios;
- componentes reutilizáveis;
- atualização parcial da interface sem manipulação manual extensa do DOM;
- bom ecossistema para aplicações web complexas;
- fácil integração com Firebase/Firestore;
- possibilidade de usar Canvas apenas no mapa sem transformar todo o projeto em uma engine gráfica.

Stack inicial recomendada para o jogo:

- React
- Vite
- JavaScript inicialmente; TypeScript poderá ser adotado quando o domínio estabilizar
- CSS tradicional/modular
- Firebase SDK
- Firestore
- Canvas 2D somente onde fizer sentido, especialmente mapa mundial

Não usar Next.js no MVP. O jogo não necessita SSR para a aplicação autenticada e adicionar esse framework aumentaria a complexidade sem benefício claro neste estágio.

Estrutura planejada:

```text
game/
  src/
    components/
    screens/
    features/
    services/
    state/
    hooks/
    utils/
    styles/
  public/
  index.html
```

## 3. Separação de responsabilidades

```text
Landing pública (HTML/CSS/JS)
          |
          | Jogar / Login
          v
Aplicação do jogo (React)
          |
          v
Firebase Auth / API
          |
          v
Firestore
```

O site público não deve carregar código do jogo apenas para exibir conteúdo institucional.

O jogo não deve conter conteúdo de marketing que pertença à landing.

## 4. Assets

Os assets de produção continuarão predominantemente em PNG.

A arte compartilhada poderá ficar em uma área comum do repositório, mas landing e jogo deverão importar apenas os arquivos que realmente utilizam.

Estrutura possível:

```text
assets/
  shared/
  world/
  cities/
  buildings/
  units/
  factions/
  portraits/
  ui/
  maps/
```

No desenvolvimento, placeholders são permitidos. A implementação da mecânica nunca deve ficar bloqueada esperando a arte final.

## 5. Princípio de complexidade

Frameworks entram apenas onde resolvem um problema real.

- Landing: vanilla.
- Jogo: React.
- Mapa: DOM/CSS primeiro; Canvas 2D quando a quantidade de elementos ou navegação justificar.
- WebSocket: somente se houver necessidade futura de tempo real real.
- Produção e timers: timestamps, não loops contínuos.

Essa separação é uma decisão arquitetural do projeto e deve ser preservada durante o MVP.
