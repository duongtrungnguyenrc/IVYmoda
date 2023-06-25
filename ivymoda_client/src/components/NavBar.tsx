import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeadphones, faUser, faBagShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="header-container">
                    <div className="categories-wrapper">
                        <ul className="categories">
                            <li className="category">
                                <a href="">
                                    NỮ
                                </a>
                                <ul className="sub-menu">
                                    <div className="cat-sub-menu">
                                        <div>
                                            <a>NEW ARIVAL</a>
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
                                    <div className="list-sub-menu">
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                            <li className="category">
                                <a href="">
                                    NAM
                                </a>
                                <ul className="sub-menu">
                                    <div className="cat-sub-menu">
                                        <div>
                                            <a>ESSENTIAL SWEATSUIT MEN</a>
                                        </div>
                                    </div>
                                    <div className="list-sub-menu">
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
                                            <h3><a href="">GIÀY & DÉP</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Giày/Dép</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item-list-sub-menu">
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
                            <li className="category">
                                <a href="">
                                    TRẺ EM
                                </a>
                                <ul className="sub-menu">
                                    <div className="cat-sub-menu">
                                        <div>
                                            <a>ESSENTIAL SWEATSUIT MEN</a>
                                        </div>
                                    </div>
                                    <div className="list-sub-menu">
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
                                            <h3><a href="">GIÀY & DÉP</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Giày/Dép</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item-list-sub-menu">
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
                            <li className="category">
                                <a href="" className="special">
                                    SALE
                                </a>
                                <ul className="sub-menu">
                                    <div className="list-sub-menu">
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                            <li className="category">
                                <a href="">
                                    BỘ SƯU TẬP
                                </a>
                                <ul className="sub-menu">
                                    <div className="list-sub-menu">
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                            <li className="category">
                                <a href="">
                                    LIFE STYLE
                                </a>
                            </li>
                            <li className="category">
                                <a href="">
                                    VỀ CHÚNG TÔI
                                </a>
                                <ul className="sub-menu">
                                    <div className="cat-sub-menu">
                                        <div>
                                            <a>ESSENTIAL SWEATSUIT MEN</a>
                                        </div>
                                    </div>
                                    <div className="list-sub-menu">
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
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
                                        <div className="item-list-sub-menu">
                                            <h3><a href="">GIÀY & DÉP</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="">Giày/Dép</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item-list-sub-menu">
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
                    <div className="brand">
                        <a href="/">
                            <img src="https://pubcdn.ivymoda.com/ivy2/images/logo.png" alt="IVY MODA LOGO" />
                        </a>
                    </div>
                    <div className="control">
                        <form>
                            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                            <input type="text" placeholder="TÌM KIẾM SẢN PHẨM"/>
                        </form>
                        <div className="actions">
                            <div className="action">
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
                            <div className="action">
                                <a href="">
                                    <FontAwesomeIcon icon={faUser}/>
                                </a>
                            </div>
                            <div className="action">
                                <a href="" type="button" data-bs-toggle="offcanvas" data-bs-target="#cart">
                                    <FontAwesomeIcon icon={faBagShopping}/>
                                    <span className="number-cart-items">0</span>
                                </a>
                                <div className="offcanvas offcanvas-end" id="cart">
                                    <div className="offcanvas-header slip-cart-header">
                                        <h3 className="offcanvas-title">Giỏ hàng</h3>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                                    </div>
                                    <div className="offcanvas-body slip-cart-body">
                                        <div className="slip-cart-list">
                                            <div className="cart-item">
                                                <div className="cart-item-img">
                                                    <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/09/07/7afeb303a13c5f0e51a1d10eb9397205.jpg" alt="" />
                                                </div>
                                                <div className="cart-item-info">
                                                    <h3><a href="">Chân váy xòe xếp ly</a></h3>
                                                    <div className="cart-item-properties">
                                                        <p>Màu sắc: Hồng san hô</p>
                                                        <p>Size: L</p>
                                                    </div>
                                                    <div className="cart-item-price-group">
                                                        <div className="quantity-group">
                                                            <button className="minus"><FontAwesomeIcon icon={faMinus}/></button>
                                                            <input type="text" placeholder="1"/>
                                                            <button className="plus"><FontAwesomeIcon icon={faPlus}/></button>
                                                        </div>
                                                        <h3 className="cart-item-price">973.000đ</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slip-cart-actions">
                                            <div className="slip-cart-total-price">
                                                Tổng cộng:
                                                <strong>1.0001.000đ</strong>
                                            </div>
                                            <div className="slip-cart-action">
                                                <a className="dark" href="">XEM GIỎ HÀNG</a>
                                                <a href="">XEM GIỎ HÀNG</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;