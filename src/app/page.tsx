import FormDaftar from "@/components/FormDaftar/FormDaftar";

export default function Home() {
  return (
    <>
      <div>
        <div className="">
          <div
            className="parallax"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/random/800x600?campus')",
            }}
          >
            <div className="overlay">
              <h1 className="text-white text-4xl font-bold" id="project">
                Fakultas Teknik Informatika
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14 px-4">
          <div
            data-aos="fade-down-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            className="card bg-gray-200 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl"
          >
            <img
              src="https://source.unsplash.com/random/800x600?campus"
              alt="Keunggulan 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Keunggulan 1</h3>
              <p className="text-gray-700">
                Kampus kami memiliki fasilitas modern yang mendukung kegiatan
                belajar mengajar.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            className="card bg-gray-200 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl"
          >
            <img
              src="https://source.unsplash.com/random/800x601?campus"
              alt="Keunggulan 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Keunggulan 2</h3>
              <p className="text-gray-700">
                Kami menawarkan berbagai program studi yang dirancang untuk
                mempersiapkan mahasiswa menghadapi tantangan global.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            className="card bg-gray-200 shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl"
          >
            <img
              src="https://source.unsplash.com/random/800x602?campus"
              alt="Keunggulan 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Keunggulan 3</h3>
              <p className="text-gray-700">
                Jaringan luas dengan industri dan institusi akademik di seluruh
                dunia.
              </p>
            </div>
          </div>
        </div>
        <div className="profile-kampus mt-8 px-4 overflow-y-hidden">
          <h2 className="text-2xl font-bold mb-4 text-center">PROGRAM STUDI</h2>
          <div className="flex flex-col gap-4 my-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div
                className="sm:order-2 sm:ml-4"
                data-aos="zoom-in-right"
                data-aos-easing="ease-in-out"
                data-aos-delay="50"
              >
                <img
                  src="https://source.unsplash.com/random/800x600?campus"
                  alt="Teknik Informatika"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div
                className="sm:order-1"
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-delay="50"
              >
                <h3 className="text-xl font-bold mb-2">Teknik Informatika</h3>
                <p className="text-lg">
                  Program studi Teknik Informatika berfokus pada pengembangan
                  perangkat lunak, sistem komputer, dan teknologi informasi.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div
                className="sm:order-1 sm:mr-4"
                data-aos="zoom-in-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="50"
              >
                <img
                  src="https://source.unsplash.com/random/800x601?campus"
                  alt="Sistem Informasi"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div
                className="sm:order-2"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="50"
              >
                <h3 className="text-xl font-bold mb-2">Sistem Informasi</h3>
                <p className="text-lg">
                  Program studi Sistem Informasi menggabungkan ilmu komputer
                  dengan bisnis untuk mengelola dan menganalisis data.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div
                className="sm:order-2 sm:ml-4"
                data-aos="zoom-in-right"
                data-aos-easing="ease-in-out"
                data-aos-delay="50"
              >
                <img
                  src="https://source.unsplash.com/random/800x602?campus"
                  alt="Film, TV & Media"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div
                className="sm:order-1"
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-delay="50"
              >
                <h3 className="text-xl font-bold mb-2">Film, TV & Media</h3>
                <p className="text-lg">
                  Program studi Film, TV & Media mempersiapkan mahasiswa untuk
                  berkarir di industri kreatif dengan fokus pada produksi dan
                  manajemen media.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative -bottom-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1e3a8a"
              fillOpacity="1"
              d="M0,32L30,32C60,32,120,32,180,48C240,64,300,96,360,117.3C420,139,480,149,540,170.7C600,192,660,224,720,218.7C780,213,840,171,900,170.7C960,171,1020,213,1080,202.7C1140,192,1200,128,1260,101.3C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="text-center bg-blue-900 pt-0 pb-8 px-0">
          <h3 className="text-xl text-white font-bold mb-4">
            Ingin daftar? Kirim email kesini ya!
          </h3>
          <FormDaftar />
        </div>
      </div>
    </>
  );
}
