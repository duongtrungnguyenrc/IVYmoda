import { Header, Footer, Slider, Content, MainGallery } from "../components"; 
import SpecialCategory from "../components/SpecialCategory/SpecialCategory";

const Home = () => {
    console.log("homerender");
    
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

                {/* MAIN GALLERY */}

                <MainGallery/>
                
            </Content>

            <Footer/>
        </>
    )
}

export default Home;