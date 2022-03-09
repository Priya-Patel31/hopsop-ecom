import Brands from "./components/brands/brands";
import Categories from "./components/categories/categories";
import Features from "./components/features/features";
import HeroSection from "./components/heroSection/heroSection";
import Products from "./components/products/products";
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
