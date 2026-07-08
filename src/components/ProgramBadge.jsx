// src/components/ProgramBadge.jsx
export default function ProgramBadge({ program, size = "md", inverted = false }) {
  const Icon = program.icon;
  const hasLogo = Boolean(program.logo);

  const sizes = {
    md: hasLogo ? "w-14 h-14 rounded-lg" : "w-11 h-11 rounded-lg",
    lg: hasLogo ? "w-20 h-20 rounded-xl" : "w-14 h-14 rounded-xl",
  };

  const baseClasses = `${sizes[size]} flex items-center justify-center shrink-0 overflow-hidden transition-colors duration-300`;

  const bgClasses = hasLogo
    ? "bg-white border border-gray-100 shadow-sm"
    : inverted
    ? "bg-white"
    : "bg-red-50 group-hover:bg-red-500";

  return (
    <div className={`${baseClasses} ${bgClasses}`}>
      {hasLogo ? (
        <img
          src={program.logo}
          alt={`${program.title} logo`}
          className="w-full h-full object-contain p-0.5"
        />
      ) : (
        <Icon
          className={`${size === "lg" ? "w-7 h-7" : "w-5 h-5"} ${
            inverted ? "text-red-600" : "text-red-500 group-hover:text-white"
          } transition-colors duration-300`}
        />
      )}
    </div>
  );
}