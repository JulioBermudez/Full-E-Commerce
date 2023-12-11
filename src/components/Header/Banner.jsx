import { useState } from "react";
import productData from "../../products.json";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import SelectCategory from "./SelectCategory";

const title = (
  <h2>
    Search Your One <span>Thousand</span> Of Products
  </h2>
);
const description = "We have the largest collection of products";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  //SEARCH FUNTIONABILITY
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    //FILTERING PRODUCTS BASE ON SEARCH
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search you product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">{<IoSearchSharp className="fs-3" />}</button>
          </form>
          <p>{description}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
