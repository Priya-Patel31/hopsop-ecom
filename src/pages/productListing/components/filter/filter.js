import { useProduct } from "../../../../context/products/productContext";
import { ratings } from "../../../../temp/rating.json";

const Filter = () => {
  let { state, categories, dispatch } = useProduct();
  console.log(state.brands);
  return (
    <div className="product-sidebar">
      <div className="filters-container mx-2">
        <div className="filter-type flex-row justify-between align-center my-2">
          <p className="mr-1 text-sm font-bold">FILTERS</p>
          <button
            className="text-xxs"
            value="RESET_FILTER"
            onClick={(e) =>
              dispatch({
                type: "RESET_FILTER",
              })
            }
          >
            CLEAR ALL
          </button>
        </div>

        <p className="mt-2 font-bold text-xs">SORT BY PRICE</p>
        <ul className="filter-type">
          <li className="my-2 list-style-none">
            <input
              type="radio"
              value="HIGH_TO_LOW"
              checked={state.sortBy=== "HIGH_TO_LOW"}
              name="price"
              id="price-high-to-low"
              onChange={(e) =>
                dispatch({ type: "SORT", payload: { value: e.target.value } })
              }
            />
            <label htmlFor="price-high-to-low" className="text-xs">
              High to low
            </label>
          </li>
          <li className="mb-2 list-style-none">
            <input
              type="radio"
              value="LOW_TO_HIGH"
              checked={state.sortBy=== "LOW_TO_HIGH"}
              name="price"
              id="price-low-to-high"
              onChange={(e) =>
                dispatch({ type: "SORT", payload: { value: e.target.value } })
              }
            />
            <label htmlFor="price-low-to-high" className="text-xs">
              Low to high
            </label>
          </li>
        </ul>
        <div className="filter-type">
          <p className="mt-2 mb-1 font-bold text-xs">SORT BY RANGE</p>
          <input
            type="range"
            min="100"
            max="10000"
            step="25"
            value={state.range}
            onChange={(e) => {
              dispatch({ type: "RANGE", payload: { value: e.target.value } });
            }}
          />
          <div className="mb-1">Range : {state.range}</div>
        </div>

        <p className="my-2 font-bold text-xs">SORT BY CATEGORY</p>
        <ul className="filter-type">
          {categories.map((category) => {
            return (
              <li key={category._id} className="mb-2 list-style-none">
                <input
                  type="checkbox"
                  name={category.category_name}
                  checked={state.selectedCategories[category.category_name]}
                  id={category.category_name}
                  onChange={(e) =>
                    dispatch({
                      type: "CATEGORIES",
                      payload: {
                        value: e.target.checked,
                        key: category.category_name,
                      },
                    })
                  }
                />
                <label htmlFor={category.category_name} className="text-xs">
                  {category.category_name}
                </label>
              </li>
            );
          })}
        </ul>

        <p className="my-2 font-bold text-xs">SORT BY BRANDS</p>
        <ul className="filter-type">
          {state.brands.map((brand) => {
            return (
              <li key={brand.id} className="mb-2 list-style-none">
                <input
                  type="checkbox"
                  name={brand.name}
                  checked={state.selectedBrands[brand.name]}
                  id={brand.name}
                  onChange={(e) =>
                    dispatch({
                      type: "BRANDS",
                      payload: { value: e.target.checked, key: brand.name },
                    })
                  }
                />
                <label htmlFor={brand.name} className="text-xs">
                  {brand.name}
                </label>
              </li>
            );
          })}
        </ul>

        <p className="text-xs my-2 font-bold">SORT BY RATINGS</p>
        <ul className="filter-type">
          {ratings.map((rating) => {
            return (
              <li key={rating.id} className="mb-2 list-style-none">
                <input
                  type="radio"
                  name="rating"
                  value={rating.id}
                  checked={parseInt(state.ratings) === rating.id}
                  id={rating.name}
                  onChange={(e) =>
                    dispatch({
                      type: "RATINGS",
                      payload: { value: e.target.value },
                    })
                  }
                />
                <label htmlFor={rating.name} className="text-xs">
                  {rating.name} && above
                </label>
              </li>
            );
          })}
        </ul>

        <p className="text-xs my-2 font-bold">OTHERS</p>
        <ul>
          <li className="my-2 list-style-none">
            <input
              type="checkbox"
              checked={state.inStock}
              name="includeOutOfStock"
              id="includeOutOfStock"
              onChange={(e) =>
                dispatch({
                  type: "INCLUDE_OUT_OF_STOCK",
                  payload: { value: e.target.checked },
                })
              }
            />
            <label htmlFor="includeOutOfStock" className="text-xs">
              Include out of stock
            </label>
          </li>
          <li className="mb-2 list-style-none">
            <input
              type="checkbox"
              checked={state.fastDelivery}
              name="fastDelivery"
              id="fastDelivery"
              onChange={(e) =>
                dispatch({
                  type: "FAST_DELIVERY",
                  payload: { value: e.target.checked },
                })
              }
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
