import { CartList, CartSummary, ProcessBar, Content, Footer, Header } from "../components";

const Cart = () => {
    return ( 
        <>
            <Header/>
            <Content>
                <section className="w-100 pt-5 d-flex">
                    <div className="col-xl-9 col-lg-8 px-3">
                        <ProcessBar currentProcess={1}/>
                        <CartList/>
                    </div>
                    <div className="col-xl-3 col-lg-4 px-3">
                        <CartSummary/>
                    </div>
                </section>
            </Content>
            <Footer/>
        </>
     );
}

export default Cart;