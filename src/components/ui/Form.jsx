// "use client";

// import { useState } from "react";
// import {
//   Phone,
//   Mail,
//   User,
//   MessageSquare,
//   ShieldCheck,
//   ChevronDown,
//   ArrowRight,
// } from "lucide-react";
// export default function Form({
//   bgColor = "#fff",
//   header = "Send Us a Message",
//   color = "#081A5C",
// }) {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });
//   const [isLoading, setLoading] = useState(false);

//   const handleChange = (e) => {
//   const { name } = e.target;
//   let { value } = e.target;

//   if (name === "phone") {
//     value = value.replace(/\D/g, "").slice(0, 10);
//   }

//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(formData);

//     try {
//       setLoading(true);
//       const response = await fetch("/api/service-form", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log(data);

//       if (data.success) {
//         console.log("Data saved successfully");
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           service: "",
//           message: "",
//         });
//         setLoading(false);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log("Something error", error);
//     }
//   };
//   return (
//     <div
//       className="rounded-[32px] border border-slate-100 p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-[2]"
//       style={{ backgroundColor: bgColor }}
//     >
//       <h3 className="text-4xl font-bold" style={{ color: color }}>
//         {header}
//       </h3>

//       <div className="mt-4 h-1 w-52 rounded-full bg-yellow-400" />

//       <form onSubmit={handleSubmit} className="mt-10">
//         <div className="grid gap-6 md:grid-cols-2">
//           <InputField
//             label="Full Name"
//             color={color}
//             required
//             icon={<User size={18} />}
//             placeholder="Enter Full Name"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Email Address"
//             color={color}
//             icon={<Mail size={18} />}
//             placeholder="Enter Email Address"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <InputField
//             label="Phone Number"
//             color={color}
//             required
//             icon={<Phone size={18} />}
//             placeholder="Enter Phone Number"
//             name="phone"
//             type="tel"
//             value={formData.phone}
//             onChange={handleChange}
//           />

//           <SelectField
//             name="service"
//             color={color}
//             required
//             value={formData.service}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Message */}
//         <div className="mt-6">
//           <label className="mb-3 block font-medium" style={{ color: color }}>
//             Message
//           </label>

//           <div className="relative">
//             <MessageSquare
//               size={18}
//               className="absolute left-4 top-4 text-gray-400"
//             />

//             <textarea
//               rows={5}
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us about your requirement..."
//               className={`w-full rounded-xl border border-slate-200 pl-12 pr-4 pt-4 text-gray-700 outline-none transition focus:border-blue-500 ${
//                 color == "#fff"
//                   ? "placeholder:text-white"
//                   : "placeholder:text-gray-500"
//               } ${color == "#fff" ? "text-white" : "text-[#132C98]"}`}
//             />
//           </div>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`mt-8 flex w-full items-center justify-center gap-3 rounded-xl py-4 font-semibold transition bg-[#FDC700] ${
//             isLoading
//               ? "cursor-not-allowed opacity-70"
//               : "cursor-pointer hover:bg-[#f0bc00]"
//           }`}
//           style={{
//             color: bgColor === "#102B83" ? "#000" : "#fff",
//           }}
//         >
//           {isLoading ? (
//             <>
//               <svg
//                 className="h-5 w-5 animate-spin"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                 ></path>
//               </svg>
//               Submitting...
//             </>
//           ) : (
//             <>
//               SUBMIT ENQUIRY
//               <ArrowRight size={18} />
//             </>
//           )}
//         </button>

//         {/* Security Note */}
//         <div className="mt-6 flex items-center gap-3 text-sm">
//           <ShieldCheck size={18} color={color} />
//           <p style={{ color: bgColor == "#102B83" ? "white" : "#102B83" }}>
//             Your information is safe with us. We respect your privacy.
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }
// /* Input */

// function InputField({
//   label,
//   color,
//   required,
//   icon,
//   placeholder,
//   type = "text",
//   name,
//   value,
//   onChange,
// }) {

//   return (
//     <div>
//       <label className="mb-3 block font-medium" style={{ color }}>
//         {label}
//         {required && <span className="ml-1 text-red-500">*</span>}
//       </label>

//       <div className="relative">
//         <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//           {icon}
//         </span>

//         <input
//           type={name === "phone" ? "tel" : type}
//           name={name}
//           required={required}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           maxLength={name === "phone" ? 10 : undefined}
//           inputMode={name === "phone" ? "numeric" : undefined}
//           className={`h-14 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none transition focus:border-blue-500 ${
//             color == "#fff"
//               ? "placeholder:text-white"
//               : "placeholder:text-gray-500"
//           } ${color == "#fff" ? "text-white" : "text-[#132C98]"}`}
//         />
//       </div>
//     </div>
//   );
// }

// /* Select */

// function SelectField({ name, color, value, onChange, required  }) {
//   const services = [
//     "Cockroach Control",
//     "Bed bugs Control",
//     "Termite Control",
//     "Mosquito Control",
//     "Flies Control",
//     "Rodent Control",
//     "Bird Control",
//     "Ant Control",
//     "Residential Control",
//     "Commercial Control",
//     "Herbal Pest Control",
//     "Fumigation Control",
//     "Other - Please Specify",
//   ];
//   return (
//     <div>
//       <label className="mb-3 block font-medium" style={{ color }}>
//   Select Your Service
//   {required && <span className="ml-1 text-red-500">*</span>}
// </label>

//       <div className="relative">
//         <select
//           name={name}
//           value={value}
//           onChange={onChange}
//            required={required}
//           className="h-14 w-full appearance-none rounded-xl border border-slate-200 px-4 outline-none focus:border-blue-500"
//           style={{ color: color }}
//         >
//           <option
//             value=""
//             style={{ color: color == "#fff" ? "#132C98" : color }}
//           >
//             Select Service
//           </option>
//           {services.map((service, index) => (
//             <option
//               value={service}
//               style={{ color: color == "#fff" ? "#132C98" : color }}
//               key={index}
//             >
//               {service}
//             </option>
//           ))}
//         </select>

//         <ChevronDown
//           size={18}
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Script from "next/script";

export default function ZohoForm() {
  const initialCaptchaUrl =
    "https://crm.zoho.in/crm/CaptchaServlet?formId=70caa390a7cd642b6e47f3372541edb8791f0e8224eabac83c3cb4623780869a4ff97aaade2d68cbb9d3698783b620e4&grpid=7a4a79531870e3055b3169027236a05be00b7a642be35037febb07397bedb0ef";

  const [captchaSrc, setCaptchaSrc] = useState(initialCaptchaUrl);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reloadCaptcha = () => {
    setCaptchaSrc(`${initialCaptchaUrl}&d=${new Date().getTime()}`);
  };

  const validateEmail = (email) => {
    if (!email || email.trim() === "") return true;
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length);
  };

  const handleSubmit = (e) => {
    const form = e.target;
    const mandatoryFields = [
      { name: "Last Name", label: "Full Name" },
      { name: "Email", label: "Email" },
      { name: "Phone", label: "Phone" },
      { name: "City", label: "City" },
      { name: "Zip Code", label: "Zip Code" },
      { name: "LEADCF6", label: "Interested Services" },
      { name: "LEADCF5", label: "Customer Type" },
      { name: "enterdigest", label: "Captcha" },
    ];

    for (let field of mandatoryFields) {
      const fieldObj = form.elements[field.name];
      if (fieldObj) {
        const val = fieldObj.value ? fieldObj.value.trim() : "";

        if (!val) {
          alert(`${field.label} cannot be empty.`);
          fieldObj.focus();
          e.preventDefault();
          return false;
        } else if (fieldObj.nodeName === "SELECT" && val === "-None-") {
          alert(`Please select a valid ${field.label}.`);
          fieldObj.focus();
          e.preventDefault();
          return false;
        }
      }
    }

    const emailField = form.elements["Email"];
    if (emailField && !validateEmail(emailField.value)) {
      alert("Please enter a valid email address.");
      emailField.focus();
      e.preventDefault();
      return false;
    }

    setIsSubmitting(true);
    return true;
  };

  return (
    <div className="relative mx-auto my-8 w-full max-w-2xl rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/60 sm:p-10">
      {/* Form Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-[#0b1c3d] sm:text-3xl">
          Send Us a Message
        </h2>
        <div className="mt-2 h-1 w-24 rounded-full bg-amber-400" />
      </div>

      <form
        id="webform853538000001144029"
        action="https://crm.zoho.in/crm/WebToLeadForm"
        name="WebToLeads853538000001144029"
        method="POST"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
        className="space-y-4"
      >
        {/* Hidden Zoho Token Inputs */}
        <input
          type="text"
          className="hidden"
          name="xnQsjsdp"
          defaultValue="7a4a79531870e3055b3169027236a05be00b7a642be35037febb07397bedb0ef"
        />

        <input
          type="text"
          className="hidden"
          name="xmIwtLD"
          defaultValue="70caa390a7cd642b6e47f3372541edb8791f0e8224eabac83c3cb4623780869a4ff97aaade2d68cbb9d3698783b620e4"
        />
        <input
          type="text"
          className="hidden"
          name="actionType"
          defaultValue="TGVhZHM="
        />
        <input
          type="text"
          className="hidden"
          name="returnURL"
          defaultValue="null"
        />

        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="Last_Name"
              className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <UserIcon className="h-4 w-4" />
              </div>
              <input
                type="text"
                id="Last_Name"
                name="Last Name"
                maxLength={80}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-xs text-slate-800 placeholder-slate-400 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
                placeholder="Enter Full Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="Email"
              className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <MailIcon className="h-4 w-4" />
              </div>
              <input
                type="email"
                id="Email"
                name="Email"
                maxLength={100}
                autoComplete="off"
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-xs text-slate-800 placeholder-slate-400 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Phone Number & Service */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Phone */}
          <div>
            <label
              htmlFor="Phone"
              className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <PhoneIcon className="h-4 w-4" />
              </div>
              <input
                type="text"
                id="Phone"
                name="Phone"
                maxLength={30}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-xs text-slate-800 placeholder-slate-400 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          {/* Select Your Service (LEADCF6) */}
          <div>
            <label
              htmlFor="LEADCF6"
              className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
            >
              Select Your Service <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <WrenchIcon className="h-4 w-4" />
              </div>
              <select
                id="LEADCF6"
                name="LEADCF6"
                defaultValue="-None-"
                required
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-8 text-xs text-slate-800 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
              >
                <option value="-None-" disabled>
                  Select Service
                </option>
                <option value="General Pest Control">
                  General Pest Control
                </option>
                <option value="Cockroach Control">Cockroach Control</option>
                <option value="Bed bugs Control">Bed bugs Control</option>
                <option value="Termite Control">Termite Control</option>
                <option value="Mosquito Control">Mosquito Control</option>
                <option value="Flies Control">Flies Control</option>
                <option value="Rodent Control">Rodent Control</option>
                <option value="Bird Control">Bird Control</option>
                <option value="Ant Control">Ant Control</option>
                <option value="Residential Control">Residential Control</option>
                <option value="Commercial Control">Commercial Control</option>
                <option value="Herbal Pest Control">Herbal Pest Control</option>
                <option value="Fumigation">Fumigation</option>
                <option value="Sterilization">Sterilization</option>
                <option value="Others">Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Customer Type & City */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Customer Type (LEADCF5) */}
          <div>
            <label
              htmlFor="LEADCF5"
              className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
            >
              Customer Type <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <BuildingIcon className="h-4 w-4" />
              </div>
              <select
                id="LEADCF5"
                name="LEADCF5"
                defaultValue="-None-"
                required
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-8 text-xs text-slate-800 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
              >
                <option value="-None-" disabled>
                  Select Customer Type
                </option>
                <option value="RESIDENTIAL">RESIDENTIAL</option>
                <option value="COMMERCIAL">COMMERCIAL</option>
                <option value="RAILWAY">RAILWAY</option>
                <option value="SOCIETY">SOCIETY</option>
                <option value="HOTEL">HOTEL</option>
                <option value="FINANCIAL INSTITUTION">
                  FINANCIAL INSTITUTION
                </option>
                <option value="SHOPPING MALL">SHOPPING MALL</option>
                <option value="RETAIL BRAND">RETAIL BRAND</option>
                <option value="EDUCATIONAL INSTITUTION">
                  EDUCATIONAL INSTITUTION
                </option>
                <option value="HOSPITAL">HOSPITAL</option>
                <option value="INDUSTRIAL">INDUSTRIAL</option>
                <option value="WARE HOUSE">WARE HOUSE</option>
                <option value="GUEST HOUSE">GUEST HOUSE</option>
                <option value="MULTIPLEX">MULTIPLEX</option>
                <option value="GOVERNMENT CONTRACT">GOVERNMENT CONTRACT</option>
                <option value="CONTAINERS">CONTAINERS</option>
                <option value="THIRD PARTY">THIRD PARTY</option>
                <option value="LOCAL">LOCAL</option>
                <option value="SCHOOL">SCHOOL</option>
                <option value="FOOD COUNTER">FOOD COUNTER</option>
                <option value="OTHERS">OTHERS</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="City"
              className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
            >
              City <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <MapPinIcon className="h-4 w-4" />
              </div>
              <input
                type="text"
                id="City"
                name="City"
                maxLength={100}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-xs text-slate-800 placeholder-slate-400 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
                placeholder="Enter City"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Zip Code & Captcha Code */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Zip Code */}
          <div>
            <label
              htmlFor="Zip_Code"
              className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
            >
              Zip Code <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1.5">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <HashtagIcon className="h-4 w-4" />
              </div>
              <input
                type="text"
                id="Zip_Code"
                name="Zip Code"
                maxLength={30}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-xs text-slate-800 placeholder-slate-400 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
                placeholder="Enter Zip Code"
              />
            </div>
          </div>

          {/* Captcha Input & Image */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="captchaField853538000001144029"
                className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
              >
                Captcha <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={reloadCaptcha}
                className="text-[11px] font-medium text-amber-600 hover:text-amber-700 hover:underline"
              >
                Reload Image
              </button>
            </div>
            <div className="mt-1.5 flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="imgid853538000001144029"
                src={captchaSrc}
                alt="Captcha"
                className="h-10 w-28 rounded-xl border border-slate-200 bg-slate-50 object-contain p-1"
              />
              <input
                type="text"
                id="captchaField853538000001144029"
                name="enterdigest"
                maxLength={10}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3.5 text-xs text-slate-800 placeholder-slate-400 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
                placeholder="Enter Code"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="Description"
            className="block text-xs font-semibold text-[#0b1c3d] sm:text-sm"
          >
            Message
          </label>
          <div className="relative mt-1.5">
            <div className="pointer-events-none absolute left-3.5 top-3 text-slate-400">
              <MessageIcon className="h-4 w-4" />
            </div>
            <textarea
              id="Description"
              name="Description"
              rows={3}
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-xs text-slate-800 placeholder-slate-400 transition duration-150 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 sm:text-sm"
              placeholder="Tell us about your requirement..."
            />
          </div>
        </div>

        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        {/* Hidden Lead Source Field */}
        <div className="hidden">
          <label htmlFor="Lead_Source">Lead Source</label>
          <select
            id="Lead_Source"
            name="Lead Source"
            defaultValue="Web Research"
          >
            <option value="-None-">-None-</option>
            <option value="Web Research">Web Research</option>
          </select>
        </div>

        {/* Honeypot Field */}
        <input type="hidden" name="aG9uZXlwb3Q" defaultValue="" />

        {/* Yellow Submit Button matching image */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffc700] py-3.5 px-6 text-sm font-bold tracking-wider text-white shadow-md shadow-amber-400/20 transition duration-200 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 active:scale-[0.99] disabled:opacity-50"
          >
            <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}</span>
            <ArrowRightIcon className="h-4 w-4 stroke-[3]" />
          </button>
        </div>

        {/* Privacy Footer */}
        <div className="mt-4 flex items-center justify-center gap-1.5 pt-1 text-center text-xs text-slate-500">
          <ShieldCheckIcon className="h-4 w-4 text-slate-600" />
          <span>
            Your information is safe with us. We respect your privacy.
          </span>
        </div>
      </form>

      {/* Zoho Tracking & Analytics Scripts */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=65cdcd589f71aac8a9f6be78b4d0b5a6dbb52201f6b4812702d5ece0d593623cc9bcd97416cf5df579a432edecf203dbgid716787006f571baa3662ca7c718ee4d64e890da1844d2de61223004f5365bb0agidfe91908875fa650d22fb5d559da0560a94449584690c0fb9e6c5fd8d0c32d1cdgid1eb9ba092620b69558d9a039a32e99c2004962bb37a6dff433e21f63d8040631&tw=de542bce45198574d44a820878f85e7a0a313eaf5a9f500981661d925f2d99c2&version=v2"
        strategy="lazyOnload"
      />
      <Script
        id="zcga"
        src="https://crm.zoho.in/crm/javascript/zcga.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

// Inline SVGs for design parity without external icon library dependencies
function UserIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function WrenchIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function HashtagIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
      />
    </svg>
  );
}

function MessageIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}
