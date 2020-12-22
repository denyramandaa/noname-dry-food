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

    function initSwiperArticle(){
      new Swiper('.swiper--articles', {
          effect: 'slide',
          followFinger: true,
          centeredSlides: true,
          slidesPerView: window.innerWidth <= 1024 ? 1 : 3.6,
          initialSlide: window.innerWidth <= 1024 ? 0 : 1,
          spaceBetween: 20,
          slidesOffsetBefore: 15,
          navigation: {
            nextEl: '.article-swiper-button .next',
            prevEl: '.article-swiper-button .prev',
          },
      });
    }
    initSwiper();
    initSwiperGallery();
    initSwiperArticle();
    if(window.innerWidth <= 1024) { 
      initSwiperProducts();
      $(window).scroll(function() {
        window.scrollY  > document.getElementsByClassName('jumbotron')[0].clientHeight/2 ? $('.burger-menu-wrap').addClass('active') : $('.burger-menu-wrap').removeClass('active')
      });
    }
});
function gointTo(a) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById(a).offsetTop
  })
}
function openMenu() {
  $('.header').css('transform', 'translateX(0)')
  $('.overlay-side').fadeIn();
}
function closeMenu() {
  $('.header').css('transform', 'translateX(-100%)')
  $('.overlay-side').fadeOut();
}