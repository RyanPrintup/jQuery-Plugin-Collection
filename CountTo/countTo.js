(function($) {
	
	$.fn.countTo = function(options)
	{
		var settings = $.extend({
			start: 0,
			end: 100,
			duration: 1000,
			easing: 'swing',
			complete: ''
		}, options);

		return this.each(function() {
			var self = $(this);

			$({ counter: settings.start }).animate({ counter: settings.end }, {
				duration: settings.duration,
				easing: settings.easing,
				step: function() {
					self.text(Math.ceil(this.counter));
				},
				complete: settings.complete
			});
		});
	}

})(jQuery);