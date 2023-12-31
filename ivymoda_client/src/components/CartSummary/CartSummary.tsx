import classNames from 'classnames/bind';
import styles from './CartSummary.module.scss';
import { AlertIcon, CheckIcon } from '../../assets/Icons';

const cx = classNames.bind(styles);

const CartSummary = () => {
  return (
    <div className={cx("cart-summary")}>
      <h1 className={cx("title")}>Tóm tắt đơn hàng</h1>
      <div className={cx("over-view-items")}>
        <div className={cx("over-view-item")}>
          <p>Tổng tiền hàng</p>
          <p>4.080.000đ</p>
        </div>
        <div className={cx("over-view-item")}>
          <p>Tạm tính</p>
          <p>3.264.000đ</p>
        </div>
        <div className={cx("over-view-item")}>
          <p>Phí vận chuyển</p>
          <p>0đ</p>
        </div>
        <div className={cx("over-view-item")}>
          <p>Tổng tiền hàng</p>
          <p><strong>3.264.000đ</strong></p>
        </div>
      </div>
      <div className={cx("inner-notes")}>
        <div className={cx("inner-note")}>
          <AlertIcon/>
          <p>Miễn <b>đổi trả</b> đối với sản phẩm đồng giá / sale trên 50%</p>
        </div>
        <div className={cx("inner-note", "success")}>
          <CheckIcon/>
          <p> Đơn hàng của bạn được Miễn phí ship</p>
        </div>
      </div>
      <div className={cx("purchase")}>
        <a href="">Đặt hàng</a>
      </div>
    </div>
  );
};
export default CartSummary;