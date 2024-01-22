$(document).ready(function () {
    $("#confirmModal01").append(conFirmModal01());
    $("#confirmModal02").append(conFirmModal02());
    $("#refundModal").append(refundModal());
    $("#refundInfoModal").append(refundInfoModal());
    $("#reviewWriteModal").append(reviewWriteModal());
    $("#reviewChangeModal").append(reviewChangeModal());
    $("#productInquireModal").append(productInquireModal());
    $("#inquireDetailModal").append(inquireDetailModal());
    $("#productInquireChangeModal").append(productInquireChangeModal());
    

    function conFirmModal01() {
        return `
        <div class="ss-modal-inner">
            <div class="ss-modal-content">
                <div class="ss-modal-body">
                    <p>구매확정 처리를 하시겠습니까?<br>구매확정 시, 환불 신청이 어려울 수 있습니다.</p>
                </div>
                <div class="ss-modal-footer">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">확인</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function conFirmModal02() {
        return `
        <div class="ss-modal-inner">
            <div class="ss-modal-content">
                <div class="ss-modal-body">
                    <p>환불 신청을 취소하시겠습니까?</p>
                </div>
                <div class="ss-modal-footer">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">확인</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function refundModal() {
        return `
        <div class="ss-modal-inner">
            <div class="ss-modal-content">
                <div class="ss-modal-header">
                    <h3 class="ss-modal-title">환불신청</h3>
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>

                </div>
                <div class="ss-modal-body">
                    <div class="product">
                        <div class="product-img"
                            style="background: url(img/sample/sample01.png) center; background-size: cover;"></div>
                        <div class="product-info">
                            <p>결제완료<span>2023.09.10</span></p>
                            <ul class="product-tag">
                                <li class="mint">ONLY 공선</li>
                                <li>프로그램</li>
                            </ul>
                            <h3>출결관리 프로그램</h3>
                        </div>
                    </div>

                    <div class="dropdown-group">
                        <h2>신청 사유</h2>
                        <div class="dropdown-list-wrap">
                            <button class="dropdown-button" data-target="drop03">
                                <span class="placeholder">선택</span>
                            </button>
                            <ul id="drop03" class="dropdown-list">
                                <li>옵션 1</li>
                                <li>옵션 2</li>
                                <li>옵션 3</li>
                                <li>옵션 4</li>
                                <li>옵션 5</li>
                            </ul>
                        </div>
                    </div>

                    <div class="ss-input-group textarea">
                        <label for="">상세 내용</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="상세 내용을 입력하세요"></textarea>
                    </div>
                    <div class="ss-btn-group mo">
                        <button type="button" class="btn btn-outline-gray btn-md btn-modal-close">취소</button>
                        <button type="button" class="btn btn-md btn-primary">등록</button>
                    </div>
                </div>
                <div class="ss-modal-footer pc">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-outline-gray btn-md btn-modal-close">취소</button>
                        <button type="button" class="btn btn-md btn-primary">등록</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function refundInfoModal() {
        return `
        <div class="ss-modal-inner">
            <div class="ss-modal-content">
                <div class="ss-modal-header">
                    <h3 class="ss-modal-title">환불 정보</h3>
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>

                </div>
                <div class="ss-modal-body">
                    <h6><span>환불완료</span>2023.09.13</h6>
                    <div class="product">
                        <div class="product-img"
                            style="background: url(img/sample/sample01.png) center; background-size: cover;"></div>
                        <div class="product-info">
                            <p>결제완료<span>2023.09.10</span></p>
                            <ul class="product-tag">
                                <li>프로그램</li>
                            </ul>
                            <h3>출결관리 프로그램</h3>
                        </div>
                    </div>

                    <div class="dropdown-group">
                        <h2>신청 사유</h2>
                        <div class="dropdown-list-wrap">
                            <button class="dropdown-button disabled" data-target="drop03">
                                <span class="placeholder">상품이 설명과 다름</span>
                            </button>
                            <ul id="drop03" class="dropdown-list">
                                <li>옵션 1</li>
                                <li>옵션 2</li>
                                <li>옵션 3</li>
                                <li>옵션 4</li>
                                <li>옵션 5</li>
                            </ul>
                        </div>
                    </div>

                    <div class="ss-input-group textarea">
                        <label for="">상세 내용</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="상세 내용을 입력하세요" disabled>상품 구성이 상품 정보와 다름커리큘럼과 콘텐츠가 상이함
                    </textarea>
                    </div>

                    <div class="ss-input-group textarea">
                        <label for="">거절사유</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="상세 내용을 입력하세요" disabled
                            style="height: 96px;">환불거절 사유를 표시합니다.
                    </textarea>
                    </div>

                    <div class="ss-btn-group mo flex">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">확인</button>
                    </div>

                </div>
                <div class="ss-modal-footer pc">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">확인</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function reviewWriteModal() {
        return `
        <div class="ss-modal-inner">

            <div class="ss-modal-content">
                <div class="ss-modal-header">
                    <h3 class="ss-modal-title">리뷰 작성</h3>
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>

                </div>
                <div class="ss-modal-body">
                    <div class="product">
                        <div class="product-img"
                            style="background: url(img/sample/sample01.png) center; background-size: cover;"></div>
                        <div class="product-info">
                            <p>결제완료<span>2023.09.10</span></p>
                            <ul class="product-tag">
                                <li>프로그램</li>
                            </ul>
                            <h3>출결관리 프로그램</h3>
                        </div>
                    </div>

                    <div class="ss-input-group textarea">
                        <label for="">리뷰 내용</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="다른 구매자들을 위해 15자 이상 작성해 주세요."
                            style="height: 280px;"></textarea>
                    </div>
                    
                    <div class="ss-btn-group mo flex">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">등록</button>
                    </div>

                </div>
                <div class="ss-modal-footer pc">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">등록</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function reviewChangeModal() {
        return `
        <div class="ss-modal-inner">
            <div class="ss-modal-content">
                <div class="ss-modal-header">
                    <h3 class="ss-modal-title">리뷰 수정</h3>
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>
                </div>

                <div class="ss-modal-body">
                    <div class="product">
                        <div class="product-img"
                            style="background: url(img/sample/sample01.png) center; background-size: cover;"></div>
                        <div class="product-info">
                            <p>결제완료<span>2023.09.10</span></p>
                            <ul class="product-tag">
                                <li>프로그램</li>
                            </ul>
                            <h3>출결관리 프로그램</h3>
                        </div>
                    </div>
                    <div class="ss-input-group textarea">
                        <label for="">리뷰 내용</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="다른 구매자들을 위해 15자 이상 작성해 주세요."
                            style="height: 280px;">사용자가 작성한 정보를 표시합니다. 작성한 내용은 수정할 수 있습니다.</textarea>
                    </div>

                    <div class="ss-btn-group mo flex">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">저장</button>
                    </div>
                </div>

                <div class="ss-modal-footer pc">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">저장</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    function productInquireModal() {
        return `
        <div class="ss-modal-inner">
            <div class="ss-modal-content">
                <div class="ss-modal-header">
                    <h3 class="ss-modal-title">상품 문의 수정</h3>
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>
                </div>

                <div class="ss-modal-body">
                    <div class="ss-input-group">
                        <label for="">상품 문의 내용을 입력하세요</label>
                        <input type="text">
                    </div>
                    <div class="ss-input-group textarea">
                        <label for="">리뷰 내용</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="문의 내용을 최소 15자 이상 작성해 주세요."
                            style="height: 280px;"></textarea>
                    </div>
                    <div class="check-group">
                        <input type="checkbox" id="chk">
                        <label for="chk">비공개</label>
                    </div>

                    <div class="ss-btn-group mo flex">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">등록</button>
                    </div>
                </div>

                <div class="ss-modal-footer pc">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">등록</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    

    function inquireDetailModal() {
        return `

        `;
    }

    function productInquireChangeModal() {
        return `
        <div class="ss-modal-inner">
            <div class="ss-modal-content">
                <div class="ss-modal-header">
                    <h3 class="ss-modal-title">상품 문의</h3>
                    <button type="button" class="btn-modal-close">
                        <i class="ico i-modal-close"></i>
                    </button>
                </div>

                <div class="ss-modal-body">
                    <div class="ss-input-group">
                        <label for="">상품 문의 내용을 입력하세요</label>
                        <input type="text">
                    </div>
                    <div class="ss-input-group textarea">
                        <label for="">리뷰 내용</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="문의 내용을 최소 15자 이상 작성해 주세요."
                            style="height: 280px;"></textarea>
                    </div>
                    <div class="check-group">
                        <input type="checkbox" id="chk">
                        <label for="chk">비공개</label>
                    </div>

                    <div class="ss-btn-group mo flex">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">등록</button>
                    </div>
                </div>

                <div class="ss-modal-footer pc">
                    <div class="ss-btn-group">
                        <button type="button" class="btn btn-sm btn-outline-gray btn-modal-close">취소</button>
                        <button type="button" class="btn btn-sm btn-primary">등록</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
});