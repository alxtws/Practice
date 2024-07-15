
export function getResults(){
    const contentDiv = document.querySelector('.content');
    var result = contentDiv.querySelector('#Result');
    var fio = contentDiv.querySelector('.fio');
    var subject = contentDiv.querySelector('#choose1');
    var classCount = contentDiv.querySelector('#classCount');
    var missClassCount = contentDiv.querySelectorAll('.missClassCount');
    var marks = contentDiv.querySelectorAll('.mark[type="text"]');
    if (isEmpty(fio.value)){
        alert ("Введите ФИО");
    }
    else if (isEmpty(classCount.value)){
        alert ("Введите количество занятий");
    }
    else if (isEmpty(missClassCount[0].value)){
        alert ("Введите количество занятий, пропущенных по уважительной причине");
    }
    else if (isEmpty(missClassCount[1].value)){
        alert ("Введите количество занятий, пропущенных по неуважительной причине");
    }
    else if (!isTotalClassCountValid(missClassCount, classCount)){
       alert ("Количество пропусков превышвет количество занятий"); 
    }
    else{
        var allMarksFilled = true;
        marks.forEach(function(mark){
            if (isEmpty(mark.value)) {
                allMarksFilled = false;
            }
        });
        if (!allMarksFilled){
            alert ("Необходимо заполнить все оценки");
        }
        else{
            const averageScore = getAverageScore(marks);
            let missClassRercentageMass = getMissClassRercentage(missClassCount, classCount);
            if (missClassRercentageMass[1] > 10 || averageScore < 4){
              result.textContent = `Зачет не получен. Средний балл: ${averageScore}. Доля пропусков по неуважительной причине: ${missClassRercentageMass[1]}%. По уважительной: ${missClassRercentageMass[0]}%`;
              result.style.color = 'red'; 
              sendResultsToGithub(subject, fio, result.textContent);
            }
            else {
              result.textContent = `Зачет получен. Средний балл: ${averageScore}. Доля пропусков по неуважительной причине: ${missClassRercentageMass[1]}%. По уважительной: ${missClassRercentageMass[0]}%`;
              result.style.color = 'green';   
              sendResultsToGithub(subject, fio, result.textContent);
            }
        }
    }
}

function isEmpty(value) {
    return value.trim() === "";
}

function isTotalClassCountValid(missClassCount, classCount){
    return (parseInt(missClassCount[0].value) + parseInt(missClassCount[1].value)) <= parseInt(classCount.value);
}

function getMissClassRercentage(missClassCount, classCount) {
    var respectfully = (parseInt(missClassCount[0].value) / parseInt(classCount.value)) * 100;
    var unrespectfully = (parseInt(missClassCount[1].value) / parseInt(classCount.value)) * 100;
    respectfully = Number.isInteger(respectfully) ? respectfully: respectfully.toFixed(1);
    unrespectfully = Number.isInteger(unrespectfully) ? unrespectfully: unrespectfully.toFixed(1);
    let missClassRercentageMass = [respectfully, unrespectfully];
    return missClassRercentageMass;
}

function getAverageScore(marks){
    var summ = 0;
    var count = 0;
    marks.forEach(function(mark){
            count += 1;
            summ += parseInt(mark.value);
        });
    var averageScore = summ / count;
    averageScore = Number.isInteger(averageScore) ? averageScore: averageScore.toFixed(1);
    return averageScore;
}

function sendResultsToGithub(subject, fio, resultText) {
    const token = process.env.GITHUB_TOKEN;;
    const repo = 'alxtws/BackendPractice';
    const message = 'Добавление результатов';
    const utf8Content = `Предмет: ${subject.value}\nФИО: ${fio.value}\nРезультат: ${resultText}`;
    const encodedContent = btoa(unescape(encodeURIComponent(utf8Content)));

    const url = `https://api.github.com/repos/${repo}/contents/results.txt`;

    // сша
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при получении SHA текущей версии файла');
        }
        return response.json();
    })
    .then(data => {
        const sha = data.sha;

        return fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                content: encodedContent,
                sha: sha, 
                committer: {
                    name: 'alxtws',
                    email: 'Deroomjii@gmail.com'
                }
            })
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при отправке данных на GitHub');
        }
        return response.json();
    })
    .then(data => {
        console.log('Ответ от GitHub:', data);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
}



