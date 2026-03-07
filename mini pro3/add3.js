let arr=['CSK','RR','RCB','DC','LSG','SRH','MI','KKR','GT','PBKS',]//RANDOM VALUE TILL 9
var h4=document.querySelector('h1')
var btn=document.querySelector('button')
btn.addEventListener("click",function(){
    let num=Math.floor(Math.random()*arr.length)
    h4.innerHTML=arr[num]
})

console.log(arr[num]);
