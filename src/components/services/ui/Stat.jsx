export default function Stat({
  title,
  subtitle,
  icon: Icon,
  bgColor,
  color,
}) {
  return (
    <div className="p-6 flex items-center gap-4">
      <div
        className={`p-4 rounded-full`}
        style={{ backgroundColor: bgColor, color: color }}
      >
        <Icon className="w-5 h-5 text-yellow-500" />
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 text-lg">{title}</h4>

        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
