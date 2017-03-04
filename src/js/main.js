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

  // HEADER Hamburger
  $('#headerHamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.navi-mobile').toggleClass('is-active');
    $('.page').toggleClass('lock');
  });

  ///////////////
  // SLIDERS
  //////////////
  $('#owlMainpageBenefits').owlCarousel({
    loop: true,
    dots: true,
    margin: 0,
    items: 1,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
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
  $('#owlTestimonials').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    responsive : {
      0 : {
        items: 1
      },
      568 : {
        items: 2
      },
      940 : {
        items: 3
      }
    }
  });
  $('#owlHeroSlider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    items: 1
  });

  $('#owlMainpageBenefits .owl-dot').each(function(i){
    i ++
    $(this).text('0' + i);
  });

  // Masked input
  $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  $("input[name='phone']").mask("9 (999) 999-9999");
  $("#tin").mask("99-9999999");
  $("#ssn").mask("999-99-9999");

  ///////////////
  // FUNCTIONALITY
  //////////////

  // CALENDAR
  $('#inputCalendar').datepicker({
    inline: true,
    minDate: new Date()
  })

  // TABS
  $('.tabs__navi').on('click', 'li:not(.active)', function(){
    var th = $(this);
    th.siblings().removeClass('active');
    th.addClass('active');
    var target = th.data('tab');
    $('.tabs__content').each(function(key, val){
      if ( target == $(this).data('panel') ) {
        $(this).fadeIn();
      } else{
        $(this).fadeOut();
      }
    });
  });

  //FAQ
  $('.faq__question').on('click', function(){
    $(this).parent().find('.faq__answer').slideToggle(400);
  });

  // MODALS LOGIC
  $('a[href^="#modal"]').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $(target).fadeIn();
  });
  $('.modal__close').on('click', function(){
    $(this).closest('.modal').fadeOut();
  });
  $(document).mouseup(function (e) {
    var container = new Array();
    container.push($('.modal__content'));

    $.each(container, function(key, value) {
        if (!$(value).is(e.target) && $(value).has(e.target).length === 0) {
            $('.modal').fadeOut();
        }
    });
  });

  setModalPosition();
  $(window).scroll(function(){
    setModalPosition();
  });

  function setModalPosition(){
    var winPos = $(window).scrollTop();
    if ( winPos > 110 ){
      $('.modal--offset-top').addClass('floated');
    } else{
      $('.modal--offset-top').removeClass('floated');
    }
  }

  // modal navigation next-prev
  $('.modal__footer').on('click', 'a:not(.inactive)', function(){
    var triggerModalNumber = $(this).data('blognav');
    console.log(triggerModalNumber);

    $(this).closest('.modal').fadeOut();
    $('#modalBlog' + triggerModalNumber).fadeIn()
  });

  // BOOTSTRAP TOOLTIPS
  $('[data-toggle="tooltip"]').tooltip()


  ///////////////
  // FAKE THINGS
  //////////////

  $('#submitFormAbove').on('click', function(){
    $(this).closest('.col').find('form').submit();
  });

  $('form').on('submit', function(e){
    var form = $(this);
    var email = form.find('input[type=email]');
    // fake validation
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailIsValid = false;
    if(emailRegex.test(email)){
      emailIsValid = true;
    } else {
      emailIsValid = false;
    }
    if (emailIsValid){

    } else {
      email.addClass('has-error');
    }


    e.preventDefault();
    return false;
  });


  // // Magnific Popup
  // $('.popup-with-zoom-anim').magnificPopup({
  //   type: 'inline',
  //   fixedContentPos: false,
  //   fixedBgPos: true,
  //   overflowY: 'auto',
  //   closeBtnInside: true,
  //   preloader: false,
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: 'my-mfp-zoom-in'
  // });
  //
  // $('.popup-with-move-anim').magnificPopup({
  //   type: 'inline',
  //   fixedContentPos: false,
  //   fixedBgPos: true,
  //   overflowY: 'auto',
  //   closeBtnInside: true,
  //   preloader: false,
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: 'my-mfp-slide-bottom'
  // });
  //
  // $('.popup-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1]
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	// 	}
	// });

});
