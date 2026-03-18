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
var form= document.querySelector('.addTask form')
let taskInput=document.querySelector('addTask form input')
let taskDetailsInput=document.querySelector('.addTask form textarea')
let taskCheckbox=document.querySelector('.addTask form #check')
let currentTask=[{
    task:"Mandir jao",
    details:"Shiv ji wale",
    imp:true
},{
    task:"Project kro",
    details:"Web Dev ke",
    imp:true
},
{
    task:"Assignments kro",
    details:"OR ka",
    imp:false
}
]
function renderTask(){
var allTask = document.querySelector('.allTask')

        var sum = ''

        currentTask.forEach(function (elem, idx) {
            sum = sum + `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button id=${idx}>Mark as Completed</button>
        </div>`
        })

        allTask.innerHTML = sum;
    }
    renderTask()

    form.addEventListener('submit',function(e){
    e.preventDefault()
})
