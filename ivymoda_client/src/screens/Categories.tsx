import { Footer, Header, Product } from "../components";
import { ProductModel } from "../models/Model";
import Pagination from 'react-bootstrap/Pagination';

const demoProduct = `{
    "productId" : "1",
    "type": "ladies",
    "productGroup" : "Đầm",
    "productName" : "Đầm xòe lụa dạo phố",
    "images" : [
        {
            "id" : "1",
            "imgLink": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/06/09/ab300ce11d858e326b478a3b685bc89b.JPG"
        },
        {
            "id" : "2",
            "imgLink": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/06/09/0162cda6a67befc746c6fc78be65c8c3.JPG"
        },
        {
            "id" : "3",
            "imgLink": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/06/09/012492361e3bf8db373661c1baa6e332.JPG"
        },
        {
            "id" : "4",
            "imgLink": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/06/09/6666a63c3e81d51c0e4e36a244d6cd9c.JPG"
        }
    ],
    "colorOptions" : [
        {
            "id" : 1,
            "colorName": "Hồng phấn",
            "colorLink": "https://pubcdn.ivymoda.com/ivy2/images/color/013.png"
        },
        {
            "id" : 2,
            "colorName": "Tím lavender",
            "colorLink": "https://pubcdn.ivymoda.com/ivy2/images/color/014.png"
        },
        {
            "id" : 3,
            "colorName": "Xanh lơ",
            "colorLink": "https://pubcdn.ivymoda.com/ivy2/images/color/017.png"
        }
    ],
    "sizeOptions" : [
        {
            "id" : 1,
            "size": "S"
        },
        {
            "id" : 2,
            "size": "M"
        },
        {
            "id" : 3,
            "size": "L"
        },
        {
            "id" : 4,
            "size": "XL"
        },
        {
            "id" : 5,
            "size": "XXL"
        }
    ]
    ,
    "createdTime" : "2023-06-22T15:34:43.969Z",
    "rated" : 4,
    "description" : "Đầm xòe cổ V không tay, phần cầu vai xếp nếp giúp thiết kế thêm mềm mại, nữ tính. Eo chiết bằng chi tiết cạp chun tạo điểm nhấn. Tùng váy xếp nếp tạo độ xòe nhẹ nhàng bay bổng. Khóa kéo ẩn khéo léo sau lưng.",
    "basePrice" : 10000000,
    "salePrice" : 1490000,
    "inStock" : 10,
    "preserveDetail": "Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác (dạ, tweed, lông, phao) chỉ giặt khô, tuyệt đối không giặt ướt.",
    "tag": "best seller"
}`;

const product : ProductModel = JSON.parse(demoProduct);

const products : ProductModel[] = [];
for (let index = 0; index < 8; index++) {
    products.push(product);
    
}

const Categories = () => {
    return (
        <>
            {/* SITE HEADER */}
            
            <Header/>

            {/* SITE MAIN */}

            <main className="site-main">
                <div className="nav-links">
                    <ul>
                        <li><a title="Trang chủ" href="">Trang chủ</a></li>
                        <li><a title="Áo" href="">Áo</a></li>
                        <li><a title="Áo sơ mi" href="">Áo sơ mi</a></li>
                    </ul>
                </div>

                {/* PRODUCTS LIST */}

                <section className="products-category">
                    <div className="side-bar">
                        <ul>
                            <li>
                                <p className="active">Size
                                    <span className="show-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className="hide-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </p>
                                <div className="sub-list-side">
                                    <input type="hidden" name="hid_size"/>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                                        <span className="item-sub-title">S</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                                        <span className="item-sub-title">M</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                                        <span className="item-sub-title">L</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                                        <span className="item-sub-title">XL</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                                        <span className="item-sub-title">XXL</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <p className="">Màu sắc
                                    <span className="show-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className="hide-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </p>
                                <div className="sub-list-side">
                                    <input type="hidden" name="hid_size"/>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                                        <span className="item-sub-title">S</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                                        <span className="item-sub-title">M</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                                        <span className="item-sub-title">L</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                                        <span className="item-sub-title">XL</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                                        <span className="item-sub-title">XXL</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <p className="">Mức giá
                                    <span className="show-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className="hide-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </p>
                                <div className="sub-list-side">
                                    <input type="hidden" name="hid_size"/>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                                        <span className="item-sub-title">S</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                                        <span className="item-sub-title">M</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                                        <span className="item-sub-title">L</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                                        <span className="item-sub-title">XL</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                                        <span className="item-sub-title">XXL</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <p className="">Mức chiếc khẩu
                                    <span className="show-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className="hide-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </p>
                                <div className="sub-list-side">
                                    <input type="hidden" name="hid_size"/>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                                        <span className="item-sub-title">S</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                                        <span className="item-sub-title">M</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                                        <span className="item-sub-title">L</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                                        <span className="item-sub-title">XL</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                                        <span className="item-sub-title">XXL</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <p className="">Nâng cao
                                    <span className="show-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                        </svg>
                                    </span>
                                    <span className="hide-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                        </svg>
                                    </span>
                                </p>
                                <div className="sub-list-side">
                                    <input type="hidden" name="hid_size"/>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="s"/>
                                        <span className="item-sub-title">S</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="m"/>
                                        <span className="item-sub-title">M</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="l"/>
                                        <span className="item-sub-title">L</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xl"/>
                                        <span className="item-sub-title">XL</span>
                                    </label>
                                    <label className="item-sub-list po-relative">
                                        <input className="field-cat" type="radio" name="att_size[]" value="xxl"/>
                                        <span className="item-sub-title">XXL</span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="main-products">
                        <div className="main-title">
                            <h2>Áo Sơ Mi Nữ</h2>
                        </div>
                        <div className="main-products-list">
                            {
                                products.map((value) => {
                                   return <Product product={value}/>
                                })
                            }
                        </div>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next/>
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </section>
            </main>

            {/* SITE FOOTER */}

            <Footer/>
        </>
    )
}

export default Categories;