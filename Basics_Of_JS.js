// - Words and Keywords
// - Variables and const

var name = "adesh"
const name = "adesh"  // This will not change 

// -Hoisting - It means the variables and funvtions can be used before their declaration 
console.log(a);
var a = 10;

// - Types in JS - Primitive and References
// Primitives
var a = " adesh" ; // This is primitive , In simple , primitives do not have brackets

//References
var a = [1 , 2 , 3];
var b = a ; // - This is references ....In simple , references has brackets like () , {} , [] 


//Conditionals - if and else if and else

//Loops - for and while

// - Functions 
function add(){
    console.log(1+2);
}

// - Arrays


// - Push , Pop , Shift , Unshift , Splice
// Push - it adds the value at the ending , Pop - rmeoves value from last , Shift - It removes value from the beginning ,
//        Unshift - It adds value at the beginning , splice - It remove values from the given range For ex. arr.splice(1 , 2) - 
//        It means , from index 1 , 2 values will be remove.
var arr = [1 , 2 , 3 , 4 ];
arr.push(1);
arr.pop();
arr.shift();
arr.unshift(10);
arr.splice(0 , 2);



//Objects

var Student = {
    name: "Aaru",
    age: 21,
    Country : "India",
    City: "kolhapur"
}

Student.name = "Scout";
console.log(Student.name)