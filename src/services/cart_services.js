import fetchApi from "../shared/utils/fetchApi";

export const getCartApi = async () => {
  const response = await fetchApi({
    url: "/api/user/cart",
    method: "get",
    propertyName: "cart",
  });
  return response;
};

export const addToCartApi = async(product) =>{
    const response = await fetchApi({
        url:"/api/user/cart",
        method:"post",
        body: {product},
        propertyName:"cart"
    })
    return response;
}

export const removeFromCartApi = async(productId) =>{
    const response = await fetchApi({
        url:`/api/user/cart/${productId}`,
        method:"delete",
        propertyName:"cart"
    })
    return response
}

export const updateQuantityApi = async(productId,increment=true) =>{
    const response = await fetchApi({
        url:`/api/user/cart/${productId}`,
        method:"post",
        body:{
            action: {
                type: increment ? "increment" :"decrement" 
            }
        },
        propertyName:"cart"
    })
    return response
}
