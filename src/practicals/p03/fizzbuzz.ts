export{}
const inputRaw = process.argv[2];

if (inputRaw === undefined || inputRaw.trim() === "" || isNaN(Number(inputRaw)) || !Number.isInteger(Number(inputRaw)) || Number(inputRaw) <= 0) {
  console.log("Invalid input");
}

const input = Number(inputRaw);

for (let i = 1; i < input; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}