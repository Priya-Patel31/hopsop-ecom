import Header from "./shared/components/header/header";
import Footer from "./shared/components/footer/footer";
import "./global.css";
import Home from "./pages/home/home";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
