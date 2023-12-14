/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2"

const ProductCards = ({gridList,products}) => {
    
  return (
    <div className={`shop-product-wrap row jutify-content-center ${gridList ? "grid" : "list"}`}>
        {
            products.map((product,i)=>{
                return(
                    <div key={i} className="col-lg-4 col-md-6 col-12">
                        <div className="product-item">
                            {/*PRODUCT IMAGES*/}
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>
                                 {/*PRODUCT ACTION LINKS*/}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`}><FaEye/></Link>
                                <a href="#"><FaHeart/></a>
                                <Link to="/cart-page"><HiShoppingCart/></Link>
                            </div>
                            </div>
                           {/*PRODUCT CONTENT*/}
                           <div className="product-content">
                            <h5>
                                <Link>{product}</Link>
                            </h5>
                           </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductCards