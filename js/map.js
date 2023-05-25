function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 20.651941, lng: -103.398860},
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], { name: 'Mayal' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */
    /* ### Íconos en el mapa ### */
    var icon = 'images/marcador.png';

    var contentMayal = '<div class="info-window">' +
        '<h3 class="color">Mayal</h3>' +
        '<div class="info-content">' +
        '<p class="text-dark">¡Encontraste el mejor lugar de mallas en Jalisco!</p>' +
        '<p>Rincón de los Ahuehuetes No.82. Rinconada del Sol. C.P. 45055 Zapopan, Jalisco. México.</p>'+
        '</div>' +
        '</div>';

    var infowindowMayal = new google.maps.InfoWindow({
        content: contentMayal
    });

    var marker = new google.maps.Marker({
        position: { lat: 20.651941, lng: -103.398860 },
        map: map,
        title: 'Mayal',
        icon: icon
    });

    marker.addListener('click', function() {
        infowindowMayal.open(map, marker);
    });
}