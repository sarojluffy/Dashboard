import Sidebar from "../components/sidebar";
import Producttable from "./productSubpage/Producttable";

const Products = () => {
  return (
    <div className="flex h-full">
      <div>
        <Sidebar />
      </div>
      <div>
        <Producttable />
      </div>
    </div>
  );
};

export default Products;
