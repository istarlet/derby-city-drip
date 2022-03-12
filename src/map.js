const map = L.map("mymap").setView([51.505, -0.09], 13);

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreet Map</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
