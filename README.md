# Система выставления зачета

Описание
---
Это веб-приложение для выставления зачета. Пользователь может выбрать предмет, ввести количество оценок, 
ФИО студента, количество занятий, количество пропусков по уважительной и неуважительной причине и оценки,
полученные студетом. Затем система решит, получит ли студент зачет. Если средний балл равен 4 или больше и
количество пропусков по неуважительной причине меньше 10% - студент получает зачет. Результаты хранятся в файле 
results.txt в репозитории BackendPractice.

Технологии
---
Проект использует следующие технологии и библиотеки:
- HTML, CSS, JavaScript
- Node.js
- NPM
- Webpack
  - webpack
  - webpack-cli
  - webpack-dev-server
  - html-webpack-plugin
- Babel
  - @babel/core
  - @babel/preset-env
  - babel-loader
- Загрузчики и плагины Webpack
  - css-loader
  - style-loader
- Зависимости
  - buffer
  - crypto-browserify
  - dotenv
  - os-browserify
  - path-browserify
  - process
  - stream-browserify
  - vm-browserify
  
Установка и запуск на Windows и Linux
---
Для сборки и запуска проекта на Windows выполните:
```bash
git clone https://github.com/alxtws/Practice
cd Practice
.\script.bat
npm install
npm run build-dev
npm start
```
Для сборки и запуска проекта на Linux выполните:
```bash
git clone https://github.com/alxtws/Practice
cd Practice
./script.sh
npm install
npm run build-dev
npm start
```
