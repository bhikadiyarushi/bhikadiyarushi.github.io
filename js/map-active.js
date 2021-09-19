var map;
var latlng = new google.maps.LatLng(21.1719779,72.7897699);
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -10
            }]
        }];
var mapOptions = {
    zoom: 15,
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};
map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
var geocoder_map = new google.maps.Geocoder();
var address = 'New york';
// geocoder_map.geocode({
//     'address': address
// }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//             map: map,
//             position: map.getCenter()
//         });
//     } else {
//         alert("Geocode was not successful for the following reason: " + status);
//     }
// });

new google.maps.Marker({
    position: latlng,
    map,
    title: "F-35,sargam shopping center, Hirabaugh, Varachha Road,Surat,GJ,India",
  })


  const contentString =
    '<div id="content" style="width:200px">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h4 id="firstHeading"  >Rutarth Education</h4>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>,F-35,sargam shopping center, Hirabaugh, Varachha Road,Surat,GJ,India</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: latlng,
    map,
    title: "sargam",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set('gMap', mapType);
map.setMapTypeId('gMap');