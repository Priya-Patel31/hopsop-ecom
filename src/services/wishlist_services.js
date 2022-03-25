import fetchApi from "../shared/utils/fetchApi";

export const fetchWishlistDataApi = async () => {
  return await fetchApi({
    url: "/api/user/wishlist",
    method: "get",
    propertyName: "wishlist",
  });
};

export const addToWishlistApi = async ( product ) => {
  return await fetchApi({
    url: "/api/user/wishlist",
    method: "post",
    body: { product },
    propertyName: "wishlist",
  });
};

export const removeFromWishlistApi = async (_id) => {
  return await fetchApi({
    url: `/api/user/wishlist/${_id}`,
    method: "delete",
    propertyName: "wishlist",
  });
};


