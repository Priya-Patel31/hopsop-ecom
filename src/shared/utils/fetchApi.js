import axios from "axios";

async function fetchApi({ url, method, body, propertyName }) {
  const defaultToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxN2I2MDZjMS05OTk3LTRlNWYtODBmMC0xYWEyN2VlOGE1NTMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20iLCJpYXQiOjE2NDc2MjgwODR9.CcWEd_xGSx_T1lCyeyyys4JLCVuWR5ThmVVtgi0qWmE";
   const token =  localStorage.getItem("token")??defaultToken

  try {
    const { data } = await axios({
      method,
      url,
      data: body,
      headers: { authorization: token },
    });

    return {
      data: data,
      success: true,
      message: `${propertyName} fetched successfully!!`,
    };
  } catch (e) {
    return {
      data: null,
      success: false,
      message: `${propertyName} failed to fetch`,
    };
  }
}

export default fetchApi;
