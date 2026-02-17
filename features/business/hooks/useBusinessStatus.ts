"use client";

import { useEffect, useState } from "react";
import { checkBusinessStatus } from "../api/business.api";
import { BusinessStatusResponse } from "../types/business.types";

export const useBusinessStatus = () => {
  const [data, setData] = useState<BusinessStatusResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkBusinessStatus()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
