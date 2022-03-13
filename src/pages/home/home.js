import { Header,HeroSection,Features,Categories,Products,Brands,Footer } from "./index"
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
