import axios from "axios";

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

        <p className="mt-2 font-bold text-xs">SORT BY PRICE</p>
        <ul className="filter-type">
          <li className="my-2 list-style-none">
            <input
              type="radio"
              value="price-high-to-low"
              name="price"
              id="price-high-to-low"
            />
            <label htmlFor="price-high-to-low" className="text-xs">
              High to low
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
              Low to high
            </label>
          </li>
        </ul>

        {/* <p className="my-2 font-bold text-xs">Categories</p>
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
        </ul> */}

        {/* <p className="my-2 font-bold text-xs">Brands</p>
        <ul className="filter-type">
          {productData.product.map((product) => {
            return (
              <li key={product.id} className="mb-2 list-style-none">
                <input
                  type="checkbox"
                  name={product.name}
                  checked={true}
                  id={product.name}
                />
                <label htmlFor={product.name} className="text-xs">
                  {product.name}
                </label>
              </li>
            );
          })}
        </ul> */}

        {/* <p className="text-xs my-2 font-bold">Rating</p>
        <ul className="filter-type">
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
        </ul> */}

        <p className="text-xs my-2 font-bold">Others</p>
        <ul>
          <li className="my-2 list-style-none">
            <input
              type="checkbox"
              checked={false}
              name="includeOutOfStock"
              id="includeOutOfStock"
            />
            <label htmlFor="includeOutOfStock" className="text-xs">
              Include out of stock
            </label>
          </li>
          <li className="mb-2 list-style-none">
            <input
              type="checkbox"
              checked={false}
              name="fastDelivery"
              id="fastDelivery"
            />
            <label htmlFor="fastDelivery" className="text-xs">
              Fast Delivery
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Filter;
