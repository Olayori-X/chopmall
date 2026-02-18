'use client';

import { Suspense } from 'react';
import VerifyOtpContent from '@/features/verify-otp/VerifyOtpContent';

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
