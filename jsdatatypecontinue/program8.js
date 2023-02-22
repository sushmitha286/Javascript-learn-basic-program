const person = {
    firstname : 'ashmitha',
    lastname : 'k',
    age : 30,
    gender : 'F',
    eyecolor : 'blue'


}
document.getElementById('demo').innerHTML = "my name is" + " "+ person.firstname + " " + person.lastname + " and age is"+ " " +person.age;

const per = {
    firsname : 'ashmitha',
    lasname : 'k',
    age : 30,
    gender : 'F',
    eyecolor : 'blue',
    fullname :  function() {
        return this.firsname + " " + this.lasname;
    }
};
document.getElementById('demo1').innerHTML = per.fullname;
document.getElementById('demo2').innerHTML = per.fullname();
function displayfun(){
    document.getElementById('demo4').innerHTML = Date();
}