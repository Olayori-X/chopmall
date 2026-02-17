"use client";

import { useDashboard } from "@/features/dashboard/hooks/useDashboard";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";
import { StatCard } from "@/features/dashboard/components/StatCard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data, loading } = useDashboard();
  console.log(data);

  const router = useRouter();
  
    useEffect(() => {
      const storedToken = localStorage.getItem("token");

      if(storedToken === null) {
        console.log(storedToken);
        router.push("/login");
      }
    }, []);
  

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error loading dashboard</p>;

  const pending =
    data.groupedorders.find(o => o.status === "pending")?.total ?? 0;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <DashboardHeader name={data.userdetails.fullname} />
        <DashboardSidebar slug={data.business.slug} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Orders" value={data.orders} />
        <StatCard label="Pending Orders" value={pending} />
        <StatCard label="Total Sales" value={`₦${data.sales}`} />
      </div>

    </div>
  );
}
