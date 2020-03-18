"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my Website!");

var favColor = prompt('What is your favorite color?');

alert("Great, " + favColor + " that is my favorite color, too!");


/*
Write some JavaScript code, that is, variables and operators, to describe
the following scenarios. Do not worry about the real operations to get
the values, the goal of these exercises is to understand how real world
conditions can be represented with code.
 */

/*
You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't
know yet if they're going to like it). If price for a movie per day is $3,
how much will you have to pay?
 */

var littleMermaid = prompt('How many days you want to rent The Little Mermaid?');
var brotherBear = prompt("How many days you want to rent Brother Bear?");
var hercules = prompt("How many days you want to rent Hercules?");

var totalRental = (parseInt(littleMermaid * 3) + parseInt(brotherBear * 3) + parseInt(hercules * 3));

alert("The total rental $ " + totalRental);

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon
and Facebook, they pay you a different rate per hour. Google pays $400,
Amazon $380, and Facebook $350. How much will you receive in payment for this
week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
//Contractor Rates
var googleRate = prompt ("What is your rate for Google?");
googleRate = parseInt(googleRate);

var amazonRate = prompt ("What is your rate for Amazon?");
amazonRate = parseInt(amazonRate);

var fbRate = prompt ("What is your rate for Facebook?");
fbRate = parseInt(fbRate);

//Collect Hours
var googleHours = prompt ("How many hours did you work at Google this week?");
googleHours = parseInt(googleHours);

var amazonHours = prompt ("How many hours did you work at Amazon this week?");
amazonHours = parseInt(amazonHours);

var fbHours = prompt ("How many hours did you work at Facebook this week?");
fbHours = parseInt(fbHours);


var totalDollars = (googleRate * googleHours) + (amazonRate * amazonHours) + (fbRate *fbHours);

alert("Total dollars $ " + totalDollars);


/*
A student can be enrolled in a class only if the class is not full and the class schedule
does not conflict with her current schedule.
 */
var isClassFull = false;
var isClassConflict = false;

var canAttendClass = (!isClassFull && !isClassConflict);

alert('Student can attend class ' + canAttendClass);


/*
A product offer can be applied only if a person buys more than 2 items, and the
offer has not expired. Premium members do not need to buy a specific amount of
products.
 */

var numberOfItems = prompt ("How many items do you want to buy?");
numberOfItems = parseInt(numberOfItems);



var numberOfItemsRequired = prompt("How many items are required for the offer?");
numberOfItemsRequired = parseInt(numberOfItemsRequired);


var isOfferExpired = false;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && !isOfferExpired) ||
    (numberOfItems >= numberOfItemsRequired && !isOfferExpired);

alert('Offer is valid ' + isOfferValid);












