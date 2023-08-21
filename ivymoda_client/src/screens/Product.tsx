import { Footer, Header, NavLinks, ProductDetail } from "../components";
import { Content, ProductGallery } from "../components";
import SpecialCategory from "../components/SpecialCategory/SpecialCategory";

function Product() {
     
    return ( 
          <>
          <Header/>

          <Content>
               <NavLinks/>
               <section className="d-flex mb-5">
                    <ProductGallery/>
                    <ProductDetail/>
               </section>
               <SpecialCategory title={"best seller"} apiKey={"new_items"}/>
          </Content>

          <Footer/>
          </>
     );
}

export default Product;