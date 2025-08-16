@echo off
echo Abriendo GitHub para crear el repositorio automaticamente...
start "" "https://github.com/new?name=CV_Profesional_Willian_Ruiz&description=Mi+CV+Profesional&visibility=public"
echo.
echo INSTRUCCIONES:
echo 1. Se abrira GitHub en tu navegador
echo 2. El nombre ya estara configurado: CV_Profesional_Willian_Ruiz
echo 3. NO marques ninguna opcion adicional (README, .gitignore, license)
echo 4. Haz clic en "Create repository"
echo 5. Vuelve aqui y presiona cualquier tecla para continuar
echo.
pause
echo.
echo Haciendo push al repositorio...
git push -u origin master
if %errorlevel% equ 0 (
    echo.
    echo ¡EXITO! Tu repositorio esta ahora en GitHub:
    echo https://github.com/willy101Sotfware/CV_Profesional_Willian_Ruiz
    start "" "https://github.com/willy101Sotfware/CV_Profesional_Willian_Ruiz"
) else (
    echo.
    echo Error al hacer push. Verifica que hayas creado el repositorio correctamente.
)
pause
