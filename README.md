# G2d

Projeto de jogo de estratégia 2D para navegador, com universo e propriedade intelectual próprios.

A proposta é criar uma experiência inspirada no ritmo de jogos clássicos de estratégia de navegador, com cidades, produção de recursos, pesquisa, expansão territorial, diplomacia, eventos e conflitos — mas com identidade, facções, artes, interface e regras próprias.

## Visão inicial

- Jogo 100% executado no navegador.
- Arte predominantemente 2D em PNG.
- Cenários e cidades quase estáticos, com pequenas animações opcionais.
- Backend desenhado para funcionar bem com infraestrutura serverless e escala a zero.
- Persistência planejada com Firebase/Firestore.
- Sem necessidade de servidor simulando cada segundo do mundo.
- Produção, construção, pesquisa e viagens serão calculadas por timestamps.

## Direção visual

A referência inicial é um mundo de estratégia medieval/fantasia estilizada, com:

- perspectiva isométrica;
- cidades detalhadas vistas de cima;
- paleta terrosa com azul profundo e dourado;
- UI escura com molduras metálicas e detalhes em ouro;
- mapas de mundo em arquipélagos/continentes;
- ícones e brasões próprios;
- personagens e comandantes originais;
- progressão visual coerente entre níveis de edifícios.

Toda arte final do jogo deverá seguir uma mesma bíblia visual. O objetivo é evitar imagens isoladas com estilos diferentes.

## Filosofia dos assets

Os assets finais devem ser preferencialmente PNG e versionados no repositório.

Estrutura planejada:

```text
assets/
  world/
    terrain/
    water/
    roads/
    vegetation/
  cities/
  buildings/
    city-center/
    barracks/
    academy/
    farm/
    mine/
    port/
  units/
  factions/
  portraits/
  ui/
    panels/
    buttons/
    icons/
    resources/
  maps/
```

Edifícios evolutivos devem manter exatamente o mesmo ângulo, escala, iluminação e base visual entre níveis.

Exemplo:

```text
assets/buildings/academy/
  academy-lv01.png
  academy-lv02.png
  academy-lv03.png
  academy-lv04.png
```

## MVP 0.1

O primeiro protótipo não terá todas as mecânicas de um jogo completo. A meta é validar se administrar o mundo é divertido.

Escopo inicial:

1. Uma tela de cidade.
2. Uma tela de mapa mundial.
3. Cinco facções/civilizações originais.
4. Recursos básicos.
5. População.
6. Edifícios com níveis.
7. Construções por tempo.
8. Pesquisa por tempo.
9. Produção offline baseada em timestamps.
10. Eventos simples.
11. Bots/civilizações controladas pelo sistema.

Multiplayer, alianças, guerra complexa, comércio avançado e monetização ficam fora do primeiro MVP.

## Motor temporal

A arquitetura deve evitar processos 24/7 sempre que possível.

Exemplo de produção:

```text
food = 8000
food_per_hour = 300
last_update = 22:00
```

Se o jogador voltar 12 horas depois, o backend calcula o período decorrido e aplica a produção acumulada.

O mesmo princípio será usado para:

- recursos;
- construções;
- pesquisas;
- recrutamento;
- viagens;
- eventos;
- crescimento populacional.

## Arquitetura inicial

Planejamento preliminar:

```text
Browser
   |
   v
Frontend Web
   |
   v
API Serverless
   |
   v
Firebase / Firestore
```

A implementação concreta de frontend e backend será decidida durante o protótipo, evitando adicionar complexidade antes de ela ser necessária.

## Telas planejadas

- Cidade
- Mapa mundial
- Construções
- Recursos
- Pesquisa e tecnologia
- Exército
- Relatórios
- Diplomacia
- Aliança
- Eventos
- Ranking
- Perfil do jogador
- Configurações
- Loja/cosméticos, apenas em uma etapa futura

## Princípios do projeto

1. Propriedade intelectual própria.
2. Não copiar artes, mapas, personagens ou interfaces de jogos existentes.
3. Primeiro provar que o loop central é divertido.
4. Evitar backend continuamente ativo quando timestamps resolvem o problema.
5. Evitar sistemas gigantes antes do MVP.
6. Manter consistência visual antes de produzir dezenas de assets.
7. Assets de produção devem ter nomes previsíveis e estrutura estável.
8. Gameplay deve funcionar mesmo com arte provisória durante o desenvolvimento.

## Próxima etapa

Antes de começar o código do jogo, criar:

- `docs/GAME-DESIGN.md`
- `docs/ART-BIBLE.md`
- `docs/MVP-ROADMAP.md`

Esses documentos serão a fonte de verdade inicial para gameplay, direção visual e escopo.
