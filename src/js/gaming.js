$(document).ready(function(){
  ///////////////
  // BASIC STUFF
  //////////////

 	// Prevent # behavior
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        var offset = 0;
        if (el == '#sectionIntro' ){
          offset = 85;
        }
        $('body, html').animate({
            scrollTop: $(el).offset().top - offset}, 1000);
        return false;
	});

  

});
