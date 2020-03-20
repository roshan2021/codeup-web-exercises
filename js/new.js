
//Refractor the code to use functions
function promptForNumber () {
    var numberInput = prompt('Please enter a number.');
    return parseInt(numberInput);
}

function evenOrOdd(aNumber) {
    if (aNumber % 2 ===0) {
        return "even";
    } else {
        return "odd";
    }
}

function plus100(aNumber) {
    return 100 + aNumber;
}

function negativeOrPositive(aNumber) {
    return(aNumber >= 0) ? "positive" : "negative";
}
