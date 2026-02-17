import { Card } from "@/components/ui/Card";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { AuthHeader } from "@/features/auth/components/AuthHeader";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <Card>
        <AuthHeader
          title="Welcome back"
          subtitle="Login to your marketplace account"
        />
        <LoginForm />
        <p>If you don't have an account, <a href="/signup" className="text-blue-500">signup here</a></p>
      </Card>
    </div>
  );
}
