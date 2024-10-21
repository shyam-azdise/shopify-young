(function($) {
  "use strict";

  jQuery(document).ready(function(){


    // All jQuery activation code paste here

    
    /*----------------------------
        Youtube video
    ------------------------------ */
    var ytplayer = $('.youtube-bg');
    if(ytplayer.length > 0){
      ytplayer.YTPlayer({
      	containment: '.youtube-bg',
        autoPlay:true,
        startAt:0,
        loop: true,
      });
    };
    
    
    /*---------------------
        Video popup
    --------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
    
    /*--------------------------
        Instagram
    ---------------------------- */
    if ($('#Instafeed-2').length) {
        var feed = new Instafeed({
            get: 'user',
            userId: 6665768655,
            accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
            target: 'Instafeed-2',
            resolution: 'standard_resolution',
            limit: 8,
            template: '<div class="single-instafeed-2"><li><a href="" target="_new"><img src="" /></a></li></div>',
        });
        feed.run();
    }
    
    
    
    
    /*--------------------------
        Instagram
    ---------------------------- */
    if ($('#Instafeed-5').length) {
        var feed = new Instafeed({
            get: 'user',
            userId: 6665768655,
            accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
            target: 'Instafeed-5',
            resolution: 'thumbnail',
            limit: 6,
            template: '<div class="single-instafeed-5"><li><a href="" target="_new"><img src="" /></a></li></div>',
        });
        feed.run();
    }
    
    /*------ Wow Active ----*/
    new WOW().init();


    /*====== Sidebar active ======*/
    function sidebarInfo() {
        var searchTrigger = $('.clickalbe-button-active'),
            endTriggersearch = $('.sidebar-close'),
            container = $('.clickalbe-sidebar-wrapper-active');
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('sidebar-visible');
        });
        endTriggersearch.on('click', function() {
            container.removeClass('sidebar-visible');
        });
    };
    sidebarInfo();
    
    /*====== clickable Main Menu active ======*/
    var $clickableMainMenu = $('.clickable-mainmenu-wrap'),
        $clickableSubMenu = $clickableMainMenu.find('.sub-menu-2');
    /*Add Toggle Button in Off Canvas Sub Menu*/
    $clickableSubMenu.siblings('a').append('<span class="menu-expand"><i class=" ti-plus "></i></span>');
    /*Close Off Canvas Sub Menu*/
    $clickableSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $clickableMainMenu.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ($this.parent('li').hasClass('has-sub-menu') || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active').children('ul').slideUp().siblings('a').find('.menu-expand i').removeClass(' ti-minus ').addClass(' ti-plus ');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass(' ti-minus ').addClass(' ti-plus ');
            } else {
                $this.parent('li').addClass('active').children('ul').slideDown().siblings('a').find('.menu-expand i').removeClass(' ti-plus ').addClass(' ti-minus ');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass(' ti-minus ').addClass(' ti-plus ');
            }
        }
    });

    
    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper2 = $('.main-wrapper');
        
        wrapper2.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper2.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper2.removeClass('overlay-active');
        });
    };
    miniCart();
    
    
    
    /*--- Language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function(e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });
    $('.mobile-account-active').on('click', function(e) {
        e.preventDefault();
        $('.account-dropdown-active').slideToggle(900);
    });
    
    
    /*====== mobileMenu active ======*/
    function mobileMenu() {
        var mobilemenuTrigger = $('.mobile-menu-button-active'),
            endTriggermobilemenu = $('.sidebar-close'),
            container = $('.mobile-menu-active');
        mobilemenuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('mobilemenu-visible');
        });
        endTriggermobilemenu.on('click', function() {
            container.removeClass('mobilemenu-visible');
        });
    };
    mobileMenu();
    
    
    /*====== clickable Main Menu 2 active ======*/
    var $clickableMainMenu = $('.clickable-mainmenu-wrap-2, .sidebar-widget-categories'),
        $clickableSubMenu = $clickableMainMenu.find('.sub-menu-3, .sw-sub-menu');
    /*Add Toggle Button in Off Canvas Sub Menu*/
    $clickableSubMenu.siblings('a').append('<span class="menu-expand"><i class="fa fa-angle-down "></i></span>');
    /*Close Off Canvas Sub Menu*/
    $clickableSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $clickableMainMenu.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ($this.parent('li').hasClass('sw-sub-wrap, has-sub-menu') || ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active').children('ul').slideUp().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-up ').addClass('fa fa-angle-down');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
            } else {
                $this.parent('li').addClass('active').children('ul').slideDown().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-down ').addClass('fa fa-angle-up');
                $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a').find('.menu-expand i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
            }
        }
    });
    
    /*------- Jarallax active  ------*/
     var jarallax = $('.jarallax');
      if(jarallax.length > 0){
        jarallax.jarallax({
          speed: 0.6
        });
      };
    
    
    
   
    
    /*--------------------------
        Isotope
    ---------------------------- */
    $('.grid-2').imagesLoaded(function() {
        // init Isotope
        $('.grid-2').isotope({
            itemSelector: '.grid-item-2',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer',
            }
        });
    });
    
    /*-------------------------------
	   Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.search-wrap-3').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.search-wrap-3').addClass('open');
        }
    })
    
    /*-------------------------
      category toggle function
    --------------------------*/
    $('.showcat').on('click', function(e) {
        e.preventDefault();
        $('.hidecat').slideToggle(900);
    });
    /*-------------------------
      category 2 toggle function
    --------------------------*/
    $('.showcat-2').on('click', function(e) {
        e.preventDefault();
        $('.hidecat-2').slideToggle(900);
    });
    /*-------------------------
      category 2 toggle function
    --------------------------*/
    $('.showcat-3').on('click', function(e) {
        e.preventDefault();
        $('.hidecat-3').slideToggle(900);
    });
    
    
    
    /* Sidemenu Dropdown */
    function sidemenuDropdown() {
        var $this = $('.mobile-category-menu');
        $this.find('nav .cr-dropdown')
            .find('ul').slideUp();
        $this.find('nav li.cr-dropdown > a, nav li.cr-sub-dropdown > a').on('click', function(e) {
            e.preventDefault();
            $(this).next().slideToggle();
        });
    }
    sidemenuDropdown();
    

    
    
    
    /* Tilt active */
    $('.tilt-active').tilt({
        maxTilt: 10,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        speed: 1200,
        scale: 1
    });
    
    
    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });
    
    /*------- Color active -----*/
    $('.sidebar-widget-color').on('click', 'a', function(e){
        e.preventDefault();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    });
    
    
    /*=========================
		Toggle Ativation
	===========================*/
    function itemToggler() {
        $(".toggle-item-active").slice(0, 16).show();
        $(".item-wrapper").find(".loadmore").on('click', function(e) {
            e.preventDefault();
            $(this).parents(".item-wrapper").find(".toggle-item-active:hidden").slice(0, 4).slideDown();
            if ($(".toggle-item-active:hidden").length == 0) {
                $(this).parent('.toggle-btn').fadeOut('slow');
            }
        });
    }
    itemToggler();
    
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();
    
    /*------------------------------------
        Quick view Slick Carousel
    -----------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider , .product-dec-slider-2',
    });

    
    
    /*------------------------
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    
    /*---------------------
        Sidebar sticky active
    --------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 0,
        bottomSpacing: 30,
        minWidth: 991,
    });
    
    /*--------------------------
        Sidebar sticky active
    --------------------- ----*/
    $('.register-active').on('click', function(e) {
        e.preventDefault();
        $('.register-form-wrap').slideToggle(900);
    });
    
    /*--- Checkout toggle function ----*/
    $('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });
    
    /*--- Checkout toggle function ----*/
    $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });
    
    /*-------------------------
        Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });
    
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
    
    /*---------------------------------
    checkout one click toggle function
    ----------------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
	 $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });
    
    /*------------
        ScrollUp
    ------------------ */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    //Lazayload js
      $("img.lazyload").lazyload();
    
    // Product grid color variant activation code. 
    
    $('.product-color li label').click(function(){
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage }); 
      return false;
    });
    

  });
  
})(jQuery);
