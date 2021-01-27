$(document).ready(function(){

  //кнопка выбрать
  $('.btn').on('click', function() {
    $(this).closest('.button').toggleClass('active');
  });

  //Верхний слайдер (горячие предложения).
  $('.top-slider').slick({
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
    ]
  });


  // выравниваем высоту айтемов pizza-slider
  /*
  var pizzaHeight = $('.pizza-slider').height();
  $('.pizza').height(pizzaHeight);
  */


  // выбор размера пиццы
  var ts = $('.pizza-slider_item').find('.size-26');
  var tt = $('.pizza-slider_item').find('.size-32');

  ts.on('click', function(){
    var little = '26';
    var littlePizzaPrice = '999 руб.';
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
    $(this).closest('.pizza-slider_item').find('.price').html(littlePizzaPrice);
    $(this).closest('.pizza-slider_item').find('.size').html(little);
    // $(this).closest('.size').html(little);
  });
  tt.on('click', function(){
    var big = '32';
    var bigPizzaPrice = '1 345 руб.';
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $(this).closest('.pizza-slider_item').find('.price').html(bigPizzaPrice);
    $(this).closest('.pizza-slider_item').find('.size').html(big);
    // $(this).closest('.size').html(big);
  });


  let button = $('.button');
  let push = $('.button').children('.btn');
  let price = push.closest('.total-price');
  let item = `<li class="checkout-item">
                <button class="remove-btn">
                  <i class="fas fa-times-circle"></i>
                </button>
                <span class="product">
                  Пицца "Пепперони"
                </span>
                <span class="price">
                  <span class="number">1 шт.</span> / <span class="price">${price}</span>
                </span>
              </li>`;


  push.on('click', function () {
    $('.checkout-list').append(item);
  });





});

