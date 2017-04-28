var userLocation, searchTerm, geocoder;

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
}

function getLocation() {
    infoWindow = new google.maps.InfoWindow;
    searchTerm = document.getElementById('search-bar').value;
    if (searchTerm == "") {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You Are Here');
        infoWindow.open(map);
        map.setCenter(pos);
        map.setZoom(16);
        userLocation = pos;
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    } else {
      geocoder = new google.maps.Geocoder();
      geocodeAddress(geocoder, map);
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
    }

    function geocodeAddress(geocoder, resultsMap) {
       geocoder.geocode({'address': searchTerm}, function(results, status) {
         if (status === 'OK') {
           resultsMap.setCenter(results[0].geometry.location);
           resultsMap.setZoom(16);
           infoWindow.setPosition(results[0].geometry.location);
           infoWindow.setContent('You Are Here');
           infoWindow.open(resultsMap);
         } else {
           alert('The Post Code is not formatted properly. Please enter in the following format: \'AA11 1AA\'');
         }
       });
     }


  }
