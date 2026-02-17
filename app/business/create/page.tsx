"use client"

import { CreateBusinessForm } from "@/features/business/components/CreateBusinessForm";
import { useBusinessStatus } from "@/features/business/hooks/useBusinessStatus";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateBusinessPage() {
  const { data, loading } = useBusinessStatus();
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if(storedToken === null) {
      console.log(storedToken);
      router.push("/login");
    }
  }, []);

  if (loading) return <p>Checking business status...</p>;

  if (!data?.success) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">{data?.message}</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Business</h1>
      <CreateBusinessForm />
    </div>
  );
}
