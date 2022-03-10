import { Fragment } from "react";

const Brands = () => {
  return (
    <>
      <div className="space-4rem"></div>
      <h2 className="heading text-lg font-extrabold">
        FEATURED <span className="text-pink font-extrabold">BRANDS</span>
      </h2>
      <div className="space-3rem"></div>
      <div className="flex-row justify-around flex-wrap gap-1 mx-3">
        <div className="component-image-square brand">
          <img
            src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-02.png?v=1635838337"
            alt="helsinki"
          />
        </div>
        <div className="component-image-square brand">
          <img
            src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-04.png?v=1635838374"
            alt="laurie reynolds"
          />
        </div>
        <div className="component-image-square brand">
          <img
            src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-06.png?v=1635838415"
            alt="NTW"
          />
        </div>
        <div className="component-image-square brand">
          <img
            src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-05.png?v=1635838393"
            alt="Newyork"
          />
        </div>
        <div className="component-image-square brand">
          <img
            src="https://cdn.shopify.com/s/files/1/0068/8481/9003/files/abo-03.png?v=1635838351"
            alt="sterling"
          />
        </div>
      </div>
      <div className="space-4rem"></div>
    </>
  );
};
export default Brands;
