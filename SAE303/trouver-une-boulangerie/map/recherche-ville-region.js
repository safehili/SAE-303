let geocoder = L.Control.geocoder({
    defaultMarkGeocode: false,
    placeholder: "Recherchez une Ville, Région..."
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
  
    