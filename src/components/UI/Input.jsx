export default function Input({ label, type = "text", options = [], className = "", ...props }) {
  const baseClasses = `w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 placeholder:text-gray-400 ${className}`;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-semibold text-gray-700 ml-1">{label}</label>}
      {type === 'select' ? (
        <select className={`${baseClasses} cursor-pointer`} {...props}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} className={baseClasses} {...props} />
      )}
    </div>
  );
}
