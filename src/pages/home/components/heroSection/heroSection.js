import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container component-image-square">
      <img
        src="https://preview.hasthemes.com/hopsop-v4/img/slider/slider-bg-2.jpg"
        alt="heroImage"
      />
      <div className="hero-image-text-overlay">
        <p className="text-pink font-semibold">
          HOP<span className="font-semibold">SOP</span> COLLECTION 2022
        </p>
        <p className="font-semibold">To Go Place for</p>
        <p className="font-semibold">WANDERLUST</p>
        <button className="button primary-button-pink button-shop-now mt-2" onClick={()=>navigate("/products")}>
          Shop Now
          <HiOutlineArrowRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
