// chapter 05
// answer 1
// let num_1 = +prompt("Enter the first number:");
// let num_2 = +prompt("Enter the second number:");
let sum = num_1 + num_2;
document.writeln("The sum of the two numbers is: " + sum);


// let num_1 = +prompt("Enter the first number:");
// let num_2 = +prompt("Enter the second number:");
let product = num_1 - num_2;
document.writeln("The difference of the two numbers is: " + product);


    // let num_1 = +prompt("Enter the first number:");
        // let num_2 = +prompt("Enter the second number:");
let multiply = num_1 * num_2;
document.writeln("The product of the two numbers is: " + multiply);

// let num_1 = +prompt("Enter the first number:");
// let num_2 = +prompt("Enter the second number:");
let divide = num_1 / num_2;
document.writeln("The quotient of the two numbers is: " + divide);


// answer 3

// a) Declare variable
    var num;

    // b) Show value after declaration
    document.writeln("Value after variable declaration is: " + num + "<br><br>");

    // c) Initialize variable
    num = 5;

    // d) Show initial value
    document.writeln("Initial value: " + num + "<br><br>");

    // e) Increment
    num++;

    // f) Show after increment
    document.writeln("Value after increment is: " + num + "<br><br>");

    // g) Add 7
    num = num + 7;

    // h) Show after addition
    document.writeln("Value after addition is: " + num + "<br><br>");

    // i) Decrement
    num--;

    // j) Show after decrement
    document.writeln("Value after decrement is: " + num + "<br><br>");

    // k) Remainder after dividing by 3
    var remainder = num % 3;

    // l) Show remainder
    document.writeln("The remainder is: " + remainder);


// answer 4
    // Store ticket price
    var ticketPrice = 600;

    // Number of tickets
    var totalTickets = 5;

    // Calculate total cost
    var totalCost = ticketPrice * totalTickets;

    // Show output
    document.writeln("Cost of one movie ticket is " + ticketPrice + " PKR <br><br>");
    document.writeln("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + " PKR");

// answer 5
    // Number ka variable
    var num = 4;

    document.write("<h2>Multiplication Table of " + num + "</h2>");

    // Loop for table
    for (var i = 1; i <= 10; i++) {
        document.write(num + " x " + i + " = " + (num * i) + "<br>");
    }
