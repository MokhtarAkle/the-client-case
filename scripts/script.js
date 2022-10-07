let map;
const latitudes = ["52.083004469900835", "52.08321101672864", "51.91474369232434"];
const longitudes = ["5.123430702685763", "5.123452160356139", "4.398259534097798"]
const school = { lat: 52.083004469900835, lng: 5.123430702685763}; 
console.log(parseFloat(latitudes[1]));

var buttonSelect = document.querySelector(".selectButton");
var buttonList = document.querySelectorAll(".selectButton");

// 52.36240661505912 4.915144607789511

// fetch('./smartzones.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


var myStyles =[
  {
      featureType: "poi",
      elementType: "labels",
      stylers: [
      { visibility: "off" }
      ]
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: school,
    zoom: 18,
    minZoom: 10,
    styles: myStyles,
    restriction: {
      latLngBounds: {
        north: 54,
        south: 51,
        east: 7.5,
        west: 3,
      },
    },
  });
  setMarkers(map);
}

const zoneData = [
  ["Twijnstraat 26", 52.083004469900835, 5.123430702685763],
  ["Twijnstraat 22", 52.08321101672864, 5.123452160356139],
  ["Lange Haven 56", 51.91472436980267, 4.398241286108716],
  ["Lange Haven 72", 51.91508246393664, 4.397431747091832],
  ["Overtoom 450", 52.359644277776894, 4.862340256090279],
  ["Kinkerstraat 272", 52.365312185513446, 4.86444024765305],
  ["West-kruiskade 93", 51.91998786272775, 4.466003809322142],
  ["Witte de Withstraat 32", 51.915771960203756, 4.478053167399616],
];

  function setMarkers(map){
    
    const svgMarker = {
      // path: "M 63.00,16.00 C 63.00,16.00 63.00,49.00 63.00,49.00M 61.00,12.00 C 61.00,12.00 63.00,12.00 63.00,12.00 63.00,12.00 63.00,14.00 63.00,14.00M 5.00,12.00 C 5.00,12.00 60.00,12.00 60.00,12.00M 1.00,14.00 C 1.00,14.00 1.00,12.00 1.00,12.00 1.00,12.00 3.00,12.00 3.00,12.00M 1.00,48.00 C 1.00,48.00 1.00,15.00 1.00,15.00M 3.00,52.00 C 3.00,52.00 1.00,52.00 1.00,52.00 1.00,52.00 1.00,50.00 1.00,50.00M 59.00,52.00 C 59.00,52.00 4.00,52.00 4.00,52.00M 63.00,50.00 C 63.00,50.00 63.00,52.00 63.00,52.00 63.00,52.00 61.00,52.00 61.00,52.00",
      path: "M 10 10 H 140 V 70 H 10 L 10 10",
      fill: "",
      fillOpacity: 0.2,
      strokeWeight: 2,
      strokeColor: "#4F52C9",
      rotation: -20,
      scale: 0.5,
      anchor: new google.maps.Point(0, 0),
      };
    
      for (let i = 0; i < zoneData.length; i++){
        const zones = zoneData[i];
        
      const marker = new google.maps.Marker({
          position: {lat: zones[1], lng: zones[2]},
          icon: svgMarker,
          map: map,
          animation: google.maps.Animation.BOUNCE,
          title: zones[0],
        });

        const infoWindow = new google.maps.InfoWindow();
    
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
        
      }   
  }
  
function buttonSwitch(){
  for (let i = 0; i < buttonList.length; i++){
        buttonList[i].addEventListener("click", () =>{
          map.setCenter(new google.maps.LatLng(zoneData[i][1], zoneData[i][2]));
          map.setZoom(18);
        });

}
}
buttonSwitch();
window.initMap = initMap;

// https://developers.google.com/maps/documentation/javascript
// https://support.google.com/mymaps/answer/3024454?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Create%20a%20map,map%20a%20name%20and%20description.
// https://stackoverflow.com/questions/41648702/prevent-marker-from-scaling-when-zoom-out
