import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { CgGhost } from "react-icons/cg";
import { IoMdList } from "react-icons/io";

import Data from "../../products.json"
import ProductCards from "../../components/ProductCards/ProductCards";


const title = "Our Shop Page";
const currentPage = "Shop";

const showResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {

    const [gridList, setGridList]= useState(true)
    const [products,setProducts]= useState(Data)
  

  return (
    <>
      <PageHeader title={title} currentPage={currentPage} />

        <div className="shop-page padding-tb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className="shop-title d-flex flex-wrap justify-content-between">
                                <p>{showResults}</p>
                                <div className={`product-view-more ${gridList ? "gridActive": "listActive"}`}>
                                     <a className="grid" onClick={()=>setGridList(!gridList)}>
                                        <CgGhost/>
                                     </a>
                                     <a className="list" onClick={()=>setGridList(!gridList)}>
                                        <IoMdList/>
                                     </a>
                                </div>
                            </div>
                            {/*PRODUCT CARDS*/}
                            <div>
                                <ProductCards gridList={gridList} products={products}/>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-12">
                        right side
                    </div>
                </div>
            </div>
        </div>

    </>
  );
};

export default Shop;
