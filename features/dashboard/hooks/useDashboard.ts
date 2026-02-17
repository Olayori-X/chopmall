"use client";

import { useEffect, useState } from "react";
import { fetchDashboard } from "@/lib/api/dashboard";
import { DashboardResponse } from "../types/dashboard.types";

export const useDashboard = () => {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
