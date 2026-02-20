"use client";

import { usePathname } from "next/navigation";
import { DashboardSidebar } from "@/features/dashboard/components/DashboardSidebar";

export function AppHeader() {
  const pathname = usePathname() || "";

  const hideHamburger =
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/verify-otp");


  return (
    <header className="w-full bg-white border-b">
      <div className="px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3">
          {!hideHamburger && <DashboardSidebar slug={""} />}
          <div className="text-lg font-medium">ChopMall</div>
        </div>
      </div>
    </header>
  );
}
