interface AuthHeaderProps {
  title?: string;
  subtitle?: string;
}

export const AuthHeader = ({
  title = "Userll",
  subtitle = "Create your seller or buyer account",
}: AuthHeaderProps) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-orange-600">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-500 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
