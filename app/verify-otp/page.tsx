"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyOtp } from "@/lib/api/auth";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // user_id passed like: /verify-otp?user_id=xxxx
  const userId = searchParams.get("user_id");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp || !userId) {
      setError("OTP or User ID missing");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await verifyOtp({
        otp,
        user_id: userId,
      });

      if (res.response) {
        // redirect to login or dashboard
        router.push("/login");
      } else {
        setError(res.message || "Verification failed");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Verify your email
          </h1>
          <p className="text-gray-500 mt-2">
            Enter the 5-digit code sent to your email
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 text-red-600 px-4 py-2 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleVerify} className="space-y-5">
          <input
            type="text"
            maxLength={5}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-orange-600 text-white py-3 font-semibold hover:bg-orange-700 transition disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify Account"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Didn’t get the code?{" "}
          <span className="text-orange-600 font-medium cursor-pointer">
            Resend
          </span>
        </div>
      </div>
    </div>
  );
}
