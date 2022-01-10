$(function () {
  $('.social__slider').slick({
    dots: true,
    prevArrow: '<div class="container"><button type="button" class="slick-prev slick-btn"><img src="../images/prev.svg" alt=""></button></div>',
    nextArrow: '<div class="container"><button type="button" class="slick-next slick-btn"><img src="../images/next.svg" alt=""></button></div>',
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    speed: 300,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  );
});