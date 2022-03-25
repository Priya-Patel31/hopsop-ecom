import { HeroSection, Features, Categories, Products, Brands } from "./index";
import "./home.css";

const Home = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <Features />
      <Categories />
      <Products />
      <Brands />
    </div>
  );
};
export default Home;
