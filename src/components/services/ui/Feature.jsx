

export default function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <div className="text-yellow-500 bg-[#FDF9EE] p-2 rounded-full text-[20px]">
        {icon}
      </div>
      <span className="font-medium text-md w-32">{title}</span>
    </div>
  );
}