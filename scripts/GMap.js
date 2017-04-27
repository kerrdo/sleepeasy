(function(window, google) {

  var GMap = (function() {
    function GMap(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
    }

    GMap.prototype = {

    };

    return GMap;
  }());

  GMap.create = function(element, opts) {
    return new GMap(element, opts);
  };

  window.GMap = GMap;

}(window, google))
