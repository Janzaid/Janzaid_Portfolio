function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 34.047467, lng: 71.521314};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Islamabad, PK' // Title Location
    });
}