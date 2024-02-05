var mainServiceSwiper = new Swiper(".main-service-swiper", {
  slidesPerView: 4,
  spaceBetween: 20, // 슬라이드 여백
  slidesOffsetAfter: 0, // 왼쪽 여백
  slidesOffsetBefore: 0, // 오른쪽 여백
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next-01",
    prevEl: ".swiper-button-prev-01",
  }
});

var mainServiceSwiper02 = new Swiper(".main-service-swiper-02", {
  slidesPerView: 4,
  spaceBetween: 20, // 슬라이드 여백
  slidesOffsetAfter: 0, // 왼쪽 여백
  slidesOffsetBefore: 0, // 오른쪽 여백
  navigation: {
    nextEl: ".swiper-button-next-02",
    prevEl: ".swiper-button-prev-02",
  }
});

var mainServiceSwiper02 = new Swiper(".main-service-swiper-03", {
  slidesPerView: 4,
  spaceBetween: 20, // 슬라이드 여백
  slidesOffsetAfter: 0, // 왼쪽 여백
  slidesOffsetBefore: 0, // 오른쪽 여백
  navigation: {
    nextEl: ".swiper-button-next-03",
    prevEl: ".swiper-button-prev-03",
  }
});


var mainServiceSwiper02 = new Swiper(".main-service-swiper-04", {
  slidesPerView: 4,
  spaceBetween: 20, // 슬라이드 여백
  slidesOffsetAfter: 0, // 왼쪽 여백
  slidesOffsetBefore: 0, // 오른쪽 여백
  navigation: {
    nextEl: ".swiper-button-next-04",
    prevEl: ".swiper-button-prev-04",
  }
});

var mainVisualSwiper = new Swiper(".main-visual-swiper", {
  slidesPerView: 1,
  spaceBetween: 0, // 슬라이드 여백
  slidesOffsetAfter: 0, // 왼쪽 여백
  slidesOffsetBefore: 0, // 오른쪽 여백
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next-00",
    prevEl: ".swiper-button-prev-00",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  }
});

var productImgSwiper = new Swiper(".product-img-swiper", {
  slidesPerView: 1,
  spaceBetween: 0, // 슬라이드 여백
  slidesOffsetAfter: 0, // 왼쪽 여백
  slidesOffsetBefore: 0, // 오른쪽 여백
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  }
});



var productDetailImgSwiper01 = new Swiper(".product-detila-img-swiper-01", {
  spaceBetween: 14,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".product-detail-swiper-01-next",
    prevEl: ".product-detail-swiper-01-prev",
  },
});

var productDetailImgSwiper02 = new Swiper(".product-detila-img-swiper-02", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".product-detail-swiper-02-next",
    prevEl: ".product-detail-swiper-02-prev",
  },
  thumbs: {
    swiper: productDetailImgSwiper01,
  },
});

var productReviewSwiper = new Swiper(".product-review-swiper", {
  slidesPerView: 1,
  spaceBetween: 0, // 슬라이드 여백
  slidesOffsetAfter: 0, // 왼쪽 여백
  slidesOffsetBefore: 0, // 오른쪽 여백
  navigation: {
    nextEl: ".swiper-review-button-next",
    prevEl: ".swiper-review-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  }
});