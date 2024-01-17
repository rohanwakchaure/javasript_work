

const developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true
}

const newDeveloper = Object.assign({}, developer)
newDeveloper.firstName = "Jenny";
console.log(newDeveloper);
console.log(developer);

console.log(`====== Object merge ===========`);
const user = {
    name: "Bill",
    designation: "CEO"
}
const address = {
    city: "LA",
    country: "USA",
    pin: 112233
}

const mergeObj = Object.assign({}, user, address );
console.log(user);
console.log(address);
console.log(mergeObj);