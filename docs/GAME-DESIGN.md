# Game Design — G2d

## Conceito

G2d é um jogo de estratégia 2D para navegador centrado em administração de civilizações, expansão territorial e decisões de longo prazo.

A inspiração está no ritmo dos jogos clássicos de estratégia de navegador, mas todo o universo, facções, nomes, artes, sistemas e identidade serão próprios.

## Fantasia do jogador

O jogador assume o papel de governante de uma civilização emergente. Ele administra uma cidade, produz recursos, aumenta a população, pesquisa tecnologias, expande território e interage com outras potências.

A sensação desejada é:

- começar pequeno;
- observar a cidade crescer;
- tomar decisões de prioridade;
- descobrir novas possibilidades com o tempo;
- acompanhar um mundo que continua avançando mesmo quando o jogador está offline.

## Loop central

1. Coletar/produzir recursos.
2. Escolher o próximo investimento.
3. Construir ou pesquisar.
4. Esperar o tempo necessário.
5. Receber novas capacidades.
6. Expandir produção e população.
7. Desbloquear novas regiões e sistemas.
8. Repetir em escala maior.

## Recursos iniciais

O conjunto definitivo ainda será validado, mas o MVP poderá começar com:

- alimento;
- madeira;
- pedra;
- minério;
- conhecimento.

Recursos especiais podem surgir posteriormente.

## População

A população deve ser um recurso estratégico, não apenas um número decorativo.

Ela poderá ser dividida entre funções como:

- trabalhadores;
- pesquisadores;
- soldados;
- colonos.

No MVP, podemos simplificar e trabalhar inicialmente com população total + capacidade máxima.

## Edifícios iniciais

- Centro da Cidade
- Fazenda
- Serraria
- Pedreira
- Mina
- Academia
- Quartel
- Armazém
- Porto ou estrutura equivalente, caso o mapa inicial utilize ilhas

## Construções

Cada edifício possui níveis. Subir de nível custa recursos e tempo.

Não haverá processo contínuo esperando o cronômetro. O estado armazenará `startedAt` e `finishesAt`.

## Pesquisa

A pesquisa funciona de forma semelhante às construções, com duração e pré-requisitos.

Áreas iniciais possíveis:

- economia;
- engenharia;
- agricultura;
- administração;
- militar.

## Mundo

O mundo será apresentado como um mapa 2D ilustrado, inicialmente quase estático.

Cada território terá dados próprios como:

- coordenada/ID;
- bioma;
- proprietário;
- população;
- recursos predominantes;
- nível de desenvolvimento.

## Facções

O MVP terá cinco facções originais. Inicialmente elas poderão compartilhar regras básicas, diferenciando-se por identidade visual e pequenos bônus.

Não criar dezenas de bônus antes do loop básico estar validado.

## Bots

Civilizações controladas pelo sistema ajudam a fazer o mundo parecer vivo antes de existir uma base real de jogadores.

No primeiro MVP, bots não precisam simular cada decisão em tempo real. Eles podem evoluir por regras determinísticas e timestamps.

## Eventos

Eventos simples poderão alterar temporariamente produção ou disponibilidade de recursos.

Exemplos conceituais:

- estação fértil;
- seca;
- descoberta mineral;
- festival;
- crise comercial.

## Combate

Combate não faz parte do primeiro núcleo jogável.

Quando for introduzido, será calculado no backend a partir de unidades, tecnologias, bônus e defesa. Não haverá necessidade de animação completa de batalha.

## Multiplayer

O primeiro protótipo pode ser single-player persistente contra bots.

Multiplayer entra apenas quando economia, expansão e progressão estiverem divertidas sozinhas.

## Vitória

O MVP não precisa ter condição final de vitória. A meta é validar progressão e administração.

No futuro poderão existir temporadas, rankings, objetivos globais e conquistas.
