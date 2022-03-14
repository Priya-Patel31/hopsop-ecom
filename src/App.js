import { useEffect } from "react";
import "./global.css";
import Home from "./pages/home/home";
import ProductListing from "./pages/productListing/ProductListing";
import MockAPI from "./mockMan";


function App() {
  // useEffect(()=>{
  //   fetch("/api/products").then((res)=>res.json()).then((res) => console.log(res))
  // },[])
  return (
    <div className="App">
      {/* <Home /> */}
      <ProductListing />
      {/* <MockAPI/> */}
    </div>
  );
}

export default App;
