import { memo } from "react";
import styles from "./ProductsFilter.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ProductsFilter() {
    
    return ( 
        <div className={cx("side-bar")}>
            <ul>
                <li>
                    <p className={cx("active")}>Size
                        <span className={cx("show-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </span>
                        <span className={cx("hide-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </span>
                    </p>
                    <div className={cx("sub-list-side")}>
                        <input type="hidden" name="hid_size"/>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                            <span className="item-sub-title">S</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                            <span className="item-sub-title">M</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                            <span className="item-sub-title">L</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                            <span className="item-sub-title">XL</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                            <span className="item-sub-title">XXL</span>
                        </label>
                    </div>
                </li>
                <li>
                    <p className="">Màu sắc
                        <span className={cx("show-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </span>
                        <span className={cx("hide-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </span>
                    </p>
                    <div className={cx("sub-list-side")}>
                        <input type="hidden" name="hid_size"/>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                            <span className="item-sub-title">S</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                            <span className="item-sub-title">M</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                            <span className="item-sub-title">L</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                            <span className="item-sub-title">XL</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                            <span className="item-sub-title">XXL</span>
                        </label>
                    </div>
                </li>
                <li>
                    <p className="">Mức giá
                        <span className={cx("show-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </span>
                        <span className={cx("hide-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </span>
                    </p>
                    <div className={cx("sub-list-side")}>
                        <input type="hidden" name="hid_size"/>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                            <span className="item-sub-title">S</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                            <span className="item-sub-title">M</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                            <span className="item-sub-title">L</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                            <span className="item-sub-title">XL</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                            <span className="item-sub-title">XXL</span>
                        </label>
                    </div>
                </li>
                <li>
                    <p className="">Mức chiếc khẩu
                        <span className={cx("show-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </span>
                        <span className={cx("hide-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </span>
                    </p>
                    <div className={cx("sub-list-side")}>
                        <input type="hidden" name="hid_size"/>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                            <span className="item-sub-title">S</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                            <span className="item-sub-title">M</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                            <span className="item-sub-title">L</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                            <span className="item-sub-title">XL</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                            <span className="item-sub-title">XXL</span>
                        </label>
                    </div>
                </li>
                <li>
                    <p className="">Nâng cao
                        <span className={cx("show-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </span>
                        <span className={cx("hide-icon")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </span>
                    </p>
                    <div className={cx("sub-list-side")}>
                        <input type="hidden" name="hid_size"/>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                            <span className="item-sub-title">S</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                            <span className="item-sub-title">M</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                            <span className="item-sub-title">L</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                            <span className="item-sub-title">XL</span>
                        </label>
                        <label className={cx("item-sub-list")}>
                            <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                            <span className="item-sub-title">XXL</span>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
     );
}

export default memo(ProductsFilter);