import classnames from "classnames/bind";
import styles from "./Product.module.scss";

import { ProductModel } from "../../models/Model";
import { HeartIcon, ShoppingBagIcon } from "../../assets/Icons";

const cx = classnames.bind(styles);

const Product = ({ product } : { product: ProductModel }) => {

    return (
        <>
            <div className={styles.product}>
                    {
                        product.tag && product.tag !== "" &&
                        <div className={cx("info-tag", product.tag.replace(/\s+/g, '-'))}>
                            {product.tag}
                        </div>
                    }
                    <div className={cx("images")}>
                        <a href={`/product?id=${product.productId}`}>
                            {
                                product && (
                                    <>
                                        <img className={cx("image")} src={product.images[0]?.imgLink} alt="" />
                                        <img className={cx("image", "hover-image")} src={product.images[1]?.imgLink} alt="" />
                                    </>
                                )

                            }
                        </a>
                    </div>
                    <div className={cx("product-info")}>
                        
                        {/* product color list */}

                        <div className={cx("color-list")}>
                            <ul>
                                {product.colorOptions.map((value: { id: number; colorName: string; colorLink: string; }) => {
                                    return (
                                        <li key={value.id} className={cx("color-option", {
                                            "checked": false
                                        })}>
                                            <img src={value.colorLink} alt="" />
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className={cx("favourite")}>
                                <HeartIcon/>
                            </div>
                        </div>

                        {/* product name */}

                        <div className={cx("product-name")}>
                            <a href={`/product?id=${product.productId}`}>{product.productName}</a>
                        </div>

                        {/* produuct price */}

                        <div className={cx("product-price")}>
                            <div className={cx("price")}>{("" + product.salePrice).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                            <a href=""><ShoppingBagIcon/></a>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Product;