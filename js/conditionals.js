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

var isEnteringNumber = confirm("Would you like to enter a number?");

if(isEnteringNumber) {
    console.log(isEnteringNumber);
    var enterNumber = prompt("Enter a number");
    enterNumber = parseInt(enterNumber);

    if (isNaN(enterNumber)) {
        alert('You did not enter a number');
    } else {
        if (enterNumber % 2 === 0) {
            alert(enterNumber + ' is even');
        } else {
            alert(enterNumber + ' is odd');
        }

        alert('Add 100 to your number = '  +  (enterNumber + 100));


        if (enterNumber >= 0) {
            alert(enterNumber + ' is positive');
        } else if (enterNumber < 0) {
            alert(enterNumber + ' is negative');
        }
    }
}



//Douglas' solution to the exercise using "FUNCTIONS" approach
// var isEnteringNumber = confirm('Would you like to enter a number?');
// if (isEnteringNumber) {
//     //console.log('Entering a number.');
//     var parsedNumber = promptForNumber('Please enter a number.');
//     //console.log(parsedNumber, isNaN(parsedNumber));
//     if(isNaN(parsedNumber)) {
//         alert("You didn't enter a number");
//     } else {
//         alert("You entered a number.");
//         // * - whether the number is even or odd.
//         alert('The number is ' + evenOrOdd(parsedNumber));
//         // * - what the number plus 100 is
//         alert('The number plus 100 is ' + plus100(parsedNumber));
//         // * - if the number is negative or positive
//         alert('The number is ' + negativeOrPositive(parsedNumber));
//     }
// }
//
// // Prompt the user for a number. Will return the number or NaN if they don't enter a number.
// function promptForNumber(message) {
//     var numberInput = prompt(message);
//     return parseInt(numberInput);
// }
//
// // Takes a number and returns the text "even" or "odd" depending on the number.
// function evenOrOdd(aNumber) {
//     if (aNumber % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
//
// function plus100(aNumber) {
//     return aNumber + 100;
// }
//
// //Take a number and return the text "positive" or "negative" depending on the number.
// function negativeOrPositive(aNumber) {
//     return (aNumber >= 0) ? "positive" : "negative";
// }



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


function analyzeColor(color) {
    if(color === 'blue') {
        return color + " is the sky";
    } else if (color === 'red') {
        return 'Strawberries are ' + color;
    }  else if (color === 'cyan') {
        return "I don't know anything about " + color;
    } else {
        return color + " is not a valid color";
    }
}

console.log(analyzeColor('green'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));


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

function analyzeColor(color) {
    switch (color) {
        case 'blue':
            return color + " is the sky";
            break;
        case 'red':
            return 'Strawberries are  ' + color;
            break;
        case 'cyan':
            return "I don't know  " + color;
            break;
        default:
            return color + " is not valid";
            break;
    }
}

console.log(analyzeColor('green'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var enterColor = prompt("enter a color");
alert(analyzeColor(enterColor));




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


function calculateTotal(luckyNumber, totalBill) {
    if ( luckyNumber === 0 || luckyNumber > 5) {
        return totalBill;
    } else if (luckyNumber === 1) {
        return totalBill * 0.90;
    }   else if (luckyNumber === 2) {
        return totalBill * 0.75;
    } else if (luckyNumber === 3) {
        return totalBill * 0.65;
    }   else if (luckyNumber === 4) {
        return totalBill * 0.50;
    }   else if (luckyNumber === 5) {
        return 0;
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));





// function calculateTotal(luckyNum, total) {
//     var discountPercentage = 0;
//     if (luckyNum === 0) {
//         discountPercentage = 0;
//     } else if (luckyNum === 1) {
//         discountPercentage = .1;
//     } else if (luckyNum === 2) {
//         discountPercentage = .25;
//     } else if (luckyNum === 3) {
//         discountPercentage = .35;
//     } else if (luckyNum === 4) {
//         discountPercentage = .50;
//     } else if (luckyNum === 5) {
//         discountPercentage = 1;
//     }
//
//     return (1 - discountPercentage) * total;
// }
//
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(3, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));






/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("What is your total bill?");
totalBill = parseInt(totalBill);

var discountedPrice = calculateTotal(luckyNumber, totalBill);
alert("Your lucky number is " + luckyNumber);
alert("Your bill before discount is " + totalBill);
alert("Your price after discount is " + discountedPrice);

