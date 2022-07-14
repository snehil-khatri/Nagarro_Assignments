var x = 1;
console.log(x);//Ans-->1
function a(){
    x=10;
    console.log(x);//Ans-->10
}
a();
//----------------------------------------
 
let x = 10;
console.log(x);//Ans-->10
function a(){
    x=100;
    console.log(x);//Ans-->100
}
a();
x=1000;
//------------------------------------------

const x = 100;
console.log(x);//Ans-->100
function a(){
    x=10;
    console.log(x);//Error
}
a();
//-------------------------------------------


function a(){
    console.log(x);//Ans-->Undefined
}
a();
var x=2 
//-------------------------------------------

let x;
function b(){
    console.log(x);//Ans-->undefined
}
b();
x=2;
//--------------------------------------------

function a(){
    console.log(x);//Error because of late initialistion 
}
a();
let x=2 
//----------------------------------------------

var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);//Ans-->10
    console.log(b);//Ans-->20
    console.log(c);//Ans-->30
}
console.log(b);//Ans-->2
//------------------------------------------------

function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    return y;
}
var z =  x();
console.log(z);//It will print the whole funtion y{syntax} which is returned by the function x
z();
//-------------------------------------------------

function x(){
    for(var i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();
//-------------------------------------------------

function x(){
    for(var i=0;i<6;i++){
        function close(i){
                setTimeout(function(){
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();
//--------------------------------------------------
// question1: make copy of the object and manipulate values inthe new copied object

let user = { name: 'amy' };

let admin = user;

admin.name = 'jake'; 

alert(user.name);



// question2: print all the properties using appropriate for loop 

const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"