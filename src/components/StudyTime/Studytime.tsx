"use client";

import { useState } from "react";

type ClassType =
  | "kelas-reguler"
  | "kelas-non-reguler"
  | "kelas-shift"
  | "kelas-blended-learning";

export default function StudyTime() {
  const [selectedClass, setSelectedClass] =
    useState<ClassType>("kelas-reguler");

  const classes: Record<ClassType, string> = {
    "kelas-reguler":
      "Kelas reguler diperuntukkan bagi mahasiswa yang ingin mengikuti program standar kampus Global Institute. Pada kelas reguler pelaksanaan kuliah setiap hari pada pukul 08.00 s/d selesai. Perkuliahan diberikan lebih intensif, dan diberikan pengayaan mata kuliah lebih besar, plus bimbingan karir.",
    "kelas-non-reguler":
      "Pada kelas non reguler / kelas malam, perkuliahan dilaksanakan setiap hari Senin hingga Jum'at. Waktu perkuliahan pada pukul 18.00 – 21.30 WIB.",
    "kelas-shift":
      "Kelas Shift memiliki waktu perkuliahan lebih fleksibel karena mahasiswa bisa berkuliah pada pagi atau malam hari. Perkuliahan dilaksanakan setiap hari Senin hingga Jum'at, untuk kelas pagi dilaksanakan pada pukul 08.00 - 13.00 WIB, sedangkan untuk kelas malam dilaksanakan pada pukul 18.00 - 21.30 WIB.",
    "kelas-blended-learning":
      "Kelas Blended Learning merupakan kombinasi antara perkuliahan online dan offline. Mahasiswa berkesempatan untuk berdiskusi dengan rekan mahasiswa dan dosen saat perkuliahan tatap muka, tetapi pada waktu tertentu terdapat mata kuliah yang dilakukan secara online. Kombinasi ini tidak hanya memberikan fleksibilitas lebih, melainkan juga kemudahan dalam belajar.",
  };

  return (
    <>
      <h2 className="text-3xl text-blue-900 font-semibold">
        Study Time / Waktu Kuliah
      </h2>
      <button className="mt-4 mb-8 text-white py-2 px-4 rounded font-semibold text-2xl text-left">
        Kalender Akademik
      </button>
      <div className="flex gap-4 px-4">
        <div className="flex flex-col w-1/2 space-y-4">
          <button
            onClick={() => setSelectedClass("kelas-reguler")}
            className={`w-full text-left py-2 px-4 rounded border ${
              selectedClass === "kelas-reguler"
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            } hover:bg-blue-600 hover:text-white`}
          >
            Kelas Reguler
          </button>
          <button
            onClick={() => setSelectedClass("kelas-non-reguler")}
            className={`w-full text-left py-2 px-4 rounded border ${
              selectedClass === "kelas-non-reguler"
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            } hover:bg-blue-600 hover:text-white`}
          >
            Kelas Non Reguler / Malam
          </button>
          <button
            onClick={() => setSelectedClass("kelas-shift")}
            className={`w-full text-left py-2 px-4 rounded border ${
              selectedClass === "kelas-shift"
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            } hover:bg-blue-600 hover:text-white`}
          >
            Kelas Shift
          </button>
          <button
            onClick={() => setSelectedClass("kelas-blended-learning")}
            className={`w-full text-left py-2 px-4 rounded border ${
              selectedClass === "kelas-blended-learning"
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border-blue-700"
            } hover:bg-blue-600 hover:text-white`}
          >
            Kelas Blended Learning
          </button>
        </div>
        <div className="mt-0 p-4 border border-blue-700 rounded bg-white w-1/2 h-54 overflow-y-auto">
          <p>{classes[selectedClass]}</p>
        </div>
      </div>
    </>
  );
}
