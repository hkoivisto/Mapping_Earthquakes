// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([35, -94.5], 6);

L.circle([32.7767, -96.7979], {
    radius: 20000,
    color: "red"
}).addTo(map);

var line = [
    [40.7128, -74.0060],
    [43.6532, -79.3832]
];

L.polyline(line, {
    color: "blue"
 }).addTo(map);


var coords = [[33.7490, -84.3880], [32.0809, -81.0912]]

L.polygon()



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);