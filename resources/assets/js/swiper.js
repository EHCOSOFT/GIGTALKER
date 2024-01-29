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