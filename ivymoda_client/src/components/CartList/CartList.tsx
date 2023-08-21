import classNames from "classnames/bind";
import styles from "./CartList.module.scss";
import { MinusIcon, PlusIcon, TrashIcon } from "../../assets/Icons";

const cx = classNames.bind(styles);

const CartList = () => {
  return (
    <div className={cx("main-cart")}>
        <h1>Giỏ hàng của bạn <b className="price-txt">2 Sản Phẩm</b></h1>
        <table className={cx("cart-list")}>
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Chiết khấu</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={cx("cart-item")}>
                            <div className={cx("cart-item-img")}>
                                <a href="https://ivymoda.com/sanpham/dam-dao-pho-dang-xoe-xep-ly-ms-41m8287-37840">
                                    <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/31b4fb1b6d3ecd77d4fa809e75edc502.JPG" alt="Đầm dạo phố dáng xòe xếp ly"/>
                                </a>
                            </div>
                            <div className={cx("cart-item-content")}>
                                <a href="https://ivymoda.com/sanpham/dam-dao-pho-dang-xoe-xep-ly-ms-41m8287-37840">
                                    <h3 className={cx("cart-item-title")}>
                                        Đầm dạo phố dáng xòe xếp ly
                                    </h3>
                                </a>
                                <div className={cx("cart-item-properties")}>                                                                                                                                                                                                                                                                   <p>Màu sắc: <span>Hồng san hô</span></p>
                                    <p>Size: <span>l</span></p>                                 
                                    <p className={cx("cost")}>Giá gốc: <span>2.190.000đ</span></p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p>-438000đ</p>
                        <p className={cx("sale-percentage")}>(-20%)</p>
                    </td>
                    <td>
                        <div className={cx("quantity-group")}>
                            <button className={cx("minus")}><MinusIcon/></button>
                            <input type="text" placeholder="1"/>
                            <button className={cx("plus")}><PlusIcon/></button>
                        </div>
                    </td>
                    <td>
                        <p className={cx("price")}>1.752.000đ</p>
                    </td>
                    <td>
                        <button className={cx("remove-button")}>
                            <TrashIcon/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={cx("cart-item")}>
                            <div className={cx("cart-item-img")}>
                                <a href="https://ivymoda.com/sanpham/dam-dao-pho-dang-xoe-xep-ly-ms-41m8287-37840">
                                    <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/31b4fb1b6d3ecd77d4fa809e75edc502.JPG" alt="Đầm dạo phố dáng xòe xếp ly"/>
                                </a>
                            </div>
                            <div className={cx("cart-item-content")}>
                                <a href="https://ivymoda.com/sanpham/dam-dao-pho-dang-xoe-xep-ly-ms-41m8287-37840">
                                    <h3 className={cx("cart-item-title")}>
                                        Đầm dạo phố dáng xòe xếp ly
                                    </h3>
                                </a>
                                <div className={cx("cart-item-properties")}>                                                                                                                                                                                                                                                                   <p>Màu sắc: <span>Hồng san hô</span></p>
                                    <p>Size: <span>l</span></p>                                 
                                    <p className={cx("cost")}>Giá gốc: <span>2.190.000đ</span></p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p>-438000đ</p>
                        <p className={cx("sale-percentage")}>(-20%)</p>
                    </td>
                    <td>
                        <div className={cx("quantity-group")}>
                            <button className={cx("minus")}><MinusIcon/></button>
                            <input type="text" placeholder="1"/>
                            <button className={cx("plus")}><PlusIcon/></button>
                        </div>
                    </td>
                    <td>
                        <p className={cx("price")}>1.752.000đ</p>
                    </td>
                    <td>
                        <button className={cx("remove-button")}>
                            <TrashIcon/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};
export default CartList;