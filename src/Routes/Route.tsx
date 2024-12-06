import { Routes, Route } from "react-router-dom";
import OverviewPage from "../Pages/OverviewPage";
import Products from "../Pages/Products";
// import Sidebar from "../components/sidebar";

const AppRouteS = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default AppRouteS;
