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

navigator.geolocation.getCurrentPosition(function(position){
	var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
	var latAndLong = latitude + ',' + longitude; 
  console.log(latAndLong);
	return latAndLong;
});


// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});



// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Display Data
        $('#currentLocation .currently').text(weather.currently);
      $('#currentLocation .temp').text(weather.temp);
      $('#currentLocation .city').text(weather.city);
      $('#currentLocation img').attr('src', weather.image);
	   $('#currentLocation .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#currentLocation figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#currentLocation figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#currentLocation figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#currentLocation figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#currentLocation figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#currentLocation figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#currentLocation figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#currentLocation figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#currentLocation figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#currentLocation figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#currentLocation figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#currentLocation figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#currentLocation figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#currentLocation figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#currentLocation figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#currentLocation figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#currentLocation figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#currentLocation figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#currentLocation figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var currentLocationIconCode = 'icon-' + weather.code;
	  var currentLocationIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var currentLocationIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var currentLocationIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var currentLocationIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var currentLocationIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#currentLocation i:nth-child(1)').attr('class', currentLocationIconCode );
		$('#currentLocation .day1 i').attr('class', currentLocationIconCodeDay1);
		$('#currentLocation .day2 i').attr('class', currentLocationIconCodeDay2);
		$('#currentLocation .day3 i').attr('class', currentLocationIconCodeDay3);
		$('#currentLocation .day4 i').attr('class', currentLocationIconCodeDay4);
		$('#currentLocation .day5 i').attr('class', currentLocationIconCodeDay5);
	
		if (weather.code >= 0 && weather.code <= 8) {
          $('#currentLocation').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#currentLocation').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#currentLocation').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#currentLocation').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#currentLocation').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#currentLocation').addClass('bad');
          }

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
}; 
	
	// Cheney
$.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#cheney .currently').text(weather.currently);
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney img').attr('src', weather.image);
	  $('#cheney .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#cheney figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#cheney figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#cheney figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#cheney figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#cheney figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#cheney figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#cheney figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#cheney figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#cheney figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#cheney figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#cheney figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#cheney figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#cheney figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#cheney figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#cheney figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#cheney figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#cheney figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#cheney figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#cheney figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var cheneyIconCode = 'icon-' + weather.code;
	  var cheneyIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var cheneyIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var cheneyIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var cheneyIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var cheneyIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#cheney i:nth-child(1)').attr('class', cheneyIconCode );
		$('#cheney .day1 i').attr('class', cheneyIconCodeDay1);
		$('#cheney .day2 i').attr('class', cheneyIconCodeDay2);
		$('#cheney .day3 i').attr('class', cheneyIconCodeDay3);
		$('#cheney .day4 i').attr('class', cheneyIconCodeDay4);
		$('#cheney .day5 i').attr('class', cheneyIconCodeDay5);
	
		if (weather.code >= 0 && weather.code <= 8) {
          $('#cheney').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#cheney').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#cheney').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#cheney').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#cheney').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#cheney').addClass('bad');
          }
      
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Seattle
$.simpleWeather({
    location: 98101,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);

      // Display Data
	  $('#seattle .currently').text(weather.currently);
      $('#seattle .temp').text(weather.temp);
      $('#seattle .city').text(weather.city);
      $('#seattle img').attr('src', weather.image);
	  $('#seattle .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#seattle figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#seattle figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#seattle figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#seattle figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#seattle figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#seattle figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#seattle figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#seattle figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#seattle figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#seattle figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#seattle figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#seattle figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#seattle figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#seattle figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#seattle figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#seattle figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#seattle figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#seattle figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#seattle figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var seattleIconCode = 'icon-' + weather.code;
	  var seattleIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var seattleIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var seattleIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var seattleIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var seattleIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#seattle i:nth-child(1)').attr('class', cheneyIconCode );
		$('#seattle .day1 i').attr('class', seattleIconCodeDay1);
		$('#seattle .day2 i').attr('class', seattleIconCodeDay2);
		$('#seattle .day3 i').attr('class', seattleIconCodeDay3);
		$('#seattle .day4 i').attr('class', seattleIconCodeDay4);
		$('#seattle .day5 i').attr('class', seattleIconCodeDay5);
		
		if (weather.code >= 0 && weather.code <= 8) {
          $('#seattle').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#seattle').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#seattle').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#seattle').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#seattle').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#seattle').addClass('bad');
          }
	},
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Portland
$.simpleWeather({
    location: 97035,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#portland .currently').text(weather.currently);
      $('#portland .temp').text(weather.temp);
      $('#portland .city').text(weather.city);
      $('#portland img').attr('src', weather.image);
	  $('#portland .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#portland figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#portland figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#portland figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#portland figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#portland figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#portland figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#portland figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#portland figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#portland figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#portland figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#portland figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#portland figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#portland figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#portland figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#portland figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#portland figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#portland figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#portland figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#portland figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var portlandIconCode = 'icon-' + weather.code;
	  var portlandIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var portlandIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var portlandIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var portlandIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var portlandIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#portland i:nth-child(1)').attr('class', portlandIconCode );
		$('#portland .day1 i').attr('class', portlandIconCodeDay1);
		$('#portland .day2 i').attr('class', portlandIconCodeDay2);
		$('#portland .day3 i').attr('class', portlandIconCodeDay3);
		$('#portland .day4 i').attr('class', portlandIconCodeDay4);
		$('#portland .day5 i').attr('class', portlandIconCodeDay5);
		
		if (weather.code >= 0 && weather.code <= 8) {
          $('#portland').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#portland').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#portland').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#portland').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#portland').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#portland').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Los Angeles
$.simpleWeather({
    location: 90001,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#losangeles .currently').text(weather.currently);
      $('#losangeles .temp').text(weather.temp);
      $('#losangeles .city').text(weather.city);
      $('#losangeles img').attr('src', weather.image);
	  $('#losangeles .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#losangeles figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#losangeles figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#losangeles figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#losangeles figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#losangeles figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#losangeles figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#losangeles figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#losangeles figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#losangeles figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#losangeles figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#losangeles figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#losangeles figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#losangeles figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#losangeles figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#losangeles figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#losangeles figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#losangeles figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#losangeles figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#losangeles figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var losangelesIconCode = 'icon-' + weather.code;
	  var losangelesIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var losangelesIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var losangelesIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var losangelesIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var losangelesIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#losangeles i:nth-child(1)').attr('class', losangelesIconCode );
		$('#losangeles .day1 i').attr('class', losangelesIconCodeDay1);
		$('#losangeles .day2 i').attr('class', losangelesIconCodeDay2);
		$('#losangeles .day3 i').attr('class', losangelesIconCodeDay3);
		$('#losangeles .day4 i').attr('class', losangelesIconCodeDay4);
		$('#losangeles .day5 i').attr('class', losangelesIconCodeDay5);
		
		if (weather.code >= 0 && weather.code <= 8) {
          $('#losangeles').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#losangeles').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#losangeles').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#losangeles').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#losangeles').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#losangeles').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
