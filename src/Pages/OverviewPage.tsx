import Sidebar from "../components/sidebar";
import Statcard from "../components/Statcard";
import Header from "../components/Header";
import { Users, ShoppingBag, BarChart2, Zap } from "lucide-react";

type Props = {};

const OverviewPage = (props: Props) => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header title="Overview " />
        <main className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-3 my-4 w-5/6 mx-auto">
          <Statcard
            name="Total sales"
            icon={<Zap />}
            value="$12,234"
            color="#6466E8"
          />
          <Statcard
            name="New users"
            icon={<Users />}
            value="1,234"
            color="#895EF2"
          />
          <Statcard
            name="Total Products"
            icon={<ShoppingBag />}
            value="567"
            color="#EA499B"
          />
          <Statcard
            name="Conversion Rate"
            icon={<BarChart2 />}
            value="12.5%"
            color="#0CB982"
          />
        </main>
      </div>
    </div>
  );
};

export default OverviewPage;
