/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <IoIosSearch />
        </button>
      </form>
      {/*SHOWING SEARCH RESULTS */}
      <div>
        {searchTerm &&
          filteredProducts.map((product) => {
           return(
            <Link key={product.id} to={`/shop/${product.id}`}>
            <div className="d-flex gap-3 p-2">
              <div>
                <div className="pro-thumb h-25">
                  <img
                    src={product.img}
                    alt=""
                    width={70}
                    className={`flex-{grow|shrink}-0`}
                  />
                </div>
                <div className="product-content">
                    <p>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </p>
                    <h6>${product.price}</h6>
                </div>
              </div>
            </div>
          </Link>
           )
          })}
      </div>
    </div>
  );
};

export default Search;
