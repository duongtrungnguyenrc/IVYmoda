import { Footer, Header, NavLinks, ProductDetail } from "../components";
import { Content, ProductGallery } from "../components";

function Product() {
     
    return ( 
          <>
          <Header/>

          <Content>
               <NavLinks/>
               <section className="d-flex">
                    <ProductGallery/>
                    <ProductDetail/>
               </section>
          </Content>

          <Footer/>
          </>
     );
}

export default Product;