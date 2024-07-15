/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public_html/js/getResults.js":
/*!**************************************!*\
  !*** ./public_html/js/getResults.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResults: () => (/* binding */ getResults)\n/* harmony export */ });\nfunction getResults() {\n  var contentDiv = document.querySelector('.content');\n  var result = contentDiv.querySelector('#Result');\n  var fio = contentDiv.querySelector('.fio');\n  var subject = contentDiv.querySelector('#choose1');\n  var classCount = contentDiv.querySelector('#classCount');\n  var missClassCount = contentDiv.querySelectorAll('.missClassCount');\n  var marks = contentDiv.querySelectorAll('.mark[type=\"text\"]');\n  if (isEmpty(fio.value)) {\n    alert(\"Введите ФИО\");\n  } else if (isEmpty(classCount.value)) {\n    alert(\"Введите количество занятий\");\n  } else if (isEmpty(missClassCount[0].value)) {\n    alert(\"Введите количество занятий, пропущенных по уважительной причине\");\n  } else if (isEmpty(missClassCount[1].value)) {\n    alert(\"Введите количество занятий, пропущенных по неуважительной причине\");\n  } else if (!isTotalClassCountValid(missClassCount, classCount)) {\n    alert(\"Количество пропусков превышвет количество занятий\");\n  } else {\n    var allMarksFilled = true;\n    marks.forEach(function (mark) {\n      if (isEmpty(mark.value)) {\n        allMarksFilled = false;\n      }\n    });\n    if (!allMarksFilled) {\n      alert(\"Необходимо заполнить все оценки\");\n    } else {\n      var averageScore = getAverageScore(marks);\n      var missClassRercentageMass = getMissClassRercentage(missClassCount, classCount);\n      if (missClassRercentageMass[1] > 10 || averageScore < 4) {\n        result.textContent = \"\\u0417\\u0430\\u0447\\u0435\\u0442 \\u043D\\u0435 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D. \\u0421\\u0440\\u0435\\u0434\\u043D\\u0438\\u0439 \\u0431\\u0430\\u043B\\u043B: \".concat(averageScore, \". \\u0414\\u043E\\u043B\\u044F \\u043F\\u0440\\u043E\\u043F\\u0443\\u0441\\u043A\\u043E\\u0432 \\u043F\\u043E \\u043D\\u0435\\u0443\\u0432\\u0430\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439 \\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0435: \").concat(missClassRercentageMass[1], \"%. \\u041F\\u043E \\u0443\\u0432\\u0430\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439: \").concat(missClassRercentageMass[0], \"%\");\n        result.style.color = 'red';\n        sendResultsToGithub(subject, fio, result.textContent);\n      } else {\n        result.textContent = \"\\u0417\\u0430\\u0447\\u0435\\u0442 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D. \\u0421\\u0440\\u0435\\u0434\\u043D\\u0438\\u0439 \\u0431\\u0430\\u043B\\u043B: \".concat(averageScore, \". \\u0414\\u043E\\u043B\\u044F \\u043F\\u0440\\u043E\\u043F\\u0443\\u0441\\u043A\\u043E\\u0432 \\u043F\\u043E \\u043D\\u0435\\u0443\\u0432\\u0430\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439 \\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0435: \").concat(missClassRercentageMass[1], \"%. \\u041F\\u043E \\u0443\\u0432\\u0430\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439: \").concat(missClassRercentageMass[0], \"%\");\n        result.style.color = 'green';\n        sendResultsToGithub(subject, fio, result.textContent);\n      }\n    }\n  }\n}\nfunction isEmpty(value) {\n  return value.trim() === \"\";\n}\nfunction isTotalClassCountValid(missClassCount, classCount) {\n  return parseInt(missClassCount[0].value) + parseInt(missClassCount[1].value) <= parseInt(classCount.value);\n}\nfunction getMissClassRercentage(missClassCount, classCount) {\n  var respectfully = parseInt(missClassCount[0].value) / parseInt(classCount.value) * 100;\n  var unrespectfully = parseInt(missClassCount[1].value) / parseInt(classCount.value) * 100;\n  respectfully = Number.isInteger(respectfully) ? respectfully : respectfully.toFixed(1);\n  unrespectfully = Number.isInteger(unrespectfully) ? unrespectfully : unrespectfully.toFixed(1);\n  var missClassRercentageMass = [respectfully, unrespectfully];\n  return missClassRercentageMass;\n}\nfunction getAverageScore(marks) {\n  var summ = 0;\n  var count = 0;\n  marks.forEach(function (mark) {\n    count += 1;\n    summ += parseInt(mark.value);\n  });\n  var averageScore = summ / count;\n  averageScore = Number.isInteger(averageScore) ? averageScore : averageScore.toFixed(1);\n  return averageScore;\n}\nfunction sendResultsToGithub(subject, fio, resultText) {\n  var token = \"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\";\n  ;\n  var repo = 'alxtws/BackendPractice';\n  var message = 'Добавление результатов';\n  var utf8Content = \"\\u041F\\u0440\\u0435\\u0434\\u043C\\u0435\\u0442: \".concat(subject.value, \"\\n\\u0424\\u0418\\u041E: \").concat(fio.value, \"\\n\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442: \").concat(resultText);\n  var encodedContent = btoa(unescape(encodeURIComponent(utf8Content)));\n  var url = \"https://api.github.com/repos/\".concat(repo, \"/contents/results.txt\");\n\n  // сша\n  fetch(url, {\n    method: 'GET',\n    headers: {\n      'Authorization': \"token \".concat(token),\n      'Content-Type': 'application/json'\n    }\n  }).then(function (response) {\n    if (!response.ok) {\n      throw new Error('Ошибка при получении SHA текущей версии файла');\n    }\n    return response.json();\n  }).then(function (data) {\n    var sha = data.sha;\n    return fetch(url, {\n      method: 'PUT',\n      headers: {\n        'Authorization': \"token \".concat(token),\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        message: message,\n        content: encodedContent,\n        sha: sha,\n        committer: {\n          name: 'alxtws',\n          email: 'Deroomjii@gmail.com'\n        }\n      })\n    });\n  }).then(function (response) {\n    if (!response.ok) {\n      throw new Error('Ошибка при отправке данных на GitHub');\n    }\n    return response.json();\n  }).then(function (data) {\n    console.log('Ответ от GitHub:', data);\n  })[\"catch\"](function (error) {\n    console.error('Произошла ошибка:', error);\n  });\n}\n\n//# sourceURL=webpack://Practice/./public_html/js/getResults.js?");

/***/ }),

/***/ "./public_html/js/jsPractiice.js":
/*!***************************************!*\
  !*** ./public_html/js/jsPractiice.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getResults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getResults.js */ \"./public_html/js/getResults.js\");\n\nvar routes = {\n  home: \"\\n        <h2>\\u0412\\u044B\\u0441\\u0442\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u0437\\u0430\\u0447\\u0435\\u0442\\u0430</h2>\\n        <div class=\\\"row\\\">\\n            <div class=\\\"column\\\">\\n                <p>\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043F\\u0440\\u0435\\u0434\\u043C\\u0435\\u0442:</p>\\n                <p>\\n                    <select id=\\\"choose1\\\">\\n                        <option>\\u0410\\u043D\\u0433\\u043B\\u0438\\u0439\\u0441\\u043A\\u0438\\u0439 \\u044F\\u0437\\u044B\\u043A</option>\\n                        <option>\\u041C\\u0430\\u0442\\u0435\\u043C\\u0430\\u0442\\u0438\\u043A\\u0430</option>\\n                        <option>\\u0418\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0442\\u0438\\u043A\\u0430</option>\\n                        <option>\\u0420\\u0443\\u0441\\u0441\\u043A\\u0438\\u0439 \\u044F\\u0437\\u044B\\u043A</option>\\n                        <option>\\u0411\\u0438\\u043E\\u043B\\u043E\\u0433\\u0438\\u044F</option>\\n                        <option>\\u0425\\u0438\\u043C\\u0438\\u044F</option>\\n                    </select>\\n                </p>\\n            </div>\\n            <div class=\\\"column\\\">\\n                <p>\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043E\\u0446\\u0435\\u043D\\u043E\\u043A:</p>\\n                <p>\\n                    <input type=\\\"number\\\" style= \\\"width: 100%;\\\" id=\\\"marksCount\\\" step=\\\"1\\\" min=\\\"1\\\" max=\\\"10\\\" value=\\\"1\\\"/>\\n                </p>\\n            </div>\\n            <div class=\\\"column\\\">\\n                <p>\\n                    \\u0424\\u0418\\u041E \\u0441\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442\\u0430: \\n                </p>\\n                <p>\\n                    <input type=\\\"text\\\" class=\\\"fio\\\">\\n                </p>\\n            </div>\\n            <div class=\\\"column\\\">\\n                <p>\\n                    \\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0437\\u0430\\u043D\\u044F\\u0442\\u0438\\u0439:    \\n                </p>\\n                <p>\\n                    <input type=\\\"number\\\" style= \\\"width: 100%;\\\" id=\\\"classCount\\\" step=\\\"1\\\" min=\\\"1\\\" max=\\\"15\\\" value=\\\"1\\\"/>\\n                </p>\\n            </div>            \\n        </div>\\n        <div class=\\\"row\\\">\\n            <div class=\\\"column\\\">\\n                \\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0437\\u0430\\u043D\\u044F\\u0442\\u0438\\u0439, \\u043F\\u0440\\u043E\\u043F\\u0443\\u0449\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043E \\u0443\\u0432\\u0430\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439 \\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0435:\\n                <input type=\\\"number\\\" class=\\\"missClassCount\\\" id=\\\"respectfully\\\" step=\\\"1\\\" min=\\\"0\\\" max=\\\"1\\\" value=\\\"0\\\"/>\\n            </div>\\n            <div class=\\\"column\\\">\\n                \\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0437\\u0430\\u043D\\u044F\\u0442\\u0438\\u0439, \\u043F\\u0440\\u043E\\u043F\\u0443\\u0449\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043E \\u043D\\u0435\\u0443\\u0432\\u0430\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0439 \\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u0435:\\n                <input type=\\\"number\\\" class=\\\"missClassCount\\\" id=\\\"unrespectfully\\\" step=\\\"1\\\" min=\\\"0\\\" max=\\\"1\\\" value=\\\"0\\\"/>\\n            </div>\\n        </div>\\n        <div style= \\\"margin-top: 17px;\\\">\\n            <table id=\\\"tabl\\\">\\n                <tr>\\n                    <th>1 \\u043E\\u0446\\u0435\\u043D\\u043A\\u0430</th>\\n                </tr>\\n                <tr>\\n                    <th><input type=\\\"text\\\" class=\\\"mark\\\"></th>\\n                </tr>\\n            </table>\\n        </div>\\n        <div style= \\\"margin-top: 17px;\\\">\\n            <button id=\\\"Button\\\" type=\\\"button\\\">\\u0412\\u044B\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442\\u044C \\u0437\\u0430\\u0447\\u0435\\u0442</button>\\n        </div>\\n        <div style= \\\"margin-top: 17px;\\\">\\n            <p id=\\\"Result\\\"></p>\\n        </div>\\n    \",\n  about: \"\\n        <h2>\\u041E \\u043D\\u0430\\u0441</h2>\\n        <p>\\u0417\\u0434\\u0435\\u0441\\u044C \\u0432\\u044B \\u043C\\u043E\\u0436\\u0435\\u0442\\u0435 \\u0443\\u0437\\u043D\\u0430\\u0442\\u044C \\u043E \\u043D\\u0430\\u0441.</p>\\n    \",\n  contact: \"\\n        <h2>\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B</h2>\\n        <p>\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u043D\\u0430\\u044F \\u0438\\u043D\\u0444\\u043E\\u0440\\u043C\\u0430\\u0446\\u0438\\u044F.</p>\\n    \"\n};\nfunction loadContent() {\n  var hash = location.hash.replace('#', '');\n  var contentDiv = document.querySelector('.content');\n  contentDiv.innerHTML = routes[hash] || routes.home;\n  var elements = contentDiv.querySelectorAll('.mark[type=\"text\"]');\n  elements.forEach(function (element) {\n    element.setAttribute('maxlength', '1');\n  });\n\n  // кол-во оценок   \n  var marksCount = contentDiv.querySelector('#marksCount');\n  var button = contentDiv.querySelector('#Button');\n  var result = contentDiv.querySelector('#Result');\n  if (marksCount) {\n    var previusValue = marksCount.value;\n    marksCount.addEventListener('input', function (event) {\n      MarksCountControl(event, marksCount, previusValue, button, result, contentDiv);\n    });\n    contentDiv.addEventListener('input', function (event) {\n      MarkContor(event, result);\n    });\n  }\n  ;\n\n  // кол-во занятий    \n  var classCount = contentDiv.querySelector('#classCount');\n  if (classCount) {\n    classCount.addEventListener('input', function (event) {\n      ClassCountControl(event, classCount, contentDiv, result);\n    });\n  }\n  ;\n  // пропуски    \n  var elements = contentDiv.querySelectorAll('.missClassCount');\n  elements.forEach(function (element) {\n    element.addEventListener('input', function (event) {\n      MissClassCountControl(element, result);\n    });\n  });\n\n  //    Предмет\n  var subject = contentDiv.querySelector('#choose1');\n  if (subject) {\n    subject.addEventListener('input', function (event) {\n      result.textContent = \"\";\n    });\n  }\n  var inactiveHrefs = contentDiv.querySelectorAll('#inactiveHref');\n  inactiveHrefs.forEach(function (href) {\n    href.addEventListener('click', function (event) {\n      event.preventDefault();\n    });\n  });\n  if (button) {\n    button.addEventListener('click', _getResults_js__WEBPACK_IMPORTED_MODULE_0__.getResults);\n  }\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  window.addEventListener('hashchange', loadContent);\n  loadContent();\n});\nfunction MarksCountControl(event, marksCount, previusValue, button, result, contentDiv) {\n  if (marksCount.value === \"\" && isNaN(previusValue) == false) {\n    marksCount.value = \"\";\n    var table = document.getElementById('tabl');\n    table.innerHTML = '';\n    button.classList.add('hidden');\n  } else if (marksCount.value > 10) {\n    alert(\"Значение не может быть больше 10\");\n    marksCount.value = marksCount.value.charAt(0);\n  } else if (marksCount.value < 1 && marksCount.value != \"\") {\n    alert(\"Значение не может быть меньше 1\");\n    marksCount.value = \"\";\n  } else {\n    if (button.classList.contains('hidden')) {\n      button.classList.remove('hidden');\n    }\n    var table = document.getElementById('tabl');\n    var rowCount = table.rows.length;\n    table.innerHTML = '';\n    var tr = document.createElement('tr');\n    var tr1 = document.createElement('tr');\n    for (var i = 0; i < marksCount.value; i++) {\n      tr.innerHTML += '<th>' + (i + 1) + \" оценка\" + '</th>';\n      tr1.innerHTML += '<th><input type=\"text\" class=\"mark\"></th>';\n    }\n    table.appendChild(tr);\n    table.appendChild(tr1);\n  }\n  var elements = contentDiv.querySelectorAll('.mark[type=\"text\"]');\n  elements.forEach(function (element) {\n    element.setAttribute('maxlength', '1');\n  });\n  previusValue = event.target.value;\n}\nfunction ClassCountControl(event, classCount, contentDiv, result) {\n  result.textContent = \"\";\n  var elements = contentDiv.querySelectorAll('.missClassCount');\n  if (classCount.value === \"\") {\n    classCount.value = \"\";\n    elements.forEach(function (element) {\n      element.setAttribute('disabled', 'true');\n    });\n  } else if (classCount.value > 15) {\n    alert(\"Значение не может быть больше 15\");\n    classCount.value = classCount.value.charAt(0);\n  } else if (classCount.value < 1 && classCount.value != \"\") {\n    alert(\"Значение не может быть меньше 1\");\n    classCount.value = \"\";\n  } else {\n    elements.forEach(function (element) {\n      element.removeAttribute('disabled');\n      element.setAttribute('max', classCount.value);\n      if (parseInt(element.value) > parseInt(classCount.value)) {\n        element.value = classCount.value;\n      }\n    });\n  }\n}\nfunction MarkContor(event, result) {\n  result.textContent = \"\";\n  if (event.target.classList.contains('mark')) {\n    if (isNaN(event.target.value)) {\n      alert(\"Необходимо ввести число!\");\n      event.target.value = \"\";\n    } else if (event.target.value < 1 && event.target.value != \"\") {\n      alert(\"Оценка не может быть меньше 1!\");\n      event.target.value = \"\";\n    } else if (event.target.value > 5) {\n      alert(\"Оценка не может быть больше 5!\");\n      event.target.value = \"\";\n    }\n  }\n}\nfunction MissClassCountControl(element, result) {\n  result.textContent = \"\";\n  var maxAttributeValue = element.getAttribute('max');\n  if (element.value === \"\") {\n    element.value = \"\";\n  } else if (parseInt(element.value) > parseInt(maxAttributeValue)) {\n    alert(\"Значение не может быть больше \" + maxAttributeValue);\n    if (element.value.length > 1) {\n      element.value = element.value.charAt(0);\n    } else {\n      element.value = \"\";\n    }\n  } else if (element.value < 0 && element.value != \"\") {\n    alert(\"Значение не может быть меньше 0\");\n    element.value = \"\";\n  }\n}\n\n//# sourceURL=webpack://Practice/./public_html/js/jsPractiice.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public_html/js/jsPractiice.js");
/******/ 	
/******/ })()
;