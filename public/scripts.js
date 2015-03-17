(function () {
  'use strict';

  var socket = io('http://localhost:1338/');

  L.mapbox.accessToken = 'pk.eyJ1Ijoic2FtdWVsZGV2IiwiYSI6IjFRV3VPMEEifQ.xqZJCVD5H6955kQPYQ9ZEQ';
  var map = L.mapbox.map('map', 'samueldev.lf9kkbcm')
    .setView([45.944921, -66.687651], 14);

  var bus = L.marker([-73, 40], {
    icon: L.mapbox.marker.icon({
      'marker-color': '#f86767',
      'marker-symbol': 'bus'
    })
  });

  socket.on('bus coord', function (location) {
    console.info('Received new bus coordinate from the API. Updating marker.', location);
    bus.setLatLng(L.latLng(location.lat, location.lng));
  });

  bus.addTo(map);
})();