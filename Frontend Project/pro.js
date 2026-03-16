var Aelem=document.querySelectorAll(".elem")
var fulleleme=document.querySelectorAll(".fullelem")

Aelem.forEach(function(elem){
    elem.addEventListener("click",function(){
    fulleleme[elem.id].style.display="block"
        
    })
    
})