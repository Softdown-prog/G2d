# G2d Windows

Esta pasta concentra somente o cliente nativo Windows do G2d e os assets usados por ele.

## Estrutura

```text
Windows/
├── client/
│   ├── CMakeLists.txt
│   ├── README.md
│   └── src/
│       └── main.cpp
└── assets/
    └── world/
        └── city-base/
            └── city-base-aurora-v01.png
```

O cliente Windows usa C++20 + raylib + CMake.

A pasta `site/` continua sendo o portal web. A pasta `game/` mantém o protótipo React usado como referência visual. A pasta `server/` continua sendo o backend online Fastify/Firestore. Nenhum código React é necessário dentro de `Windows/`.

Para trabalhar localmente, você pode baixar apenas a pasta `Windows/` enquanto estiver desenvolvendo a parte gráfica nativa. Quando o cliente precisar conversar com o jogo online, ele chamará a API do backend por HTTPS.

## Compilação prevista

A partir da raiz de `Windows/`:

```powershell
cmake -S client -B client/build -G "Visual Studio 17 2022" -A x64
cmake --build client/build --config Release
```

O CMake copia os assets necessários de `Windows/assets/` para a pasta do executável durante o build.
