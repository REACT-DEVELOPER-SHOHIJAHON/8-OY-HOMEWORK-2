function trafficLight(current: string): string {
    switch (current) {
        case "green":
            return "yellow";
        case "yellow":
            return "red";
        case "red":
            return "green";
        default:
            return "Invalid input"; 
    }
}


console.log(trafficLight("green"));  
console.log(trafficLight("yellow")); 
console.log(trafficLight("red"));    
console.log(trafficLight("blue"));   

