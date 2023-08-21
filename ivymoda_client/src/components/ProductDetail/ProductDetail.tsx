import { useState, memo } from "react";
import { ChevronDownIcon, ChevronUpIcon, HeartIcon, MinusIcon, PlusIcon, RulerIcon, StarIcon } from "../../assets/Icons";
import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


const MoreDetail = () => {
    const [ isShow, setIsShow ] = useState(false);

    const handleShowContent = () => {
       setIsShow((prevState) => {
        return prevState ? false : true;
       })
    }
    
    return (
        <div className={cx("product-detail", "more-detail")}>
            <div className={cx("more-detail-tabs")}>
                <div className={cx("more-detail-tab", "active")}>
                    Giới thiệu
                </div>
                <div className={cx("more-detail-tab")}>
                    Chi tiết sản phẩm
                </div>
                <div className={cx("more-detail-tab")}>
                    Bảo quản
                </div>
            </div>
            <div className={cx("tab-body")}>
                <div className={cx("content")}>
                    <div className={cx("content-tab", { "show": isShow }, "active")}>
                        <p>
                            Đầm dáng suông được nhấn ở eo. Thân trên đầm bao gồm những chi tiết: cổ tròn, phía trước là chi tiết cut-out phối cùng các hạt ngọc trai tạo điểm nhấn, tay ngắn hơi phồng nhẹ. Dáng đầm dài qua gối, phía sau có xẻ tà.
                        </p>
                        <div className={cx("sub-content-tab")}>
                            <p>
                                Một thiết kế đầm phù hợp cho nàng thanh lịch và yêu thích phong cách cổ điển. Chất liệu tuysi cao cấp giữ form dáng đầm luôn chỉn chu, thiết kế đầm giúp che khuyết điểm và tôn lên vóc dáng nàng. Phần cut-out hướng ánh mắt người nhìn vào những chi tiết đắt giá. Mẫu đầm dành cho nàng đi làm và đi sự kiện.
                            </p>
                            <p>
                                <strong>Mẫu mặc size:</strong> M
                            </p>
                            <p>
                                <strong>Chiều cao:</strong> 1m67
                            </p>
                            <p>
                                <strong>Cân nặng:</strong> 50kg
                            </p>
                            <p>
                                <strong>Số đo:</strong>  83-65-93cm
                            </p>
                            <p>Mẫu mặc size M Lưu ý: Màu sắc sản phẩm thực tế sẽ có sự chênh lệch nhỏ so với ảnh do điều kiện ánh sáng khi chụp và màu sắc hiển thị qua màn hình máy tính/ điện thoại.</p>
                        </div>
                    </div>
                    <div className={cx("content-tab")}>
                        <p>
                            Đầm dáng suông được nhấn ở eo. Thân trên đầm bao gồm những chi tiết: cổ tròn, phía trước là chi tiết cut-out phối cùng các hạt ngọc trai tạo điểm nhấn, tay ngắn hơi phồng nhẹ. Dáng đầm dài qua gối, phía sau có xẻ tà.
                        </p>
                        <div className={cx("sub-content-tab")}>
                            <p>
                                Một thiết kế đầm phù hợp cho nàng thanh lịch và yêu thích phong cách cổ điển. Chất liệu tuysi cao cấp giữ form dáng đầm luôn chỉn chu, thiết kế đầm giúp che khuyết điểm và tôn lên vóc dáng nàng. Phần cut-out hướng ánh mắt người nhìn vào những chi tiết đắt giá. Mẫu đầm dành cho nàng đi làm và đi sự kiện.
                            </p>
                            <p>
                                <strong>Mẫu mặc size:</strong> M
                            </p>
                            <p>
                                <strong>Chiều cao:</strong> 1m67
                            </p>
                            <p>
                                <strong>Cân nặng:</strong> 50kg
                            </p>
                            <p>
                                <strong>Số đo:</strong>  83-65-93cm
                            </p>
                        </div>
                    </div>
                    <div className={cx("content-tab")}>
                        <p>
                            Đầm dáng suông được nhấn ở eo. Thân trên đầm bao gồm những chi tiết: cổ tròn, phía trước là chi tiết cut-out phối cùng các hạt ngọc trai tạo điểm nhấn, tay ngắn hơi phồng nhẹ. Dáng đầm dài qua gối, phía sau có xẻ tà.
                        </p>
                        <div className={cx("sub-content-tab")}>
                            <p>
                                Một thiết kế đầm phù hợp cho nàng thanh lịch và yêu thích phong cách cổ điển. Chất liệu tuysi cao cấp giữ form dáng đầm luôn chỉn chu, thiết kế đầm giúp che khuyết điểm và tôn lên vóc dáng nàng. Phần cut-out hướng ánh mắt người nhìn vào những chi tiết đắt giá. Mẫu đầm dành cho nàng đi làm và đi sự kiện.
                            </p>
                            <p>
                                <strong>Mẫu mặc size:</strong> M
                            </p>
                            <p>
                                <strong>Chiều cao:</strong> 1m67
                            </p>
                            <p>
                                <strong>Cân nặng:</strong> 50kg
                            </p>
                            <p>
                                <strong>Số đo:</strong>  83-65-93cm
                            </p>
                        </div>
                    </div>
                </div>
                <button 
                    className={cx("show-more-btn")} 
                    onClick={() => handleShowContent()}
                    >
                    {
                        isShow ? <ChevronUpIcon/> : <ChevronDownIcon/>
                    }
                </button>
            </div>
        </div>
    )
}

const MemoizedMoreDetail = memo(MoreDetail);

const ProductDetail = () => {
    return ( 
        <div className={cx("product-details")}>
            <h1>AGNES DRESS - ĐẦM SENORA CỔ YẾM</h1>
            <div className={cx("product-detail", "detail-sub-info")}>
                <p>SKU: 45S2770</p>
                <div className={cx("customer-rated")}>
                    <div className={cx("rated-stars")}>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                    <span>(1 Đánh giá)</span>
                </div>
            </div>
            <div className={cx("product-detail", "price-detail")}>
                <p>2.990.000</p>
            </div>
            <div className={cx("product-detail", "color-detail")}>
                <p>Màu sắc: Trắng</p>
                <div className={cx("color-options")}>
                    <label className={cx("color-option", "active")}>
                        <input type="radio" name="color" checked/>
                        <span>
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="001"/>
                        </span>
                    </label>
                    <label className={cx("color-option")}>
                        <input type="radio" name="color"/>
                        <span>
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="049"/>
                        </span>
                    </label>
                </div>
            </div>
            <div className={cx("product-detail", "size-detail")}>
                <div className={cx("size-options")}>
                    <label className={cx("size-option", "active")}>
                        <input type="radio" name="size" checked/>
                        <span>S</span>
                    </label>
                    <label className={cx("size-option", "active")}>
                        <input type="radio" name="size" checked/>
                        <span>M</span>
                    </label>
                    <label className={cx("size-option", "active")}>
                        <input type="radio" name="size" checked/>
                        <span>L</span>
                    </label>
                    <label className={cx("size-option", "active")}>
                        <input type="radio" name="size" checked/>
                        <span>XL</span>
                    </label>
                </div>
                <a href=""><RulerIcon/>Kiểm tra size của bạn</a>
            </div>
            <div className={cx("product-detail", "quantity-detail")}>
                <p>Số lượng</p>
                <div className={cx("quantity-group")}>
                    <button className={cx("minus")}><MinusIcon/></button>
                    <input type="text" placeholder="1"/>
                    <button className={cx("plus")}><PlusIcon/></button>
                </div>
            </div>
            <div className={cx("product-detail", "actions-detail")}>
                <div className={cx("actions-group")}>
                    <button className={cx("dark-btn")}>Thêm vào giỏ</button>
                    <button>Mua hàng</button>
                    <button className={cx("love")}><HeartIcon/></button>
                </div>
                <div className={cx("find-at-store")}>
                    <a href="">Tìm tại cửa hàng</a>
                </div>
            </div>
            <MemoizedMoreDetail/>
        </div>
     );
}

export default ProductDetail;