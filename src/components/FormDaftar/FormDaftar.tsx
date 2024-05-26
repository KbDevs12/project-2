"use client";

import { useState } from "react";

export default function FormDaftar() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  return (
    <>
      <form className="relative max-w-64 md:max-w-md mx-auto bg-white shadow-2xl -translate-y-1 shadow-gray-500 rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 text-left">
          <label
            className="block text-gray-700 text-sm font-bold px-2 mb-2"
            htmlFor="name"
          >
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={nama}
            placeholder="Nama"
            onChange={(ev) => setNama(ev.target.value)}
          />
        </div>
        <div className="mb-4 text-left">
          <label
            className="block text-gray-700 text-sm font-bold px-2 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className="mb-6 text-left">
          <label
            className="block text-gray-700 text-sm font-bold px-2 mb-2"
            htmlFor="message"
          >
            Pesan
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Pesan"
            value={pesan}
            onChange={(ev) => setPesan(ev.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Kirim
          </button>
        </div>
      </form>
    </>
  );
}
