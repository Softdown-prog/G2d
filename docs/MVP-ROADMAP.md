# MVP Roadmap — G2d

## Objetivo

Construir a menor versão jogável capaz de responder a uma pergunta:

**Administrar e evoluir uma civilização nesse mundo é divertido?**

O MVP deve evitar multiplayer, guerra complexa, alianças e monetização até o loop básico estar validado.

## Fase 0 — Fundação

- definir nome provisório do mundo e das facções;
- fixar direção visual;
- criar estrutura de assets;
- escolher stack do frontend;
- definir modelo inicial do Firestore;
- estabelecer convenções de código e nomes.

## Fase 1 — Protótipo visual

Criar uma única tela funcional de cidade usando assets provisórios.

Elementos mínimos:

- barra de recursos;
- cidade principal;
- 4 a 6 edifícios clicáveis;
- painel lateral;
- fila de construção;
- navegação para mapa mundial.

Nenhuma arte final deve ser produzida em massa antes dessa tela definir escala e proporções.

## Fase 2 — Economia

Implementar:

- alimento;
- madeira;
- pedra;
- minério;
- conhecimento;
- capacidade de armazenamento;
- produção baseada em timestamps;
- atualização de recursos ao carregar o estado.

## Fase 3 — Construção

Implementar:

- níveis de edifícios;
- custos;
- pré-requisitos;
- tempo de construção;
- fila inicial de construção;
- conclusão baseada em `finishesAt`.

## Fase 4 — População

Implementar:

- população atual;
- limite populacional;
- crescimento simples;
- influência de edifícios e recursos.

## Fase 5 — Pesquisa

Implementar:

- árvore tecnológica inicial pequena;
- custo em conhecimento/recursos;
- duração;
- pré-requisitos;
- bônus econômicos simples.

## Fase 6 — Mapa mundial

Implementar:

- mapa 2D;
- regiões clicáveis;
- cinco facções;
- informações básicas de cada território;
- destaque de território do jogador;
- cidades controladas por bots.

## Fase 7 — Bots

Bots devem evoluir por regras simples e determinísticas.

Inicialmente:

- crescimento econômico;
- evolução de edifícios;
- expansão limitada;
- sem IA generativa;
- sem simulação por segundo.

## Fase 8 — Eventos

Adicionar poucos eventos econômicos que alterem temporariamente o mundo.

Exemplo:

- bônus de colheita;
- escassez de minério;
- festival populacional;
- descoberta tecnológica.

## Critério para considerar o MVP validado

O protótipo precisa permitir que uma pessoa jogue por vários ciclos de construção e ainda queira continuar evoluindo a cidade.

Perguntas de validação:

- decisões de prioridade são interessantes?
- tempos parecem justos?
- evolução visual dá sensação de progresso?
- os recursos criam escolhas reais?
- o mapa desperta vontade de expandir?

## Fora do MVP

Não implementar ainda:

- PvP;
- guerra em tempo real;
- alianças completas;
- chat global;
- mercado entre jogadores;
- loja paga;
- passe de temporada;
- WebSocket permanente;
- dezenas de unidades;
- dezenas de facções;
- animação completa de exércitos;
- sistema complexo de heróis.

## Regra de desenvolvimento

Cada fase deve terminar com algo utilizável no navegador antes da próxima começar.

Não produzir infraestrutura para sistemas que ainda não existem no gameplay.
