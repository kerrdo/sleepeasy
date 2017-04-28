(function(window, google) {

  var options = {
    center = {
      lat: 52.15,
      lng: -2.1
    },
    zoom: 7
  },
  element = document.getElementsByClassName('map'),

  map = new google.maps.Map(element, options);

}(window, google));
