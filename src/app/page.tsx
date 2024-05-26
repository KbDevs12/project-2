import FormDaftar from "@/components/FormDaftar/FormDaftar";
import Waves from "@/components/Waves/Waves";
import {
  Bookmarks,
  Globe,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-6 mt-14 px-4">
          <div
            data-aos="fade-down-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            className="card bg-blue-400 shadow-2xl shadow-black rounded-lg overflow-hidden transform cursor-pointer transition-transform hover:scale-105 hover:shadow-3xl"
          >
            <div className="flex items-center justify-center py-4">
              <GraduationCap size={150} color="#030303" weight="duotone" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Lulusan Berprestasi</h3>
              <p className="text-white">
                Lulusan kami diakui sebagai yang terbaik, dengan banyak yang
                berhasil dalam karir mereka dan memberikan kontribusi signifikan
                di berbagai bidang.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            className="card bg-blue-400 shadow-2xl shadow-black cursor-pointer rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl"
          >
            <div className="flex justify-center items-center py-4">
              <Bookmarks size={150} weight="duotone" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Prodi Favorit</h3>
              <p className="text-white">
                Program studi favorit kami menawarkan kurikulum yang inovatif
                dan relevan dengan kebutuhan industri, didukung oleh fasilitas
                modern dan dosen berpengalaman. Bergabunglah dengan kami untuk
                meraih masa depan yang gemilang.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            className="card bg-blue-400 shadow-2xl shadow-black cursor-pointer rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl"
          >
            <div className="flex justify-center items-center py-4">
              <Globe size={150} color="#0f0f0f" weight="duotone" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Jaringan Global</h3>
              <p className="text-white">
                Kami memiliki jaringan luas dengan berbagai industri dan
                institusi akademik di seluruh dunia, memungkinkan kolaborasi
                dalam penelitian dan pertukaran pelajar.
              </p>
            </div>
          </div>
        </div>
        <div className="profile-kampus mt-8 px-4 overflow-y-hidden">
          <h2 className="text-2xl font-bold my-4 text-center">PROGRAM STUDI</h2>
          <div className="flex flex-col gap-4 my-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start overflow-y-hidden">
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
                  Mahasiswa akan mempelajari berbagai bahasa pemrograman,
                  algoritma, struktur data, serta teknik pengembangan perangkat
                  lunak modern. Selain itu, mereka juga akan dibekali dengan
                  pengetahuan tentang keamanan siber, kecerdasan buatan, dan
                  komputasi awan, yang semuanya sangat relevan dengan kebutuhan
                  industri saat ini.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start overflow-y-hidden">
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
                  dengan bisnis untuk mengelola dan menganalisis data. Mahasiswa
                  akan mempelajari bagaimana merancang, mengimplementasikan, dan
                  mengelola sistem informasi yang mendukung operasi bisnis.
                  Kurikulum mencakup topik-topik seperti analisis sistem,
                  manajemen basis data, e-commerce, dan analitik bisnis, yang
                  semuanya dirancang untuk mempersiapkan lulusan yang mampu
                  mengintegrasikan teknologi informasi dengan strategi bisnis.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start overflow-y-hidden">
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
                  manajemen media. Mahasiswa akan mempelajari teknik produksi
                  film dan televisi, termasuk penulisan naskah, penyutradaraan,
                  sinematografi, dan editing. Selain itu, mereka juga akan
                  mempelajari aspek-aspek manajemen media, seperti distribusi
                  konten, pemasaran, dan manajemen proyek, yang semuanya penting
                  untuk sukses di industri yang dinamis ini.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative -bottom-1">
          <Waves />
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
