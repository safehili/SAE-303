let mapOptions = {

    maxZoom: 18,
       minZoom: 9,
   
       center:[48.90716624170742, 2.264013471399747],
       zoom:9.5
   }
   
   
   let map = new L.map('map' , mapOptions);
  
  
   
   let layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <base target=_parent><a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);