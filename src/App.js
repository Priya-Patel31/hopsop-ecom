import "./global.css";
import {
  Home,
  ProductListing,
  Routes,
  Route,
  MockAPI,
  Cart,
  Wishlist,
  Auth,
  Login,
  Signup,
  PrivateRoute,
  useAuth,
  WithHeaderAndFooter,
  ToastContainer,
  PageNotFound,
} from "./appImports"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isUserLoggedIn } = useAuth();
  
  return (
    <div className="App">
      <ToastContainer theme="colored"/>
      <Routes>
        <Route path="/mockApi" element={<MockAPI />} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<WithHeaderAndFooter />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductListing />} />

          <Route
            path="cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
        </Route>
        {!isUserLoggedIn && (
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        )}
       
      </Routes>
    </div>
  );
}

export default App;
