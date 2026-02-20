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
      <div className="min-h-screen bg-white p-6">
        <h1 className="text-2xl font-bold text-gray-900">{data?.message}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create Business</h1>
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <CreateBusinessForm />
        </div>
      </div>
    </div>
  );
}
