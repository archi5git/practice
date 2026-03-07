var bt=document.querySelector("button")
var bx=document.querySelector("#box")

bt.addEventListener("click",function(){
    var c1=Math.floor(Math.random()*256)
    var c2=Math.floor(Math.random()*256)
    var c3=Math.floor(Math.random()*256)

    bx.style.backgroundColor=`rgb(${c1},${c2},${c3}3)`
})