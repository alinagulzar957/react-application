import { useEffect, useState } from "react";
import Card from "../../components/common/Card.jsx";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, CheckCircle, Clock } from "lucide-react";
import dashboardApi from "../../api/dashboardApi.js";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [weeklyTasks, setWeeklyTasks] = useState([]);

  useEffect(() => {
    dashboardApi.getStats().then((res) => setStats(res.data));
    dashboardApi.getTrends().then((res) => setWeeklyTasks(res.data));
  }, []);

  if (!stats || weeklyTasks.length === 0) return <p className="p-8">Loading dashboard data...</p>;

  return (
    <div className="p-8 flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">📊 Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Users" value={stats.totalUsers} icon={<Users />} />
        <Card title="Completed Tasks" value={stats.completedTasks} icon={<CheckCircle />} />
        <Card title="Pending Tasks" value={stats.pendingTasks} icon={<Clock />} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Weekly Tasks</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyTasks}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="day" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Bar dataKey="tasks" fill="#6366f1" radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
