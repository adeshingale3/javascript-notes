// There are two versions of Js - ES5 and ES6
// --ES5 - 
//      1. It contains var.
//      2. Var is fuction scoped i.e it can be used outside for loop (only if for loop is in a function).

function abcd(){
    for(var i = 0 ; i < 10 ; i++){
        console.log(i);
    }
    console.log(i);
}
// Here "i" can be accessed outside for loop 



// --ES6 - 
//      1. It contains let and const.
//      2. These both are braces scoped i.e it is only valid till braces

function abcde(){
    for(let i = 0 ; i < 10 ; i++){
        console.log(i);
    }
    console.log(i);
}
// Here "i" can be only accesed within for loop (Same for const).




// -- Window is provided by browser from which JS can use some features which is not there is JS
//      Like alert , prompt , etc. You can check on console by typing window Keydword 


// --Browser Context API : It is nothing but consist of 3 things i.e Window , stack and heap memory

// --Execution Context : It is an imaginary container , which is created when funtion is called . It contains 2 things 
//      that are , variables , funtions(which are in that function) and "Lexical Environment" of that function.

// --Lexical Environment : It is a chart which tells us that , which things can be accesed by that particular funstion .

// --How to copy refernces values :
var arr = [ 1 , 2 , 3 , 4];
var b = [...arr];
// These three dots are called "Spread Operators" . This is the right way to copy references in JS


// Falsy Values : 0 , Nan , document.all , false , undefined , null
// Truthy Values : apart from above all are Truthy Values



// ForEach : This loop is used in Array only
var a = [1 , 2 , 3 , 4 , 5];

a.forEach(function(val){
    console.log(val);
})

// Forin : This loop is only used on objects
var obj = {
    name : "Adesh" ,
    age : 21 ,
    city : "Kolhapur"
}
for(var key in obj){
    console.log(key , obj[key]);
}



// --Callback Functions 
setTimeout(function(){
    console.log("Hi")
} , 5000)