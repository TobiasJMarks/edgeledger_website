// Initialize and add the map
function initMap (){
    // Your Location
    const loc = { lat: -31.409454, lng: -64.181111 };
    // centered map on your location
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    // the marker positioned at location
    const marker = new google.maps.Marker({ position: loc, map:
        map});
}



// Smooth Scrolling
$('#navbar a, .btn').on('click',function(event){
    if(this.hash!=='') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// scroll opacity
window.addEventListener('scroll', function() {
    if (window.scrollY > 150 ){
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});