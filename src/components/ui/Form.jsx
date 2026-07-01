"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  User,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
export default function Form({
  bgColor = "#fff",
  header = "Send Us a Message",
  color = "#081A5C",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      setLoading(true);
      const response = await fetch("/api/service-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        console.log("Data saved successfully");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log("Something error", error);
    }
  };
  return (
    <div
      className="rounded-[32px] border border-slate-100 p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-[2]"
      style={{ backgroundColor: bgColor }}
    >
      <h3 className="text-4xl font-bold" style={{ color: color }}>
        {header}
      </h3>

      <div className="mt-4 h-1 w-32 rounded-full bg-yellow-400" />

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="grid gap-6 md:grid-cols-2">
          <InputField
            label="Full Name"
            color={color}
            required
            icon={<User size={18} />}
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <InputField
            label="Email Address"
            color={color}
            required
            icon={<Mail size={18} />}
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            label="Phone Number"
            color={color}
            required
            icon={<Phone size={18} />}
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <SelectField
            name="service"
            color={color}
            required
            value={formData.service}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="mb-3 block font-medium" style={{ color: color }}>
            Message
          </label>

          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirement..."
              className={`w-full rounded-xl border border-slate-200 pl-12 pr-4 pt-4 text-gray-700 outline-none transition focus:border-blue-500 ${
                color == "#fff"
                  ? "placeholder:text-white"
                  : "placeholder:text-[#132C98]"
              } ${color == "#fff" ? "text-white" : "text-[#132C98]"}`}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`mt-8 flex w-full items-center justify-center gap-3 rounded-xl py-4 font-semibold transition bg-[#FDC700] ${
            isLoading
              ? "cursor-not-allowed opacity-70"
              : "cursor-pointer hover:bg-[#f0bc00]"
          }`}
          style={{
            
            color: bgColor === "#102B83" ? "#000" : "#fff",
          }}
        >
          {isLoading ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            <>
              SUBMIT ENQUIRY
              <ArrowRight size={18} />
            </>
          )}
        </button>

        {/* Security Note */}
        <div className="mt-6 flex items-center gap-3 text-sm">
          <ShieldCheck size={18} color={color} />
          <p style={{ color: bgColor == "#102B83" ? "white" : "#102B83" }}>
            Your information is safe with us. We respect your privacy.
          </p>
        </div>
      </form>
    </div>
  );
}
/* Input */

function InputField({
  label,
  color,
  required,
  icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-3 block font-medium" style={{ color: color }}>
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-14 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none transition focus:border-blue-500 ${
            color == "#fff"
              ? "placeholder:text-white"
              : "placeholder:text-[#132C98]"
          } ${color == "#fff" ? "text-white" : "text-[#132C98]"}`}
        />
      </div>
    </div>
  );
}

/* Select */

function SelectField({ name, color, value, onChange }) {
  const services = [
    "Cockroach Control",
    "Bed bugs Control",
    "Termite Control",
    "Mosquito Control",
    "Flies Control",
    "Rodent Control",
    "Bird Control",
    "Ant Control",
    "Residential Control",
    "Commercial Control",
    "Herbal Pest Control",
    "Fumigation Control",
    "Other - Please Specify",
  ];
  return (
    <div>
      <label className="mb-3 block font-medium" style={{ color: color }}>
        Select Your Service
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          required
          className="h-14 w-full appearance-none rounded-xl border border-slate-200 px-4 outline-none focus:border-blue-500"
          style={{ color: color }}
        >
          <option
            value=""
            style={{ color: color == "#fff" ? "#132C98" : color }}
          >
            Select Service
          </option>
          {services.map((service, index) => (
            <option
              value={service}
              style={{ color: color == "#fff" ? "#132C98" : color }}
              key={index}
            >
              {service}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
}
