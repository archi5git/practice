//#1
console.log("Hello");
console.error("hello");
console.warn("hello");
console.table({name:"Archi", age:"21"} );
console.count("hello");
console.info("hello");

//#2
console.log(36*2-(10/2)+7);

//#3
console.log(typeof "132");
console.log(typeof null);
console.log(typeof true);
console.log(typeof 123);
console.log(typeof "cow");

//#4 swapping1
var a=5;
var b=6;
var c;
c=a;
a=b;
b=c;
console.log(a,b);
 //Swapping 2
 var a=5;
 var b=6;
 [a,b]=[b,a];
 console.log(a,b);
 //Swapping 3
 var a=5;
 var b=6;
 a=a+b;
 b=a-b;
 a=a-b;
 console.log(a,b);

 //#5
 console.groupCollapsed("Names")
 console.log("archi");
 console.log("sunmukh");
 console.log("Unaat");
 console.log("Varsha");
 console.log("Shreya");
 console.groupEnd()

 //#6
 const obj ={
    name:"Archi",
    age:20,
    email:"test@example.com",
 };
//obj.freeze(obj); //to not change the value of obj
 obj.age =21;
console.log(obj)

//#7
var x = Number("50");
console.log(typeof x);
//or
var y= parseInt("90");
console.log( typeof y)
//or
let z = +"50";
console.log(typeof z);

//#8
let str = "javascript";
console.log(str.includes("script"));
//or
console.log(str.indexOf("script"));
//or
console.log(str.indexOf("script") !== -1);
//or
if(str.indexOf("script") !== -1){
   console.log("true")
}
else{
   console.log("False")
}
//#9
//undefined 
//var a;
//console.log(a)

//null ka matlab hai value na hona
//nan "harsh"-12;

//#10
//map apne se ek blank array bnata h
var arr =[1,2,3,4,5];

var ans= arr.map(function(value){
   return 5;
})
console.log(ans)

//#for each loop
arr.forEach(function(value){
   console.log("hey") // for each does not return
})

//#filter 
//it is like map but onlu return true or false
let arr2 = [1,2,3];
var t = arr2.filter(function(value){
   return false;
})
console.log(t)

//reverse using for loop
for(let i=10; i>=1;i--){
   console.log(i);
}
//multiples of 3 While Loop
let num=3;
while(num <= 30){
   console.log(num);
   num +=3;
}

let sum = 0;
for(let i =1;i<=100;i++){
   sum+=i;
}
console.log("sum:",sum);

for(let i=1; i<=5;i++){
   let stars="";
   for(let j =1; j<=i;j++){
      stars +="*"
   }
   console.log(stars);
}
let strin="JavaScript";
for(let char of strin){
   console.log(char);
}
//Array
//#1 Remove Duplicates
let arr3=[1,2,3,4,3,5];
let uni =[...new Set(arr3)];
console.log(uni)

//#2 Second largest
function secondLargest(arr3){
   let sorted =[...new Set(arr3)].sort((a,b)=> b-a);
   return sorted.length > 1 ? sorted[1] : null;
}
console.log(secondLargest([10,20,5,10,30,30]));

//#3 sorting in Descending order  
let numbers =[5,2,9,1,5,6];
numbers.sort((c,d) => d-c);
console.log(numbers);
//#4 Reverse without reverse()