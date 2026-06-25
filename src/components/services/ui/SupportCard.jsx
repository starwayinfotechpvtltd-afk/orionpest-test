

export default function SupportCard({ icon, title, text, highlight }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-[#081A5C]">{title}</h4>

        <p className="text-sm text-gray-500">{text}</p>

        <p className="mt-1 font-semibold text-[#081A5C]">{highlight}</p>
      </div>
    </div>
  );
}