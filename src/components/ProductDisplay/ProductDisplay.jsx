/* eslint-disable react/prop-types */
import { useState } from "react";
import Ratting from "../Ratting/Ratting";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit, ipsum veniam ad quia!";
const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };
    console.log(product);
    {
      /*-------------------------------------------------------------*/
    }
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    //update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    //reset form fields
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <Ratting />
          <span className="ms-1">{ratingsCount} review</span>
          <h4>${price}</h4>
          <h6>{seller}</h6>
          <p>{description}</p>
        </p>
      </div>
      {/*CART COMPONENT */}
      <div>
        <form onSubmit={handleSubmit}>
          {/*SIZE */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded">
              <FaChevronDown />
            </i>
          </div>
          {/*COLOR */}
          <div className="select-product size">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option value="Pink">Pink</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
            </select>
            <i className="icofont-rounded">
              <FaChevronDown />
            </i>
          </div>
          {/*CART PLUS MINUS */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton"  onClick={handleDecrease}>-</div>
            <input
              className="cart-plus-minus-box "
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(event) =>
                setQuantity(parseInt(event.target.value, 10))
              }
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
          {/*CUPON FIELD*/}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          {/*BTN SECTION */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Checkout</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
