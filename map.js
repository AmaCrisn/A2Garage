var map = L.map("map", {
    center: [-6.5, 107], // Lat, Lng coordinates for center of Indonesia
    zoom: 6, // Initial zoom level
    scrollWheelZoom: false, // Disable zooming with the scroll wheel
    zoomControl: true // Enable zoom buttons
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

var locations = [
    { name: "A2Garage Jakarta", lat: -6.2088, lng: 106.8456 },
    { name: "A2Garage Bandung", lat: -6.9175, lng: 107.6191 },
    { name: "A2Garage Surabaya", lat: -7.2575, lng: 112.7521 }
];

locations.forEach(function (location) {
    L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`);
});

// Enable pinch-to-zoom for mobile devices
map.touchZoom.enable();
