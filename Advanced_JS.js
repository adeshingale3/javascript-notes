/* Higher Order Function : A function which contains another function as parameter is called as Higher Order Function.
   Also a function which returns another function is known as Higher Order function. */
function abcd(_ab(){}){

}

function abab(){
    return ababa();
}

/* Constructor Function : When you want to make multiple elements of same property then Constructor Function comes in action. 
*/
function Biscuit(){
    this.height = 12 ;
    this.width = 22 ;
    this.color = "Brown" ;
    this.taste = " Sweet" ;
}

var Bis1 = new Biscuit();
var Bis2 = new Biscuit();


/* First Class Function : All functions in JS are First Class Function.It means all finctions are treated as normal values .
*/
var a = function a(){

}

/* New Keyword : With the help of "new" keyword we can create blank object of an existing function.
*/
function abcd(){
    var a = 12 ;
}
new abcd(){
    var a = 12;
}

/* iife : Immediatley Invoked Function Expression
        If you want to call any function immediately , you can make it iif.
        This is used to make private variables.
*/
(function(){
    var a = 12; // Here "a" is now private variable.
})()

/* Prototype : It is collection of bult in function which we can use 
    eg. ".length" , ".size"
*/

/* Prototyple Inheritance : As we know Inheritance means , child class has the properties of their parent class 
    Same like that , having same properties of another protype .
*/
var Human = {
    canFly : false , 
    canSing : true , 
    canWalk : true ,
}

var Raj = {
    name : "Raj" ,
    canPlay : true ,
    canDrive : true ,
}
Raj.__proto__ = Human;

/* "this" keyword : The value of "this" keyword in 
        global scope --> Wndow
        function scope --> window
        methos scope --> object
*/



/* "call" keyword : We know "this" is referred to window , but when we use "call" , "this" will be referred to object. 
*/

/* "apply" keyword : Same as "call" , the only difference is , we can pass only 2 arguments in "apply".
*/

/* "bind" keyword : Same as above 2. It is used , when you want to execute any function after some time . Mostly used in React.js
*/

/* Pure function : A function which return same output for every same input and which does not change the value of global variable
    Is known as pure function.

    function abcd(a ,b){
    return a*b;
    }

    abcd(1 , 2);
    
*/


/* Impure Function : Opposite of pure function.
    
    var ab = 10;

    function abcd(a ,b){
    ab = 20;
    return a*b;
    }
    abcd(1 , 2);
*/


