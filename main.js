// console.log("CONNECTED");

// function sayHello() {
//   console.log("Hello!");
// }

// const sayHello = function() {
//   console.log("Hello!");
// }

// const sayHello = () => {
//   console.log("Hello!");
// }

// sayHello();

// ******* FUNCTIONS WITH ARGUMENTS *****
// function logsHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// logsHello('Dr. T');
const sum = 55;

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log("Console log inside the function", sum);
  return sum;
}

console.log(sum);
console.log(addsTwoNumbers(2, 1));
console.log(sum);
