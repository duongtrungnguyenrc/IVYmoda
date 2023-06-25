import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { ProductModel } from "../models/Model";

const Product = ({ product } : { product: ProductModel }) => {

    return (
        <>
            <div className="product">
                <div className="info-ticket new-ticket">NEW</div>
                    <div className="images">
                        <a href={`/product?id=${product.productId}`}>
                            {
                                product && (
                                    <>
                                        <img className="image" src={product.images[0].imgLink} alt="" />
                                        <img className="image hover-image" src={product.images[1].imgLink} alt="" />
                                    </>
                                )

                            }
                        </a>
                    </div>
                    <div className="product-info">
                        
                        {/* product color list */}

                        <div className="color-list">
                            <ul>
                                {product.colorOptions.map((value: { id: number; colorName: string; colorLink: string; }) => {
                                    return (
                                        <li key={value.id} className="color-option"><img src={value.colorLink} alt="" /></li>
                                    )
                                })}
                            </ul>
                            <div className="favourite">
                                <FontAwesomeIcon icon={faHeart}/>
                            </div>
                        </div>

                        {/* product name */}

                        <div className="product-name">
                            <a href={`/product?id=${product.productId}`}>{product.productName}</a>
                        </div>

                        {/* produuct price */}

                        <div className="product-price">
                            <div className="price">{product.salePrice}</div>
                                <a href=""><FontAwesomeIcon icon={faShoppingBag}/></a>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Product;