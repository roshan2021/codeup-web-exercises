(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var areaCircle = (Math.pow(this.radius, 2)) * Math.PI;

            return areaCircle; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            var areaCircle = this.getArea();

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


            if(doRounding === true) {
                areaCircle = Math.round( areaCircle );
            }


            console.log("Area of a circle with radius: " + this.radius + ", is: " + areaCircle);
        }
    };

    // console.log('circle.getArea ' , circle.getArea());



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

        circle.radius = 5;


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();
