interface DashboardHeaderProps {
  name: string;
}

export function DashboardHeader({ name }: DashboardHeaderProps) {
  return (
    <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {name}</h1>
  );
}
