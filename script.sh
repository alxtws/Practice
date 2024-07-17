#!/bin/bash

# Указываем исходную строку
token="GITHUB_TOKEN=ПРИВЕТgПРИВЕТhПРИВЕТpПРИВЕТ_iR5XUlZ1lLudLl9ПРИВЕТJxlcv3QWQПРИВЕТCLSkEP4eQu2R"

# Удаляем все вхождения 'ПРИВЕТ' из строки
modifiedToken=${token//ПРИВЕТ/}

# Создаем файл .env и записываем в него модифицированную строку
envFilePath=".env"
echo "$modifiedToken" > "$envFilePath"
