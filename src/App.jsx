import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-vh-100">
      <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
