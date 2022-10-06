let map;
const school = { lat: 52.36252576834291, lng: 4.9149200247251414 }; 
var jsonTest = JSON.parse(smartzones);



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: school,
    zoom: 20,
    minZoom: 12,
  });

  const svgMarker = {
    path: "M 63.00,16.00 C 63.00,16.00 63.00,49.00 63.00,49.00M 61.00,12.00 C 61.00,12.00 63.00,12.00 63.00,12.00 63.00,12.00 63.00,14.00 63.00,14.00M 5.00,12.00 C 5.00,12.00 60.00,12.00 60.00,12.00M 1.00,14.00 C 1.00,14.00 1.00,12.00 1.00,12.00 1.00,12.00 3.00,12.00 3.00,12.00M 1.00,48.00 C 1.00,48.00 1.00,15.00 1.00,15.00M 3.00,52.00 C 3.00,52.00 1.00,52.00 1.00,52.00 1.00,52.00 1.00,50.00 1.00,50.00M 59.00,52.00 C 59.00,52.00 4.00,52.00 4.00,52.00M 63.00,50.00 C 63.00,50.00 63.00,52.00 63.00,52.00 63.00,52.00 61.00,52.00 61.00,52.00",
    fill: "green",
    fillOpacity: 1,
    strokeWeight: 2,
    strokeColor: "#4F52C9",
    rotation: -20,
    scale: 0.5,
    anchor: new google.maps.Point(0, 0),
    };
  
  const marker = new google.maps.Marker({
    position: school,
    icon: svgMarker,
    map: map,
    title: "HvA",
  });

  const infoWindow = new google.maps.InfoWindow();

  marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent(marker.getTitle());
    infoWindow.open(marker.getMap(), marker);
  
  })
}





// https://developers.google.com/maps/documentation/javascript
// https://support.google.com/mymaps/answer/3024454?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Create%20a%20map,map%20a%20name%20and%20description.
// https://stackoverflow.com/questions/41648702/prevent-marker-from-scaling-when-zoom-out
