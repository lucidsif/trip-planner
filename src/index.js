const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = "pk.eyJ1IjoibWlrZS1zaWYiLCJhIjoiY2o2ODNnb3NuMGJxazMybXpoeW0waHRhbiJ9.txjvFN8zKTjPj_rr5tMc7g";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack coordinates
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

/*
var mapDiv = document.getElementById('map');

mapDiv.appendChild(map);
    */

const iconURLs = {
    hotel: "http://i.imgur.com/WbMOfMl.png",
    restaurant: "http://i.imgur.com/D9574Cu.png",
    activity: "http://i.imgur.com/cqR6pUI.png"
};

// marker.src = 'http://www.iconsdb.com/icons/preview/soylent-red/map-marker-2-xxl.png';
// marker.style.width = "32px";
// marker.style.height = "39px";
// new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);

function buildMarker(type, coord) {
    var marker = document.createElement('img');
    marker.src = iconURLs[type];
    marker.style.width = "32px";
    marker.style.height = "39px";
    new mapboxgl.Marker(marker).setLngLat(coord).addTo(map);
}

//buildMarker('hotel', [-74.009150, 40.705086]);





