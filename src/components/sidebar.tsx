import { Menu, Scale } from "lucide-react";
import { ReactNode, useState } from "react";
import { AnimatePresence, color, motion } from "motion/react";
import {
  BarChart2,
  ShoppingBag,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SideBarElements {
  id: number;
  name: string;
  icon: ReactNode;
  color: string;
  path: string;
}

const Sidebar = () => {
  const [SideBarSize, SetSizeBarSize] = useState<boolean>(true);

  const SideEle: SideBarElements[] = [
    {
      id: 1,
      name: "Overview",
      icon: <BarChart2 />,
      color: "#6366f1",
      path: "/",
    },
    {
      id: 2,
      name: "Products",
      icon: <ShoppingBag />,
      color: "#8B5CF6",
      path: "/products",
    },
    { id: 3, name: "Users", icon: <Users />, color: "#895EF6", path: "/users" },
    {
      id: 4,
      name: "Sales",
      icon: <DollarSign />,
      color: "#0CB980",
      path: "/sales",
    },
    {
      id: 5,
      name: "orders",
      icon: <ShoppingCart />,
      color: "#F09E0F",
      path: "/orders",
    },
    {
      id: 6,
      name: "Analytics",
      icon: <TrendingUp />,
      color: "#3B81F1",
      path: "/analytics",
    },
    {
      id: 7,
      name: "settings",
      icon: <Settings />,
      color: "#6EE7B6",
      path: "/settings",
    },
  ];
  return (
    <motion.div
      animate={{ width: SideBarSize ? 200 : 80 }}
      className={`${
        SideBarSize ? "w-56" : "w-14"
      } h-screen bg-saroj transition-all duration-150 ease-out overflow-hidden border border-gray-700`}
    >
      <div className="w-4/5 mx-auto py-5">
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hover:bg-gray-500  rounded-full p-2"
            onClick={() => {
              SetSizeBarSize(!SideBarSize);
            }}
          >
            <Menu />
          </motion.button>
        </div>

        <div>
          {SideEle.map((abc) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={abc.id}
                className="py-4 hover:bg-gray-600 rounded-lg"
              >
                <Link to={abc.path} className="flex items-center  gap-4 ml-4  ">
                  <div style={{ color: abc.color }}>{abc.icon}</div>
                  <AnimatePresence>
                    {SideBarSize ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.2, delay: 0.3 },
                        }}
                        exit={{ opacity: 0 }}
                      >
                        {abc.name}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
