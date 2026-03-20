function openFeatures(){
var allElems = document.querySelectorAll('.elem')
    var fullElemPage = document.querySelectorAll('.fullelem')
    var fullElemPageBackBtn = document.querySelectorAll('.fullelem .back')

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            fullElemPage[elem.id].style.display = 'block'
        })
    })
     fullElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            fullElemPage[back.id].style.display = 'none'
        })
    })
}

openFeatures()

let currentTask=[]
if(localStorage.getItem('currentTask')){
    currentTask=JSON.parse(localStorage.getItem("currentTask"))
}
else{
    console.log("Task list is Empty");
    
}

function renderTask(){
var allTask = document.querySelector('.allTask')

        var sum = '';

        currentTask.forEach(function (elem, idx) {
            sum = sum + `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <p>${elem.details}</p>
        <button id=${idx}>Mark as Completed</button>
        </div>`
        })

        allTask.innerHTML = sum;
        localStorage.setItem('currentTask', JSON.stringify(currentTask));

        document.querySelectorAll('.alltask button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                currentTask.splice(btn.id, 1)
                renderTask()
            })
        })
    }
    renderTask();
let form = document.querySelector('.addTask form')
    form.addEventListener('submit', function (e) {
                e.preventDefault()



    let taskInput = document.querySelector('#input-12')
    let taskDetailsInput = document.querySelector('.addTask textarea')
    let taskCheckbox = document.querySelector('#check')
    let newTask=
            {
                task: taskInput.value,
                details: taskDetailsInput.value,
                imp: taskCheckbox.checked
            }
            currentTask.push(newTask)
        renderTask()

        taskCheckbox.checked = false
        taskInput.value = ''
        taskDetailsInput.value = ''
    })


