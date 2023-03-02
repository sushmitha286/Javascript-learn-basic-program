const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById('a').innerHTML = fruits.sort();
document.getElementById('b').innerHTML = fruits.reverse();
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
return(a-b)
} );
document.getElementById('c').innerHTML = points;
points.sort(
    function(a,b){
        return(b-a)
    }
);
document.getElementById('d').innerHTML = points;
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(){
    return 0.5 - Math.random()
});
document.getElementById('e').innerHTML = points1;
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a,b){
return(a-b)
});
document.getElementById('f').innerHTML = points2[0];
document.getElementById('g').innerHTML = points2[points2.length-1];
const points3 = [40, 100, 1, 5, 25, 10];
function myfun(arr){
    return Math.max.apply(null,arr)
}
document.getElementById('h').innerHTML = myfun(points3);
const points4 = [40, 100, 1, 5, 25, 10];
function myfunc(arr){
    return Math.min.apply(null,arr)
}
document.getElementById('i').innerHTML = myfunc(points3);

