import { Fragment } from "react";
import CategoryCard from "../categoryCard/categoryCard";

const Categories = () => {
  return (
    <>
      <div className="space-4rem"></div>
      <h2 className="heading text-lg font-extrabold">
        SHOP BY <span className="text-pink font-extrabold">CATEGORY</span>
      </h2>
      <div className="space-4rem"></div>
      <div className="flex-row justify-evenly flex-wrap gap-1 mx-3">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </>
  );
};

export default Categories;
