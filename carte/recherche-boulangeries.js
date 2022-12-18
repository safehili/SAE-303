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
          layer.bindPopup("<canvas id='myChart' height='250'></canvas>" + "<br>" + "<a href='graphique/graphique.html'>Voir les statistiques</a>" 
          + "<br>" + "Nom : " + feature.properties.nom + "<br>" + "Adresse : " + 
          feature.properties.adresse + "<br>" + "Code Postale : " + 
          feature.properties.cp + "<br>" + "Ville : " + 
          feature.properties.ville + "<br>" + "Departement : " + 
          feature.properties.departement + "<br>" + "Adresse Contact : " + 
          feature.properties.adresse_concat + "<br>").openPopup()
          


// ajout du graph avec chart js

          let data = nb_boulangerie_idf.map((item) => item.nombre) // Donnée, propriété data
let labels = nb_boulangerie_idf.map((item) => item.dpt) // Libellé, propriété labels

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Boulangers par département en Île-de-France',
      data: data,
      backgroundColor: [ 
        'rgba(255, 26, 104, 0.2)',
        'rgba(26, 26, 104, 0.2)',
        'rgba(26, 255, 104, 0.2)',
        'rgba(104, 26, 255, 0.2)',
        'rgba(255, 26, 26, 0.2)',
        'rgba(26, 104, 255, 0.2)',
        'rgba(200, 255, 104, 0.2)',
        'rgba(255, 104, 104, 0.2)',
      ],
      borderWidth: 1
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
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