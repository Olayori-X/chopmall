export const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);
