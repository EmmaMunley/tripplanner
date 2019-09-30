const mapboxgl = require('mapbox-gl');
const createNewMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZW1tYW11bmxleSIsImEiOiJjazE2bHh5NWMweXV3M21uaTJpMzRlM2RwIn0.L6k7AE4kkRLCUPSWPsUj9g';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const fullStack = [-74.009151, 40.705086];
createNewMarker('hotels', fullStack).addTo(map);

module.exports = { map };
