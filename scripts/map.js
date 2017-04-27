function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 57.15,
      lng: -2.1
    },
    zoom: 7,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    maxZoom: 20,
    minZoom: 7,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      Style: google.maps.ZoomControlStyle.LARGE
    },
    streetViewControl: false
  });

  google.maps.event.addListener(getElementById('submit-button'), 'click', getLocation());
}

  function getLocation() {
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You Are Here');
      infoWindow.open(map);
      map.setCenter(pos);
      }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
              'Error: The Geolocation service failed.' :
              'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  }
}
