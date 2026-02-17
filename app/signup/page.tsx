import { Card } from "@/components/ui/Card";
import { SignupForm } from "@/features/auth/components/SignupForm";
import { AuthHeader } from "@/features/auth/components/AuthHeader";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <Card>
        <AuthHeader
          title="Userll"
          subtitle="Create your seller or buyer account"
        />

        <SignupForm />
        <p>If you have an account, <a href="/login" className="text-blue-500">login here</a></p>
      </Card>
    </div>
  );
}
