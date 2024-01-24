$(document).ready(function () {
    $("#header").append(Header());
    $("#footer").append(Footer());

    function Header() {
        return `
        
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


    // -------------- HEADER --------------

    // 상단 알림 이벤트
    $(".btn-alarm").click(function () {
        $(".alarm-wrap").show();
    });
    // 마우스가 .alarm-wrap 밖으로 나가면 hide()
    $(".alarm-wrap").mouseleave(function () {
        $(this).hide();
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
        if (!$(e.target).closest('.dropdown-list-wrap').length) {
            $(".dropdown-list").hide();
            $(".dropdown-button").removeClass("active");
        }
    });

    // E : -- 20240108 -- 수정 및 추가 --

    // 20240108 수정 이후 문제가 생긴 이벤트 (수정완료)
    // 상단 : 최근검색어 삭제 버튼 이벤트
    $(".btn-keyword-del").click(function () {
        console.log("click");
        $(this).parent("li").remove();
    });

    // 상단 : 검색했을 경우 카테고리 클릭 이벤트
    $(".header-search-result-category li").click(function () {
        // 단일선택
        // $(this).addClass("active");
        // $(this).siblings().removeClass("active");

        // 다중선택
        $(this).toggleClass("active");
    });

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        $("body").css("overflow", "hidden");
    });
    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .gt-modal-wrap").click(function () {
        $(".gt-modal-wrap").removeClass("active");
        $("body").css("overflow", "auto");
    });
    // 모달 내부 클릭 시 닫기 방지
    $(".gt-modal-content").click(function (e) {
        e.stopPropagation();
    });

    // 드롭다운 리스트 항목 클릭 시 이벤트 핸들러
    $(".dropdown-list li").click(function () {
        var selectedText = $(this).text(); // 클릭한 항목의 텍스트 가져오기
        $(".dropdown-button .placeholder").text(selectedText); // 플레이스홀더 텍스트 업데이트
        $("#drop01").hide(); // 드롭다운 리스트 숨기기
        $(".dropdown-button").removeClass("active"); // 드롭다운 버튼의 활성 클래스 제거
    });

    // 탭 메뉴
    $(".tab-button").click(function () {
        var target = $(this).data("target");

        $(".tab-button").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").hide();
        $("#" + target).show();

        // Scroll to the target section
        $("html, body").animate(
            {
                scrollTop: $("#" + target).offset().top,
            },
            500
        );
    });

    // tab1 초기설정
    $("#viewProduct").show();
    $(".tab-button[data-target='viewProduct']").addClass("active");
    $("#writeReview").show();
    $("#idFind").show();
    $("#imgUpload").show();

    // 입력란에서 텍스트가 입력될 때 "x" 아이콘을 보여줌
    $("input[type='text']").on("input", function () {
        var inputText = $(this).val();
        if (inputText.length > 0) {
            $(".i-clear").show();
        } else {
            $(".i-clear").hide();
        }
    });

    // "x" 아이콘을 클릭하면 입력 내용을 지움
    $(".i-clear").click(function () {
        $("input[type='text']").val("");
        $(this).hide();
    });

    // custom-tabs
    $(".custom-tab").click(function () {
        $(this).toggleClass("selected");
    });

    // 상세페이지 상단, 하단 이벤트
    const $scrollUpButton = $("#scrollUpButton");
    const $scrollDownButton = $("#scrollDownButton");

    function handleScroll() {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();

        if (scrollPosition < windowHeight / 2) {
            // 최상단에 도달했을 때
            $scrollUpButton.addClass("disabled");
            $scrollDownButton.removeClass("disabled");
        } else if (
            scrollPosition + windowHeight >=
            documentHeight - windowHeight / 2
        ) {
            // 최하단에 도달했을 때
            $scrollUpButton.removeClass("disabled");
            $scrollDownButton.addClass("disabled");
        } else {
            // 중간 부분에 위치할 때
            $scrollUpButton.removeClass("disabled");
            $scrollDownButton.removeClass("disabled");
        }
    }

    function scrollToTop() {
        // 최상단으로 스크롤
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    function scrollToBottom() {
        // 최하단으로 스크롤
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }

    // 버튼 클릭 이벤트 핸들러 등록
    $scrollUpButton.click(scrollToTop);
    $scrollDownButton.click(scrollToBottom);

    // 페이지 로드 시 초기 스크롤 위치 확인
    handleScroll();

    // 스크롤 이벤트에 핸들러 등록
    $(window).scroll(handleScroll);

    //20231212 #admin-menu 이벤트 추가
    $('#admin-menu > li > a').click(function (e) {
        e.preventDefault(); // 기본 링크 이벤트를 막습니다.

        // 클릭한 메뉴의 다음에 오는 ul 요소
        var submenu = $(this).next('ul');

        // 다른 모든 ul 요소를 숨김
        $('#admin-menu > li > ul').not(submenu).slideUp();

        // 현재 메뉴에 active 클래스를 추가하고 다른 메뉴에서 제거
        $(this).parent().addClass('active').siblings().removeClass('active');

        // ul이 보이는지 여부를 확인하고 그에 따라 슬라이드 토글
        submenu.slideToggle();
    });

    // #admin-menu > li > ul > li 클릭 시
    $('#admin-menu > li > ul > li').click(function (e) {
        e.preventDefault(); // 기본 링크 이벤트를 막습니다.

        // 현재 클릭한 li에 active 클래스를 추가하고 다른 li에서 제거
        $(this).addClass('active').siblings().removeClass('active');
    });

});

class MobilePopup {
    constructor(popupId) {
        this.popupId = popupId;
        this.openBtn = $(`.open-popup-btn[data-popup-id="${popupId}"]`);
        this.closeBtn = $(`.close-popup-btn[data-popup-id="${popupId}Close"]`);
        this.popupContainer = $(`#${popupId}`);
        this.popupContent = this.popupContainer.find('.popup-content');

        this.setupEvents();
    }

    setupEvents() {
        this.openBtn.on('click', () => this.openPopup());
        this.closeBtn.on('click', () => this.closePopup());
    }

    openPopup() {
        this.popupContainer.css('display', 'block');
        setTimeout(() => {
            this.popupContent.css('transform', 'translateY(0)');
        }, 10);
    }

    closePopup() {
        this.popupContent.css('transform', 'translateY(100%)');
        setTimeout(() => {
            this.popupContainer.css('display', 'none');
        }, 300);
    }
}

$(document).ready(function () {
    const gradePopup = new MobilePopup('gradePopup');
    const productCategoryPopup = new MobilePopup('productCategoryPopup');
    const popuperiodPopupp2 = new MobilePopup('periodPopup');
});