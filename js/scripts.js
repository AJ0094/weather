// YOUR SCRIPTS GO HERE

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr({
	speed:500
});
	
// Close from inside
$('#close').sidr({
  method: 'toggle',
	timimg:'ease-out',
	speed:500
});

$('section').sidr({
	method: 'close',
	timimg:'ease-out',
	speed:500
});

// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}












$.simpleWeather({
  location: 54444,
  
  unit: 'f',
  
  success: function(weather){
    //Check for weather
    console.log(weather);
    
    //Display Weather
    $('.temp').text(weather.temp);
    $('.city').text(weather.city);
    $('.state').text(weather.region);
    $('.image img').attr('src', weather.image);
  },
 
  error: function(error) {
    console.log('Look Outside.');
  }
});