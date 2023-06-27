import styles from './SlipCartItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
                        <button className={cx("minus")}><FontAwesomeIcon icon={faMinus}/></button>
                        <input type="text" placeholder="1"/>
                        <button className={cx("plus")}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                    <h3 className={cx("price")}>973.000đ</h3>
                </div>
            </div>
        </div>
    )
}
export default SlipCartItem;