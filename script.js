
const world = Globe()
  (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .backgroundColor('#111')
    .pointsData([
  { lat: 7.95, lng: -1.02, size: 1, country: 'Ghana' },
  { lat: 56.1304, lng: -106.3468, size: 1, country: 'Canada' },
  { lat: 36.2048, lng: 138.2529, size: 1, country: 'Japan' },
  { lat: -14.2350, lng: -51.9253, size: 1, country: 'Brazil' },
  { lat: 18.1096, lng: -77.2975, size: 1, country: 'Jamaica' }
])

    .pointAltitude(0.1)
    .pointColor(() => 'blue')
   .onPointClick((point) => {
  const popup = document.getElementById('popup');
  popup.innerHTML = `
    <h2>🌍 ${point.country}</h2>
    <p><strong>Artist:</strong> TBD</p>
    <p><em>"This is a placeholder story for ${point.country}."</em></p>
    <button onclick="closePopup()">Close</button>
  `;
  popup.style.display = 'block';
});



function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
