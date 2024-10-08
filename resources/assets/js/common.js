$(document).ready(function () {
  $("#header").append(Header());
  $("#footer").append(Footer());
  $("#footer-top").append(FooterTop());
  $("#footer-bottom").append(FooterBot());

  function Header() {
    return `
    <div class="header-top">
    <div class="container">
        <a href="메인.html" class="header-logo">
            <img src="img/logo.png" alt="">
        </a>
        <div class="input-search">
            <input type="text" placeholder="어떤 전문가를 찾으시나요?">
            <button type="submit">
                <i class="ico i-search-p"></i>
            </button>
        </div>
        <ul class="header-top-right">
            <li class="on">
                <button type="button" class="btn-alarm active">
                    <i class="ico i-alarm">
                        <span></span>
                    </i>
                </button>
                <div class="alarm-wrap">
                    <div class="alarm-top">
                        <h6>알림</h6>
                        <ul>
                            <li class="open-modal" data-modal-id="alarmAllDelModal"><i
                                    class="ico i-trash"></i></li>
                            <li><i class="ico i-set"></i></li>
                        </ul>
                    </div>
                    <div class="alarm-body">
                        <div class="alarm-item">
                            <p>오늘</p>
                            <ul>
                                <li>
                                    <div class="alarm-area">
                                        <a href="#" class="user">
                                            <div class="user-photo">A
                                            </div>
                                        </a>
                                        <h3>[eXpert] eXpert 정보수정이 완료되었습니다. 실제 서비스에 반영되기까지 다소 시간이 걸릴 수
                                            있습니다.<br><span>2023.11.16. 13:00</span></h3>
                                        <button type="button" class="btn-alarm-close"></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="alarm-item">
                            <p>이전</p>
                            <ul>
                                <li>
                                    <div class="alarm-area">
                                        <a href="#" class="user">
                                            <div class="user-photo">A
                                            </div>
                                        </a>
                                        <h3>[eXpert] eXpert 정보수정이 완료되었습니다. 실제 서비스에 반영되기까지 다소 시간이 걸릴 수
                                            있습니다.<br><span>2023.11.16. 13:00</span></h3>
                                        <button type="button" class="btn-alarm-close"></button>
                                    </div>
                                </li>
                                <li>
                                    <div class="alarm-area">
                                        <a href="#" class="user">
                                            <div class="user-photo">A
                                            </div>
                                        </a>
                                        <h3>[eXpert] eXpert 정보수정이 완료되었습니다. 실제 서비스에 반영되기까지 다소 시간이 걸릴 수
                                            있습니다.<br><span>2023.11.16. 13:00</span></h3>
                                        <button type="button" class="btn-alarm-close"></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>

            <li class="on"><a href="#"><i class="ico i-chat active"><span></span></i></a></li>
            <li class="on"><a href="#"><i class="ico i-heart"></i></a></li>
            <li class="language open-modal" data-modal-id="languageModal"><i class="ico i-language"></i>한국어
            </li>
            <li class="on"><a href="#"><b>구매관리</b></a></li>
            <li>
                <div class="dropdown-group">
                    <div class="dropdown-list-wrap header-user">
                        <button class="dropdown-button" data-target="headerUserMenu">
                            <!-- on and off -->
                            <span href="#" class="user md off">
                                <img src="img/sample/sample-02.png" alt="">
                            </span>
                        </button>
                        <ul id="headerUserMenu" class="dropdown-list">
                            <li><a href="#">프로필 관리</a></li>
                            <li><a href="#">계정정보</a></li>
                            <li><a href="#">구매관리</a></li>
                            <li><a href="#">마이페이지</a></li>
                            <hr>
                            <li><a href="#">전문가센터</a></li>
                            <li><a href="#">판매관리</a></li>
                            <li><a href="#"><i class="ico i-logout"></i>로그아웃</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="header-catagory">
    <div class="container">
        <ul>
            <li class="all-catagory"><i class="ico i-catagory"></i>전체카테고리</li>
            <li><a href="#" class="router-link-active">홈서비스</a></li>
            <li><a href="#">비자/유학</a></li>
            <li><a href="#">법률/세금</a></li>
            <li><a href="#">여행/공항픽업</a></li>
            <li><a href="#">휴대폰개통</a></li>
            <li><a href="#">대학/강의</a></li>
            <li><a href="#">해외배송</a></li>
            <li><a href="#">번역/통역</a></li>
            <li><a href="#">메디컬</a></li>
            <li><a href="#">문서/디자인</a></li>
            <li><a href="#">기타</a></li>
        </ul>
        <div class="all-catagory-wrap">
            <div class="all-catagory-area">
                <dl>
                    <dt><a href="#">생활서비스 (400)</a></dt>
                    <dd><a href="#">이사 (30)</a></dd>
                    <dd><a href="#">청소 (30)</a></dd>
                    <dd><a href="#">집수리 (30)</a></dd>
                    <dd><a href="#">인테리어 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">유학/이민 (400)</a></dt>
                    <dd><a href="#">비자발급 (30)</a></dd>
                    <dd><a href="#">대학유학 (30)</a></dd>
                    <dd><a href="#">어학민 (30)</a></dd>
                    <dd><a href="#">이민 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">세무/법무 (400)</a></dt>
                    <dd><a href="#">세무,회계 (30)</a></dd>
                    <dd><a href="#">법률 (30)</a></dd>
                    <dd><a href="#">노무상담 (30)</a></dd>
                    <dd><a href="#">특허,상표 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">학습/취업 (400)</a></dt>
                    <dd><a href="#">취업/이력서 (30)</a></dd>
                    <dd><a href="#">컴퓨터,코딩 (30)</a></dd>
                    <dd><a href="#">뷰티/미용 (30)</a></dd>
                    <dd><a href="#">학생레슨 (30)</a></dd>
                    <dd><a href="#">취미레슨 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">문서/번역 (400)</a></dt>
                    <dd><a href="#">번역 (30)</a></dd>
                    <dd><a href="#">통역 (30)</a></dd>
                    <dd><a href="#">논문 (30)</a></dd>
                    <dd><a href="#">카피/글쓰기 (30)</a></dd>
                    <dd><a href="#">스토리/기획 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">디자인 (400)</a></dt>
                    <dd><a href="#">로고/브랜드 (30)</a></dd>
                    <dd><a href="#">인쇄홍보물 (30)</a></dd>
                    <dd><a href="#">웹/앱 디자인 (30)</a></dd>
                    <dd><a href="#">제품디자인 (30)</a></dd>
                    <dd><a href="#">건축디자인 (30)</a></dd>
                    <dd><a href="#">기타 디자인 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">비지니스 (400)</a></dt>
                    <dd><a href="#">언롱홍보 (30)</a></dd>
                    <dd><a href="#">시장조사 (30)</a></dd>
                    <dd><a href="#">쇼핑몰 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">메디컬 (400)</a></dt>
                    <dd><a href="#">의료관광 (30)</a></dd>
                    <dd><a href="#">성형수술 (30)</a></dd>
                    <dd><a href="#">모발이식 (30)</a></dd>
                    <dd><a href="#">치과 (30)</a></dd>
                    <dd><a href="#">피부과 (30)</a></dd>
                    <dd><a href="#">안과 (30)</a></dd>
                    <dd><a href="#">한방병원 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">상담 (400)</a></dt>
                    <dd><a href="#">심리상담 (30)</a></dd>
                    <dd><a href="#">비즈니스상담 (30)</a></dd>
                    <dd><a href="#">부동산컨설팅 (30)</a></dd>
                    <dd><a href="#">금융상담 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">프로그램 개발 (400)</a></dt>
                    <dd><a href="#">웹개발 (30)</a></dd>
                    <dd><a href="#">앱개발 (30)</a></dd>
                    <dd><a href="#">소프트웨어 개발 (30)</a></dd>
                    <dd><a href="#">AI 개발 (30)</a></dd>
                    <dd><a href="#">기타 개발 (30)</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">기타 (400)</a></dt>
                    <dd><a href="#">기타 (30)</a></dd>
                </dl>
            </div>
        </div>
    </div>
</div>
    `;
  }

  function Footer() {
    return `
        <div class="footer-top">
            <div class="container">
            <div class="footer-top-left">
                <img src="img/logo.png" alt="GIGTALKER">
                <p>10:00~17:00 (점심시간 12:00~13:30)<br>
                    주말, 공휴일 휴무</p>
                <button type="button" class="btn">1:1 문의하기</button>
                <h6>긱토커는 서비스 중개 플랫폼입니다.<br>작업 의뢰는 전문가에게 직접 문의해 주세요.</h6>
            </div>
            <div class="footer-top-right">
                <dl>
                    <dt>소개</dt>
                    <dd><a href="#">긱톡커란?</a></dd>
                    <dd><a href="#">전문가신청안내</a></dd>
                    <dd><a href="#">사용 가이드</a></dd>
                </dl>
                <dl>
                    <dt>내활동</dt>
                    <dd><a href="#">맞춤주문내역</a></dd>
                    <dd><a href="#">구매내역</a></dd>
                    <dd><a href="#">구매후기</a></dd>
                    <dd><a href="#">채팅목록</a></dd>
                </dl>
                <dl>
                    <dt>소개</dt>
                    <dd><a href="#">전문가 센터</a></dd>
                    <dd><a href="#">고객요청서</a></dd>
                    <dd><a href="#">판매관리</a></dd>
                    <dd><a href="#">내 상품관리</a></dd>
                    <dd><a href="#">광고관리</a></dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="footer-nav">
        <div class="container">
            <ul>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">전문가 이용약관</a></li>
                <li><a href="#">공지사항</a></li>
                <li><a href="#">자주 묻는 질문</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-info">
        <div class="container">
            <h5>긱톡커는 전문가중개시스템의 제공자로서 통신판매의 당사자가 아닙니다. 상품의 판매, 상담 내용을 포함하여 용역 및 강의의 이행, 환불 등 상품과 관련한 의무와 책임은 각
                판매자에게 있습니다.<br>
                또한 긱톡커는 본 플랫폼 외부에서 이루어진 상담 등으로 인하여 발생한 문제에 대해서도 마찬가지로 책임을 지지 않습니다.</h5>
            <h6>사업자등록증 : <span>548-87-01652</span> 통신판매업신고번호 : <span>제2020-서울마포-0190호</span> 이메일문의 : <span>help@joohan.kr</span><br>
                (주)이엠케이미디어 <span>서울시 마포구 독막로 262 신영빌딩 6층</span> 취업정보제공사업신청 : <span>서울서부제2020-15호</span> 대표전화 <span>010-4889-0513</span>
            </h6>
            <p>©gigtalker. All rights reserved.</p>
        </div>
    </div>
    `;
  }

  function FooterTop() {
    return `
        <div class="footer-top">
        <div class="container">
            <div class="footer-top-left">
                <img src="img/logo.png" alt="GIGTALKER">
                <p>10:00~17:00 (점심시간 12:00~13:30)<br>
                    주말, 공휴일 휴무</p>
                <button type="button" class="btn">1:1 문의하기</button>
                <h6>긱토커는 서비스 중개 플랫폼입니다.<br>작업 의뢰는 전문가에게 직접 문의해 주세요.</h6>
            </div>
            <div class="footer-top-right">
                <dl>
                    <dt>소개</dt>
                    <dd><a href="#">긱톡커란?</a></dd>
                    <dd><a href="#">전문가신청안내</a></dd>
                    <dd><a href="#">사용 가이드</a></dd>
                </dl>
                <dl>
                    <dt>내활동</dt>
                    <dd><a href="#">맞춤주문내역</a></dd>
                    <dd><a href="#">구매내역</a></dd>
                    <dd><a href="#">구매후기</a></dd>
                    <dd><a href="#">채팅목록</a></dd>
                </dl>
                <dl>
                    <dt>소개</dt>
                    <dd><a href="#">전문가 센터</a></dd>
                    <dd><a href="#">고객요청서</a></dd>
                    <dd><a href="#">판매관리</a></dd>
                    <dd><a href="#">내 상품관리</a></dd>
                    <dd><a href="#">광고관리</a></dd>
                </dl>
            </div>
        </div>
    </div>
    `;
  }

  function FooterBot() {
    return `
        <div class="footer-nav">
        <div class="container">
            <ul>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">전문가 이용약관</a></li>
                <li><a href="#">공지사항</a></li>
                <li><a href="#">자주 묻는 질문</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-info">
        <div class="container">
            <h5>긱톡커는 전문가중개시스템의 제공자로서 통신판매의 당사자가 아닙니다. 상품의 판매, 상담 내용을 포함하여 용역 및 강의의 이행, 환불 등 상품과 관련한 의무와 책임은 각
                판매자에게 있습니다.<br>
                또한 긱톡커는 본 플랫폼 외부에서 이루어진 상담 등으로 인하여 발생한 문제에 대해서도 마찬가지로 책임을 지지 않습니다.</h5>
            <h6>사업자등록증 : <span>548-87-01652</span> 통신판매업신고번호 : <span>제2020-서울마포-0190호</span> 이메일문의 : <span>help@joohan.kr</span><br>
                (주)이엠케이미디어 <span>서울시 마포구 독막로 262 신영빌딩 6층</span> 취업정보제공사업신청 : <span>서울서부제2020-15호</span> 대표전화 <span>010-4889-0513</span>
            </h6>
            <p>©gigtalker. All rights reserved.</p>
        </div>
    </div>
    `;
  }

  // -------------- HEADER --------------

  // 상단 알림 이벤트
  $(".btn-alarm").click(function () {
    $(".alarm-wrap").show();
  });
  // 마우스가 .alarm-wrap 밖으로 나가면 hide()
  $(".alarm-wrap").mouseleave(function () {
    $(this).hide();
  });
  // .btn-alarm-close 시 li 위에 p로 금일, 이전 날짜를 표시하는 구간이
  // 있는데 해당 부분은 어떤식으로 해야할지 고민이 필요
  $(".btn-alarm-close").on("click", function () {
    $(this).closest("li").hide();
  });

  // 상단 카테고리 이벤트
  $(".all-catagory").click(function () {
    $(".all-catagory-wrap").show();
  });
  // 마우스가 .all-catagory-wrap 밖으로 나가면 hide()
  $(".all-catagory-wrap").mouseleave(function () {
    $(this).hide();
  });

  // 버튼 이벤트
  $(".btn-heart").click(function () {
    $(this).toggleClass("active");
  });

  // -------------- MAIN --------------

  // 드롭다운 버튼 클릭 시 드롭다운 리스트 토글
  $(".dropdown-button").click(function (e) {
    if ($(this).hasClass("disabled")) {
      return;
    }

    var target = $(this).data("target");
    $("#" + target).toggle();
    $(this).toggleClass("active");

    e.stopPropagation();
  });

  // 드롭다운 영역을 벗어날 시 hide
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".dropdown-list-wrap").length) {
      $(".dropdown-list").hide();
      $(".dropdown-button").removeClass("active");
    }
  });

  // -------------- COMMON --------------
  function removeDefaultEvent(event) {
    event.preventDefault();
  }
  // 모달 열기 버튼 클릭 이벤트
  $(".open-modal").click(function () {
    var modalId = $(this).data("modal-id");
    $("#" + modalId).addClass("active");

    // 활성화된 모달 수에 따라 z-index를 동적으로 설정하여 모달을 겹침
    var activeModals = $(".gt-modal-wrap.active").length;
    modalElement.css("z-index", 1000 + activeModals); // z-index 조정

    // 활성화 클래스를 추가하여 모달을 표시
    modalElement.addClass("active");

    // 새로운 모달에 대해 스크롤 이벤트를 막음
    window.addEventListener("wheel", removeDefaultEvent, { passive: false });
  });

  // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
  $(".btn-modal-close, .gt-modal-wrap").click(function () {
    var modalToClose = $(this).closest(".gt-modal-wrap");

    // 최상위 모달만 닫기 (활성화된 모달만 제거)
    modalToClose.removeClass("active");

    // $(".gt-modal-wrap").removeClass("active");
    // window.removeEventListener("wheel", removeDefaultEvent);

    // 더 이상 활성화된 모달이 없으면 스크롤 방지 해제
    if ($(".gt-modal-wrap.active").length === 0) {
      window.removeEventListener("wheel", removeDefaultEvent);
    }
    // .pp-modal의 내부가 아닌 경우에만 모달을 닫음
    // if (!$(this).closest('.pp-modal').length) {
    //   $(".gt-modal-wrap").removeClass("active");
    //   window.removeEventListener("wheel", removeDefaultEvent);
    // }
  });

  // 모달 내용 내부 클릭 시 이벤트 전파 방지
  $(".pp-modal").click(function (e) {
    e.stopPropagation();
  });

  // 모달 내부 클릭 시 닫기 방지
  $(".gt-modal-content, .pp-modal").click(function (e) {
    e.stopPropagation();
  });

  // Swiper 버튼 클릭 시 모달 닫기 방지
  $(".swiper-button-next, .swiper-button-prev").click(function (e) {
    e.stopPropagation(); // Swiper 버튼 클릭 시 모달 닫기 방지
  });

  // 모달 내부의 특정 버튼 클릭 시 모달이 닫히지 않도록 이벤트 전파 차단
  $(".btn-pink-heart, .btn-heart, .btn-share").click(function (e) {
    e.stopPropagation(); // 이벤트 전파 차단
  });

  // 아코디언
  $(".accordion-header").click(function () {
    // 현재 클릭된 아코디언 아이템
    var accordionItem = $(this).parent();

    // 다른 아코디언 아이템에서는 content를 닫음
    $(".accordion-item")
      .not(accordionItem)
      .find(".accordion-content")
      .slideUp();
    $(".accordion-item").not(accordionItem).removeClass("active");

    // 현재 클릭된 아코디언 아이템의 content를 토글
    accordionItem.find(".accordion-content").slideToggle();
    accordionItem.toggleClass("active");
  });

  // 드롭다운 리스트 항목 클릭 시 이벤트 핸들러
  $(".dropdown-list li").click(function () {
    var selectedText = $(this).text(); // 클릭한 항목의 텍스트 가져오기
    $(this).parent().prev().children(".placeholder").text(selectedText); // 플레이스홀더 텍스트 업데이트
    // $(".dropdown-button .placeholder").text(selectedText);
    $("#drop01").hide(); // 드롭다운 리스트 숨기기
    $(".dropdown-button").removeClass("active"); // 드롭다운 버튼의 활성 클래스 제거
  });

  // 탭 메뉴
  $(".prdouct-detail-area .tabs .tab-button").click(function () {
    var target = $(this).data("target");
    $(".tabs .tab-button").removeClass("active");
    $(this).addClass("active");
    // 스크롤 이동
    $("html, body").animate(
      {
        scrollTop: $("#" + target).offset().top,
      },
      500
    );
  });

  // 전문가센터 판매관리
  // 초기에 "판매내역" 탭을 활성화
  $("#salesList").show();
  $("#premiunAd").show();
  $("#productSale").show();
  $("#idFind").show();
  $("#available").show();
  $(".default-tabs .tab-button").click(function () {
    var target = $(this).data("target");
    // 모든 탭 버튼에서 active 클래스를 제거
    $(".default-tabs .tab-button").removeClass("active");
    // 현재 클릭된 탭 버튼에만 active 클래스 추가
    $(this).addClass("active");
    // 모든 탭 콘텐츠를 숨김
    $(".default-tabs .tab-content").hide();
    // 클릭된 탭에 해당하는 콘텐츠를 표시
    $("#" + target).show();
  });

  // toggle
  // 기본 상태 확인 및 설정
  $('.toggle-group .toggle input[type="checkbox"]').each(function () {
    var $toggleGroup = $(this).closest(".toggle-group");
    if ($(this).is(":checked")) {
      $toggleGroup.addClass("active");
    } else {
      $toggleGroup.removeClass("active");
    }
  });

  // 변경 이벤트 핸들러 추가
  $('.toggle-group .toggle input[type="checkbox"]').change(function () {
    var $toggleGroup = $(this).closest(".toggle-group");
    if ($(this).is(":checked")) {
      $toggleGroup.addClass("active");
    } else {
      $toggleGroup.removeClass("active");
    }
  });

  // pie progress
  $(".circle").each(function () {
    var circle = $(this);
    var span = circle.find("span");

    // 초기 텍스트 가져오기
    var text = span.text();
    // 텍스트에서 '%' 문자 제거하고 숫자만 추출
    var score = parseFloat(text.replace("%", "")) / 100;

    // 각도 계산
    var angle = Math.round(score * 360);
    // 배경 그라데이션 각도 설정
    if (circle.hasClass("success")) {
      circle.css(
        "background",
        "conic-gradient(var(--gt-success) " + angle + "deg, #2E3F77 0deg)"
      );
    } else if (circle.hasClass("info")) {
      circle.css(
        "background",
        "conic-gradient(var(--gt-info) " + angle + "deg, #2E3F77 0deg)"
      );
    } else if (circle.hasClass("warning")) {
      circle.css(
        "background",
        "conic-gradient(var(--gt-warning) " + angle + "deg, #2E3F77 0deg)"
      );
    }

    // 숫자 텍스트 갱신 함수
    function updateProgress(text) {
      var score = parseFloat(text.replace("%", "")) / 100;
      var angle = Math.round(score * 360);
      // 배경 그라데이션 각도 설정
      if (circle.hasClass("success")) {
        circle.css(
          "background",
          "conic-gradient(var(--gt-success) " + angle + "deg, #2E3F77 0deg)"
        );
      } else if (circle.hasClass("info")) {
        circle.css(
          "background",
          "conic-gradient(var(--gt-info) " + angle + "deg, #2E3F77 0deg)"
        );
      } else if (circle.hasClass("warning")) {
        circle.css(
          "background",
          "conic-gradient(var(--gt-warning) " + angle + "deg, #2E3F77 0deg)"
        );
      }
    }

    // span 안의 텍스트 변경 이벤트 핸들러
    span.on("DOMSubtreeModified", function () {
      var newText = $(this).text();
      updateProgress(newText);
    });
  });

  // custom-tabs
  $(".custom-tab").click(function () {
    $(this).toggleClass("selected");
  });

  // 비밀번호 숨기기/보이기
  // 비밀번호 입력란과 비밀번호 표시 버튼 선택
  var passwordInput = $("#pwInput");
  var showPasswordBtn = $(".btn-pw-eyes");

  // 비밀번호 표시 버튼을 클릭했을 때
  showPasswordBtn.click(function () {
    // 입력된 텍스트가 있는지 확인
    if (passwordInput.val().trim() !== "") {
      // 비밀번호 입력란의 type 속성을 토글
      var type =
        passwordInput.attr("type") === "password" ? "text" : "password";
      passwordInput.attr("type", type);

      // 현재 상태에 따라 버튼 배경 이미지 변경
      if (type === "password") {
        showPasswordBtn.css("background-image", 'url("img/ico/i-eyes-on.png")');
      } else {
        showPasswordBtn.css(
          "background-image",
          'url("img/ico/i-eyes-off.png")'
        );
      }
    }
  });

  // input(number) 인증코드 입력 시 다음으로 next
  $(".input-code").on("input", function () {
    var currentInput = $(this);
    var nextInput = currentInput.next(".input-code");

    if (currentInput.val().length === 1) {
      if (nextInput.length > 0) {
        nextInput.focus();
      }
    }
  });

  // 한자리 입력
  $(".input-code").on("keypress", function (e) {
    var key = String.fromCharCode(e.which);
    var regex = /^[0-9]$/;

    if (!regex.test(key)) {
      e.preventDefault();
    }
  });

  $(".product-img").hover(
    function () {
      $(".swiper-button-next, .swiper-button-prev", this)
        .stop()
        .fadeTo(300, 1)
        .css("visibility", "visible")
        .css("display", "flex");
    },
    function () {
      $(".swiper-button-next, .swiper-button-prev", this)
        .stop()
        .fadeTo(300, 0, function () {
          $(this).css("visibility", "hidden");
        });
    }
  );

  // 검색리스트 이벤트
  // 검색리스트 광고 hover 이벤트
  $(".btn-ad").hover(
    function () {
      // 마우스가 올라갔을 때
      $(this).siblings(".ad-info-area").css("display", "flex");
    },
    function () {
      // 마우스가 벗어났을 때
      $(this).siblings(".ad-info-area").css("display", "none");
    }
  );

  // 정렬기준
  $(".dropdown-group.array li").click(function () {
    // 클릭한 li에 .check 클래스 추가
    $(this).addClass("check");
    // 클릭한 li의 형제 요소들에서 .check 클래스 제거
    $(this).siblings().removeClass("check");
    // 클릭한 li의 텍스트를 버튼 안에 넣기
    var selectedText = $(this).text();
    $(".dropdown-group.array .dropdown-button span").text(selectedText);
    // 드롭다운 숨기기 (선택한 후 자동으로 숨기려면 필요)
    $(".dropdown-group.array .dropdown-list").hide();
  });

  // 별점 입력
  $(".rating-group .star").click(function () {
    var rating = $(this).attr("data-rating");
    $("#ratingValue").text(rating);
    // 선택된 별보다 앞에 있는 별들의 색을 변경
    $(this).prevAll(".star").addBack().addClass("active");
    // 선택된 별보다 뒤에 있는 별들의 색을 원래 색으로 변경
    $(this).nextAll(".star").removeClass("active");
  });

  // 프로필 업로드
  // 파일 업로드 버튼 클릭 시
  $(".file-img-group button").click(function () {
    // input 파일 엘리먼트를 클릭하여 파일 선택 창 열기
    $("#fileImgUpload").click();
  });

  // 파일이 선택되면
  $("#fileImgUpload").change(function () {
    // 파일이 선택되었고, 파일이름이 존재하면
    if ($(this).val() && $(this).prop("files")[0].name) {
      // 버튼 내의 "H" 텍스트 삭제
      $(this).siblings("button").text("");
    }
  });

  // 파일이 선택되면 실행되는 이벤트
  $("#fileImgUpload").change(function () {
    var file = this.files[0]; // 선택한 파일 객체 가져오기

    // 파일이 선택되었고, 이미지 파일인지 확인
    if (file && file.type.startsWith("image")) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var imageData = e.target.result;
        $(".file-img-group").css("background-image", "url(" + imageData + ")");
      };

      // 파일을 읽어옴
      reader.readAsDataURL(file);
    }
  });

  // 채팅
  // 채팅 사이드바 검색
  // 채팅 검색 버튼 클릭 시
  $(".chat-search").click(function () {
    $(".chat-side-top").hide(); // 채팅 사이드바 숨기기
    $(".chat-search-area").css("display", "flex"); // 채팅 검색 영역을 flex로 설정하여 표시
  });

  // 채팅 검색 닫기 버튼 클릭 시
  $(".chat-search-close").click(function () {
    $(".chat-side-top").show(); // 채팅 사이드바 표시
    $(".chat-search-area").hide(); // 채팅 검색 영역 숨기기
  });

  // 채팅 이모티콘 클릭 시
  $(".btn-emoticon").click(function () {
    // .emoticon-wrap 보이기
    $(".emoticon-wrap").show();
  });

  // 텍스트 입력 상자의 내용이 변경될 때마다 이벤트를 수행
  $(".chat-write input").on("input", function () {
    // 입력 상자에 입력된 텍스트의 길이를 확인
    var inputText = $(this).val();

    // 입력된 텍스트가 있는 경우 "btn-send" 버튼에 "active" 클래스를 추가
    if (inputText.trim() !== "") {
      $(".btn-send").addClass("active");
    } else {
      // 입력된 텍스트가 없는 경우 "btn-send" 버튼에서 "active" 클래스를 제거
      $(".btn-send").removeClass("active");
    }
  });

  // 상세페이지
  // 상품 리뷰 더보기 클릭 시
  $(".review-text a").click(function (e) {
    e.preventDefault(); // 기본 동작 방지
    $(this).siblings("span").css("display", "block"); // 형제인 span 요소를 보이도록 변경
    $(this).remove(); // "더보기" 링크 삭제
  });

  // 비디오
  $(".video-play").click(function () {
    var video = $(this).siblings(".product-video")[0];
    video.play();
  });

  // 결제하기
  // 수량 감소 버튼 클릭 시
  $(".decrease-btn").click(function () {
    var input = $(this).siblings(".quantity-input");
    var currentValue = parseInt(input.val());
    if (currentValue > 1) {
      input.val(currentValue - 1);
    }
  });

  // 수량 증가 버튼 클릭 시
  $(".increase-btn").click(function () {
    var input = $(this).siblings(".quantity-input");
    var currentValue = parseInt(input.val());
    input.val(currentValue + 1);
  });

  // 세금계산서 발행 시
  $(".product-payment-taxbill-info").hide();
  $("#taxbillInfo").change(function () {
    if ($(this).is(":checked")) {
      $(".product-payment-taxbill-info").show();
    } else {
      $(".product-payment-taxbill-info").hide();
    }
  });

  // 페이지 로드 후 스크롤 맨 아래로 내리기
  scrollToBottom();

  // 상품등록
  // 옵션추가
  // 옵션 추가 버튼 클릭 시 이벤트 처리
  $(".btn-add-option").click(function () {
    // 새로운 .add-options 요소 생성
    var newOption =
      '<div class="add-options">' +
      '<div class="option-one">' +
      '<div class="input-group horizontal">' +
      '<input type="text" placeholder="">' +
      '<button type="button" class="btn-del-option"><i class="i i-x"></i>삭제</button>' +
      "</div>" +
      "</div>" +
      '<div class="option-two">' +
      '<div class="input-group">' +
      '<div class="input-area">' +
      '<input type="text" placeholder="금액"><span>원</span>' +
      "</div>" +
      "</div>" +
      '<div class="input-group">' +
      '<div class="input-area">' +
      '<input type="text" placeholder="작업기간"><span>일</span>' +
      "</div>" +
      "</div>" +
      '<div class="input-group">' +
      '<div class="input-area">' +
      '<input type="text" placeholder="작업시간"><span>시간</span>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    // 첫 번째 .add-options 요소 앞에 새로운 요소 추가
    $(".add-options-wrap").find(".add-options:last").after(newOption);
  });

  // 옵션 삭제 버튼 클릭 시 이벤트 처리
  $(document).on("click", ".btn-del-option", function () {
    // 부모 요소인 .add-options 삭제
    $(this).closest(".add-options").remove();
  });

  // 서비스 추가
  // 추가 제공 서비스 추가 버튼 클릭 시 이벤트 처리
  $(".btn-add-service").click(function () {
    // 추가 서비스의 순서를 카운트하여 placeholder 설정
    var count = $(".add-service").length + 1;
    var placeholderText = count + "번째 추가 제공 서비스를 작성해주세요";

    // 새로운 추가 서비스 요소 생성 및 추가
    var newService =
      '<div class="add-service">' +
      '<div class="input-group">' +
      '<div class="input-area">' +
      '<input type="text" placeholder="' +
      placeholderText +
      '">' +
      '<button type="button" class="btn-del-service"><i class="i i-x"></i>삭제</button>' +
      "</div>" +
      "<p><span class='mr-62'>0 / 15 최대</span></p>" +
      "</div>" +
      "</div>";

    // 기존 .btn-add-service의 이전에 새로운 요소 추가
    $(".btn-add-service").prev().after(newService);
  });

  // 추가 제공 서비스 삭제 버튼 클릭 시 이벤트 처리
  $(document).on("click", ".btn-del-service", function () {
    // 부모 요소인 .add-service 삭제
    $(this).closest(".add-service").remove();
    // 순서 재정렬
    $(".add-service").each(function (index) {
      var placeholderText = index + 1 + "번째 추가 제공 서비스를 작성해주세요";
      $(this).find("input").attr("placeholder", placeholderText);
    });
  });

  // 검색키워드
  // 버튼 클릭 이벤트 위임
  $(".keyword-box").on("click", ".btn-del-keyword", function () {
    var liCount = $(".keyword-box li").length; // 현재 li 요소의 개수 가져오기
    $(this).closest("li").remove(); // 클릭된 버튼의 가장 가까운 부모인 li 요소를 삭제
    if (liCount !== 5) {
      $(".keyword-box li").prop("contenteditable", "true");
    }
  });

  $(".keyword-box li").keydown(function (event) {
    var liCount = $(".keyword-box li").length; // 현재 li 요소의 개수 가져오기
    if (liCount > 5) {
      // $(".keyword-box li").blur();
      // return false;
    } else {
      if (event.key === "Enter") {
        if (liCount === 5) {
          $(".keyword-box li").prop("contenteditable", "false");
        }
        event.preventDefault(); // 기본 동작 방지
        var keyword = $(this).text().trim(); // 입력된 텍스트 가져오기
        if (keyword !== "") {
          // li 요소의 개수가 5개 미만인 경우에만 실행
          var newLi = $("<li>").addClass("tag"); // 새로운 li 요소 생성하고 클래스 추가
          var button = $("<button>")
            .attr("type", "button")
            .addClass("btn-del-keyword"); // 삭제 버튼 생성
          var icon = $("<i>").addClass("ico i-x"); // 아이콘 생성
          button.append(icon); // 버튼에 아이콘 추가
          newLi.append(keyword, button); // 텍스트와 버튼 추가
          $(this).before(newLi); // 현재 li 요소의 이전에 새로운 li 요소 추가
          $(this).text(""); // 현재 li 요소의 텍스트 지우기
        }
      }
    }
  });

  // 이미지 업로드
  var fileInput = $(".product-file-img-upload");
  var productImgGroup = $(".product-img-group");

  // 파일 입력 변화 이벤트 핸들러
  $(".product-file-img-upload").change(function (event) {
    var file = event.target.files[0]; // 업로드된 파일 가져오기
    var $productImgGroup = $(this).closest(".product-img-group");

    if (file) {
      var reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성

      reader.onload = function (event) {
        var imageUrl = event.target.result; // 이미지 URL 가져오기

        $productImgGroup.css("background-image", "url('" + imageUrl + "')"); // 배경 이미지 설정
        $productImgGroup.find(".btn-img-upload").hide(); // 버튼 숨기기
        $productImgGroup.find(".btn-img-del").show(); // 삭제 버튼 보이기
      };

      reader.readAsDataURL(file); // 파일을 읽어 Data URL 형식으로 변환
    }
  });

  // 이미지 hover 이벤트 핸들러
  $(".product-img-group").hover(
    function () {
      var $productImgGroup = $(this);
      if ($productImgGroup.css("background-image") !== "none") {
        $productImgGroup.find(".btn-img-del").show(); // 삭제 버튼 보이기
      }
    },
    function () {
      $(this).find(".btn-img-del").hide(); // 삭제 버튼 숨기기
    }
  );

  // 이미지 삭제 버튼 클릭 이벤트 핸들러
  $(".product-img-group .btn-img-del").click(function () {
    var $productImgGroup = $(this).closest(".product-img-group");

    $productImgGroup.find(".product-file-img-upload").val(""); // 파일 입력 필드 초기화
    $productImgGroup.css("background-image", "none"); // 배경 이미지 제거
    $productImgGroup.find(".btn-img-del").hide(); // 삭제 버튼 숨기기
    $productImgGroup.find(".btn-img-upload").show(); // 업로드 버튼 보이기
  });

  // 드래그 앤 드롭 이벤트 핸들러
  $(".product-img-group").on("dragover", function (event) {
    event.preventDefault(); // 기본 동작 방지
    $(this).addClass("drag-over"); // 드래그 상태를 나타내는 클래스 추가
  });

  $(".product-img-group").on("dragleave", function (event) {
    $(this).removeClass("drag-over"); // 드래그 상태를 나타내는 클래스 제거
  });

  $(".product-img-group").on("drop", function (event) {
    event.preventDefault(); // 기본 동작 방지
    $(this).removeClass("drag-over"); // 드래그 상태를 나타내는 클래스 제거

    var files = event.originalEvent.dataTransfer.files; // 드롭한 파일 가져오기

    // 파일 입력(input[type="file"])에 파일 설정
    fileInput.files = files;

    // 파일 입력 변화 이벤트 강제 호출
    $(".product-file-img-upload").change();
  });

  // 버튼 클릭 이벤트 핸들러
  $(".product-img-group .btn-img-upload").click(function () {
    // input[type="file"] 클릭 이벤트 트리거
    $(this).prev().click();
    // fileInput.click();
  });

  // .btn-add-product-img 클릭 이벤트 핸들러
  $(".btn-add-product-img").click(function () {
    // 새로운 .product-img-group 요소 생성
    var newProductImgGroup = $("<div class='product-img-group'>").appendTo(
      $(this).parent()
    );
    var fileInput = $(
      "<input type='file' class='product-file-img-upload' accept='image/*'>"
    ).appendTo(newProductImgGroup);
    var button = $("<button type='button' class='btn-img-upload'>").appendTo(
      newProductImgGroup
    );
    var btnImgDel = $(
      "<button type='button' class='btn-img-del'><i class='ico i-trash-w'></i></button>"
    ).appendTo(newProductImgGroup);
    var icon = $("<i class='ico i-product-img-sample'>").appendTo(button);
    var text = $("<p>")
      .html("사진을 드래그 앤 드롭하거나<br>찾아보세요.")
      .appendTo(button); // <br> 사용

    // 이미지 hover 이벤트 핸들러
    $(".product-img-group").hover(
      function () {
        var $productImgGroup = $(this);
        if ($productImgGroup.css("background-image") !== "none") {
          $productImgGroup.find(".btn-img-del").show(); // 삭제 버튼 보이기
        }
      },
      function () {
        $(this).find(".btn-img-del").hide(); // 삭제 버튼 숨기기
      }
    );

    // 이미지 삭제 버튼 클릭 이벤트 핸들러
    $(".product-img-group .btn-img-del").click(function () {
      var $productImgGroup = $(this).closest(".product-img-group");

      $productImgGroup.find(".product-file-img-upload").val(""); // 파일 입력 필드 초기화
      $productImgGroup.css("background-image", "none"); // 배경 이미지 제거
      $productImgGroup.find(".btn-img-del").hide(); // 삭제 버튼 숨기기
      $productImgGroup.find(".btn-img-upload").show(); // 업로드 버튼 보이기
    });

    // 버튼 클릭 이벤트 핸들러 추가
    button.click(function () {
      $(this).prev().click();
    });

    // 파일 입력 변화 이벤트 핸들러 추가
    fileInput.change(function (event) {
      var file = event.target.files[0]; // 업로드된 파일 가져오기

      if (file) {
        var reader = new FileReader(); // 파일을 읽기 위한 FileReader 객체 생성

        reader.onload = function (event) {
          var imageUrl = event.target.result; // 이미지 URL 가져오기
          newProductImgGroup.css("background-image", "url('" + imageUrl + "')"); // 배경 이미지 설정
          button.hide(); // 버튼 숨기기
        };

        reader.readAsDataURL(file); // 파일을 읽어 Data URL 형식으로 변환
      }
    });

    // 드래그 앤 드롭 이벤트 핸들러 추가
    newProductImgGroup.on("dragover", function (event) {
      event.preventDefault(); // 기본 동작 방지
      $(this).addClass("drag-over"); // 드래그 상태를 나타내는 클래스 추가
    });

    newProductImgGroup.on("dragleave", function (event) {
      $(this).removeClass("drag-over"); // 드래그 상태를 나타내는 클래스 제거
    });

    newProductImgGroup.on("drop", function (event) {
      event.preventDefault(); // 기본 동작 방지
      $(this).removeClass("drag-over"); // 드래그 상태를 나타내는 클래스 제거

      var files = event.originalEvent.dataTransfer.files; // 드롭한 파일 가져오기

      // 파일 입력(input[type="file"])에 파일 설정
      fileInput.files = files;

      // 파일 입력 변화 이벤트 강제 호출
      fileInput.change();
    });

    // 마지막 .product-img-group 요소 뒤에 추가
    $(".add-product-img-group").before(newProductImgGroup);
  });

  $(".btn-comment-heart").click(function () {
    $(this).toggleClass("active");
  });

  // 비디오 업로드
  $("#productFileVideoUpload").change(function (e) {
    var file = e.target.files[0];
    var videoURL = URL.createObjectURL(file);
    var videoElement = $(".product-video-group video")[0];
    $(videoElement).find("source").attr("src", videoURL);
    $(videoElement).attr("src", videoURL);
    $(".product-video-group .btn-video-upload").hide();
    $(".product-video-group .btn-img-del").show(); // 삭제 버튼 보이기
  });

  $(".product-video-group .btn-video-upload").click(function () {
    $("#productFileVideoUpload").click();
  });

  // 비디오 hover 이벤트 핸들러
  $(".product-video-group").hover(
    function () {
      var $productVideoGroup = $(this);
      if ($productVideoGroup.find("source").attr("src")) {
        $productVideoGroup.find(".btn-video-del").show(); // 삭제 버튼 보이기
      }
    },
    function () {
      $(this).find(".btn-video-del").hide(); // 삭제 버튼 숨기기
    }
  );

  // 비디오 삭제 버튼 클릭 이벤트 핸들러
  $(".product-video-group .btn-video-del").click(function () {
    var $productVideoGroup = $(this).closest(".product-video-group");

    $productVideoGroup.find("video").remove(); // 비디오 요소 제거
    $productVideoGroup.find("#productFileVideoUpload").val(""); // 파일 입력 필드 초기화
    $productVideoGroup.find(".btn-video-del").hide(); // 삭제 버튼 숨기기
    $productVideoGroup.find(".btn-video-upload").show(); // 업로드 버튼 보이기
  });

  /**
   * 이벤트 댓글 삭제/수정 기능
   */
  $(".btn-comment-edit").click(function () {
    var $comment = $(this).closest(".comment");
    var $commentText = $comment.find(".comment-text");
    var $commentEdit = $comment.find(".comment-edit");

    $commentText.hide();
    $commentEdit.css("display", "flex");
  });

  $(".btn-comment-edit-close").click(function () {
    var $comment = $(this).closest(".comment");
    var $commentText = $comment.find(".comment-text");
    var $commentEdit = $comment.find(".comment-edit");

    $commentEdit.hide();
    $commentText.show();
  });

  $(".btn-comment-edit-save").click(function () {
    var $comment = $(this).closest(".comment");
    var $commentText = $comment.find(".comment-text");
    var $commentEdit = $comment.find(".comment-edit");
    var newValue = $commentEdit.find(".input-group input").val();

    $commentText.find("h4").text(newValue);
    $commentEdit.hide();
    $commentText.show();
  });

  $(".btn-comment-del").click(function () {
    $(this).closest(".comment").remove();
  });

  // 20240926 추가
  // 포트폴리오
  var $scrollContainer = $('.portfolio-category');
  var scrollAmount = 300; // 스크롤 이동 거리

  // 오른쪽 버튼 클릭 시 스크롤
  $('.btn-slide-right').click(function () {
    $scrollContainer.animate({
      scrollLeft: $scrollContainer.scrollLeft() + scrollAmount
    }, 300); // 300ms 동안 스크롤
  });

  // 마우스 드래그로 스크롤
  var isMouseDown = false;
  var startX;
  var scrollLeft;

  $scrollContainer.on('mousedown', function (e) {
    isMouseDown = true;
    startX = e.pageX - $scrollContainer.offset().left;
    scrollLeft = $scrollContainer.scrollLeft();
    $scrollContainer.addClass('active');
  });

  $(document).on('mouseup', function () {
    isMouseDown = false;
    $scrollContainer.removeClass('active');
  });

  $scrollContainer.on('mousemove', function (e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.pageX - $scrollContainer.offset().left;
    var walk = (x - startX) * 2; // 스크롤 속도 조정
    $scrollContainer.scrollLeft(scrollLeft - walk);
  });

  $('.btn-tab').click(function () {
    $(this).toggleClass('active');
  })

  // 포트폴리오 등록
  var maxFiles = 5; // 최대 5개의 파일
  var uploadedFiles = 0; // 업로드된 파일 개수

  // 파일을 드래그 앤 드롭 가능하도록 이벤트 설정
  $('.pp-file-upload').on('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragging');
  });

  $('.pp-file-upload').on('dragleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragging');
  });

  $('.pp-file-upload').on('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragging');

    var files = e.originalEvent.dataTransfer.files;
    handleFiles(files);
  });

  // input에서 파일이 선택되었을 때
  $('#ppFileUpload').on('change', function () {
    var files = this.files;
    handleFiles(files);
  });

  // 파일 처리 함수
  function handleFiles(files) {
    var fileArray = Array.from(files);

    fileArray.forEach(function (file) {
      if (uploadedFiles >= maxFiles) {
        alert("최대 " + maxFiles + "개의 파일만 업로드할 수 있습니다.");
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      }

      // 이미지 미리보기 생성
      var reader = new FileReader();
      reader.onload = function (e) {
        var imgHTML = `
                  <div class="pp-img-group">
                      <img src="${e.target.result}" alt="">
                      <button type="button" class="remove-image"><i class="ico i-trash-w"></i></button>
                  </div>
              `;

        $('.pp-upload-area').before(imgHTML); // 미리보기 이미지 업로드 영역 위로 추가
        uploadedFiles++; // 업로드된 파일 수 증가

        // 이미지 삭제 버튼에 이벤트 추가
        $('.remove-image').last().on('click', function () {
          $(this).closest('.pp-img-group').remove();
          uploadedFiles--; // 삭제 시 파일 개수 감소
        });
      };

      reader.readAsDataURL(file);
    });
  }
});

// 스크롤을 맨 아래로 내리는 함수
function scrollToBottom() {
  var chatList = $(".chat-list");
  chatList.scrollTop(chatList.prop("scrollHeight"));
}

// 모달 애니메이션 이벤트
class MobilePopup {
  constructor(popupId) {
    this.popupId = popupId;
    this.openBtn = $(`.open-popup-btn[data-popup-id="${popupId}"]`);
    this.closeBtn = $(`.close-popup-btn[data-popup-id="${popupId}Close"]`);
    this.popupContainer = $(`#${popupId}`);
    this.popupContent = this.popupContainer.find(".popup-content");

    this.setupEvents();
  }

  setupEvents() {
    this.openBtn.on("click", () => this.openPopup());
    this.closeBtn.on("click", () => this.closePopup());
  }

  openPopup() {
    this.popupContainer.css("display", "block");
    setTimeout(() => {
      this.popupContent.css("transform", "translateY(0)");
    }, 10);
  }

  closePopup() {
    this.popupContent.css("transform", "translateY(100%)");
    setTimeout(() => {
      this.popupContainer.css("display", "none");
    }, 300);
  }
}
