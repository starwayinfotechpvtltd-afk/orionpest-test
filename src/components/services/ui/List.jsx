import { ShieldCheck, BadgeCheck, Clock3 } from "lucide-react";

export default function List({ title, index, bgColor, color }) {
  const icons = [ShieldCheck, BadgeCheck, Clock3];

  const Icon = icons[index] || ShieldCheck; // fallback icon
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <div
        className="text-black bg-[#F9CF02] p-2 rounded-full text-[20px] mb-2  "
        style={{ backgroundColor: bgColor, color: color }}
      >
        <Icon className="w-5 h-5 text-yellow-500" />
      </div>
      <span className="font-semibold text-md">{title}</span>
    </div>
  );
}
