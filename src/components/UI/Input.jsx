export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        className="border rounded-md px-3 py-2 focus:outline-blue-500"
        {...props}
      />
    </div>
  );
}
