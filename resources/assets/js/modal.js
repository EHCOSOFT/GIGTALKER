$(document).ready(function () {
    $("#languageModal").append(languageModal()); // 언어설정
    

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

    
});