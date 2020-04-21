"use strict";
console.log('token: ' + mapboxToken);

mapboxgl.accessToken = mapboxToken;

//UCHI
    geocode("2817 Maple Ave, Dallas, TX 75201", mapboxToken).then(function (result) {
        console.log(result);

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 12
        });
        // map.setCenter(result);
        map.jumpTo({center: result});
        // map.flyTo({center:result});

//Create Marker color
var markerOptions = { color: 'red', };

//UCHI popup, marker
var popupUchi = new mapboxgl.Popup()
    .setHTML("<h1>Uchi  \uD83C\uDF63\</h1>");
    new mapboxgl.Marker(markerOptions)
        .setLngLat([-96.806658, 32.796756])
        .setPopup(popupUchi).addTo(map);


//Dragonfly popup, marker
var popupDragonfly = new mapboxgl.Popup().setHTML("<h1>Dragonfly</h1>");
new mapboxgl.Marker(markerOptions).setLngLat([-96.801416, 32.794261]).setPopup(popupDragonfly).addTo(map);


//HG Supply popup, marker
var popupHGSupply = new mapboxgl.Popup()
    .setHTML("<h1>HG Supply</h1>");
    new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.769791, 32.814356])
    .setPopup(popupHGSupply)
    .addTo(map);


        var restaurants = [
            {
                name: 'Uchi',
                address: "2817 Maple Ave Dallas, TX 75201",
                genre: 'sushi'
            },
            {
                name: 'Dragonfly',
                address: '2332 Leonard St, Dallas, TX 75204',
                genre: 'Amercian'
            },
            {
                name: 'HG Supply',
                address: '2008 Greenville Ave, Dallas, TX 75206',
                genre: 'Amercian'
            }
        ];

        restaurants.forEach(function(arestaurant, index){
            console.log("Restaurant name: " + arestaurant.name);
            console.log("Address: " + arestaurant.address);
            console.log("Genre: " + arestaurant.genre);
            console.log("---");
        });
});




