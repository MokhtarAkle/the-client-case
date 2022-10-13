let map;
var buttonSelect = document.querySelector(".selectButton");
var buttonList = document.querySelectorAll(".selectButton");
var buttonSlide = document.querySelector("#side-out");
var listAnimation = document.querySelector("#side-wrapper");
var sortButton = document.querySelector("#sort-button");
var listInformation = document.querySelectorAll(".zoneInfo");
var searchIcon = document.querySelector("#search-icon");
var buttonSlideFlip = document.querySelector("#side-out-flip");
var searchBar = document.querySelector("#search-bar");
const media1 = window.matchMedia('(max-width: 980px)');
const media2 = window.matchMedia('(min-width: 980px)');
var position;
var myStyles =[
  {
      featureType: "poi",
      stylers: [
      { visibility: "off" }
      ]
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.083004469900835, lng: 5.123430702685763},
    zoom: 16,
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
  infoWindow1 = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Jouw locatie";
  locationButton.classList.add("map-location-center");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);


  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const posit = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        new google.maps.Marker({
          position: posit,
          map,
          title: " ",
        });
        infoWindow1.setPosition(posit);
        infoWindow1.setContent("Jouw locatie");
        infoWindow1.open(map);
        map.setCenter(posit);
        locationButton.addEventListener("click", () => {
          map.setCenter(posit);
        });
      },
    );
  } else {
    infoWindow1.setPosition({ lat: 52.083004469900835, lng: 5.123430702685763});
    infoWindow1.setContent("Error: The Geolocation service failed. Error: Your browser doesn't support geolocation.");
  }
;



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
          title: zones[0],
        });

        const infoWindow = new google.maps.InfoWindow();
        const contentString = listInformation[i].innerHTML;
    
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle() + contentString);
          infoWindow.open(marker.getMap(), marker);
          map.setZoom(18);
        });
        
      } 
      
      for (let i = 0; i < buttonList.length; i++){

        const infoWindow1 = new google.maps.InfoWindow();
        const contentString1 = listInformation[i].innerHTML;

        buttonList[i].addEventListener("click", () =>{
          map.setCenter(new google.maps.LatLng(zoneData[i][1], zoneData[i][2]));
          map.setZoom(16);
          infoWindow1.close();
          infoWindow1.setContent(contentString1);
          infoWindow1.setPosition(new google.maps.LatLng(zoneData[i][1], zoneData[i][2]))
          infoWindow1.open({anchor: undefined,
            map,
            shouldFocus: true,});
            listAnimation.classList.toggle("animation-hidden");
            listAnimation.classList.remove("animation-visible");
            buttonSlide.classList.toggle("side-out-flip");
        });

}

  }
  


function classSlide(){
    if(media1.matches){
      listAnimation.classList.toggle("animation-visible");
      listAnimation.classList.remove("animation-hidden");
      buttonSlide.classList.toggle("side-out-flip");
    }
    else if(media2.matches){
      listAnimation.classList.toggle("animation-hidden");
      listAnimation.classList.remove("animation-visible");
      buttonSlide.classList.toggle("side-out-flip");
    }
}


function searchShow(){
  if(searchBar.style.display === "none"){
    searchBar.style.display = "block";
  }
  else{
    searchBar.style.display = "none";
  }
}





window.initMap = initMap;
buttonSlide.addEventListener("click", classSlide);
searchIcon.addEventListener("click", searchShow);
// https://developers.google.com/maps/documentation/javascript
// https://support.google.com/mymaps/answer/3024454?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Create%20a%20map,map%20a%20name%20and%20description.
// https://stackoverflow.com/questions/41648702/prevent-marker-from-scaling-when-zoom-out
