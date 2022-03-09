import rocketImage from "../../../../assets/images/rocket.svg"
import boostPerfomance  from "../../../../assets/images/boostPerfomance.svg"
import service from "../../../../assets/images/service.svg"

const Features = () => {
  return (
    <div className="features-outer-container">
      <div className="space-4rem"></div>

      <h2 className="heading text-lg font-extrabold">
        WHY <span className="text-pink font-extrabold">HOPSOP ??</span>
      </h2>
      <div className="space-4rem"></div>

      <div className="features-container flex-row flex-wrap gap-1 py-2 mx-2">
        <div className="justify-center align-center flex-col">
          <div className="feature-logo-container">
            <img src={rocketImage} alt="rocket-img" />
          </div>
          <div className="justify-center align-center flex-col">
            <h2 className="text-xs">Free Shipping</h2>
            <p className="text-xs">Free shipping on all orders</p>
          </div>
        </div>
        <div className="justify-center align-center">
          <div className="feature-logo-container">
            <img src={boostPerfomance} alt="boostPerfomance-img" />
          </div>
          <div className="justify-center align-center flex-col">
            <h2 className="text-xs">Fast Delivery</h2>
            <p className="text-xs">Delivery within 5 days</p>
          </div>
        </div>
        <div className="justify-center align-center">
          <div className="feature-logo-container">
            <img src={service} alt="service-img" />
          </div>
          <div className="justify-center align-center flex-col">
            <h2 className="text-xs">Help Center</h2>
            <p className="text-xs">24/7 support system</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
