import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar"; 
import Fotter from "../components/Footer";

const Home = () => {
    return (
        <>
            <NavBar/>
            <main className="site-main">
                <section id="slider" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#slider" data-bs-slide-to="4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/06/21/b26a105dd5321c8217a25d7be8496de8.jpg" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/06/19/8b562d1f47975facd6a3322fcd4b521f.jpg" alt="Los Angeles" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/06/17/8ced3372ae399a334a671ad45cae31dd.jpg" alt="Chicago" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/06/09/ec4226bcf950ded7eec7a08119b21ced.jpg" alt="New York" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://pubcdn.ivymoda.com/files/news/2023/05/29/56aa2a96b2157626e3816c98ef97ae8c.jpg" alt="New York" className="d-block w-100"/>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </section>

                {/* HOME NEW PREOD */}

                <section className="home-products">
                    <div className="title-section">
                        NEW ARRIVAL
                    </div>
                    <div className="body-section">
                        <div className="product-category">
                            <ul>
                                <li className="product-category-tab">IVY moda</li>
                                <li className="product-category-tab active">IVY men</li>
                                <li className="product-category-tab">IVY kids</li>
                            </ul>
                        </div>
                        <div className="products">
                            <div className="products-wrapper">
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket best-seller-ticket">Best Seller</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/c576c0d08f772ccab8a4d4a821778479.JPG" alt="" />
                                            <img className="image hover-image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/cf028222960df82c9ca631d5c04b6bff.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <div className="view-all-nav">
                            <a href="">Xem tất cả</a>
                        </div>
                    </div>
                </section>

                {/* HOME BEST SELLER */}

                <section className="home-products">
                    <div className="title-section">
                        Best Seller
                    </div>
                    <div className="body-section">
                        <div className="product-category">
                            <ul>
                                <li className="product-category-tab">IVY moda</li>
                                <li className="product-category-tab active">IVY men</li>
                                <li className="product-category-tab">IVY kids</li>
                            </ul>
                        </div>
                        <div className="products">
                            <div className="products-wrapper">
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket best-seller-ticket">Best Seller</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/c576c0d08f772ccab8a4d4a821778479.JPG" alt="" />
                                            <img className="image hover-image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/cf028222960df82c9ca631d5c04b6bff.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                                <div className="product">
                                    <div className="info-ticket new-ticket">NEW</div>
                                        <div className="images">
                                            <a href="">
                                            <img className="image" src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/afd3afc08a14980041b96902a949a98a.JPG" alt="" />
                                            <img className="image hover-image" src="	https://pubcdn.ivymoda.com/files/product/thumab/400/2023/06/16/ac88fbf3d6fe5243924be0b374d3f3e5.JPG" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <div className="color-list">
                                                <ul>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/001.png" alt="" /></li>
                                                    <li className="color-option checked"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/002.png" alt="" /></li>
                                                    <li className="color-option"><img src="https://pubcdn.ivymoda.com/ivy2/images/color/049.png" alt="" /></li>
                                                </ul>
                                                <div className="favourite">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                            </div>
                                            <div className="product-name"><a href="">Anthea Dress - Đầm dạ hội</a></div>
                                            <div className="product-price">
                                                <div className="price">2.9990.000đ</div>
                                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <div className="view-all-nav">
                            <a href="">Xem tất cả</a>
                        </div>
                    </div>
                </section>
            </main>
            <Fotter/>
        </>
    )
}

export default Home;