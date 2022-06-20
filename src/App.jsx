import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/:idProduct" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App

