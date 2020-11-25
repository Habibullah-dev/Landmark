let platform = new H.service.Platform({
  "apikey": "MFxqXvczUu2Xm_l4mgMGeOqXxklb_qyBFHCoI_dbMIQ"
});
  function landmarkGeocode() {
    let title = document.querySelector('h1').textContent;
    var geocoder = platform.getSearchService(),
        landmarkGeocodingParameters = {
          q: title,
          at: '0,0',
          limit: 1
        };
  
    geocoder.discover(
      landmarkGeocodingParameters,
      showMap,
      (e) => console.log(e)
    );
  }
  
  
  function showMap(result) {
    
    var locations = result.items[0].access[0];
  
    // Obtain the default map types from the platform object:
  let defaultLayers = platform.createDefaultLayers();
    // Instantiate (and display) a map object:
  let map = new H.Map(
    document.querySelector('.map'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: locations.lat, lng: locations.lng }
    });
  
    let marker = new H.map.Marker({lat: locations.lat, lng: locations.lng});
      map.addObject(marker);
  
  // Create the default UI:
  let ui = H.ui.UI.createDefault(map, defaultLayers);
  }
  
  landmarkGeocode();
