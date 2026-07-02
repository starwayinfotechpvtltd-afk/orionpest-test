import { Shield, Search, Leaf, Clock } from "lucide-react";

export default function InfoCard({ index, title, description }) {

  const icons = [Search, Shield, Leaf, Clock];

  const Icon = icons[index] || Shield; // fallback icon

  return (
    <div className="flex gap-4 items-start">
      <div className="w-20 h-18 rounded-full border border-[#2F3293] flex items-center justify-center p-1">
        <div className="w-14 h-14 rounded-full bg-[#2F3293] shadow-md flex items-center justify-center text-white shrink-0">
          <Icon className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#07155F] mb-2 text-xl">{title}</h4>

        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
}