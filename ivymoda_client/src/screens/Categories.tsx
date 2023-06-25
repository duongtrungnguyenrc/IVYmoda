import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import Product from "../components/Product";

import { ProductModel } from "../models/Model";




const Categories = () => {
    const [product, setProduct] = useState<ProductModel[]>([]);



    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/product");
            const data: ProductModel[] = response.data;
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <NavBar/>
            <div>
            {product && product.map((value) => {
                return <Product key={value.productId} product={value} />;
                }
            )}
            </div>
        </>
    )
}

export default Categories;