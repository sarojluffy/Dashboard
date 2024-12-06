import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
interface prop {
  name: string;
  value: number;
}

const Saleschannel = (props: Props) => {
  const SALES_CHANNEL_DATA: prop[] = [
    { name: "Website", value: 45600 },
    { name: "Mobile App", value: 38200 },
    { name: "Marketplace", value: 29800 },
    { name: "Social Media", value: 18700 },
  ];
  const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-80 bg-saroj p-6"
      >
        <p className=" text-xl">Sales by channel</p>

        <ResponsiveContainer className="w-4/5">
          <BarChart data={SALES_CHANNEL_DATA}>
            {/* data it recieves from */}
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            {/* the dots and color of the bar */}
            <XAxis dataKey="name" stroke="#9CA3AF" />
            {/* which dtaa is supposed to be shown in the bar */}
            <YAxis stroke="#9CA3AF" />
            {/* yaxis line color  */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            {/* the box that appears while hovering */}
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {/* fill is the default color the bars would recieve */}
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
                // actual rendering of the bar with the colors
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </>
  );
};

export default Saleschannel;
