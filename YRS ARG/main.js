var map = new L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'kalzone.599fe992',
    accessToken: 'pk.eyJ1Ijoia2Fsem9uZSIsImEiOiJiZWY2YWQ2YTJmMTA1MmQwYmMxYmRlMjhlZTc3YzU5MCJ9.CM4Wm4F8t-gd1MtUAwxTtA'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString() + " Please post this to the forum if there is a lead at this location.")
        .openOn(map);
}

map.on('click', onMapClick);