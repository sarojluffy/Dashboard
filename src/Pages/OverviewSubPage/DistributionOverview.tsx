import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  name: string;
  value: number;
}
const categoryData: Props[] = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistributionChart = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-80 bg-saroj p-6"
      >
        <p className=" text-xl">Category distribution</p>

        <ResponsiveContainer width={"100%"} height={"95%"} className="py-2  ">
          <PieChart className="border border-slate-600">
            <Pie
              className="border"
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="red"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((abc, i) => {
                return (
                  <>
                    <Cell
                      key={`cell-${i}`}
                      fill={COLORS[i % COLORS.length]}
                    ></Cell>
                  </>
                );
              })}
            </Pie>
            <Legend />
            <Tooltip
              // tooltip represent the details shown in box while hovered
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55,0.8)",
                // rgba included opacity too
                borderColor: "#174136",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </>
  );
};
export default CategoryDistributionChart;
