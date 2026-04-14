// Loop for printing even numbers from 1 to 100
for (let i = 1; i <= 100; i++) 
    if (i % 2 === 0) {
        console.log(i);
    }

while (true) {
    let input = prompt("Enter a number (or 'exit' to quit):");  
    if (input.toLowerCase() === 'exit') {
        break;  
    }   
    let number = parseFloat(input);
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else {
        console.log("You entered: " + number);
    }
}