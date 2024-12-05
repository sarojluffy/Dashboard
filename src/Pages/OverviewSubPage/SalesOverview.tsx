import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

import { motion } from "motion/react";

interface Props {
  name: string;
  sales: number;
}

const SalesOverview = () => {
  const salesData: Props[] = [
    { name: "Jul", sales: 4200 },
    { name: "Aug", sales: 3800 },
    { name: "Sep", sales: 5100 },
    { name: "Oct", sales: 4600 },
    { name: "Nov", sales: 5400 },
    { name: "Dec", sales: 7200 },
    { name: "Jan", sales: 6100 },
    { name: "Feb", sales: 5900 },
    { name: "Mar", sales: 6800 },
    { name: "Apr", sales: 6300 },
    { name: "May", sales: 7100 },
    { name: "Jun", sales: 7500 },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-80 bg-saroj p-6"
      >
        <p className=" text-xl">Sales Overview</p>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          {/*for responsiveness */}
          <LineChart data={salesData} height={400} width={300}>
            <CartesianGrid strokeDasharray="1 1 " stroke="#4B5563" />{" "}
            {/* the grind inside ,strokedasharray defines  how much dashed it should be , and stroke has the color it represents*/}
            <XAxis dataKey="name" stroke="#9ca3af" />
            {/* represents what will the x axis consist of*/}
            <YAxis stroke="#9ca3af" />
            <Tooltip
              // tooltip represent the details shown in box while hovered
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55,0.8)",
                // rgba included opacity too
                borderColor: "#174136",
              }}
            />
            <Legend />
            {/* show info about the line at the bottom */}
            <Line
              type="monotone" //solid line
              dataKey="sales" //which data to represent in the graph
              stroke="#8884d8"
              strokeWidth={2} // represents line ko width
              activeDot={{ r: 8 }} //appearance of dot while hover
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }} //represents dot
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </>
  );
};

export default SalesOverview;
