// Import the necessary modules
import L from 'leaflet';
import 'leaflet-draw';
import stacLayer from 'stac-layer';

// Your JavaScript code
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
  draw: {
    polyline: false,
    polygon: false,
    circle: false,
    marker: false,
    circlemarker: false,
    rectangle: true
  },
  edit: {
    featureGroup: drawnItems
  }
});

map.addControl(drawControl);
