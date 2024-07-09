const routes = {
    home: `
        <h2>Выставление зачета</h2>
        <div class="row">
            <div class="column">
                <p>Выберите предмет:</p>
                <p>
                    <select id="choose1">
                        <option>Английский язык</option>
                        <option>Математика</option>
                        <option>Информатика</option>
                        <option>Русский язык</option>
                        <option>Биология</option>
                        <option>Химия</option>
                    </select>
                </p>
            </div>
            <div class="column">
                <p>Количество оценок:</p>
                <p>
                    <input type="number" style= "width: 100%;" id="marksCount" step="1" min="1" max="10" value="1"/>
                </p>
            </div>
            <div class="column">
                <p>
                    ФИО студента: 
                </p>
                <p>
                    <input type="text" class="fio">
                </p>
            </div>
            <div class="column">
                <p>
                    Количество занятий:    
                </p>
                <p>
                    <input type="number" style= "width: 100%;" id="classCount" step="1" min="1" max="15" value="1"/>
                </p>
            </div>            
        </div>
        <div class="row">
            <div class="column">
                Количество занятий, пропущенных по уважительной причине:
                <input type="number" class="missClassCount" id="respectfully" step="1" min="0" max="1" value="0"/>
            </div>
            <div class="column">
                Количество занятий, пропущенных по неуважительной причине:
                <input type="number" class="missClassCount" id="unrespectfully" step="1" min="0" max="1" value="0"/>
            </div>
        </div>
        <div style= "margin-top: 17px;">
            <table id="tabl">
                <tr>
                    <th>1 оценка</th>
                </tr>
                <tr>
                    <th><input type="text" class="mark"></th>
                </tr>
            </table>
        </div>
        <div style= "margin-top: 17px;">
            <button id="Button" type="button">Выставить зачет</button>
            <button id="Cleaning" type="button" class = "hidden">Очистить</button>
        </div>
        <div style= "margin-top: 17px;">
            <p id="Result"></p>
        </div>
    `,
    about: `
        <h2>О нас</h2>
        <p>Здесь вы можете узнать о нас.</p>
    `,
    contact: `
        <h2>Контакты</h2>
        <p>Контактная информация.</p>
    `
};

function loadContent() {
    const hash = location.hash.replace('#', '');
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = routes[hash] || routes.home;
    // Получаем все элементы с классом "mark"
    var elements = contentDiv.querySelectorAll('.mark[type="text"]');
    // Проходим по каждому элементу и устанавливаем атрибут maxlength="1"
    elements.forEach(function(element) {
        element.setAttribute('maxlength', '1');
    });
    
// кол-во оценок   
    var marksCount = contentDiv.querySelector('#marksCount');
    var button = contentDiv.querySelector('#Button');
    previusValue = marksCount.value;
    if (marksCount) {      
        marksCount.addEventListener('input', function(event) {  
           MarksCountControl (event, marksCount, previusValue, button) 
        })
        contentDiv.addEventListener('input', (event) =>{
            MarkContor (event);
        })  
    };
    
// кол-во занятий    
    var classCount = contentDiv.querySelector('#classCount');
    if (classCount) {
        classCount.addEventListener('input', function(event) {
            ClassCountControl(event, classCount, contentDiv);
        });
    }; 
// пропуски    
    var elements = contentDiv.querySelectorAll('.missClassCount');
    elements.forEach(function(element){
       element.addEventListener('input', function(event) {
            MissClassCountControl(element);
       }); 
    })
    
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('hashchange', loadContent);
    loadContent(); // Загрузка контента при начальной загрузке страницы
});


function MarksCountControl (event, marksCount, previusValue, button) {
    if (marksCount.value === "" && isNaN(previusValue) == false){ 
        marksCount.value = "";
        var table = document.getElementById('tabl'); 
        table.innerHTML = '';
        button.classList.add('hidden');
    }
    else if (marksCount.value > 10) {
        alert ("Значение не может быть больше 10");
        marksCount.value = marksCount.value.charAt(0);
    }
    else if ((marksCount.value < 1  && marksCount.value != "")) {
        alert ("Значение не может быть меньше 1");
        marksCount.value = "";
    }
    else {
       if (button.classList.contains('hidden')) {
           button.classList.remove('hidden');
       }
       var table = document.getElementById('tabl'); 
       var rowCount = table.rows.length;
       table.innerHTML = '';
       var tr = document.createElement('tr');
       var tr1 = document.createElement('tr');
       for (let i = 0; i < marksCount.value; i++){
           tr.innerHTML += '<th>' + (i + 1) + " оценка" + '</th>';
           tr1.innerHTML += '<th><input type="text" class="mark"></th>'
       }
       table.appendChild(tr);
       table.appendChild(tr1); 
    }
    var elements = contentDiv.querySelectorAll('.mark[type="text"]');
    elements.forEach(function(element){
        element.setAttribute('maxlength', '1');
    })
    previusValue = event.target.value;
}

function ClassCountControl (event, classCount, contentDiv) {
    var elements = contentDiv.querySelectorAll('.missClassCount');
    if (classCount.value === ""){ 
         classCount.value = "";
         elements.forEach(function(element){
           console.log("eee");
           element.setAttribute('disabled', 'true');
        }) 
     }
     else if (classCount.value > 15) {
         alert ("Значение не может быть больше 15");
         classCount.value = classCount.value.charAt(0);
     }
     else if ((classCount.value < 1  && classCount.value != "")) {
         alert ("Значение не может быть меньше 1");
         classCount.value = "";
     }
     else {       
        elements.forEach(function(element) {
            element.removeAttribute('disabled');
            element.setAttribute('max', classCount.value);
            if (parseInt(element.value) > parseInt(classCount.value)) {
                element.value = classCount.value;
            }
        });
     }
}

function MarkContor (event){
    if (event.target.classList.contains('mark')){
        if (isNaN(event.target.value)){
            alert ("Необходимо ввести число!");
            event.target.value = "";
        }
        else if (event.target.value < 1 && event.target.value != ""){
            alert ("Оценка не может быть меньше 1!");
            event.target.value = "";
        }
        else if (event.target.value > 5){
           alert ("Оценка не может быть больше 5!");
           event.target.value = ""; 
        }
    }
}

function MissClassCountControl(element){
    const maxAttributeValue = element.getAttribute('max');
    if (element.value === ""){ 
        element.value = "";
    }
    else if (parseInt(element.value) > parseInt(maxAttributeValue)) {
        console.log("атрибут: " + maxAttributeValue + " Элемент: " + element.value);
        
        alert ("Значение не может быть больше " + maxAttributeValue);
        element.value = element.value.charAt(0);
    }
    else if (element.value < 0  && element.value != "") {
        alert ("Значение не может быть меньше 0");
        element.value = "";
    }   
}
