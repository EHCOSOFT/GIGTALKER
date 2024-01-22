/* 상세페이지_001 MO */
var moDetailSwiper01 = new Swiper(".moDetailSwiper", {
  slidesPerView: 1,
  spaceBetween: 0, // 슬라이드 여백
  loop: true, // 무한반복
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".pagination_fraction",
    type: "fraction",
  },
});

var moDetailSwiper02 = new Swiper(".moDetailSwiper", {
  pagination: {
    //페이징 사용자 설정
    el: ".pagination_bullet", //페이징 태그 클래스 설정
    type: "bullets",
  },
});

// moDetailSwiper로 mopagingSwiper 제어
moDetailSwiper01.controller.control = moDetailSwiper02;

/* 상세페이지_001 PC */
var pcDetailSwiper02 = new Swiper(".pcDetailSwiper02", {
  spaceBetween: 4,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var pcDetailSwiper01 = new Swiper(".pcDetailSwiper01", {
  spaceBetween: 0,
  thumbs: {
    swiper: pcDetailSwiper02,
  },
});

var mainSwiper01;
var mainSwiper02;

function initializeSwiper() {
  if (window.innerWidth > 1366) {
    // 다바이스 크기가 1366px 이상일 때
    var mainSwiper01 = new Swiper(".mainSwiper01", {
      slidesPerView: 5.4,
      spaceBetween: 20, // 슬라이드 여백
      slidesOffsetAfter: 80, // 왼쪽 여백
      slidesOffsetBefore: 80, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var mainSwiper02 = new Swiper(".mainSwiper02", {
      slidesPerView: 5.4,
      spaceBetween: 20, // 슬라이드 여백
      slidesOffsetAfter: 80, // 왼쪽 여백
      slidesOffsetBefore: 80, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination-02",
      },
    });
  } else if (window.innerWidth > 1200) {
    // 디바이스 크기가 1200px 이상일 때

    var mainSwiper01 = new Swiper(".mainSwiper01", {
      slidesPerView: 5.1,
      spaceBetween: 20, // 슬라이드 여백
      slidesOffsetAfter: 56, // 왼쪽 여백
      slidesOffsetBefore: 56, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      
    });

    var mainSwiper02 = new Swiper(".mainSwiper02", {
      slidesPerView: 5.1,
      spaceBetween: 20, // 슬라이드 여백
      slidesOffsetAfter: 56, // 왼쪽 여백
      slidesOffsetBefore: 56, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination-02",
      },
    });
  } else if (window.innerWidth > 1000) {
    // 디바이스 크기가 1000px 이상일 때
    var mainSwiper01 = new Swiper(".mainSwiper01", {
      slidesPerView: 3.8,
      spaceBetween: 20, // 슬라이드 여백
      slidesOffsetAfter: 56, // 왼쪽 여백
      slidesOffsetBefore: 56, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination-02",
      },
    });

    var mainSwiper02 = new Swiper(".mainSwiper02", {
      slidesPerView: 3.8,
      spaceBetween: 20, // 슬라이드 여백
      slidesOffsetAfter: 56, // 왼쪽 여백
      slidesOffsetBefore: 56, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  } else if (window.innerWidth > 768) {
    // 디바이스 크기가 768px 이상일 때
    var mainSwiper01 = new Swiper(".mainSwiper01", {
      slidesPerView: 5.8,
      spaceBetween: 12, // 슬라이드 여백
      slidesOffsetAfter: 20, // 왼쪽 여백
      slidesOffsetBefore: 20, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
    });

    var mainSwiper02 = new Swiper(".mainSwiper02", {
      slidesPerView: 5.8,
      spaceBetween: 12, // 슬라이드 여백
      slidesOffsetAfter: 20, // 왼쪽 여백
      slidesOffsetBefore: 20, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
    });
  } else {
    // 디바이스 크기가 500px 이하일 때
    var mainSwiper01 = new Swiper(".mainSwiper01", {
      slidesPerView: 2.2,
      spaceBetween: 12, // 슬라이드 여백
      slidesOffsetAfter: 20, // 왼쪽 여백
      slidesOffsetBefore: 20, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
    });

    var mainSwiper02 = new Swiper(".mainSwiper02", {
      slidesPerView: 2.2,
      spaceBetween: 12, // 슬라이드 여백
      slidesOffsetAfter: 20, // 왼쪽 여백
      slidesOffsetBefore: 20, // 오른쪽 여백
      autoplay: {
        delay: 2000,
      },
    });
  }
}

// 창 크기 변경 이벤트 핸들러 등록
$(window).on("resize", function () {
  // 기존 Swiper 파괴
  if (mainSwiper01) {
    mainSwiper01.destroy();
  }

  if (mainSwiper02) {
    mainSwiper02.destroy();
  }
  // Swiper 초기화
  initializeSwiper();
});

// 페이지 로드 후 초기화
$(document).ready(function () {
  initializeSwiper();
});
