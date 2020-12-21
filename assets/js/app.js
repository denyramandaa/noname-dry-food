$(document).ready(function() {
    'use strict';
    function initSwiper() {
      new Swiper('.swiper--jumbotron', {
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
          slidesPerView: 1.3,
          spaceBetween: 28,
          pagination: {
            el: '.product--pagination',
            clickable: true
          },
          slidesOffsetBefore: 15
      });
    }

    function initSwiperGallery(){
      new Swiper('.swiper--gallery', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 1.5,
        speed: 800,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 350,
            modifier: 1
        }
      });
    }
    initSwiper();
    initSwiperGallery();
    if(window.innerWidth <= 1024) { 
      initSwiperProducts();
      $(window).scroll(function() {
        window.scrollY  > document.getElementsByClassName('jumbotron')[0].clientHeight/2 ? $('.burger-menu-wrap').addClass('active') : $('.burger-menu-wrap').removeClass('active')
      });
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