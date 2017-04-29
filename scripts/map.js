<<<<<<< HEAD
var map, userLocation, searchTerm, geocoder, infoWindow, service, infowindow;
var markers = [];
var menuItems = [];
=======
<<<<<<< Updated upstream
var map, userLocation, searchTerm, geocoder;
>>>>>>> 8d4a1c097ea4f769e770bc8217455aef0afbf1b4

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 57.15,
      lng: -2.1
    },
    zoom: 7,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom: 20,
    minZoom: 7,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      Style: google.maps.ZoomControlStyle.LARGE
    },
    streetViewControl: false,
  });
  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
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

        service.nearbySearch({
          location: pos,
          radius: 4024,
          type: ['sleep']
        }, callback);

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

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
          markers += JSON.stringify(results[i]);
        }
      }
      var lItems = $("#menu li");
      lItems.each(function(li) {
          console.log($(this).attr('id'));
        });
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
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
<<<<<<< HEAD
=======

  function getPlaces() {

    var request = {
      location: userLocation,
      radius: 8046,
      types: ['cafe']
    };

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);


    function callback(results, status) {
      if(status == google.maps.places.PlacesServiceStatus.OK) {
        for(var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
    }
  }
=======
(function(window, google) {

  //map options
  var options = {
    center: {
      lat: '52.15',
      lng: '-2.1'
    },
    zoom: 7
  },

  element = document.getElementById('map');
  //map
  map = new google.maps.Map(element, options);

}(window, google));
>>>>>>> Stashed changes
>>>>>>> 8d4a1c097ea4f769e770bc8217455aef0afbf1b4
