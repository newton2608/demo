@echo off
REM Weather App Local Server Starter
REM This script will start a simple HTTP server for testing

echo.
echo ========================================
echo   Weather App - Local Server
echo ========================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting Python HTTP Server...
    echo Opening at: http://localhost:8000
    echo.
    python -m http.server 8000
    exit /b
)

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting Node.js Server...
    echo Opening at: http://localhost:8000
    echo.
    node server.js
    exit /b
)

REM If neither is available, show options
cls
echo.
echo ========================================
echo   No Python or Node.js Found!
echo ========================================
echo.
echo To test the app locally, you have options:
echo.
echo Option 1: Install Python
echo   - Download from: https://www.python.org/downloads/
echo   - Make sure to check "Add Python to PATH"
echo.
echo Option 2: Install Node.js
echo   - Download from: https://nodejs.org/
echo   - Run: node server.js
echo.
echo Option 3: Use VS Code Live Server
echo   - Extension ID: ritwickdey.LiveServer
echo   - Right-click index.html and select "Open with Live Server"
echo.
echo Option 4: Use online tools (simple but not ideal)
echo   - Upload files to a service like GitHub Pages
echo.
pause
