export{}
const sizeArg = process.argv[2];

const size = Number(sizeArg);

if (sizeArg === undefined || sizeArg.trim() === "" || isNaN(Number(sizeArg)) || !Number.isInteger(Number(sizeArg)) || Number(sizeArg) <= 0) {
    console.log("Invalid input");
}

for (let i = 0; i < size; i++) {
    let result = '';
    const startNumber = size - i;

    for(let j = size - i - 1; j > 0; j--){
        result += ' '
    }

    for (let j = 0; j > startNumber; j++) {
        const currentNumber = startNumber - j;
        result += currentNumber;
    }
    
    console.log(result);
}