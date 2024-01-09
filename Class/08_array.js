

const arrayNum = [ 2, 4, 6, 8 ]; 
console.log(arrayNum);
console.log(`Total elements in the array is: ${arrayNum.length}`);
console.log(`Array type is: ${typeof arrayNum}`);

console.log(`===== Read or Access value from array =====`);
const elementAtIndex2 = arrayNum[2];
console.log(`Element at index 2 is: ${elementAtIndex2}`);

console.log(`===== Traversing value from array =====`);
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
}

console.log(`===== WAP to Sum of from array =====`);
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
    sum = sum + arrayNum[index];
}
console.log(sum);
console.log(`===== Find index of an element =====`);
const indexOf6 = arrayNum.indexOf(6);
console.log(`Index of 6 is : ${indexOf6}`);
const indexOf303 = arrayNum.indexOf(303);
console.log(`Index of 303 is : ${indexOf303}`);

let array = ["Jenny", "Menny", "Bill"];
console.log(`===== Adding an element at the end  =====`);
array.push("Elon");
console.log(array);

console.log(`===== Adding an element at the beginning  =====`);
array.unshift("Narayan");
console.log(array);
console.log(`===== Selecting multiple elements   =====`);
let arrayNums = [11, 22, 33, 44, 55, 66, 77];
let elements = arrayNums.slice(2);
console.log(elements);

const elementsMiddle = arrayNums.slice(1, 5);
console.log(elementsMiddle);
console.log(`===== Removing or Deleting an elements   =====`);
const removedElements = arrayNums.splice(3);
console.log(`Removed elements`);
console.log(removedElements);
console.log(`Original Array `);
console.log(arrayNums);

console.log(`===== Removing or Deleting an elements using start index and count   =====`);
let arrayNu = [11, 22, 33, 44, 55, 66, 77];
const removed =arrayNu.splice(2,3);
console.log(`Deleted elements`);
console.log(removed);
console.log(`Original Array`);
console.log(arrayNu);
console.log(`===== Replacing an elements in the middle   =====`);
let arrayNN = [11, 22, 33, 44, 55, 66, 77];
console.log(arrayNN);
arrayNN.splice(2, 1, 100 )
console.log(arrayNN);