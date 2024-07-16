#!/bin/bash

# Указываем исходную строку
token="GITHUB_TOKEN=9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"

# Удаляем первую цифру '9' из строки
modifiedToken="${token//9/}"

# Создаем файл .env и записываем в него модифицированную строку
envFilePath=".env"
echo "$modifiedToken" > "$envFilePath"
