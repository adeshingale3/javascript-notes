let arr = ['Adesh', 'Ingale', 'Raj', 'Desai', 'Sahil', 'Patil', 'Rohan', 'Zende']

// Map
// This will create a new imaginary array
// If we want to make modification in all elements of an array, then we will use map
let newArr = arr.map(function(value){
    // Here will join "ji" at the end of every element from an array
    return value+"ji";
})

// Filter
// This will create a new imaginary array
// In filter we can filter out some members from existing array
let filteredArr = arr.filter(function(value){
    // Here we will filter only those elements which starts with 'A'
    return value.startsWith('A');
})


// Destructuring
// If you want to access any object from any array then you can do it using destructuring
// const user = {
//         name : 'Adesh',
//         age : 20,
//         village : 'Kolhapur'
    
// }
// let { name } = data.name;
// console.log(name);


// Spread operator
// It is used to a keep a copy of array or object
// copied array will not be changes even if you make any modifications in original array
let country = ['India', 'Russia', 'Thiland' , 'Bangkok', 'Dubai']
const copyCountry = [...country]

// Rest Operator
// It is exactly same spread operator but only difference is spread is used in array and rest is used in funtions

function abcd(a,b,c,...rest){
    console.log(a,b,c,...rest);
}
abcd(1,2,3,4,5,6);



/-- Merging two arrays of data fetched from seperate APIs into a single list --/
let names = ['John', 'Kumar', 'Disha', 'Adesh', 'Shreya'];
let lastnames = ['Doe', 'Sanu', 'Agarwal', 'Ingale', 'Aggarwal'];

const fullnames = [...names, ...lastnames];


/-- Filtering an array of objects to display items based on a search query (eg. filtering products by name)--/
let products = ['Condom', 'Shirt', 'Pant', 'Ball', 'Bat'];
let filteredProducts = products.filter(function(value){
    return value.startsWith('C');
})


let items = [
    {name: 'Condom', type: 'Accessories'},
    {name: 'switch', type: 'Electronics'},
    {name: 'clock', type: 'Electronics'},
    {name: 'ring', type: 'jwellary'},
    {name: 'watch', type: 'Electronics'},
];

const newItems = items.filter(function(value){
    return value.type === 'Electronics';
});



/-- Mapping over an array of user data to create a list of user cards--/

const user = [
    {name: 'John', age: 20},
    {name: 'Virat', age: 21},
    {name: 'Anuja', age:22}
];
let newArray = user.map(function(user){
    return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`;
});


/-- Grouping and array of objects by a specific property (eg. Grouping users by role) --/

const users = [
    {name: 'John', age: 20, role: 'admin'},
    {name: 'Virat', age: 21, role: 'user'},
    {name: 'Anuja', age:22, role: 'admin'}
];

let obj = {};

users.forEach(function(users){
    if(obj[users.role]){
        obj[users.role].push(users);
    }
    else{
        obj[users.role] = [];
        obj[users.role].push(users);
    }
});

console.log(obj);

/-- Removing or updating specific object in an array of data based on unique id. --/

const Boys = [
    {name: 'John', age: 20, id: 1},
    {name: 'Virat', age: 21, id: 2},
    {name: 'Anuja', age:22, id: 3}
];

let newBoys = Boys.filter(function(Boys){
    return Boys.id !== 2;
});
console.log(newBoys);