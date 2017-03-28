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
      768 : {
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
  $("input[name='birthday']").mask("99.99.9999",{placeholder:"дд.мм.гггг"});
  $("input[name='phone']").mask("8 (999) 999-9999");

  $("input[type='email']").keydown(function (event) {
    var email = $(this).val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailRegex.test(email)){
      $(this).removeClass('has-error');
      $(this).addClass('valid');
    } else {
      $(this).addClass('has-error');
      $(this).removeClass('valid');
    }

  });

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

  $('.modal').each(function(i, val){
    if ( $(this).data('auto') == true ){
      $(this).fadeIn();
    }
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
  $('[data-toggle="tooltip"]').tooltip();

  // Sumit form on a href
  $('.question__form .btn').on('click', function(e){
    $(this).closest('.question__form').submit();
    e.preventDefault();
  });


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

    console.log(email);
    if(emailRegex.test(email.val())){
      form.parent().find('.question__title').fadeOut();
      form.fadeOut();
      form.parent().find('.question__form__thanks').fadeIn();
      alert('form submitted - ajax call here');
    } else {
      email.addClass('has-error');
    }

    e.preventDefault();
    return false;
  });


  // detect IE
  function fckie() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  {
      $('body').addClass('is-ie');
    }
    return false;
  }
  fckie();

});
