"use strict";
(function() {


    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        "APPID": OWM_KEY,
        "lat":   32.7767,
        "lon":  -96.78,
        "units": "imperial"
    }).done(function(data) {
        console.log(data);

        var dailyDate = {};

        let htmlCard = "";


        for(var x = 0; x < 5; x++) {
            dailyDate = (data.daily[x].dt) * 1000;
            var dates = new Date((dailyDate));
            var extractDate = dates.toDateString();

            var maxTemp = data.daily[x].temp.max;
            maxTemp = Math.round(maxTemp);

            var minTemp = data.daily[x].temp.min;
            minTemp = Math.round(minTemp);

            var iconUrl = "http://openweathermap.org/img/wn/"+data.daily[x].weather[0].icon+"@2x.png";
            var description1 = data.daily[x].weather[0].description;
            var humidity1 = data.daily[x].humidity;

            var wind1 = data.daily[x].wind_speed;
            wind1 = Math.round(wind1);

            var pressure1 = data.daily[x].pressure;

            var headerLocation = "";


            $("#weatherDays").empty();


            htmlCard +=  "<div class=\"card border-dark text-center\" style=\"width: 18rem;\">" +
                "<div class=\"card-header bg-secondary text-white text-center\">"+extractDate+"</div>\n" +
                "<ul class=\"list-group list-group-flush\"> \n" +
                "<li class=\"list-group-item text-center font-weight-bold text-primary\">"+maxTemp+"&#8457;"+" / "+minTemp+"&#8457;"+"<img src='"+iconUrl+"'>"+"</li>\n" +
                // "<li class=\"list-group-item\">"+minTemp+"&#8457;"+"</li>\n" +
                // "<img src='"+iconUrl+"'>" +
                "<li class=\"list-group-item bg-light\">Description: "+description1+"</li>\n" +
                "<li class=\"list-group-item \">Humidity: "+humidity1+" %"+"</li>\n" +
                "<li class=\"list-group-item bg-light\">Wind: "+wind1+" mph"+"</li>\n" +
                "<li class=\"list-group-item \">Pressure: "+pressure1+" inHG"+"</li>\n" +
                "</ul>" +
                "</div>";

            $("#weatherDays").append(htmlCard);
        }
    }).fail(function(errors){
        console.error(errors);
    });



})();

// MAPBOX API
mapboxgl.accessToken = weatherMapboxToken;

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-96.78, 32.7767], // starting position
    zoom: 9 // starting zoom
});