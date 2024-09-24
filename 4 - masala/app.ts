function calculateValue(value: any): number | string {
    
    if (typeof value === 'number') {
        return value * 50 + 6;
    } else {
        return "Error"; 
    }
}


console.log(calculateValue(2));     
console.log(calculateValue(0));     
console.log(calculateValue("test")); 
console.log(calculateValue(5));     


