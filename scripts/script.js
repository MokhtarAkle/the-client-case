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
var populateName = document.querySelectorAll(".nameJSON");
var populateLocation = document.querySelectorAll(".locJSON");
var populateFunction = document.querySelectorAll(".funJSON");
var populateSize = document.querySelectorAll(".sizeJSON");
var populateUse = document.querySelectorAll(".useJSON");
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
  





async function setMarkers(map){
    
    const svgMarker = {
      path: "M 10 10 H 140 V 70 H 10 L 10 10",
      fill: "",
      fillOpacity: 0.2,
      strokeWeight: 2,
      strokeColor: "#4F52C9",
      rotation: -20,
      scale: 0.5,
      anchor: new google.maps.Point(0, 0),
      };

        const requestURL = './smartzones.json';
        const request = new Request(requestURL);
      
        const response = await fetch(request);
        const smartzones = await response.json();
    
      for (let i = 0; i < smartzones.length; i++){        
      const marker = new google.maps.Marker({
          position: {lat: parseFloat(smartzones[i].lat), lng: parseFloat(smartzones[i].lon)},
          icon: svgMarker,
          map: map,
          title: smartzones[i].location,
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
          map.setCenter(new google.maps.LatLng(smartzones[i].lat, smartzones[i].lon));
          map.setZoom(16);
          infoWindow1.close();
          infoWindow1.setContent(smartzones[i].location + contentString1);
          infoWindow1.setPosition(new google.maps.LatLng(smartzones[i].lat, smartzones[i].lon))
          infoWindow1.open({anchor: undefined,
            map,
            shouldFocus: true,});
            listAnimation.classList.toggle("animation-hidden");
            listAnimation.classList.remove("animation-visible");
            buttonSlide.classList.toggle("side-out-flip");
        });
}

for (let i = 0; i < populateName.length; i++){
  populateName[i].textContent = smartzones[i].name;
  populateLocation[i].textContent = smartzones[i].location + ", " + smartzones[i].town;
  populateSize[i].textContent = smartzones[i].size;
  populateUse[i].textContent = smartzones[i].utilization;

  if(smartzones[i].function1 || smartzones[i].function2 === undefined){
    populateFunction[i].textContent = smartzones[i].function;
  }
  else{
      populateFunction[i].textContent = smartzones[i].function + "\r\n " + smartzones[i].function1 + " | " + smartzones[i].function2;
  }
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
