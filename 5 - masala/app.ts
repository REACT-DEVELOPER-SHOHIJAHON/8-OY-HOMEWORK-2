function doubleCharacters(input: string): string {
    let result = '';

    for (const char of input) {
        result += char.repeat(2); 
    }

    return result;
}


console.log(doubleCharacters("String"));      
console.log(doubleCharacters("Hello World")); 
console.log(doubleCharacters("1234!_ "));    


