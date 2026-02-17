interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({ loading, children, ...props }: ButtonProps) => (
  <button
    {...props}
    disabled={loading}
    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
  >
    {loading ? "Please wait..." : children}
  </button>
);
