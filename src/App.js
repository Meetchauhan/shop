import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Suspense, lazy } from "react";
import Loading from "./components/loading/Loading";
const Home = lazy(() => import("./pages/Home"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Cart = lazy(() => import("./pages/Cart"));
const SingleProduct = lazy(() => import("./pages/SingleProductPage"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={<Loading />}
      >
        <Routes>
          <Route path="/shop" exact element={<Home />} />
          <Route path="/shop/favorite" element={<Favorite />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/shop/:productId" element={<SingleProduct />} />
          <Route />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
