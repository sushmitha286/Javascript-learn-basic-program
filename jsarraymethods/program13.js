const animal = ['dog','cat','cow','giraffe','elephant'];
document.getElementById('a').innerHTML = animal.toString();
document.getElementById('b').innerHTML = animal.join('*');
animal.pop();
document.getElementById('c').innerHTML = animal
let animal1 = animal.pop();
document.getElementById('d').innerHTML = animal1;
animal.push('lion');
document.getElementById('e').innerHTML = animal;
let animal2 = animal.push('tiger');
document.getElementById('f').innerHTML = animal2;
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById('g').innerHTML = fruits.shift();
let fruits1 = fruits.shift();
document.getElementById('h').innerHTML = fruits;
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.unshift('lemon');
document.getElementById('i').innerHTML = fruits2;
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2,1,'lemon','kiwi')
document.getElementById('j').innerHTML = fruits3
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById('k').innerHTML = fruits4.splice(0,2);
const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
document.getElementById('l').innerHTML = fruits5.slice(1);
document.getElementById('m').innerHTML = fruits5.slice(1,4);