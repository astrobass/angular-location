angular.module('location', [])
	.service('location', function($q) {
		this.getLocation = function() {
			var def = $q.defer();
	    if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(loc) {
					def.resolve({
						latitude: loc.coords.latitude,
						longitude: loc.coords.longitude
					});
	      });
			} else {
				console.log('No geolocation available');
			}
			return def.promise;
		};
	});