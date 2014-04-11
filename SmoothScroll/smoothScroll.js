(function($) {
	$.fn.smoothScroll = function(speed) {
		return this.each(function() {
			$(this).bind("click", function(e) {
				$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, speed);
				e.preventDefault();
			});
		});
	}
}(jQuery));