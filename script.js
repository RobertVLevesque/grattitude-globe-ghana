fetch('https://unpkg.com/world-atlas/countries-110m.json')
  .then(res => res.json())
  .then(countries => {
    const world = Globe()(document.getElementById('globeViz'))
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('#0d0d0d') // deep space black
      .globeMaterial(new THREE.MeshPhongMaterial({
        color: 0x111111,
        emissive: 0x222222,
        shininess: 15,
        transparent: true,
        opacity: 1
      }))
      .polygonCapColor(() => '#00ffff') // neon cyan
      .polygonSideColor(() => '#ff00ff') // magenta side glow
      .polygonStrokeColor(() => '#ff00ff') // borders
      .polygonLabel(({ NAME }) => `
        <div style="color: #fff; font-family: 'Orbitron', sans-serif;">
          <strong style="color:#00ffff;">🌐 ${NAME}</strong><br/>
          <em style="color:#ff00ff;">Artist: TBD</em><br/>
          <span style="color:#ffffff;">"This is a placeholder story."</span>
        </div>
      `)
      .polygonAltitude(0.04)
      .showAtmosphere(true)
      .atmosphereColor('#ff00ff')
      .atmosphereAltitude(0.15)
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
      });
  });

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
