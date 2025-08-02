@echo off
echo Iniciando servidor para CV...
echo.
echo Tu CV estará disponible en: http://localhost:8000
echo.
echo Para detener el servidor, presiona Ctrl+C
echo.
cd /d "%~dp0"
python -m http.server 8000
pause
