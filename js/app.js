'use strict';

$(document).ready(function() {
  new WOW().init();
  $('#fullpage').fullpage();

  
  
});

$(window).on('load scroll', function() {
  $('.reveal').each(function() {
    const scrollTop = $(window).scrollTop();
    const winH = $(window).height();
    const elTop = $(this).offset().top;
    const elH = $(this).outerHeight();
    const elShow = elTop - winH + elH;

    if(scrollTop >= elShow) {
      $(this).addClass('on')
    }
  }); 
});









