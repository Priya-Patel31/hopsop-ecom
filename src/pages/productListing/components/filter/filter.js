import categoryData from "../../../../temp/category.json";
import ratingData from "../../../../temp/rating.json";

const Filter = () => {
  return (
    <div className="product-sidebar">
      <div className="filters-container mx-2">
        <div className="filter-type flex-row justify-between align-center my-2">
          <p className="mr-1 text-sm font-bold">FILTERS</p>
          <a href="/">
            <span className="text-xxs">CLEAR ALL</span>
          </a>
        </div>

        <p className="mt-2 font-bold text-xs">SORT</p>
        <ul className="filter-type">
          <li className="my-2 list-style-none">
            <input
              type="radio"
              value="price-high-to-low"
              name="price"
              id="price-high-to-low"
            />
            <label htmlFor="price-high-to-low" className="text-xs">
              Price High to low
            </label>
          </li>
          <li className="mb-2 list-style-none">
            <input
              type="radio"
              value="price-low-to-high"
              name="price"
              id="price-low-to-high"
            />
            <label htmlFor="price-low-to-high" className="text-xs">
              Price Low to high
            </label>
          </li>
        </ul>

        <p className="my-2 font-bold text-xs">Categories</p>
        <ul className="filter-type">
          {categoryData.categories.map((category) => {
            return (
              <li key={category.id} className="mb-2 list-style-none">
                <input
                  type="checkbox"
                  name={category.name}
                  checked={true}
                  id={category.name}
                />
                <label htmlFor={category.name} className="text-xs">
                  {category.name}
                </label>
              </li>
            );
          })}
        </ul>

        <p className="text-xs my-2 font-bold">Rating</p>
        <ul>
          {ratingData.ratings.map((rating) => {
            return (
              <li key={rating.id} className="mb-2 list-style-none">
                <input
                  type="checkbox"
                  name={rating.name}
                  checked={true}
                  id={rating.name}
                />
                <label htmlFor={rating.name} className="text-xs">
                  {rating.name}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Filter;
