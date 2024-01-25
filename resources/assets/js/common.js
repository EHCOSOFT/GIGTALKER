$(document).ready(function () {
    $("#header").append(Header());
    $("#footer").append(Footer());

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
                        <li class="on"><button type="button" class="btn-alarm"><i class="ico i-alarm"></i></button>
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
                                                    <img src="img/sample/sample-02.png" alt="">
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
                                                    <img src="img/sample/sample-02.png" alt="">
                                                    <h3>[eXpert] eXpert 정보수정이 완료되었습니다. 실제 서비스에 반영되기까지 다소 시간이 걸릴 수
                                                        있습니다.<br><span>2023.11.16. 13:00</span></h3>
                                                    <button type="button" class="btn-alarm-close"></button>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="alarm-area">
                                                    <img src="img/sample/sample-02.png" alt="">
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

                        <li class="on"><a href="#"><i class="ico i-chat"></i></a></li>
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
                        <li><a href="#">홈서비스</a></li>
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
    $('.btn-alarm-close').on('click', function () {
        $(this).closest('li').hide();
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

    // -------------- COMMON --------------

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


    // custom-tabs
    $(".custom-tab").click(function () {
        $(this).toggleClass("selected");
    });

    // 비밀번호 숨기기/보이기
    // 비밀번호 입력란과 비밀번호 표시 버튼 선택
    var passwordInput = $('#pwInput');
    var showPasswordBtn = $('.btn-pw-eyes');

    // 비밀번호 표시 버튼을 클릭했을 때
    showPasswordBtn.click(function() {
        // 입력된 텍스트가 있는지 확인
        if (passwordInput.val().trim() !== '') {
            // 비밀번호 입력란의 type 속성을 토글
            var type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
            passwordInput.attr('type', type);

            // 현재 상태에 따라 버튼 배경 이미지 변경
            if (type === 'password') {
                showPasswordBtn.css('background-image', 'url("img/ico/i-eyes-on.png")');
            } else {
                showPasswordBtn.css('background-image', 'url("img/ico/i-eyes-off.png")');
            }
        }
    });


});

// 모달 애니메이션 이벤트
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
