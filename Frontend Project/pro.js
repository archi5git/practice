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
