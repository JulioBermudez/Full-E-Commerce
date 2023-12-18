/* eslint-disable react/prop-types */
import Data from "../../products.json";



const ShopCategories = ({filterItem,setItem, menuItems,setProducts,selectedCategory}) => {
    console.log(selectedCategory);
  return (
    <>
    <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
    </div>
    <div>
        <div>
            <button className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`} onClick={()=>setProducts(Data)}>All</button>
        </div>
        {
            menuItems.map((Val, id)=>{
                return(
                    <button 
                    key={id} 
                    className={`m-2 ${selectedCategory === Val ? "bg-warning" : ""}`} 
                    onClick={()=> filterItem(Val)}
                    >{Val}</button>
                )
            })
        }
    </div>
    </>
  )
}

export default ShopCategories