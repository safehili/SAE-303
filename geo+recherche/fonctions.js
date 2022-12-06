async function getText(file)
{
    const arrayNumber = fetch(file)
    .then((response) => response.text())
    .then((data) => {
        const obj = JSON.parse(data);  

        function Coordonnées(item, index) {
          let marker = new L.Marker([obj[index].latitude, obj[index].longitude], {icon: greenIcon});
          marker.bindPopup().openPopup();

          let isClicked = false

          marker.on({
          mouseover: function() {
          if(!isClicked) {
          this.bindPopup(obj[index].nom).openPopup()
        }
        },
          mouseout: function() { 
          if(!isClicked) {
            this.closePopup()
        }
    },
        click: function() {
        isClicked = true
        this.bindPopup("Nom : " + obj[index].nom + "<br>" + "Adresse : " + 
                                  obj[index].adresse + "<br>" + "Code Postale : " + 
                                  obj[index].cp + "<br>" + "Ville : " + 
                                  obj[index].ville + "<br>" + "Departement : " + 
                                  obj[index].departement + "<br>" + "Adresse Contact : " + 
                                  obj[index].adresse_concat + "<br>").openPopup()
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
        obj.forEach(Coordonnées);
    });     
}

getText("geo-boulangeries.json");








//   console.log(obj[0].nom);
     //  console.log(obj[0].longitude);
     //   console.log(obj[0].latitude);

