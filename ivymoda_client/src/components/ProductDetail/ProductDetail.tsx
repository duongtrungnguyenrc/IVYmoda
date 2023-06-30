import { RulerIcon, StarIcon } from "../../assets/Icons";
import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ProductDetail() {
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
        </div>
     );
}

export default ProductDetail;