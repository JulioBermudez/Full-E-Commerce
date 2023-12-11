import { Link } from "react-router-dom";
import { RiShoppingBag3Fill } from "react-icons/ri";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <RiShoppingBag3Fill />,
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <RiShoppingBag3Fill />,
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <RiShoppingBag3Fill />,
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <RiShoppingBag3Fill />,
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <RiShoppingBag3Fill />,
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <RiShoppingBag3Fill />,
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/*SECTION HEADER*/}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        {/*SECTION CARD*/}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-md-2 row-cols-1">
            {categoryList.map((val, i) => {
              return (
                <div key={i} className="col">
                  <Link to="/shop" className="category-item">
                    <div className="category-inner">
                      {/*IMAGES THUMBNAIL*/}
                      <div className="category-thumb">
                        <img src={val.imgUrl} alt="" />
                      </div>
                      {/*CONTENT*/}
                      <div className="category-content">
                        <div className="cate-icon">{val.iconName}</div>
                        <Link to="/shop">
                          <h6>{val.title}</h6>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
       <div className="text-center mt-5">
        <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
       </div>
      </div>
    </div>
  );
};

export default HomeCategory;
