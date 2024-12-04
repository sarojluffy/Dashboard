import { ReactNode } from "react";
import { motion } from "motion/react";

type Props = { name: string; icon: ReactNode; value: string; color: string };

const Statcard = ({ name, icon, value, color }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="py-5 pl-4 border border-gray-700 bg-saroj rounded-lg bg-opacity-50 backdrop-blur-md shadow-lg hover:shadow-2xl"
    >
      <div className="">
        <div className="flex items-center flex-wrap">
          <div className="mr-2" style={{ color: color }}>
            {icon}
          </div>
          <div className="">{name}</div>
        </div>
        <div className="font-bold text-2xl ">{value}</div>
      </div>
    </motion.div>
  );
};

export default Statcard;
