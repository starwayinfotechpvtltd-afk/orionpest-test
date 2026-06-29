import {
  ShieldCheck,
  FlaskConical,
  BadgeCheck,
} from "lucide-react";

export default function Feature({ title, index }) {
  const icons = [ShieldCheck, FlaskConical, BadgeCheck];

  const Icon = icons[index] || ShieldCheck; // fallback icon

  return (
    <div className="flex items-center gap-2 text-gray-700">
      <div className="bg-[#FDF9EE] p-2 rounded-full">
        <Icon className="w-5 h-5 text-yellow-500" />
      </div>
      <span className="font-medium text-md w-32">{title}</span>
    </div>
  );
}