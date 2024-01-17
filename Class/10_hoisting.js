

console.log(country); //  Allowed because variable declared using var keyword always hoisted
//console.log(city); // Not allowed because variable declared using let keyword never hoisted
// console.log(PIN); // Not allowed because variable declared using const keyword never hoisted
var country = 'Bharat';
let city = "Pune";
const PIN = 12345;


display(); // Allowed because named Function are hoisted

function display(){
    console.log(`Inside Display....`);
}

// show(); // Not allowed because Function expression never hoisted
let show = function(){
    console.log(`Inside Function expression....`);
}