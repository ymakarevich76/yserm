const reviewsThumbSlider = new Swiper('.reviews-thumbSlider', {

  navigation: {
    nextEl: '.reviews-slider__btn-next',
    prevEl: '.reviews-slider__btn-prev',
  },

  spaceBetween: 10,

  slidesPerView: 4,
});


const companiesSlider = new Swiper('.companies-slider', {
  slidesPerView: 1,

  thumbs: {
    swiper: companiesThumbSlider,
  },
});



const companiesThumbSlider = new Swiper('.companies-thumbSlider', {

  navigation: {
    nextEl: '.companies-slider__btn-next',
    prevEl: '.companies-slider__btn-prev',
  },

  spaceBetween: 10,

  slidesPerView: 4,
});


const reviewsSlider = new Swiper('.reviews-slider', {
  slidesPerView: 1,

  thumbs: {
    swiper: reviewsThumbSlider,
  },
});

