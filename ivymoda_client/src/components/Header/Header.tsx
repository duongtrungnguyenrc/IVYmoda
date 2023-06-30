import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeadphones, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.scss';
import SlipCart from '../SlipCart';
import { memo } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
    
    return (
        <>
            <nav className={cx("header")}>
                <div className={cx("header-container")}>
                    <div className="categories-wrapper">
                        <ul className={cx("categories")}>
                            <li className={cx("category")}>
                                <a href="">
                                    NỮ
                                </a>
                                <ul className={cx("sub-menu")}>
                                    <div className={cx("cat-sub-menu")}>
                                        <div>
                                            <a href=''>NEW ARIVAL</a>
                                        </div>
                                        <div>
                                            <a>MOMENTS OF DELIGHT</a>
                                        </div>
                                        <div>
                                            <a>A SYMPHONY OF ELEGANCE</a>
                                        </div>
                                        <div>
                                            <a>IVY YOU</a>
                                        </div>
                                        <div>
                                            <a>SUMMER SCENT COLLECTION</a>
                                        </div>
                                        <div>
                                            <a>SCENT OF THE SEA COLLECTION</a>
                                        </div>
                                        <div>
                                            <a>HARMONY COLLECTION</a>
                                        </div>
                                        <div>
                                            <a>TENCEL PRODUCTS</a>
                                        </div>
                                    </div>
                                    <div className={cx("list-sub-menu")}>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">ÁO</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="/categories/">Áo sơ mi</a>
                                                </li>
                                                <li>
                                                    <a href="/categories/">Áo thun</a>
                                                </li>
                                                <li>
                                                    <a href="/categories/">Áo kiểu</a>
                                                </li>
                                                <li>
                                                    <a href="/categories/">Áo croptop</a>
                                                </li>
                                                <li>
                                                    <a href="/categories/">Áo thun ngắn tay</a>
                                                </li>
                                                <li>
                                                    <a href="/categories/">Áo thun dài tay</a>
                                                </li>
                                                <li>
                                                    <a href="/categories/">Áo peplum</a>
                                                </li>
                                                <li>
                                                    <a href="/categories/">Áo len</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">ÁO KHOÁC</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Áo khoác</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo dạ</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo tweed</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo măng tô</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo vest/blazer</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">QUẦN & JUMPSUIT</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Quần jeans</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần dài</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần lửng/short</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần baggy</a>
                                                </li>
                                                <li>
                                                    <a href="">Jumpsuit</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">CHÂN VÁY</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Chân váy</a>
                                                </li>
                                                <li>
                                                    <a href="">Chân váy xếp ly</a>
                                                </li>
                                                <li>
                                                    <a href="">Chân váy chữ A</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">CHÂN VÁY</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Chân váy</a>
                                                </li>
                                                <li>
                                                    <a href="">Chân váy xếp ly</a>
                                                </li>
                                                <li>
                                                    <a href="">Chân váy chữ A</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">ĐẦM</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Đầm maxi/ voan</a>
                                                </li>
                                                <li>
                                                    <a href="">Đầm thun</a>
                                                </li>
                                                <li>
                                                    <a href="">Senora - Đầm dạ hội</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">ĐỒ LÓT</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Áo bra</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần lót</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className={cx("category")}>
                                <a href="">
                                    NAM
                                </a>
                                <ul className={cx("sub-menu")}>
                                    <div className={cx("cat-sub-menu")}>
                                        <div>
                                            <a>ESSENTIAL SWEATSUIT MEN</a>
                                        </div>
                                    </div>
                                    <div className={cx("list-sub-menu")}>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">ÁO</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Áo sơ mi</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo thun</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo polo</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo len</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo phao</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo khoác</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo vest</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo len</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">QUẦN Nam</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Quần jeans</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần lửng/short</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần dài</a>
                                                </li>
                                                <li>
                                                    <a href="">Quầnkaki</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần tây</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">GIÀY & DÉP</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Giày/Dép</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">PHỤ KIỆN</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Phụ kiện</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className={cx("category")}>
                                <a href="">
                                    TRẺ EM
                                </a>
                                <ul className={cx("sub-menu")}>
                                    <div className={cx("cat-sub-menu")}>
                                        <div>
                                            <a>ESSENTIAL SWEATSUIT MEN</a>
                                        </div>
                                    </div>
                                    <div className={cx("list-sub-menu")}>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">ÁO</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Áo sơ mi</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo thun</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo polo</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo len</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo phao</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo khoác</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo vest</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo len</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">QUẦN Nam</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Quần jeans</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần lửng/short</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần dài</a>
                                                </li>
                                                <li>
                                                    <a href="">Quầnkaki</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần tây</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">GIÀY & DÉP</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Giày/Dép</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">PHỤ KIỆN</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Phụ kiện</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className={cx("category")}>
                                <a href="" className="special">
                                    SALE
                                </a>
                                <ul className={cx("sub-menu")}>
                                    <div className={cx("list-sub-menu")}>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">Nữ</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Sale 30%</a>
                                                </li>
                                                <li>
                                                    <a href="">Sale 50%</a>
                                                </li>
                                                <li>
                                                    <a href="">Sale 70%</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">Kids</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Sale 30%</a>
                                                </li>
                                                <li>
                                                    <a href="">Sale 50%</a>
                                                </li>
                                                <li>
                                                    <a href="">Sale 70%</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">Nam</a></h3>
                                            <ul>
                                            <li>
                                                    <a href="">Sale 30%</a>
                                                </li>
                                                <li>
                                                    <a href="">Sale 50%</a>
                                                </li>
                                                <li>
                                                    <a href="">Sale 70%</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className={cx("category")}>
                                <a href="">
                                    BỘ SƯU TẬP
                                </a>
                                <ul className={cx("sub-menu")}>
                                    <div className={cx("list-sub-menu")}>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">Nữ</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">A SUMPHONY OF ELEGANCE</a>
                                                </li>
                                                <li>
                                                    <a href="">ENCHANTED</a>
                                                </li>
                                                <li>
                                                    <a href="">SUMMER SCENT</a>
                                                </li>
                                                <li>
                                                    <a href="">MOMENTS OF DELIGHT</a>
                                                </li>
                                                <li>
                                                    <a href="">SCENT OF THE SEA</a>
                                                </li>
                                                <li>
                                                    <a href="">HARMONY</a>
                                                </li>
                                                <li>
                                                    <a href="">TIMELESS</a>
                                                </li>
                                                <li>
                                                    <a href="">DISCOVER CHARMING</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">Trẻ em</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">ORGANIC COTTON</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className={cx("category")}>
                                <a href="">
                                    LIFE STYLE
                                </a>
                            </li>
                            <li className={cx("category")}>
                                <a href="">
                                    VỀ CHÚNG TÔI
                                </a>
                                <ul className={cx("sub-menu")}>
                                    <div className={cx("cat-sub-menu")}>
                                        <div>
                                            <a>ESSENTIAL SWEATSUIT MEN</a>
                                        </div>
                                    </div>
                                    <div className={cx("list-sub-menu")}>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">ÁO</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Áo sơ mi</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo thun</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo polo</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo len</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo phao</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo khoác</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo vest</a>
                                                </li>
                                                <li>
                                                    <a href="">Áo len</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">QUẦN Nam</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Quần jeans</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần lửng/short</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần dài</a>
                                                </li>
                                                <li>
                                                    <a href="">Quầnkaki</a>
                                                </li>
                                                <li>
                                                    <a href="">Quần tây</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">GIÀY & DÉP</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Giày/Dép</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={cx("sub-menu-item")}>
                                            <h3><a href="">PHỤ KIỆN</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Phụ kiện</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("brand")}>
                        <a href="/">
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/logo.png" alt="IVY MODA LOGO" />
                        </a>
                    </div>
                    <div className={cx("control")}>
                        <form>
                            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            <input type="text" placeholder="TÌM KIẾM SẢN PHẨM"/>
                        </form>
                        <div className={cx("actions")}>
                            <div className={cx("action")}>
                                <a href="" data-bs-toggle="dropdown">
                                    <FontAwesomeIcon icon={faHeadphones}/>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><h2 className="dropdown-header">Dropdown header 1</h2></li>
                                    <li><a className="dropdown-item" href="#">Link 1</a></li>
                                    <li><a className="dropdown-item" href="#">Link 2</a></li>
                                    <li><a className="dropdown-item" href="#">Link 3</a></li>
                                </ul>
                            </div>
                            <div className={cx("action")}>
                                <a href="">
                                    <FontAwesomeIcon icon={faUser}/>
                                </a>
                            </div>
                            <div className={cx("action")}>
                                <a href="" type="button" data-bs-toggle="offcanvas" data-bs-target="#cart">
                                    <FontAwesomeIcon icon={faBagShopping}/>
                                    <span className={cx("number-cart-items")}>0</span>
                                </a>

                                {/* SLIP CART */}

                                <SlipCart/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default memo(Header);