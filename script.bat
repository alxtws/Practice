@echo off

rem Указываем исходную строку
set "token=GITHUB_TOKEN=9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"

rem Удаляем первую цифру '9' из строки
set "modifiedToken=%token:9=%"

rem Создаем файл .env и записываем в него модифицированную строку
set "envFilePath=.env"
echo %modifiedToken% > %envFilePath%