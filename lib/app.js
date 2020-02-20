// TODO: Write your JS code in here
import { injectCoordinates, injectMap } from './geocode';

const formElement = document.getElementById('searchForm');
formElement.addEventListener('submit', (event) => {
  // prevent form's default behavior
  event.preventDefault();

  // get input value
  const address = document.getElementById('address').value;
  const mapboxKey = 'pk.eyJ1IjoiY2Fsb21hMTEiLCJhIjoiY2s2bHZiN3E5MGh1ZDNkcDZ4NnBkMTFoeiJ9.kTv8NsoN52qAI_LTv2MAjg';
  // trigger request to Google Maps API
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxKey}`)
    .then(response => response.json())
    .then((data) => {
      const coordinates = {
        lng: data.features[0].geometry.coordinates[0],
        lat: data.features[0].geometry.coordinates[1]
      };
      injectCoordinates(coordinates);
      injectMap(coordinates);
    });
});
