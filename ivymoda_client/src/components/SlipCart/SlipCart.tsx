import classNames from 'classnames/bind';

import styles from './SlipCart.module.scss';
import SlipCartItem from './SlipCartItem';

const cx = classNames.bind(styles);

const SlipCart = () => {
    return (
        <div className={cx("slip-cart", "offcanvas offcanvas-end")} id="cart">
            <div className={cx("slip-cart-header", 'offcanvas-header')}>
                <h3 className="offcanvas-title">Giỏ hàng</h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className={cx("slip-cart-body", 'offcanvas-body')}>
                <div className={styles.slipCartList}>

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
                        <a className="dark" href="">XEM GIỎ HÀNG</a>
                        <a href="">XEM GIỎ HÀNG</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlipCart;