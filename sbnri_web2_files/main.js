var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$('.review-slider').owlCarousel({
  margin: 100,
  nav: true,
  navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  loop: true,
  dots: false,
  center: true,
  autoplay: false,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1
    },
    576: {
    	margin: 20,
      items: 2
    },
    768: {
      items: 2
    },
    991: {
    	margin: 80,
      items: 3
    },
    1199: {
      items: 3
    }
  }
});

$('.plan-slider').owlCarousel({
  margin: 20,
  nav: false,
  navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  loop: false,
  dots: true,
  center: true,
  autoplay: false,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    991: {
      items: 4
    },
    1199: {
      items: 4
    }
  }
});



$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").html('<i class="fa fa-angle-down"></i>');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").html('<i class="fa fa-angle-down"></i>');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").html('<i class="fa fa-angle-up"></i>');
        }
    });
    $('#banking').addClass('show');
    $('#investment').addClass('show');
});

new WOW().init();

$('#navbarSupportedContent').click(function(e){
  e.stopPropagation();
});
$('#investment_btn').click(function(e){
  $('#send_money').removeClass('show');
  $('#banking').removeClass('show');  
});
$('#banking_btn').click(function(e){
  $('#send_money').removeClass('show');
  $('#investment').removeClass('show');
});
$('#send_money_btn').click(function(e){
  $('#banking').removeClass('show');  
  $('#investment').removeClass('show');
});

$('body,html').click(function(e){
  $('#navbarSupportedContent').removeClass('show');
});

}
/*
     FILE ARCHIVED ON 10:53:48 Apr 13, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:48:21 Aug 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.057
  exclusion.robots: 0.04
  exclusion.robots.policy: 0.025
  esindex: 0.015
  cdx.remote: 48.19
  LoadShardBlock: 359.961 (3)
  PetaboxLoader3.datanode: 544.042 (5)
  load_resource: 344.483 (2)
  PetaboxLoader3.resolve: 119.181
*/