import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase"
import Banner from "../../components/Header/Banner"
import HomeCategory from "../../components/HomeCategory/HomeCategory"
import Register from "../../components/Register/Register"

const Home = () => {
  return (
    <>
    <Banner/>
    <HomeCategory/>
    <CategoryShowcase/>
    <Register/>
    </>
  )
}

export default Home