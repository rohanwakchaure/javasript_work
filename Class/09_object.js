

let person = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true
}
console.log(person);

console.log(`Dot Notation`);
console.log(person.firstName); // 
console.log(`Square bracket Notation`);
console.log(person["firstName"]); // 

person.designation = "Tech Arch";
console.log(person);

person.age = 33; // Update
console.log(person);

person.isMarried = false;
//console.table(person);

delete person.designation;
console.table(person);

console.log(`Empty Object....`);
let address ={

}

address.city="pune";
console.log(address);

let user = {
    userName: "Jenny",
    country: "USA",
    address: {
        city: "Pune",
        street: "Wakad",
        pin: 411057,
        getAddress: function(){
           console.log(`Complete Address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`); 
        }
    },
    show: function(){
        console.log(`Inside show function`);
    }
}
console.log(user);
let country = user.country;
console.log(country);
user.show();

console.log(user.address.pin);
user.address.flatNo = 308;
console.log(user.address);

user.address.getAddress();

console.log(`====== Traversing an object ========`);
let developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]
}
for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

console.log(developer.skills);
