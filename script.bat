@echo off

rem Указываем исходную строку
set "token=GITHUB_TOKEN=ПРИВЕТghp_iR5XUlZ1lLudLl9ПРИВЕТJxlcv3QWQПРИВЕТCLSkEP4eQu2R"

rem Удаляем все вхождения 'ПРИВЕТ' из строки
set "modifiedToken=%token:ПРИВЕТ=%"

rem Создаем файл .env и записываем в него модифицированную строку
set "envFilePath=.env"
echo %modifiedToken% > %envFilePath%