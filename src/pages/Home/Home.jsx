import AboutUs from "../../components/AboutUs/AboutUs"
import AppSection from "../../components/AppSection/AppSection"
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase"
import Banner from "../../components/Header/Banner"
import HomeCategory from "../../components/HomeCategory/HomeCategory"
import LocationSprade from "../../components/LocationSprade/LocationSprade"
import Register from "../../components/Register/Register"
import Sponsor from "../../components/Sponsor/Sponsor"

const Home = () => {
  return (
    <>
    <Banner/>
    <HomeCategory/>
    <CategoryShowcase/>
    <Register/>
    <LocationSprade/>
    <AboutUs/>
    <AppSection/>
    <Sponsor/>
    </>
  )
}

export default Home