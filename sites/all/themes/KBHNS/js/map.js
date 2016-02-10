(function($) {
    $(function(){
       

        if($("#map").length > 0)
        {
            createMap();
        }

    });

    function createMap()
    {
        var location = new google.maps.LatLng(45.496361,-73.678497);
        var mapOptions = {
            zoom: 16,
            center: location,
            draggable: false,   
            scrollwheel: false,
        }

        var styles = [
                          {
                            stylers:  [
                                    {
                                        saturation: -100

                                    },
                                    {
                                        gamma: 1
                                    }
                                ]
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                              { lightness: 16 },
                              {color:"#f5f5f5"},
                              { visibility: "simplified" }
                            ]
                          },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "lightness": 20, 
                                         color:"#000000"
                                    }
                                ]
                            },
                          
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 0
                                    }
                                ]
                            }
                         
                    ];

          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(location);
        });
        var image = '/sites/all/themes/KBHNS/images/map-marker.png';
    
        var map = new google.maps.Map($("#map").get(0),
                        mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "KBHNS"
        });

       marker.setMap(map,marker);
       map.setOptions({styles: styles});
    }
}(jQuery));