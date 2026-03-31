"use client";

import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        type: "",
        message: "",
      });
    }
  }

  return (
    <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
        style={{
          boxShadow:
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        }}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
        style={{
          boxShadow:
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        }}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      {/* Telephone + Postcode */}
      <div className="flex flex-col md:flex-row items-start gap-3 w-full">
        <div>
          <input
            type="number"
            placeholder="Telephone"
            className="py-2 px-5 w-full bg-white rounded-3xl"
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {form.phone.length > 0 &&
            (form.phone.length < 7 || form.phone.length > 11) && (
              <p className="text-red-600 font-semibold">
                Enter a valid phone number
              </p>
            )}
        </div>
        <div>
          <input
            type="number"
            placeholder="Postcode"
            className="py-2 px-5 w-full bg-white rounded-3xl"
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
            onChange={(e) => setForm({ ...form, postcode: e.target.value })}
          />
          {form.postcode.length > 0 && form.postcode.length < 6 && (
            <p className="text-red-600 font-semibold">Enter a valid postcode</p>
          )}
        </div>
      </div>

      {/* Radio buttons */}
      <div className="mt-6">
        <p className="font-bold text-white">Type of establishment</p>

        <label className="block mt-2 text-white">
          <input
            type="radio"
            name="establishment"
            value="Residential"
            checked={form.type === "Residential"}
            className="mr-2"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
          Residential
        </label>

        <label className="block mt-2 text-white">
          <input
            type="radio"
            name="establishment"
            value="Commercial"
            checked={form.type === "Commercial"}
            className="mr-2"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
          Commercial
        </label>
      </div>

      {/* Inquiry */}
      <p className="mt-6 text-white">Inquiry...</p>
      <textarea
        name="inquiry"
        className="bg-white w-full rounded-xl mt-3 min-h-[120px] p-3"
        style={{
          boxShadow:
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        }}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      ></textarea>
      <button
        className="bg-[#FEBA00] px-10 py-2 rounded-xl font-semibold max-w-44 w-52 self-center text-[17px]"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {success && (
        <p className="text-[#FEBA00]">{success ? "Form submitted!" : ""}</p>
      )}
    </form>
  );
}
