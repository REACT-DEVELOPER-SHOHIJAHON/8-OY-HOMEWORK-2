function shortLongShort(a: string, b: string): string {
    return (a.length < b.length ? a : b) + (a.length >= b.length ? a : b) + (a.length < b.length ? a : b);
}

console.log(shortLongShort("1", "22"));  
console.log(shortLongShort("22", "1"));  
console.log(shortLongShort("", "hello")); 
console.log(shortLongShort("hello", "")); 


