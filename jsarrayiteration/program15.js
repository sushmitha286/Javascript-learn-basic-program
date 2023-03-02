const numbers = [45, 4, 9, 16, 25];
let text = " "
numbers.forEach(myfun);
document.getElementById('a').innerHTML = text
function myfun(value,index,array){
    text += value + "<br>"
}
const numbers1 = [45, 4, 9, 16, 25];
 let num2 = numbers1.map(myfunc);
document.getElementById('b').innerHTML = num2;
function myfunc(value,index,array){
    return value*2;
}
const numbers2 = [45, 4, 9, 16, 25];
let num3 = numbers2.filter(myfunct)
document.getElementById('c').innerHTML = num3;
function myfunct(value,index,array){
    return value > 18;
}
const numbers3 = [45, 4, 9, 16, 25];
let num4 = numbers3.reduce(myfunction)
document.getElementById('d').innerHTML = num4;
function myfunction(total,value,index,array){
    return total + value ;
}
const numbers4 = [45, 4, 9, 16, 25];
let num5 = numbers4.reduceRight(myFunction)
document.getElementById('e').innerHTML = num4;
function myFunction(total,value,index,array){
    return total + value ;
}
const numbers5 = [45, 4, 9, 16, 25];
let num6 = numbers5.every(Myfun)
document.getElementById('f').innerHTML = num6;
function Myfun(value,index,array){
    return  value > 18;
}
const numbers6 = [45, 4, 9, 16, 25];
let num7 = numbers5.some(MyFun)
document.getElementById('g').innerHTML = num7
function MyFun(value,index,array){
    return  value > 18;
}
const fruits = ["Apple", "Orange", "Apple", "Mango"];
document.getElementById('h').innerHTML = fruits.indexOf('Apple')
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
document.getElementById('i').innerHTML = fruits1.lastIndexOf('Apple')
const numbers7 = [11, 4, 9, 16, 25];
 let num8 = numbers7.findIndex(Myfn)
 document.getElementById('j').innerHTML = num8
 function Myfn(value,index,array){
 return value > 18;

 }
document.getElementById('k').innerHTML = Array.from('ABCDEFG')
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
let val = fruits11.keys();
let txt =" ";
for(let x of val){
    txt += x + "<br>"
}
document.getElementById('l').innerHTML = txt;