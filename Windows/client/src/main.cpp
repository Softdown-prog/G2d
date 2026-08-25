#include "raylib.h"

#include <algorithm>
#include <string>

namespace {
constexpr int kInitialWidth = 1280;
constexpr int kInitialHeight = 720;
constexpr const char* kWindowTitle = "G2d - Aurora Prototype";
constexpr const char* kAuroraAsset = "assets/world/city-base/city-base-aurora-v01.png";

Rectangle FitTexture(Texture2D texture, int screenWidth, int screenHeight) {
    const float scale = std::min(
        static_cast<float>(screenWidth) / static_cast<float>(texture.width),
        static_cast<float>(screenHeight) / static_cast<float>(texture.height));

    const float width = static_cast<float>(texture.width) * scale;
    const float height = static_cast<float>(texture.height) * scale;

    return Rectangle{
        (static_cast<float>(screenWidth) - width) * 0.5f,
        (static_cast<float>(screenHeight) - height) * 0.5f,
        width,
        height,
    };
}
}

int main() {
    SetConfigFlags(FLAG_WINDOW_RESIZABLE | FLAG_VSYNC_HINT);
    InitWindow(kInitialWidth, kInitialHeight, kWindowTitle);
    SetTargetFPS(60);

    Texture2D aurora{};
    bool assetLoaded = false;

    if (FileExists(kAuroraAsset)) {
        aurora = LoadTexture(kAuroraAsset);
        assetLoaded = aurora.id != 0;
        if (assetLoaded) {
            SetTextureFilter(aurora, TEXTURE_FILTER_BILINEAR);
        }
    }

    while (!WindowShouldClose()) {
        const int width = GetScreenWidth();
        const int height = GetScreenHeight();

        BeginDrawing();
        ClearBackground(Color{13, 24, 31, 255});

        if (assetLoaded) {
            const Rectangle destination = FitTexture(aurora, width, height);
            const Rectangle source{0.0f, 0.0f, static_cast<float>(aurora.width), static_cast<float>(aurora.height)};
            DrawTexturePro(aurora, source, destination, Vector2{0.0f, 0.0f}, 0.0f, WHITE);
            DrawRectangle(0, 0, width, 54, Color{11, 20, 27, 220});
            DrawText("G2d  |  Aurora - prototipo nativo Windows", 18, 17, 20, Color{238, 213, 153, 255});
        } else {
            const std::string message = std::string("Asset nao encontrado: ") + kAuroraAsset;
            DrawText("G2d - cliente Windows", 28, 28, 30, Color{238, 213, 153, 255});
            DrawText(message.c_str(), 28, 82, 18, RAYWHITE);
            DrawText("Compile a partir da pasta client para o CMake copiar os assets.", 28, 112, 16, GRAY);
        }

        DrawFPS(width - 92, 12);
        EndDrawing();
    }

    if (assetLoaded) {
        UnloadTexture(aurora);
    }

    CloseWindow();
    return 0;
}
