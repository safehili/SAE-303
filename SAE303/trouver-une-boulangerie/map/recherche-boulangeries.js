let poiLayers = L.geoJSON(boulangeries, {
    onEachFeature: function(feature, layer) {
      
      let marker = new L.Marker([feature.properties.latitude, feature.properties.longitude]);
            layer.bindPopup().openPopup();
  
            let isClicked = false
  
            layer.on({
            mouseover: function() {
            if(!isClicked) {
            this.bindPopup(feature.properties.nom).openPopup()
          }
          },
            mouseout: function() { 
            if(!isClicked) {
              this.closePopup()
          }
      },
          click: function() {
          isClicked = true
          layer.bindPopup("<base target=_parent><a href='../../statistiques/index.html'>Voir les statistiques</a>" 
          + "<br>" + "Nom : " + feature.properties.nom + "<br>" + "Adresse : " + 
          feature.properties.adresse + "<br>" + "Code Postale : " + 
          feature.properties.cp + "<br>" + "Ville : " + 
          feature.properties.ville + "<br>" + "Département : " + 
          feature.properties.departement + "<br>" + "Adresse Contact : " + 
          feature.properties.adresse_concat + "<br>").openPopup()
          
      }
  })
  
          map.on ({
          click: function() {
          isClicked = false
      },
          popupclose: function () {
          isClicked = false
      }
  })
            marker.addTo(map);
    }
  });
  
  L.control.search({
      layer: poiLayers,
      initial: false,
      propertyName: 'nom', 
      textPlaceholder: 'Recherchez une boulangerie...'
    })
    .addTo(map);