$(document).ready(function () {
    $("#languageModal").append(languageModal()); // 언어설정
    $("#alarmAllDelModal").append(alarmAllDelModal()); // 알림 전체삭제
    $("#shareModal").append(shareModal()); // 공유하기

    function languageModal() {
        return `
        <div class="gt-modal-inner">
            <div class="gt-modal-content">
                <div class="gt-modal-header">
                    <h3 class="gt-modal-title">언어선택</h3>
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>
                </div>
                <div class="gt-modal-body">
                    <ul class="languge-list">
                        <li class="check">한국어</li>
                        <li>简体中文</li>
                        <li>繁体中文</li>
                        <li>English</li>
                        <li>Tiếng Việt</li>
                        <li>ภาษาไทย</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    function alarmAllDelModal() {
        return `
        <div class="gt-modal-inner">
            <div class="gt-modal-content gt-modal-mini">
                <div class="gt-modal-header">
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close-g"></i>
                    </button>
                </div>
                <div class="gt-modal-body">
                    <h6>알림 전체 삭제</h6>
                    <p>알림을 전체 삭제하시겠습니까?<br>
                        삭제후에는 복구되지 않습니다.</p>
                </div>
                <div class="gt-modal-footer">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">확인</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function shareModal() {
        return `
        <div class="gt-modal-inner">
            <div class="gt-modal-content gt-modal-md">
                <div class="gt-modal-header">
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>
                </div>
                <div class="gt-modal-body">
                    <h1>공유하기</h1>
                    <ul class="share-list">
                        <li>
                            <a href="#">
                                <i class="ico i-facebook"></i>페이스북
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ico i-linkedln"></i>링크드인
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ico i-twitter"></i>트위터
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ico i-kakaotalk"></i>카카오톡
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ico i-linkshare"></i>링크복사
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }


    
});