"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var wantToEnterNum = confirm ("Would you like to enter a number?");

if (wantToEnterNum) {
    var enteredString = prompt("Enter a number");

    if (!isNaN(enteredString)) {
        var enteredNum = parseInt(enteredString);

        alertOddOrEven(enteredNum);
        alertNumberPlus100(enteredNum);
        alertWhatSignNum(enteredNum);

    } else {
        alert("You did not enter a number");
    }
}

function alertOddOrEven(num) {
    if (num % 2 === 0) {
        alert("The number is even");
    } else {
        alert("The number is odd");
    }
}

function alertNumberPlus100(num) {
    alert("Your number plus 100 is: " + (num  + 100));
}

function alertWhatSignNum(num){
    if (enteredNum >= 0) {
        alert ("It is a positive number");
    } else {
        alert ("It is a negative number");
    }
}



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var enteredColor = prompt("Enter a color from the rainbow");
console.log(analyzeColor(enteredColor));

function analyzeColor(color) {
    color = color.toLowerCase();
    if (color === 'red') {
        return "Red are for roses";
    } else if (color === 'yellow') {
        return "Yellow is the sun";
    } else if (color === 'orange') {
        return "Orange are oranges";
    } else if (color === 'green') {
        return "Green are for grass";
    } else if (color === 'blue') {
        return "Blue is the sky";
    } else if (color === 'indigo') {
        return "Indigo is for ink";
    } else if (color === 'violet') {
        return "Violets are flowers";
    } else {
      return "You did not enter a color of the rainbow";
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    color = color.toLowerCase();
    var returnString = "";

    switch (color) {
        case "red":
            returnString = "Red are for roses";
            break;
        case "yellow":
            returnString = "Yellow is the sun";
            break;
        case "orange":
            returnString = "Orange are oranges";
            break;
        case "green":
            returnString = "Green is for grass";
            break;
        case "blue":
            returnString = "Blue is for the sky";
            break;
        case "indigo":
            returnString = "Indigo is for ink";
            break;
        case "violet":
            returnString = "Violet are for flowers";
            break;
        default:
            returnString = "You did not enter a color of the rainbow";
    }
    return returnString
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var retrieveColor = prompt ("Enter a color");
alert(analyzeColorSwitch(retrieveColor));




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNum, total) {
    var discountPercentage = 0;
    if (luckyNum === 0) {
        discountPercentage = 0;
    } else if (luckyNum === 1) {
        discountPercentage = .1;
    } else if (luckyNum === 2) {
        discountPercentage = .25;
    } else if (luckyNum === 3) {
        discountPercentage = .35;
    } else if (luckyNum === 4) {
        discountPercentage = .50;
    } else if (luckyNum === 5) {
        discountPercentage = 1;
    }

    return (1 - discountPercentage) * total;
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));






/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt ("What is your total bill?");
var discountedPrice = calculateTotal(luckyNumber, totalBill);
alert("Your lucky number is: " + luckyNumber);
alert("Your original price before the discount is: " + totalBill);
alert("You price after the discount is: " + discountedPrice);

