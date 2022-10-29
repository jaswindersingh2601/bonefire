const c = JSON.parse(Camp)
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [c.latitude, c.longitude], // starting position [lng, lat]
zoom: 9, // starting zoom
projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});

const marker2 = new mapboxgl.Marker({ color: 'Red'})
.setLngLat([c.latitude, c.longitude])
.addTo(map)