let mapOptions = {

 maxZoom: 18,
    minZoom: 9,
    maxBounds: [
        //south west
        [48.90716624170742, 2.264013471399747],
        //north east
        [48.90716624170742, 2.264013471399747]
        ],

    center:[48.90716624170742, 2.264013471399747],
    zoom:9.5
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// let geocoder = L.Control.geocoder().addTo(map);

let geocoder = L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
      bbox.getSouthEast(),
      bbox.getNorthEast(),
      bbox.getNorthWest(),
      bbox.getSouthWest()
    ]).addTo(map);
    map.fitBounds(poly.getBounds());
    poly.remove();
  })
  .addTo(map);

  /* si au clique il faut retirer le polygone : 

poly.on('click', function () {
  poly.remove();
});

*/