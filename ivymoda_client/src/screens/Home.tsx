import { Header, Footer, Product } from "../components"; 
import SpecialCategory from "../components/SpecialCategory/SpecialCategory";
import { ProductModel } from "../models/Model";

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

const Home = () => {
    return (
        <>
            <Header/>
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

                <SpecialCategory/>

                {/* HOME BEST SELLER */}

                <SpecialCategory/>
            </main>
            <Footer/>
        </>
    )
}

export default Home;