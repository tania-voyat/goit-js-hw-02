let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt('Enter a number');
  numbers.push(Number(input));

  if (input === null) {
    break;
  }
}

for (const number of numbers) {
  total += number;
}

console.log(`Total sum is ${total}`);
