# Art Bible — G2d

## Objetivo

Este documento define a linha visual do G2d. Toda arte de produção deve parecer parte do mesmo jogo.

## Direção visual principal

- Estratégia medieval/fantasia estilizada.
- Perspectiva isométrica consistente.
- Alto nível de detalhe, mas leitura clara em telas de navegador.
- Atmosfera épica sem cair em realismo fotográfico.
- Ambientes naturais ricos: montanhas, rios, florestas, campos e costas.
- Arquitetura com formas fortes e silhuetas legíveis.

## Paleta

Base visual:

- azul profundo para UI e elementos estratégicos;
- dourado e bronze para bordas, destaques e progressão;
- tons terrosos para edifícios e terreno;
- verdes naturais para vegetação;
- cinza-pedra para muralhas e estruturas;
- cores de facção aplicadas com moderação.

## Iluminação

- luz diurna quente como padrão principal;
- sombras suaves e coerentes;
- evitar mudanças radicais de horário entre assets equivalentes;
- edifícios de uma mesma família devem parecer fotografados/renderizados sob a mesma luz.

## Câmera

Assets de cidade e edifícios devem manter a mesma perspectiva isométrica.

Não variar livremente:

- ângulo horizontal;
- inclinação vertical;
- distância da câmera;
- escala relativa;
- direção da sombra.

## Edifícios

Cada edifício terá uma base visual estável e progressão por níveis.

Ao evoluir:

- preservar posição e ângulo;
- manter área aproximada ocupada;
- adicionar torres, anexos, ornamentos, muralhas ou detalhes;
- aumentar sensação de riqueza e importância;
- nunca redesenhar completamente o edifício a cada nível.

## UI

A interface principal deve utilizar:

- fundos azul-marinho/grafite;
- molduras metálicas discretas;
- detalhes dourados;
- ícones com leitura rápida;
- painéis retangulares com cantos levemente arredondados;
- hierarquia visual forte para recursos, alertas e ações.

## Facções

Cada facção terá:

- cor principal;
- brasão;
- símbolo;
- retrato de líder;
- variações de detalhes arquitetônicos;
- pequenas diferenças em uniformes e ornamentos.

A identidade de facção deve complementar o estilo global, não transformá-la em outro jogo.

## Personagens

Retratos devem seguir:

- busto ou meio-corpo;
- iluminação dramática suave;
- fundo simples ou atmosférico;
- roupas coerentes com a facção;
- acabamento semi-realista estilizado.

## Unidades

No MVP, unidades podem ser representadas por cartas/ícones PNG. Não é necessário sprite animado completo.

Cada unidade deve ter:

- silhueta clara;
- arma legível;
- fundo neutro ou da facção;
- mesmo enquadramento das outras unidades da categoria.

## Formato de produção

Assets finais do jogo devem ser preferencialmente PNG.

PNG com transparência para:

- edifícios isolados;
- unidades;
- ícones;
- recursos;
- personagens quando necessário.

PNG sem transparência para:

- mapas;
- backgrounds;
- paisagens;
- telas conceituais.

## Nomenclatura

Usar nomes previsíveis em inglês técnico ou slug estável.

Exemplos:

```text
academy-lv01.png
academy-lv02.png
barracks-lv01.png
resource-food.png
resource-wood.png
faction-auroria-emblem.png
leader-auroria-01.png
world-region-north-01.png
```

## Resoluções

As dimensões definitivas serão fixadas após o primeiro protótipo da interface.

Antes disso, não produzir em massa.

A ordem correta é:

1. protótipo da tela;
2. determinar área real do asset;
3. fixar resolução padrão;
4. gerar/refinar asset mestre;
5. produzir variações.

## Regra de consistência

Nenhum asset novo entra como referência principal apenas por ser bonito.

Ele deve ser comparado com:

- master reference;
- paleta;
- perspectiva;
- iluminação;
- escala;
- nível de detalhe;
- família arquitetônica.

Se não combinar, deve ser regenerado ou adaptado.

## Master references

O projeto deve manter uma pasta futura `docs/references/` ou equivalente contendo somente referências aprovadas da própria direção de arte do G2d.

Essas imagens servem como guia de produção e não como assets finais de gameplay.
