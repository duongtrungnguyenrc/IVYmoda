import classNames from 'classnames/bind';

import styles from './SlipCart.module.scss';
import { MinusIcon, PlusIcon } from '../../assets/Icons';

const cx = classNames.bind(styles);

const SlipCartItem = () => {
    return (
        <div className={cx("slip-cart-item")}>
            <div className="cart-item-img">
                <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/09/07/7afeb303a13c5f0e51a1d10eb9397205.jpg" alt="" />
            </div>
            <div className={cx("info")}>
                <h3><a href="">Chân váy xòe xếp ly</a></h3>
                <div className={cx("properties")}>
                    <p>Màu sắc: Hồng san hô</p>
                    <p>Size: L</p>
                </div>
                <div className={cx("price-group")}>
                    <div className={cx("quantity-group")}>
                        <button className={cx("minus")}><MinusIcon/></button>
                        <input type="text" placeholder="1"/>
                        <button className={cx("plus")}><PlusIcon/></button>
                    </div>
                    <h3 className={cx("price")}>973.000đ</h3>
                </div>
            </div>
        </div>
    )
}

const SlipCart = () => {
    return (
        <div className={cx("slip-cart", "offcanvas offcanvas-end")} id="cart">
            <div className={cx("slip-cart-header", 'offcanvas-header')}>
                <h3 className="offcanvas-title">Giỏ hàng</h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className={cx("slip-cart-body", 'offcanvas-body')}>
                <div className={cx("slip-cart-list")}>

                    {/* CART ITEMS */}
                    
                    <SlipCartItem/>

                    {/* //// */}

                </div>
                <div className={cx("slip-cart-bottom")}>
                    <div className={cx("slip-cart-total-price")}>
                        Tổng cộng:
                        <strong>1.0001.000đ</strong>
                    </div>
                    <div className={cx("slip-cart-actions")}>
                        <a href="/login">ĐĂNG NHẬP</a>
                        <a href="/cart">XEM GIỎ HÀNG</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlipCart;