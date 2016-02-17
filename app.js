$(document).ready(function() {
	$('header').on("click", function() {
		$(this).fadeOut('slow');
	});
	$('.hideBox').delay(1200).fadeIn(800);
	// $('.navItem').on("click", function() {
	// 	$(this).fadeTo(800, .25);
	// });
	$('.navItem').hover(
		function() {
			$(this).fadeTo(0, .25) 
		}, function () {
			$(this).fadeTo(0, 1)
	});

	var colorArr = ['pink', 'lightblue', 'lightgreen', 'orange'];


	$('.navItem').on('click', function() {
		$(this).css('background-color', function() {
			return colorArr[Math.floor(Math.random() * 4)];
		});
	});

	$('.navItem').on('click', function() {
		$('.navItem').children('p').css('display', 'none')
		$(this).children('p').css('display', 'inline').fadeIn(100);
	});
	 

		var classOn = false;
	 $('#theButt').on('click', function() {
	 	if (!classOn) {
	 		$('ul').addClass('bigGreenWords');
	 		$('.navItem').css('background-color', 'Brown');
	 		classOn = true
	 	}
	 	else {
	 		$('ul').removeClass('bigGreenWords');
	 		$('.navItem').css('background-color', 'Gray');
	 		classOn = false
	 	};	
	});




});


