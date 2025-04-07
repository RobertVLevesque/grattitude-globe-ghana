const world = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .polygonCapColor(() => '#00ffff88')
  .polygonSideColor(() => '#ff00ff44')
  .polygonStrokeColor(() => '#ff00ff')
  .polygonAltitude(() => 0.03)
  .onPolygonClick(showPopup)
  .polygonsTransitionDuration(300);

fetch('https://unpkg.com/world-atlas@2/countries-110m.json').then(res => res.json()).then(worldData => {
  const countries = topojson.feature(worldData, worldData.objects.countries).features;

  countries.forEach((d) => {
    d.properties.artist = 'TBD';
    d.properties.story = `This is a placeholder story for ${d.properties.name || 'this country'}.`;
  });

  world.polygonsData(countries)
});

function showPopup(polygon) {
  document.getElementById('popup-title').innerText = `🌍 ${polygon.properties.name}`;
  document.getElementById('popup-artist').innerText = polygon.properties.artist;
  document.getElementById('popup-story').innerText = `"${polygon.properties.story}"`;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
