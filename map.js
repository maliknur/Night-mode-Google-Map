var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {

  // SET INITIAL MAP RENDER LOCATION CITY
  directionsDisplay = new google.maps.DirectionsRenderer();
  var seattle = new google.maps.LatLng(47.614848, -122.3359058);
  var mapOptions = {
    zoom:7,
    center: seattle,
    styles:[
            { stylers: [{"invert_lightness": true}]
          }
          ]
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-board'));
}

function calcRoute() {
  
  // PASS START AND END DESTINATION VALUES
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };


  // DISPLAY ROUTE DIRECTIONS IF RESPONSE WILL BE TRUEs
  directionsService.route(request, function(response, status) {
  
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

// LISTENING FOR ENTRY OF INPUT FIELDS 
google.maps.event.addDomListener(window, 'load', initialize);