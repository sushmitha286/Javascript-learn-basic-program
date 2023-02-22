function myfunction(a,b){
    return a * b;
}
document.getElementById('demo').innerHTML = myfunction(4,6);
let x = myvalue(6,3);
document.getElementById('demo1').innerHTML = x;
function myvalue(l,m){
    return  l + m;
}

function toCelsius(f){
    return (5/9)*(f-32);
}
document.getElementById('demo2').innerHTML = toCelsius(77);