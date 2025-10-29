export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg transition">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-gray-600 dark:text-gray-300 text-sm">{title}</h3>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
