let num1 = 126;
document.getElementById('a').innerHTML = num1.toString()+"<br>"
+(123).toString()+"<br>" +(100+23).toString();
let num2 = 12.56242
document.getElementById('b').innerHTML = num2.toExponential()+"<br>"+num2.toExponential(2) +
"<br>" + num2.toExponential(4) + "<br>"+num2.toExponential(6);
let num3 = 12.3457;
document.getElementById('c').innerHTML = num3.toFixed() + "<br>" +num3.toFixed(0) +"<br>"
+num3.toFixed(2) + "<br>" +num3.toFixed(4)+"<br>" + num3.toFixed("6");
let num4 = 3.4567;
document.getElementById('d').innerHTML = num4.toPrecision()+"<br>"+num4.toPrecision(2)+
"<br>" +num4.toPrecision(4)+"<br>"+num4.toPrecision(6);
let num5=134.9
document.getElementById('e').innerHTML= num5.valueOf()+"<br>" + 134.9.valueOf()+"<br>"+
(100+34.9).valueOf();
document.getElementById("f").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");
let A = new Date("1970-01-02");
let B = new Date("2023-02-27")
document.getElementById('g').innerHTML = Number(A)
document.getElementById('h').innerHTML = Number(B)
document.getElementById("i").innerHTML = 
  parseInt(true) + "<br>" +
  parseInt(false) + "<br>" +
  parseInt("10") + "<br>" + 
  parseInt("  10") + "<br>" +
  parseInt("10  ") + "<br>" +
  parseInt(" 10  ") + "<br>" +
  parseInt("10.33") + "<br>" + 
  parseInt("10,33") + "<br>" +
  parseInt("ele 33") + "<br>" +
  parseInt("10 33") + "<br>" +
  parseInt("John");
  document.getElementById("j").innerHTML = 
  parseFloat(true) + "<br>" +
  parseFloat(false) + "<br>" +
  parseFloat("10") + "<br>" + 
  parseFloat("  10") + "<br>" +
  parseFloat("10  ") + "<br>" +
  parseFloat(" 10  ") + "<br>" +
  parseFloat("10.33") + "<br>" + 
  parseFloat("10,33") + "<br>" +
  parseFloat("ele 33") + "<br>" +
  parseFloat("10 33") + "<br>" +
  parseFloat("John");
  document.getElementById("k").innerHTML = 
  Number.isInteger(10) + "<br>" +
  Number.isInteger(10.5)
  document.getElementById('l').innerHTML=
  Number.isSafeInteger(10) +"<br>"+
  Number.isSafeInteger(012345671234567456777734567);
  document.getElementById("m").innerHTML = 
Number.parseFloat("10") + "<br>" +
Number.parseFloat("10.33") + "<br>" +
Number.parseFloat("10 20 30") + "<br>" +
Number.parseFloat("10 years") + "<br>" +
Number.parseFloat("years 10");
document.getElementById("n").innerHTML = 
  Number.parseInt("-10") + "<br>" +
  Number.parseInt("-10.33") + "<br>" +
  Number.parseInt("10") + "<br>" +
  Number.parseInt("10.33") + "<br>" +
  Number.parseInt("10 6") + "<br>" +  
  Number.parseInt("10 years") + "<br>" +  
  Number.parseInt("years 10");

document.getElementById("o").innerHTML = Number.EPSILON;
document.getElementById("p").innerHTML = Number.MAX_VALUE;
document.getElementById("q").innerHTML = num1.MAX_VALUE;
document.getElementById("r").innerHTML = Number.MIN_VALUE;
document.getElementById("s").innerHTML = Number.MAX_SAFE_INTEGER;
document.getElementById("t").innerHTML = Number.MIN_SAFE_INTEGER;
document.getElementById("u").innerHTML = Number.POSITIVE_INFINITY;
document.getElementById("v").innerHTML = Number.NEGATIVE_INFINITY
document.getElementById("w").innerHTML = Number.NaN;