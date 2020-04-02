"use strict";

console.log('token: ' + mapboxToken);

mapboxgl.accessToken = mapboxToken;

geocode("2817 Maple Ave, Dallas, TX 75201", mapboxToken).then(function(result) {
    console.log(result);
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 16
    });
    map.setCenter(result);
    // map.jumpTo({center:result});
    // map.flyTo({center:result});
});




