interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => (
  <div className="space-y-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
    />
  </div>
);
