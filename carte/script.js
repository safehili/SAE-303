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
  
  
   
   let layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);