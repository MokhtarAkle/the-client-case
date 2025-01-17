# Interactieve map Coding the Curbs
Voor gebruikers van de Coding the Curbs smartzone heb ik een interactieve kaart opgezet waarin gebruikers een overzicht van smart zones kunnen vinden terwijl ze onderweg zijn. Ook kunnen gebruikers meer informatie over de smart zones vinden waarmee ze een keuze kunnen maken over de geschiktheid van de zones.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
De gemaakte website is gebaseerd op de volgende user stories:  
"Als vervoerder van goederen wil ik een overzicht van smart zones in een stad kunnen bekijken, zodat ik kan zien waar ik kan parkeren om mijn goederen te laden en/of lossen."

"Als vervoerder van goederen wil ik, onderweg vanuit mijn voertuig, meer informatie over een smart zone kunnen bekijken, zodat ik kan zien of de zone geschikt is om mijn goederen te laden en / of lossen"

![Screenshot 2022-10-13 184743](https://user-images.githubusercontent.com/45001009/195660437-11dc123b-e86f-4af3-bb24-0c02e5665206.png)

De desktop pagina is opgebouwd uit een kaart en een lijst waar het grootste deel van de interactie plaatsvindt. De pagina is opgebouwd onder het begrip dat deze pagina verwerkt wordt in een groter geheel. Er is vrij weinig aanwezig buiten de kaart om met uitzondering van een zoekbar waarin je een locatie kan opzoeken.  

Pagina link: https://mokhtarakle.github.io/the-client-case/

### Kaart
De kaart is een gebruikelijke Google Maps kaart zoals je deze online kan vinden. De kaart is aangepast door verschillende markers weg te halen en nieuwe aangepaste markers neer te zetten voor de verschillende smart zones. De gebruikelijke functionaliteiten zoals street view, satelliet en terrein kaarten zijn nog steeds aanwezig en bruikbaar. Er is ook een nieuwe knop toegevoegd die je laat centreren op je huidige positie.

### Lijst
De toegevoegde lijst heeft informatie over alle bestaande smart zones en de huidige status hiervan. De lijst kan in en uitgeklapt worden en zal in de toekomst gesorteerd en gefilterd kunnen worden op verschillende termen. De lijst heeft knoppen die je op de locatie van de smart zones centreren en informatie weergeven op de kaart zelf.

![Screenshot 2022-10-13 193815](https://user-images.githubusercontent.com/45001009/195667152-e9fd716a-ca91-4148-990e-bc8bc53abfca.png)

### Mobiele versie
De site is responsive opgebouwt en zal zich aanpassen op mobiele apparaten op de volgende manier. De zoekbar in de header wordt vervangen met een zoek knop om een verstopte zoekbar onder de header te weergeven. De lijst is automatisch ingeklapt en kan uitgeklapt worden met een knop.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De website is opgebouwd uit HTML, CSS, JS en de google maps javascript API.

## HTML
De HTML bestaat uit een head en een body met daarin de header en main tags. De HTML is eigenlijk heel simpel opgebouwd met een header sectie waarin er verschillende images en inputs staan en een main met een div voor de map en een ul voor de lijst.

### Header

```
    <header>
        <img src="./assets/CTC_Logo_Wit.webp" alt="CTC brand logo">
        <svg id="search-icon" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
        <input type="text" placeholder="Search...">
        <input id="search-bar" type="text" placeholder="Search...">
    </header>
```

De header is opgebouwd uit 2 foto's en 2 searchbars, er wordt later gebruik gemaakt van JS en CSS om deze te verstoppen en weer te laten verschijnen.

### Main
Om bepaalde animaties en interacties te laten werken is er gebruik gemaakt van divs oftewel lege elementen om de site op te bouwen. Ook is er veel gebruik gemaakt van id's en classes om de bijbehorende javascript te laten wereken. De basis structuur bestaat uit:

```
    <main>
        <div id="big-wrapper">
            <div id="map"></div>
            <div id="side-wrapper">
                <ul id="big-list">
                    <li><button id="sort-button">Sorteer</button></li>
                    <li><button id="filter-button">Filter</button></li>
                    <li class="zoneInfo"><p>Smartzone: "Tijn"</p>
```

De rest van de informatie bestaat uit meer li's en p's.

## CSS
Er is gebruik gemaakt van verschillende technieken om de opmaak van de website te bereiken, de meest interessante  hiervan zijn:

### @import
Er wordt gebruik gemaakt van de @import rule om de verschillende lettertypes toe te voegen die aangegeven zijn door de style guide. Dit bestaat uit:

```
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
```

Vervolgens worden de lettertypes aangeroepen met:

```
    font-family: 'Roboto', sans-serif;
    font-family: 'Rajdhani', sans-serif;
```

Hierin is sans-serif een back-up lettertype dat standaard beschikbaar is.

### :hover en ::after
Er wordt veel gebruik gemaakt van de pseudo-class hover om verschillende knoppen een effect te geven als je hier over heen hovert met je muis. 

```
li> button:hover{
    background-color: var(--main-ctc-color);
    transition: ease .2s;
    color: white;
    outline: 1px solid white;
}
```

Er wordt ook gebruik gemaakt van het ::after pseudo-element om bepaalde styling toe te voegen aan de lijst.

```
li::after{
    content: "";
    position: absolute;
    height: 1px;
    background: white;
    width: 90%;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
}
```

### Flexbox
Er is gebruik gemaakt van flexbox om de lijst te stylen en te positioneren zoals hieronder aangegeven is:
![Screenshot 2022-10-13 200917](https://user-images.githubusercontent.com/45001009/195673555-34c0f565-3b9a-4674-99fe-63c8c23c082b.png)

Om dit te bereiken is er gebruik gemaakt van een flex-flow van row met het wrap attribuut. Om bepaalde elementen naast elkaar te krijgen is er gebruik gemaakt van flex-basis om ze minder ruimte in de flexbox te geven.

```
#big-list{
    display: flex;
    flex-flow: row wrap;
    max-width: 20em;
```

```
#big-list > li:nth-of-type(1), #big-list > li:nth-of-type(2){
   flex-basis: 20%;
   padding: 2em;
}

```

### @media
Er is uiteraard gebruik gemaakt van @media om verschillende waardes te veranderen als het scherm een bepaalde grootte is. Omdat de container voor de google maps een statische waarde nodig had, is er gebruik gemaakt van verschillende breakpoints om de pagina responsive te maken.

```
@media screen and (max-width: 980px) {
    #map{
        width: 35em;
        height: 55em;
    }

    #big-list{
        max-height: 53em;
    }
   
   @media screen and (max-width: 580px) {
    #map{
        width: 25em;
        height: 55em;
    }
}
```

## JS
Om de gebruikte kaart ook echt werkend te maken is er gebruik gemaakt van de google maps Javascript API. Een API is eigenlijk een set aan code die bepaalde functies makkelijker toegankelijk maakt. In dit geval is het een third-party API wat inhoudt dat google de data heeft en ik als de gebruiker deze opvraag om te weergeven op mijn site.

### Initialiseren
Om de API als het ware toe te voegen wordt er gebruik gemaakt van HTML in combinatie met een API KEY om deze toe te voegen als een script. De API KEY kan online via google aangevraagd worden en is voor het grootste deel gratis. De verschillende functies die de API aanbiedt worden over het algemeen als volgt geinitialiseerd:

```
variabele = new google.maps.functie
```

### Map
De kaart wordt geinitialiseerd met de initMap() functie waarin de eerder besproken div als kaart wordt toegevoegd. Hier worden vervolgens verschillende eigenschappen aan meegegeven om de plaatsing, centrering, zoom etc. te bepalen.

```
map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.083004469900835, lng: 5.123430702685763},
    zoom: 16,
    minZoom: 10,
```

### Geolocation
Om de locatie van de gebruiker op te vragen en te gebruiken wordt er gebruik gemaakt van geolocation, een default javascript API die met een pop up toestemming vraagt aan de gebruiker om zijn locatie te kunnen gebruiken. Als hiermee wordt toegestemd dan kan de bijbehorende knop en locatie centrering gebruikt worden.

```
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const posit = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
```

### Markers en infoWindows
De google maps API komt standaard met 2 erg handige functies namelijk de markers en infowindows. Infowindows zijn de stukjes tekst die standaard boven een marker weergeven worden als hier opgeklikt wordt. Deze worden hand in hand geinitialiseerd en toegevoegd met gebruik van de eerdere initialiseer functie. 

```
for (let i = 0; i < zoneData.length; i++){
        const zones = zoneData[i];
        
      const marker = new google.maps.Marker()
      const infoWindow = new google.maps.InfoWindow();
      
```

Deze worden vervolgens in een for loop gebruikt met een array dat bestaat uit smart zone data. Locaties worden in javascript gebruikt doormiddle van de latitude en longitude. Hier is dus een array met locaties en latitude en longitudes opgezet:

```
const zoneData = [
  ["Twijnstraat 26", 52.083004469900835, 5.123430702685763],
  ["Twijnstraat 22", 52.08321101672864, 5.123452160356139],
  ["Lange Haven 56", 51.91472436980267, 4.398241286108716],
```

## Bronnen
https://developers.google.com/maps/documentation/javascript
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://developer.mozilla.org/en-US/

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
