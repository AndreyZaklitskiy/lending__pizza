$(document).ready(function(){

  //кнопка выбрать
  $('.btn').on('click', function() {
    $(this).closest('.button').toggleClass('active');
  });

  //Верхний слайдер (горячие предложения).
  $('.offers-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
});
  //слайдер с пиццами
  $('.pizza-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //слайдер с закусками
  $('.snacks-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //cлайдер с напитками
  $('.drinks-slider').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // выравниваем высоту айтемов pizza-slider
  /*
  var pizzaHeight = $('.pizza-slider').height();
  $('.pizza').height(pizzaHeight);
  */


  // выбор размера пиццы
  var ts = $('.pizza').find('.size-26');
  var tt = $('.pizza').find('.size-32');

  ts.on('click', function(){
    var little = '26';
    var littlePizzaPrice = '999 руб.';
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
    $(this).closest('.pizza').find('.pizza-price').html(littlePizzaPrice);
    $(this).closest('.pizza').find('.pizza-size').html(little);
    $(this).closest('.pizza-size').html(little);
  });
  tt.on('click', function(){
    var big = '32';
    var bigPizzaPrice = '1 345 руб.';
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $(this).closest('.pizza').find('.pizza-price').html(bigPizzaPrice);
    $(this).closest('.pizza').find('.pizza-size').html(big);
  });
});

