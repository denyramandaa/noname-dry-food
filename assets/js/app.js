$(document).ready(function() {
    'use strict';
    function initSwiper() {
      swiper = new Swiper('.swiper--jumbotron', {
          effect: 'fade',
          followFinger: false,
          centeredSlides: true,
          loop: true,
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1000,
          navigation: {
            nextEl: '.jumbotron--next',
            prevEl: '.jumbotron--prev',
          },
          pagination: {
            el: '.jumbotron--pagination',
            clickable: true
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
      });
    }

    function initSwiperProducts(){
      new Swiper('.swiper--products', {
          effect: 'slide',
          followFinger: true,
          centeredSlides: true,
          slidesPerView: 1.2,
          spaceBetween: 0,
          pagination: {
            el: '.product--pagination',
            clickable: true
          },
      });
    }
    initSwiper();
    if(window.innerWidth <= 1024) { 
      initSwiperProducts();
    }
});
function openMenu() {
  $('.header').css('transform', 'translateX(0)')
  $('.overlay-side').fadeIn();
}
function closeMenu() {
  $('.header').css('transform', 'translateX(-100%)')
  $('.overlay-side').fadeOut();
}