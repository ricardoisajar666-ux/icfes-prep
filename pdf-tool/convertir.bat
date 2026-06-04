@echo off
echo ======================================
echo   PrepICFES - Convertir PDF a JSON
echo ======================================
echo.

if "%OPENAI_API_KEY%"=="" (
    echo [!] No se encontro la variable OPENAI_API_KEY.
    echo.
    set /p key="Ingresa tu API key de OpenAI: "
    set OPENAI_API_KEY=%key%
)

echo [*] Ejecutando conversion...
python pdf_to_json.py

echo.
if %errorlevel% equ 0 (
    echo [OK] Proceso completado.
) else (
    echo [ERROR] Ocurrio un problema.
)

pause
