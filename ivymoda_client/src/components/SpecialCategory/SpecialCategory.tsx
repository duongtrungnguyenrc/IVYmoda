import styles from "./SpecialCategory.module.scss";
import classnames from "classnames/bind";

import { ProductModel } from "../../models/Model";
import Product from "../Product/Product";
import { memo, useCallback, useEffect, useState } from "react";
import axios from "../../services/CustomAxios";


const cx = classnames.bind(styles);

interface responseModel {
    type : string,
    data : ProductModel[]
}

function SpecialCategory({ title, apiKey } : { title : string, apiKey : string}) {
    const [activeCategoryTab, setActiveCategoryTab] = useState(0);
    const [specialProducts, setSpecialProducts] = useState<responseModel[]>([]);

    useEffect(() => {   
       fetchData();
    }, [])

    const fetchData = useCallback(async () => {
        const respond = await axios.get(`${apiKey}`);
            if(respond.data) {
                setSpecialProducts(respond.data);
            }
    }, []);
    console.log("render");
    return ( 
        <section className={cx("special-products-category")}>
            <div className={cx("title-section")}>
                {title}
            </div>
            <div className={cx("body-section")}>
                <div className={cx("product-category")}>
                    <ul>
                        {
                            specialProducts && specialProducts.map((value, index) => {
                                return <li 
                                        key={index} 
                                        className = {cx("product-category-tab", { 
                                                            "active" : index === activeCategoryTab
                                                        })
                                                    }
                                        onClick={() => setActiveCategoryTab(index)}
                                        >
                                            {value.type}
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className={cx("products")}>
                    <div className={cx("products-wrapper")}>
                        {
                            specialProducts && specialProducts.length > 0 && specialProducts[activeCategoryTab].data.map((value, index) => {
                                return <Product key={index} product={value}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={cx("footer-section")}>
                <div className={cx("view-all-nav")}>
                    <a href="">Xem tất cả</a>
                </div>
            </div>
        </section>
     );
}

export default memo(SpecialCategory);