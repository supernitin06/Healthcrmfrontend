export default function Button({
  text,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`liquid-btn ${variant} ${className} !w-auto !h-auto inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out whitespace-nowrap`}
      {...props}
    >
      <span className="relative z-10 font-semibold tracking-wide">
        {text}
      </span>
    </button>
  );
}
 