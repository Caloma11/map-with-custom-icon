import mapboxgl from 'mapbox-gl';

const injectCoordinates = (coordinates) => {
  const paragraphElement = document.getElementById('coordinates');
  paragraphElement.innerText = `${coordinates.lat}, ${coordinates.lng}`;
};

const injectMap = (coordinates) => {
  const lng = coordinates.lng;
  const lat = coordinates.lat;

  mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fsb21hMTEiLCJhIjoiY2s2bHZiN3E5MGh1ZDNkcDZ4NnBkMTFoeiJ9.kTv8NsoN52qAI_LTv2MAjg';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [ lng, lat ],
    zoom: 12
  });

  var el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
    .setLngLat([ lng, lat ])
    .addTo(map);

};

export { injectCoordinates, injectMap };


