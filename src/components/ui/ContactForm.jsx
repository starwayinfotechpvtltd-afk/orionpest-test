"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  }
  return (
    <form
      className="mt-10 flex flex-col justify-center items-center w-full max-w-2xl"
      onSubmit={handleSubmit}
    >
      <div className="bg-gradient-to-br from-[#FFF300] to-[#FEBA00] p-6 md:p-10 rounded-2xl w-full flex flex-col gap-5">
        <input
          type="text"
          className="bg-white p-3 rounded"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          className="bg-white p-3 rounded"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="number"
          className="bg-white p-3 rounded"
          placeholder="Your phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {form.phone.length > 0 &&
          (form.phone.length < 7 || form.phone.length > 11) && (
            <p className="text-red-600 font-semibold">
              Enter a valid phone number
            </p>
          )}
        <select
          className="bg-white p-3 rounded"
          defaultValue="Select Service"
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="Select Service" disabled>
            Select Service
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
          <option value="Fumigation Control">Fumigation Control</option>
        </select>

        {/* Inquiry */}
        <p className=" text-black">Inquiry...</p>
        <textarea
          name="inquiry"
          className="bg-white w-full rounded-xl mt-2 min-h-[120px] p-3"
          style={{
            boxShadow:
              "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
          }}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>

        <button
          className="bg-[#FEBA00] px-10 py-2 rounded-xl font-semibold max-w-44 w-52 self-center text-[17px] cursor-pointer"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {success && (
          <p className="text-[#00023A] font-bold">{success ? "Form submitted!" : ""}</p>
        )}
      </div>
    </form>
  );
}
