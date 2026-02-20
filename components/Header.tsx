"use client";

import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";

export function AppHeader() {
  return (
    <header className="w-full bg-white border-b">
      <div className="px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <DashboardSidebar slug={""} />
          <div className="text-lg font-medium">ChopMall</div>
        </div>
      </div>
    </header>
  );
}
