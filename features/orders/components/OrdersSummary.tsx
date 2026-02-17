export const OrdersSummary = ({
  todayTotal,
}: {
  todayTotal: number;
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="font-semibold">Today's Total</h2>
      <p className="text-2xl font-bold">
        ₦{todayTotal.toLocaleString()}
      </p>
    </div>
  );
};
