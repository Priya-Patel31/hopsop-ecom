import Brands from "./components/brands/brands";
import Categories from "./components/categories/categories";
import Features from "./components/features/features";
import HeroSection from "./components/heroSection/heroSection";
import Products from "./components/products/products";
import Header from "../../shared/components/header/header";
import Footer from "../../shared/components/footer/footer";
import "./home.css";

const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <HeroSection />
      <Features />
      <Categories />
      <Products />
      <Brands />
      <Footer />
    </div>
  );
};
export default Home;
