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

  // RATE
  $('.gaming__rate').on('click', '.gaming__rate__btn', function(e){
    var rate = $(this).data('rate');

    $(this).parent().find('input[name="rating"]').val(rate);

    $(this).parent().find('.gaming__rate__btn').each(function(i){
      if ( rate < $(this).data('rate') ){
        $(this).addClass('inactive');
      } else{
        $(this).removeClass('inactive');
      }
    });

  });



});
