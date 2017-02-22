$(document).ready(function(){

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

  // HEADER Hamburger
  $('#headerHamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.navi-mobile').toggleClass('is-active');
  });

  // owl
  $('#owlMainpageBenefits').owlCarousel({
    loop: false,
    dots: true,
    margin: 0,
    items: 1,
    responsive : {
      0 : {
        nav: true
      },
      768 : {
        nav: true
      },
      992 : {
        nav: false
      }
    }
  });

  $('#owlMainpageBenefits .owl-dot').each(function(i){
    i ++
    $(this).text('0' + i);
  });

  // Magnific Popup
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

  // Masked input
  $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  $("input[name='phone']").mask("9 (999) 999-9999");
  $("#tin").mask("99-9999999");
  $("#ssn").mask("999-99-9999");

  // CALENDAR
  $('#inputCalendar').datepicker({
    inline: true,
    minDate: new Date()
  })

});
