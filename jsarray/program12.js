const animal = ['dog','cat','cheetha','lion','tiger'];
document.getElementById('a').innerHTML = animal;
let animal1 = 'dog';
let animal2 = 'cat';
let animal3 = 'tiger'
document.getElementById('b').innerHTML = 
    animal1 + "<br>"+
    animal2 +" <br>"+
    animal3 ;
let a1 = [];
a1[0] ='lion';
a1[1] = 'cat';
a1[2] = 'cow'
document.getElementById('c').innerHTML = a1;
const name = new Array('sushmitha','manasa','chaitra');
document.getElementById('d').innerHTML = name;
const name1 = ['kalpana','mohan','david','zuzu'];
document.getElementById('e').innerHTML = name1[2];
const name2 = ['kalpana','mohan','david','zuzu'];
name2[0] = "namana";
document.getElementById('f').innerHTML = name2;
const person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById('g').innerHTML = person.firstName;
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById('h').innerHTML = fruits.length;
document.getElementById('i').innerHTML = fruits[0];
document.getElementById('j').innerHTML = fruits[fruits.length-1];
document.getElementById('k').innerHTML = fruits[-1];
let birds =['parrot','pigeon','owl','pickock','love birds'];
let blen = birds.length;
let text = "<ul>"
for(let i=0;i<blen;i++){
    text += "<li>" + birds[i] +"</li>";
}
text += "</ul>";
document.getElementById('l').innerHTML = text;
let birds1 =['parrot','pigeon','owl','pickock','love birds'];
let text1 = "<ul>"
birds1.forEach(myfunction)
text1 += "</ul>"
document.getElementById('m').innerHTML = text1;
function myfunction(value) {
    text1 += "<li>" + value + "</li>";
  } 
const fruit = ["Banana", "Orange", "Apple"];
let fr = fruit.push('lemon')
document.getElementById('n').innerHTML = fruit
const pers = [];
pers[0] = "John";
pers[1] = "Doe";
pers[2] = 46; 
document.getElementById("o").innerHTML =
pers[0] + "<br> " + pers.length;
const per= [];
per["firstName"] = "John";
per["lastName"] = "Doe";
per["age"] = 46;
per.length;     // Will return 0
per[0];  
document.getElementById("p").innerHTML =
per[0] + "<br> " + per.length;
const points1 = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];
document.getElementById("q").innerHTML = points1[0]
document.getElementById("r").innerHTML = points2[0]
const points3 = new Array(40);
const points4 = [40];
document.getElementById("s").innerHTML = points3[0]
document.getElementById("t").innerHTML = points4[0]