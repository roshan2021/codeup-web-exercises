"use strict";

console.log('token: ' + mapboxToken);

mapboxgl.accessToken = mapboxToken;

geocode("2817 Maple Ave, Dallas, TX 75201", mapboxToken).then(function(result) {
    console.log(result);
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 17
    });
    map.setCenter(result);
    // map.jumpTo({center:result});
    // map.flyTo({center:result});





    // Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
    // Markers are specific locations on a map
    //Use the .setLngLat() and .addTo() methods to add marker to the map
var markerOptions = {
    color: 'green',
};

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.806658, 32.796756])
    .addTo(map);


});




