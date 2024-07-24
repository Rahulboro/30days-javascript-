//***               Activity 1: Arithmetic Operations               ***
//Task 1: Write a program to add two numbers and log the result to the console.
let taskOneNum = 10;
let taskOneNum2 = 20;
let taskOneResult = taskOneNum + taskOneNum2;
console.log(taskOneResult);

//Task 2: Write a program to subtract two numbers and log the result to the console.
let taskTwoNum = 50;
let taskTwoNum2 = 20;
let taskTwoResult = taskTwoNum - taskTwoNum2;
console.log(taskTwoResult);

//Task 3: Write a program to multiply two numbers and log the result to the console.
let taskThreeNum = 10;
let taskThreeNum2 = 20;
let taskThreeResult = taskThreeNum * taskThreeNum2;
console.log(taskThreeResult);
//Task 4: Write a program to divide two numbers and log the result to the console.
let taskFourNum = 100;
let taskFourNum2 = 20;
let taskFourResult = taskFourNum / taskFourNum2;
console.log(taskFourResult);
//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let taskFiveNum = 100;
let taskFiveNum2 = 3;
let taskFiveResult = taskFiveNum % taskFiveNum2;
console.log(taskFiveResult);

// ***              Activity 4:Assignment Operators                ***
// Task 6: Use the += operator to add a number to a variable and log the result to the console
let taskSixNum = 10;
taskSixNum += 60;
console.log(taskSixNum);
// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console
let taskSevenNum = 100;
taskSevenNum -= 60;
console.log(taskSevenNum);
//***               Activity 3:Comparison Operators                ***
// Task 8: Write a program to compare two numbers using > and < and log the result to the console
let taskEightNum = 10;
let taskEightNum2 = 20;
if (taskEightNum > taskEightNum2) {
  console.log(`task Eight Number is bigger than task Eight Number`);
} else {
  console.log(`task Eight Number is smaller than task Eight Number`);
}
// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console
let taskNineNum = 30;
let taskNineNum2 = 40;
if (taskNineNum <= taskNineNum2) {
  console.log("task nine Number is smaller or equal to task nine 2");
} else {
  console.log("task nine Number2 is smaller or equal to task nine ");
}
// Task 10: Write a program to compare two number using == and === and log the result to the console
let taskTenNum = 10;
let taskTenNum2 = 0;
if (taskTenNum == taskTenNum2) {
  console.log(`taskTenNum is equal to taskTenNum2 `);
} else {
  console.log(`taskTenNum is not equal to taskTenNum2 `);
}
taskTrippleEqualOne = 100;
taskTrippleEqualTwo = 100;
if (taskTrippleEqualOne == taskTrippleEqualTwo) {
  console.log(`task tripple is euqal number`);
} else {
  console.log(`tripple is not equal`);
}
// Task 11: Write a program that uses && operator to combine two conditions and log the result to the console
let taskElevenNum = 20;
let taskElevenNum2 = 20;

if (taskElevenNum && taskElevenNum2 == Number) {
  console.log(`Number and Number2 are number `);
} else {
  console.log(`Number one and Number two are not number`);
}

// Task 12: Write a program that uses the || operator to combine two condition and log the result to the console
let task12One = true;
let task12Second = false;
const resultTask = task12One || task12Second;
console.log(resultTask);
// task 13: Write a program that uses the ! operator to negate a condition and log the result to the console
let task13One = true;
let task13Second = false;
const resultTask13 = !task13One;
