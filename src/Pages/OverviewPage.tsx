import Sidebar from "../components/sidebar";
import Statcard from "../components/Statcard";
import Header from "../components/Header";
import { Users, ShoppingBag, BarChart2, Zap } from "lucide-react";
import SalesOverview from "./OverviewSubPage/SalesOverview";
import CategoryDistributionChart from "./OverviewSubPage/DistributionOverview";
import Saleschannel from "./OverviewSubPage/Saleschannel";

type Props = {};

const OverviewPage = (props: Props) => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full mx-">
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
        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div>
            <SalesOverview />
          </div>
          <div>
            <CategoryDistributionChart />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Saleschannel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
