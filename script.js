// JavaScript Document


$(document).ready(function () {
    var datetoday = new Date(); // create new Date()
    var timenow = datetoday.getTime(); // grabbing the time it is now
    datetoday.setTime(timenow); // setting the time now to datetoday variable
    var hournow = datetoday.getHours();  //the hour it is
 
 	
    if (hournow >= 18)  // if it is after 6pm
        $('body').addClass('evening');
    else if (hournow >= 14) // if it is after 2pm
        $('body').addClass('afternoon');
    else if (hournow >= 10)  // if it is after 10am
        $('body').addClass('morning'); 
    else if (hournow >= 6)  // if it is after 10am
		$('body').addClass('daybreak'); 
	else if (hournow >= 0)  // if it is after midnight
        $('body').addClass('midnight');


$(function() {

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $("div");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});


});



