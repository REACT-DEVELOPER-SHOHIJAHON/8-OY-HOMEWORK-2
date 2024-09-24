function calculatePetAges(humanYears: number): [number, number, number] {
    let catYears: number;
    let dogYears: number;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 15 + 9; 
        dogYears = 15 + 9; 
    } else {
        catYears = 15 + 9 + (humanYears - 2) * 4; 
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    }

    return [humanYears, catYears, dogYears];
}


const ages = calculatePetAges(5);
console.log(ages); 
