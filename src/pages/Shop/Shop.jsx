import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { CgGhost } from "react-icons/cg";
import { IoMdList } from "react-icons/io";

import Data from "../../products.json";
import ProductCards from "../../components/ProductCards/ProductCards";
import Paginations from "../../components/Pagination/Paginations";
import Search from "../../components/Search/Search";
import ShopCategories from "../../components/ShopCategories/ShopCategories";

const title = "Our Shop Page";
// const currentPage = "Shop";

const showResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  //PAGINATIONS
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //FUNCTION TO CHANGE CURRENT PAGE
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //FILTER PRODUCT BASE ON CATEGORY
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItem = (currentCategory) => {
    const newItems = Data.filter((newVal) => {
      return newVal.category === currentCategory;
    });

    setSelectedCategory(currentCategory);
    setProducts(newItems);
  };

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
                  <div
                    className={`product-view-more ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <CgGhost />
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <IoMdList />
                    </a>
                  </div>
                </div>
                {/*PRODUCT CARDS*/}
                <div>
                  <ProductCards
                    gridList={gridList}
                    products={currentProducts}
                  />
                </div>
                <Paginations
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategories
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
