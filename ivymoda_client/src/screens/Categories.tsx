import { useCallback, useEffect, useMemo, useState } from "react";
import { Footer, Header, NavLinks, Product, Content, ProductsFilter } from "../components";
import Pagination from 'react-bootstrap/Pagination';
import axios from "../services/CustomAxios";
import { ProductModel } from "../models/Model";

interface ResponseData {
    page: number;
    totalPages : number;
    quantity: number;
    data: Array<ProductModel>;
  }

const Categories = () => {
    const [ isFirstRender, setIsFirstRender ] = useState(true);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ displayedPage, setDisplayedPage ] = useState<number[]>([]);
    const [ responseData, setResponseData ] = useState<ResponseData>({ page: 0, totalPages : 0, quantity : 0, data: []});

    useEffect(() => {
        fetchData();
    }, [currentPage]);


    const fetchData = useCallback( async () => {
        const response = await axios.post("items", {page: currentPage, quantityPerPage : 3, type : "ladies", productGroup : "Đầm"});
        setResponseData(response.data);
        if(isFirstRender) {                        
            handleDisplayedPage(response.data.totalPages);
            setIsFirstRender(false);
        }
    }, [currentPage])

    const handleSetPage = (page : number) => {
        page > 0 && page <= responseData.totalPages ?
        setCurrentPage(() => {
            if(page >= displayedPage[4]) {
                handleDisplayedPage(displayedPage.length + 1, displayedPage[1]);
            }
            else {
                handleDisplayedPage(displayedPage.length, displayedPage[0] - 1);
            }
            return page;
        }) : undefined;
    }

    const handleDisplayedPage = (limit : number, start ?: number, defaultLimit ?: number) => {        
        if(limit < (defaultLimit || 5)) {
            setDisplayedPage(Array.from({ length: limit }, (_, index) => index + (start || 1)));
        }
        else {
            setDisplayedPage(Array.from({ length: defaultLimit || 5 }, (_, index) => index + (start || 1)));
        }
    }    
    // console.log("render");
    

    return (
        <>
            {/* SITE HEADER */}
            <Header/>

            {/* SITE MAIN */}

            <Content>
                <NavLinks/>

                {/* PRODUCTS LIST */}

                <section className="products-category">

                    <ProductsFilter/>    

                    <div className="main-products">
                        <div className="main-title">
                            <h2>Áo Sơ Mi Nữ</h2>
                        </div>
                        <div className="main-products-list">
                            {
                                responseData.data.map((value, index) => {
                                    return <Product key={index} product={value}/>
                                })
                            }
                        </div>
                        <Pagination>
                            <Pagination.First onClick={() => handleSetPage(1)}/>
                            <Pagination.Prev onClick={() => currentPage >= 1 ? handleSetPage(currentPage - 1) : undefined}/>
                            {
                                displayedPage.length > 0 && displayedPage.map((value, index) => {
                                    return <Pagination.Item key={index} active={currentPage === value} onClick={() => handleSetPage(value)}>{value}</Pagination.Item>
                                })
                            }
                            <Pagination.Next onClick={() => handleSetPage(currentPage + 1)}/>
                            <Pagination.Last onClick={() => handleSetPage(responseData.totalPages)}/>
                        </Pagination>
                    </div>
                </section>


            </Content>
            
            {/* SITE FOOTER */}
            <Footer/>
        </>
    )
}

export default Categories;