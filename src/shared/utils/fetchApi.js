import axios from "axios";

async function fetchApi({ url, method, body, propertyName }) {
  //  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyYWNmMTkyZi0zYzk3LTQ1NWMtYjEzNi0yZmJkMzY0ODliYjEiLCJlbWFpbCI6InByaXlhQGdtYWlsLmNvbSIsImlhdCI6MTY0NzY5MzQxNX0.9vgp3G1Vrq-pHegSc4hfwA-i4EsKiKdpqPJT-ERY0IQ"
  const token = localStorage.getItem("token") ?? null;

  try {
    const { data, status,statusText } = await axios({
      method,
      url,
      data: body,
      headers: { authorization: token },
    });
   
    
    if (status === 200 || status === 201) {
      return {
        data: data,
        success: true,
        message: `${propertyName} fetched successfully!!`,
      };
    } 
    throw Error("API request failed");
  } catch (e) {
    return {
      data: null,
      success: false,
      message: `${propertyName} failed to fetch`,
    };
  }
}

export default fetchApi;
