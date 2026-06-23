@echo off

:: Crea il file index.html nella cartella principale
type nul > index.html

:: Crea la cartella assets se non esiste già
if not exist assets mkdir assets

:: Crea i file dentro la cartella assets
type nul > assets\main.js
type nul > assets\style.css

echo Struttura di progetto creata con successo!

:: Apre la cartella corrente all'interno di Google Antigravity IDE
"%AppData%\..\Local\Programs\Antigravity IDE\Antigravity IDE.exe" .

exit