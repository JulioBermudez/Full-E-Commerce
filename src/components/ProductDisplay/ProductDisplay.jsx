import { useState } from "react";
import Ratting from "../Ratting/Ratting";
import { FaChevronDown } from "react-icons/fa"

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit, ipsum veniam ad quia!"
const ProductDisplay = ({item}) => {
    console.log(item);
    const {name,id,price,seller,ratingsCount,quantity}= item;

    const [prequantity, setQuantity]= useState(quantity);
    const [cupon, setCupon]= useState("");
    const [size, setSize]= useState("Select Size")
    const [color, setColor]= useState("Select Color")

const handleSizeChange = (e)=>{
    setSize(e.target.value)
}
const handleColorChange = (e)=>{
    setColor(e.target.value)
}

  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className="rating">
                <Ratting/>
                <span className="ms-1">{ratingsCount} review</span>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{description}</p>
            </p>
            
        </div>
        {/*CART COMPONENT */}
        <div>
            <form>
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
                    <i className="icofont-rounded"><FaChevronDown/></i>
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
                    <i className="icofont-rounded"><FaChevronDown/></i>
                </div>
                {/*CART PLUS MINUS */}
                
            </form>
        </div>

    </div>
  )
}

export default ProductDisplay