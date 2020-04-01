console.log("Hello from BOM lecture");

var numberOfTimesRun = 0;
var intervalFunction = function () {


}

var interval = setInterval(function() {
    console.log('Are we there yet? '+ numberOfTimesRun);
    numberOfTimesRun++;
}, 1000);




// clearInterval(interval);