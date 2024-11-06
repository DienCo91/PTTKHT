import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Banner from "./Component/Banner";
import Main from "./Component/Main";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  });
  return (
    <div className="w-full">
      <Banner />
      <div id="tech" className=" relative z-[10] bg-white pt-[20px]">
        <Main />
      </div>
      <div className="relative bg-white  pt-[60px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
