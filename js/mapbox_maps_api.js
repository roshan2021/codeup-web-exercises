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


    // //DRAGONFLY
    // geocode("2332 Leonard St, Dallas, TX 75204", mapboxToken).then(function (result) {
    //     console.log(result);
    //
    //     var map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         zoom: 17
    //     });
    //     // map.setCenter(result);
    //     // map.jumpTo({center: result});
    //     // map.flyTo({center:result});


        // //HG Supply
        // geocode("2008 Greenville Ave, Dallas, TX 75206", mapboxToken).then(function (result) {
        //     console.log(result);
        //
        //     var map = new mapboxgl.Map({
        //         container: 'map',
        //         style: 'mapbox://styles/mapbox/streets-v11',
        //         zoom: 17
        //     });
        //     // map.setCenter(result);
        //     map.jumpTo({center: result});
        //     // map.flyTo({center:result});


    // Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
    // Markers are specific locations on a map
    //Use the .setLngLat() and .addTo() methods to add marker to the map
var markerOptions = {
    color: 'yellow',
};

var markerUchi = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.806658, 32.796756])
    .addTo(map);
var popupUchi = new mapboxgl.Popup()
    .setHTML("<h1>Uchi  \uD83C\uDF63\</h1>")
    .addTo(map);
markerUchi.setPopup(popupUchi);



var markerDragonfly = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.801416, 32.794261])
    .addTo(map);

var popupDragonfly = new mapboxgl.Popup()
    .setHTML("<h1>Dragonfly</h1>")
     .addTo(map);
markerDragonfly.setPopup(popupDragonfly);



var markerHGSupply = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.769791, 32.814356])
    .addTo(map);
var popupHGSupply = new mapboxgl.Popup()
    .setHTML("<h1>HG Supply</h1>")
    .addTo(map);
markerHGSupply.setPopup(popupHGSupply);


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
        ]

});




