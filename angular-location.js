angular.module('location', [])
	.service('location', function() {
		var currentLocation;
		this.getLocation = function() {
			var latitude, longitude;
	    if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(location) {
	        currentLocation = {
	        	latitude: location.coords.latitude,
	        	longitude: location.coords.longitude
	        }
	      });
	      if( typeof currentLocation === 'undefined' ) {
	      	console.log('Unable to get current position. Probably a permissions issue.');
	      	currentLocation = {};
	      }
			} else {
				console.log('No geolocation available');
				currentLocation = {};
			}
			return currentLocation;
		};
	})