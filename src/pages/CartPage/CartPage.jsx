import { useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md"
import CheckoutPage from "../CheckoutPage/CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storeCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storeCartItems);
  }, []);

  //CALCULATE PRICES
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //HANDLE QUANTITY INCREASE
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    //UPDATE LOCAL STORAGE WIDTH NEW CART ITEMS
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //HANDLE QUANTITY DECREASE
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      //UPDATE LOCAL STORAGE WIDTH NEW CART ITEMS
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //HANDLE ITEM REMOVE
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    //update new cart
    setCartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //CART SUBTOTAL
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //ORDER TOTAL
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title="Shop Cart" currentPage="Cart Page" />
      <div className="shop-cart padding-tb">
            <div className="container">
                <div className="section-wrapper">
                    {/*CART TOP*/}
                    <div className="cart-top">
                        <table>
                            <thead>
                                <tr>
                                    <th className="cat-product">Product</th>
                                    <th className="cat-price">Price</th>
                                    <th className="cat-quantity">Quantity</th>
                                    <th className="cat-toprice">Total</th>
                                    <th className="cat-edit">Edit</th>
                                </tr>
                            </thead>
                            {/*table Body*/}
                            <tbody>
                                {
                                    cartItems.map((item, index)=>(
                                        <tr key={index}>
                                            <td className="product-item cat-product"> 
                                                <div className="p-thumb">
                                                    <Link to={"/shop"}> <img src={item.img} alt="" /> </Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to={"/shop"}>{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className="cat-price">
                                                $ {item.price}
                                            </td>
                                            <td className="cat-quantity">
                                                <div className="cart-plus-minus">
                                                    <div className="dec qtybutton" onClick={()=> handleDecrease(item)}>-</div>
                                                    <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity} />
                                                    <div className="inc qtybutton" onClick={()=> handleIncrease(item)}>+</div>
                                                </div>
                                            </td>
                                            <td className="cat-toprice">$ {calculateTotalPrice(item)}</td>
                                            <td className="cat-edit">
                                                <a href="#" onClick={()=> handleRemoveItem(item)}>
                                                <MdDeleteForever/>
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/*-------Cart Top ENDs--------*/}
                    {/*CART BOTTOM*/}
                    <div className="cart-bottom">
                        {/*Checkout Box */}
                            <div className="cart-checkout-box">
                                <form className="coupon">
                                    <input className="cart-page-input-text" type="text" name="coupon" placeholder="Coupon code..."/>
                                    <input type="submit" value={"Apply Coupon"}/>
                                </form>
                                <form className="cart-checkout">
                                    <input type="submit" value={"Update Cart"} />
                                    <CheckoutPage/>
                                </form>
                            </div>
                            {/*--------------------Checkout Box Ends -----------------------*/}

                            {/*SHOPING BOX */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shiping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="UK">United Kingdom (UK)</option>
                                                    <option value="USA">United Estates</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shiping-select">
                                            <select>
                                                    <option value="UK">New York</option>
                                                    <option value="USA">Miami</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type="text" name="postalCode" id="postalCode" placeholder="Postcode/ZIP *" className="cart-page-input-text" />
                                            <button type="submit">Update Adress</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className="pull-left">Cart Subtotal</span>
                                                    <p className="pull-right">$ {cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Shipping and Handling</span>
                                                    <p className="pull-right">Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Order Total</span>
                                                    <p className="pull-right">$ {orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default CartPage;
