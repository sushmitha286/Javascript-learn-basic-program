const d = new Date("2022-03-25");
document.getElementById("a").innerHTML = d;
const A = new Date()
document.getElementById('b').innerHTML = A;
const B = new Date(2018,03,23,11,25,54);
document.getElementById('c').innerHTML = B;
const C = new Date(2018,03,23,11,25,54);
document.getElementById('d').innerHTML = C;
const D = new Date(2018,03,23,11,25);
document.getElementById('e').innerHTML = D;
const E = new Date(2018,03,23,11);
document.getElementById('f').innerHTML = E;
const F = new Date(2018,03,23);
document.getElementById('g').innerHTML = F;
const G = new Date(2018,03);
document.getElementById('h').innerHTML = G;
const H = new Date(2018);
document.getElementById('i').innerHTML = H;
const I = new Date(99,03,23);
document.getElementById('j').innerHTML = I;
const J = new Date(100000000000);
document.getElementById('k').innerHTML = J;
const K = new Date(-100000000000);
document.getElementById('l').innerHTML = K;
const L = new Date(24*60*60*1000);
document.getElementById('m').innerHTML = L;
const M = new Date(0);
document.getElementById('n').innerHTML = M;
const N = new Date();
document.getElementById('o').innerHTML = N.toString();
const O = new Date();
document.getElementById('p').innerHTML = O.toDateString();
const P = new Date();
document.getElementById('q').innerHTML = P.toUTCString();
const Q = new Date();
document.getElementById('r').innerHTML = Q.toISOString();
const R = new Date("2018-03-11T12:24:34Z");
document.getElementById('s').innerHTML = R;