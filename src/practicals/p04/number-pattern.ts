// Write your code below
export{}
const sizeArg = process.argv[2];

const size = Number(sizeArg);

for (let i = 0; i < size; i++) {
    if (sizeArg === undefined || sizeArg.trim() === "" || isNaN(Number(sizeArg)) || !Number.isInteger(Number(sizeArg)) || Number(inputRaw) <= 0) {
        console.log("Invalid input");
    }else{let result = '';
        const startNumber = size - i;
    
        for(let j = size - i - 1; j > 0; j--){
            result += ' '
        }
    
        for (let j = 6; j > startNumber; j--) {
            const currentNumber = j - startNumber;
            result += currentNumber;
        }
        
        console.log(result);}
}