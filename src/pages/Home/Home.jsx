import AboutUs from "../../components/AboutUs/AboutUs"
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase"
import Banner from "../../components/Header/Banner"
import HomeCategory from "../../components/HomeCategory/HomeCategory"
import LocationSprade from "../../components/LocationSprade/LocationSprade"
import Register from "../../components/Register/Register"

const Home = () => {
  return (
    <>
    <Banner/>
    <HomeCategory/>
    <CategoryShowcase/>
    <Register/>
    <LocationSprade/>
    <AboutUs/>
    </>
  )
}

export default Home