import {
    Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowRight,

} from "lucide-react"
export default function Form() {
  return (
    <div className="rounded-[32px] border border-slate-100 bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-[2]">
      <h3 className="text-4xl font-bold text-[#081A5C]">Send Us a Message</h3>

      <div className="mt-4 h-1 w-20 rounded-full bg-yellow-400" />

      <form className="mt-10">
        <div className="grid gap-6 md:grid-cols-2">
          <InputField
            label="Full Name"
            icon={<User size={18} />}
            placeholder="Enter your full name"
          />

          <InputField
            label="Email Address"
            icon={<Mail size={18} />}
            placeholder="Enter your email address"
            type="email"
          />

          <InputField
            label="Phone Number"
            icon={<Phone size={18} />}
            placeholder="Enter your phone number"
          />

          <SelectField />
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="mb-3 block font-medium text-[#081A5C]">
            Message
          </label>

          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your requirement..."
              className="w-full rounded-xl border border-slate-200 pl-12 pr-4 pt-4 text-gray-700 outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800"
        >
          SUBMIT ENQUIRY
          <ArrowRight size={18} />
        </button>

        {/* Security Note */}
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
          <ShieldCheck size={18} className="text-blue-600" />
          Your information is safe with us. We respect your privacy.
        </div>
      </form>
    </div>
  );
}
/* Input */

function InputField({ label, icon, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-3 block font-medium text-[#081A5C]">{label}</label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>

        <input
          type={type}
          placeholder={placeholder}
          className="h-14 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none transition focus:border-blue-500"
        />
      </div>
    </div>
  );
}

/* Select */

function SelectField() {
  return (
    <div>
      <label className="mb-3 block font-medium text-[#081A5C]">
        Type of establishment
      </label>

      <div className="relative">
        <select className="h-14 w-full appearance-none rounded-xl border border-slate-200 px-4 outline-none focus:border-blue-500">
          <option>Choose type</option>
          <option>Residential</option>
          <option>Commercial</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}
