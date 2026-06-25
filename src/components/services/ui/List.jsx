

export default function List({ icon, title, bgColor, color }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <div
        className="text-black bg-[#F9CF02] p-2 rounded-full text-[20px] mb-2  "
        style={{ backgroundColor: bgColor, color: color }}
      >
        {icon}
      </div>
      <span className="font-semibold text-md">{title}</span>
    </div>
  );
}