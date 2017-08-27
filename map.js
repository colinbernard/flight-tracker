
var allMarkers = []; // array of all markers
var infoWindow; // declared so there can only be one infowindow open at a time
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: new google.maps.LatLng(49.9569, -119.3787),
		zoom: 7,
		styles: [
		  {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#8ec3b9"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1a3646"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.country",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#4b6878"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#64779e"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.province",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#4b6878"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.man_made",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#334e87"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.natural",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#283d6a"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#6f9ba5"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#3C7680"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#304a7d"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#98a5be"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "road.arterial",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#1d1d1d"
		      },
		      {
		        "visibility": "on"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#2c6675"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#255763"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#b0d5ce"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#98a5be"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#283d6a"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#3a4762"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station.airport",
		    "stylers": [
		      {
		        "color": "#ffeb3b"
		      },
		      {
		        "saturation": 50
		      },
		      {
		        "visibility": "on"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station.airport",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "color": "#7a0ed7"
		      },
		      {
		        "lightness": 15
		      },
		      {
		        "visibility": "on"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station.airport",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d1d1d"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#0e1626"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#4e6d70"
		      }
		    ]
		  }
		]
	});


	// init info window
 	infoWindow = new google.maps.InfoWindow;

	// create markers for each plane
	$.getJSON('map.php', function(data){
		console.log(data);
		data['acList'].forEach(function(aircraft){
			addMarker(aircraft);
		});


	});
}

function addMarker(aircraft) {

	var aircraftImages = [
		"images/jet.png",
		"images/turboprop_wing.png",
		"images/prop_nose.png"
	];

	// select correct aircraft image
	// TODO: tidy this up, add more images/checks
	var aircraftImage = aircraftImages[0]; // default is jet
	if (aircraft['EngType'] == 3) {
		aircraftImage = aircraftImages[0];
	} else if (aircraft['EngType'] == 1) {
		aircraftImage = aircraftImages[2];
	} else if (aircraft['EngType'] == 2 || aircraft['EngMount'] == 5 || aircraft['EngMount'] == 2) {
		aircraftImage = aircraftImages[1];
	}

	// position and label
	var latlng = {lat: aircraft['Lat'], lng: aircraft['Long']};
	var label = aircraft['Type'];

	// load the icon image so height and width can be extracted
	var img = new Image();
	img.onload = function() {

		// custom aircraft icon
		var customIcon = {
			url: "rotate.php?deg=" + aircraft['Trak'] + "&img=" + aircraftImage, // rotate to correct heading
			labelOrigin: new google.maps.Point(this.width/2, this.height + 5) // label offset
		};

		// create marker
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			label: {
				text: label, 
				color:"orange",
				fontFamily: "Lato"
			},
			icon: customIcon
		});

		allMarkers.push({reg: aircraft['Reg'], marker: marker});


		// info window text
		if (aircraft['From'] == null) {
			aircraft['From'] = "N/A";
		}
		if (aircraft['To'] == null) {
			aircraft['To'] = "N/A";
		}

        infocontent = "<h3>" + aircraft['Mdl'] + "</h3>"
        	+"<p><b>ICAO: </b>" + aircraft['Icao'] + "<br>"
        	+"<b>Reg: </b>" + aircraft['Reg'] + "<br />"
        	+"<b>Operator: </b>" + aircraft['Op'] + "<br />"
        	+"<b>From: </b>" + aircraft['From'] + "<br />"
        	+"<b>To: </b>" + aircraft['To'] + "<br />"
        	+"<b>Speed: </b>" + aircraft['Spd'] + " kts<br />"
        	+"<b>Altitude: </b>" + aircraft['Alt'] + " ft</p>";

        // add listener for infowindow
		bindInfoWindow(marker, map, infoWindow, infocontent); 

	};
	img.src = "rotate.php?deg=" + aircraft['Trak'] + "&img=" + aircraftImage; // set img src (calls above listener function)
}

function refreshMap() {
	setInterval(function() {
		
		$.getJSON('map.php', function(data){
			console.log(data);
			data['acList'].forEach(function(aircraft){
				var isNewAircraft = true;
				var markerToUpdate = null;
				allMarkers.forEach(function(existingMarker) {
					if (existingMarker.reg == aircraft['Reg']) {
						isNewAircraft = false;
						markerToUpdate = existingMarker.marker;
					}
				});

				if (isNewAircraft) { // add a new aircraft
					addMarker(aircraft);
				} else { // just update the position of existing marker
					var latlng = {lat: aircraft['Lat'], lng: aircraft['Long']};
					markerToUpdate.setPosition(latlng);
				}

		});


	});



	}, 5000);
}

function bindInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function() {
        infowindow.setContent(html);
        infowindow.open(map, this);
    });
} 