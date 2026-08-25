cmake_minimum_required(VERSION 3.20)
project(g2d_client LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

include(FetchContent)
set(FETCHCONTENT_QUIET OFF)
FetchContent_Declare(
  raylib
  GIT_REPOSITORY https://github.com/raysan5/raylib.git
  GIT_TAG 5.5
)
FetchContent_MakeAvailable(raylib)

add_executable(g2d_client
  src/main.cpp
)

target_link_libraries(g2d_client PRIVATE raylib)

if (WIN32)
  target_compile_definitions(g2d_client PRIVATE PLATFORM_DESKTOP)
endif()

add_custom_command(TARGET g2d_client POST_BUILD
  COMMAND ${CMAKE_COMMAND} -E make_directory "$<TARGET_FILE_DIR:g2d_client>/assets/world/city-base"
  COMMAND ${CMAKE_COMMAND} -E copy_if_different
    "${CMAKE_SOURCE_DIR}/../assets/world/city-base/city-base-aurora-v01.png"
    "$<TARGET_FILE_DIR:g2d_client>/assets/world/city-base/city-base-aurora-v01.png"
)
