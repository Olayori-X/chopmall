"use client";

import { useState } from "react";
import { QuickActions } from "./QuickActions";

export const DashboardSidebar = ({ slug }: { slug: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (thicker lines) */}
      <button onClick={() => setOpen(true)} className="p-2">
        <span className="inline-flex flex-col justify-between w-6 h-5">
          <span className="block h-1.5 bg-gray-900 rounded"></span>
          <span className="block h-1.5 bg-gray-900 rounded"></span>
          <span className="block h-1.5 bg-gray-900 rounded"></span>
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-4">
          <QuickActions slug={slug} />
        </div>
      </div>
    </>
  );
};
