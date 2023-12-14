/* eslint-disable no-unused-vars */
import "./paginations.css"
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const Paginations = ({productsPerPage,totalProducts,paginate,activePage}) => {
  const pageNumbers = []
  for(let i = 1; i<=Math.ceil(totalProducts/productsPerPage); i++ ){
    pageNumbers.push(i)
  }
  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a href="#" onClick={()=>{
          if (activePage < pageNumbers.length) {
            paginate(activePage - 1)
          }
        }}><FaAnglesLeft/></a>
      </li>
      {pageNumbers.map((number)=>{
        return(
          <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
              <button onClick={()=> paginate(number)} className="bg-transparent">{number}</button>
          </li>
        )
      })}
      <li>
        <a href="#" onClick={()=>{
          if (activePage < pageNumbers.length) {
            paginate(activePage + 1)
          }
        }}><FaAnglesRight/></a>
      </li>
    </ul>
  )
}

export default Paginations