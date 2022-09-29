let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.36252576834291, lng: 4.9149200247251414 },
    zoom: 15,
  });
}

window.initMap = initMap;


// https://developers.google.com/maps/documentation/javascript
// https://support.google.com/mymaps/answer/3024454?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Create%20a%20map,map%20a%20name%20and%20description.
