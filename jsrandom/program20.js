document.getElementById('a').innerHTML = Math.floor(Math.random()*10)
document.getElementById('b').innerHTML = Math.floor(Math.random()*100)
document.getElementById('c').innerHTML = Math.floor(Math.random()*11)
document.getElementById('d').innerHTML = Math.floor(Math.random()*101)
document.getElementById('e').innerHTML = Math.floor(Math.random()*10)+1
document.getElementById('f').innerHTML = Math.floor(Math.random()*100)+1
document.getElementById('g').innerHTML = getRndInteger(1,12)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  document.getElementById('h').innerHTML = getBndInteger(1,12)
  function getBndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
