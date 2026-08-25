# G2d Client Windows

Cliente nativo experimental do G2d em C++20 usando raylib.

## Objetivo atual

O primeiro protótipo apenas abre uma janela redimensionável e renderiza a base oficial da cidade Aurora em PNG. A intenção é validar a nova direção desktop sem remover o site, o protótipo web ou o backend online.

## Requisitos no Windows

- Git
- CMake 3.20+
- Visual Studio 2022 com workload **Desktop development with C++**

A raylib é obtida automaticamente pelo CMake com `FetchContent`.

## Compilar com Visual Studio

Na raiz do repositório:

```powershell
cmake -S client -B client/build -G "Visual Studio 17 2022" -A x64
cmake --build client/build --config Release
```

Executável esperado:

```text
client/build/Release/g2d_client.exe
```

O CMake copia automaticamente o asset:

```text
assets/world/city-base/city-base-aurora-v01.png
```

para a pasta de execução do binário.

## Próximas etapas

1. câmera 2D com zoom e arraste;
2. hotspots clicáveis sobre a cidade;
3. Centro da Cidade como PNG independente;
4. animação simples de água/barco;
5. UI nativa de recursos;
6. cliente HTTP para consumir a API Fastify;
7. autenticação e mundo online em etapa posterior.
