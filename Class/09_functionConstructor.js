
function Student(id, name, marks){
    this.id = id;
    this.name = name;
    this.marks = marks;
    this.display = function(){
        console.log(`ID: ${this.id}, Name: ${this.name}, Marks: ${this.marks}`);
    }
}
const stew = new Student(11, "Stew", 99);
console.table(stew);
const jenny = new Student(22, "Jenny", 88);
console.table(jenny);
jenny.display();
stew.display();
const elon = new Student(33, "Elon", 60);

Student.prototype.country = "India";
console.log(elon.name);
console.log(elon.country);
console.log(stew.country);
console.log(jenny.country);