const reviewsThumbSlider = new Swiper('.reviews-thumbSlider', {

  navigation: {
    nextEl: '.reviews-slider__btn-next',
    prevEl: '.reviews-slider__btn-prev',
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
