
let professor = {
    profName:"R.R.Raskar",
    age:34,
    subject: "Java",
    designation:"HOD",
    adress:"Ahmednagar",
    degree:{
    engineering:"CSC",
    phd:"Adv Computing",
    mcs:"Computer Science",
    },
 certificates:["Hacker Rank Participation","Certificate in IFE course","Cerificate  in Adv Programing"],
 totalExperience:{
 
    }
 }
 console.log("------------- Step 1 -----------------------");
 console.log(professor);
 console.log("------------- Step 2 -----------------------");
 console.log(professor.degree);
 console.log("------------- Step 3 -----------------------");
 console.log(professor.certificates);
 console.log("------------- Step 4 -----------------------");
 professor.totalExperience.experience="14 years";
 console.log(professor.totalExperience);
 console.log("------------- Step 5 -----------------------");
 console.log("Modify adress Solapur to Sangola :");
 professor.adress="Sangola";
 console.log(professor);
 console.log("------------- Step 6 -----------------------");
 console.log("Add new Certificate is :");
 professor.certificates.push("Oracle Certified");
 console.log(professor.certificates);
 console.log("------------- Step 7 -----------------------");
 // let lastElement=professor.certificates.pop();
  let lastElement=professor.certificates.splice(-1);
 // let lastElement=professor.certificates[professor.certificates.length-1];
 console.log(lastElement);
 console.log("------------- Step 7 -----------------------");
 console.log(professor);
 console.log("------------- Step 7 -----------------------");
 for (const key of professor.certificates) {
    const element = professor.certificates[key];
         console.log(`Certificate ==> ${key}`);
 }
  
 
 let person = 
 {
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
 person.isMarried=false;
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
 address.city="Pune";
 console.log(address);
 
 console.log(person.show);
 
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
 developer.skills.push("HTML");
 console.log(developer.skills);
 
 developer.skills.shift( );
 console.log(developer.skills);