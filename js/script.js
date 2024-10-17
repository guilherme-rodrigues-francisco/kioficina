$(document).ready(function(){
    $('.banner__slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });
  });

  $(document).ready(function(){
    $('.autobrands__slide').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
      });
  });