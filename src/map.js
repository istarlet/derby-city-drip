// Making a map
const map = L.map("mapLouisville").setView([38.25817, -85.77126], 17);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreet Map</a> contributors';

// Making tiles  
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// Making a custom location marker
L.marker([38.25817, -85.77126]).addTo(map)
    .bindPopup('Derby City Drip <br /> Coffee Shop')
    .openPopup();
