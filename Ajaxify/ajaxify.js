(function($) {

	$.fn.ajaxify()
	{
		return this.each(function(callback) {
			var form = $(this),
				callback = typeof callback === 'function' ? callback : false,

				url = form.attr('action'),
				method = form.attr('method'),
				data = {};

				form.on('submit', function(e) {
					e.preventDefault();

					form.find("[name]").each(function() {
						var input = $(this),

							name = input.attr('name'),
							value = input.val();

						data[name] = value;
					});

					data['ajaxified'] = true;

					$.ajax({
						url: url,
						type: method,
						data: data,
					}).done(function(data) {
						if (callback) {
							callback(data);
						}
					});
				});
		});
	}

}(jQuery));