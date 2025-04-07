
const world = Globe()
  (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .backgroundColor('#111')
    .pointsData([{ lat: 7.95, lng: -1.02, size: 1, country: 'Ghana' }])
    .pointAltitude(0.1)
    .pointColor(() => 'red')
    .onPointClick((point) => {
      if (point.country === 'Ghana') {
        document.getElementById('popup').style.display = 'block';
      }
    });

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
