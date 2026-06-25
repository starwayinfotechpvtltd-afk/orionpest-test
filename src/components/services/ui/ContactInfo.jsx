import Link from "next/link";


export default function ContactInfo({ icon, title, value, bg, link }) {
  return (
    <div className="flex items-start gap-5">
      <div
        className={`flex p-4 h-14 w-14 items-center justify-center rounded-full text-white ${bg}`}
      >
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-blue-600">{title}</h4>

        <Link
          className="mt-1 whitespace-pre-line text-lg text-[#081A5C]"
          href={link && !link.includes("@") ? `tel:${link}` : `mailto:${link}`}
        >
          {value}
        </Link>
      </div>
    </div>
  );
}