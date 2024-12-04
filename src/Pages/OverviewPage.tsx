import Sidebar from "../components/sidebar";
import TitleComponent from "../components/TitleComponent";

type Props = {};

const OverviewPage = (props: Props) => {
  return (
    <div className="flex overflow-hidden">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <TitleComponent title="Overview " />
      </div>
    </div>
  );
};

export default OverviewPage;
