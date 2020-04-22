var names = [
  'Bah&#237;a de Santa Cruz',
  'Bah&#237;a Chahu&#x00E9;',
  'Bah&#237;a Tangolunda',
  'Bah&#237;a Conejos',
  'Bah&#237;a Maguey',
  'Bah&#237;a &#0211;rgano',
  'Bah&#237;a Cacaluta',
  'Bah&#237;a Chachacual',
  'Bah&#237;a San Agust&#237;n'
];

var locations = [
  {lat: 15.750577, lng: -96.127978},
  {lat: 15.758784, lng: -96.118163},
  {lat: 15.771348, lng: -96.096385},
  {lat: 15.775533, lng: -96.070577},
  {lat: 15.732587, lng: -96.151086},
  {lat: 15.736855, lng: -96.144964},
  {lat: 15.722119, lng: -96.162299},
  {lat: 15.708620, lng: -96.200757},
  {lat: 15.689639, lng: -96.235893}
];
	
var bay = 'media/bay.png';

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 15.8340, lng: -96.3199},
	zoom: 11,
	scaleControl: true,
	mapTypeID: google.maps.MapTypeId.SATELLITE,
	mapTypeID: google.maps.MapTypeId.TERRAIN
  });
  
clearMarkers();
for (var i = 0; i < locations.length; i++) {
  addMarkerWithTimeout(locations[i], names[i], i * 200);
}
 
function addMarkerWithTimeout(position, name, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
   position: position,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: bay,
    title: name
    }))
  }, timeout);
}
}