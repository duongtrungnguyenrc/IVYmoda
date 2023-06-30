import { Header, Footer, Slider, Content } from "../components"; 
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

            <Content>
                {/* SLIDER */}

                <Slider/>

                {/* HOME NEW PREOD */}

                <SpecialCategory title={"new arrival"} apiKey={"new_items"}/>

                {/* HOME BEST SELLER */}

                <SpecialCategory title={"best seller"} apiKey={"best_seller_items"}/>
            </Content>

            <Footer/>
        </>
    )
}

export default Home;