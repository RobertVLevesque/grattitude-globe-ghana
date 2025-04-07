fetch('https://unpkg.com/world-atlas/countries-110m.json')
  .then(res => res.json())
  .then(countries => {
    const world = Globe()
      (document.getElementById('globeViz'))
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .polygonsData(
        window.topojson.feature(countries, countries.objects.countries).features
      )
      .polygonAltitude(0.01)
      .polygonCapColor(() => 'rgba(255, 100, 100, 0.7)')
      .polygonSideColor(() => 'rgba(0, 100, 255, 0.15)')
      .polygonStrokeColor(() => '#111')
      .onPolygonClick(feat => {
        const popup = document.getElementById('popup');
        const name = feat.properties.name;

        popup.innerHTML = `
          <h2>🌍 ${name}</h2>
          <p><strong>Artist:</strong> TBD</p>
          <p><em>"This is a placeholder story for ${name}."</em></p>
          <button onclick="closePopup()">Close</button>
        `;
        popup.style.display = 'block';
      })
      .backgroundColor('#111');
  });

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
