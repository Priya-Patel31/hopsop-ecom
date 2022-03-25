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
        <CategoryCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0550/0465/9885/files/670-600-2_37330c6b-6e74-429d-88dc-b6d26231fd35.jpg?v=1615192841"
          } title={"Climbing rope"}
        />
        <CategoryCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0550/0465/9885/files/600x600_54a11123-5968-49f9-a72b-169119620e75.jpg?v=1615192845"
          }  title={"Climbing harness"}
        />
        <CategoryCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0550/0465/9885/files/670-600-3.jpg?v=1615192284"
          } title={"Quickdraws"}
        />
        <CategoryCard
          imageUrl={
            "https://cdn.shopify.com/s/files/1/0550/0465/9885/files/670-600-1.jpg?v=1615192415"
          } title={"Climbing Equipment"}
        /> 
      </div>
    </>
  );
};

export default Categories;
