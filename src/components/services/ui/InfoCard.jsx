import { Shield, Target, Leaf, CalendarDays } from "lucide-react";

export default function InfoCard({ index, title, description }) {

  const icons = [Target, Shield, Leaf, CalendarDays];

  const Icon = icons[index] || Shield; // fallback icon

  return (
    <div className="flex gap-4 items-start">
      <div className="w-20 h-16 rounded-full border border-[#2F3293] flex items-center justify-center p-1">
        <div className="w-14 h-14 rounded-full bg-[#2F3293] shadow-md flex items-center justify-center text-white shrink-0">
          <Icon className="w-5 h-5 text-yellow-500" />
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#07155F] mb-2 text-xl">{title}</h4>

        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}