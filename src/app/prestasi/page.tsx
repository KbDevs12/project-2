import {
  Globe,
  Trophy,
  Camera,
  Basketball,
} from "@phosphor-icons/react/dist/ssr";

export default function PrestasiPage() {
  return (
    <>
      <div className="prestasi-page">
        <div
          className="parallax"
          style={{
            backgroundImage:
              "url('https://i0.wp.com/global.ac.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-03-at-14.59.03.jpeg?fit=1600%2C800&ssl=1')",
          }}
        >
          <div className="overlay">
            <h1 className="text-white text-4xl font-bold" id="project">
              Prestasi Kampus
            </h1>
          </div>
        </div>
        <div className="prestasi-content mt-8 px-4">
          <h2 className="text-2xl font-bold mb-4">
            Penghargaan dan Pencapaian
          </h2>
          <p className="text-lg py-4">
            Kampus kami telah meraih berbagai penghargaan dan pencapaian di
            tingkat nasional dan internasional. Berikut adalah beberapa prestasi
            yang telah kami capai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 my-8">
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center">
                <Trophy size={150} color="#030303" weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold">
                Diploma, World Orienteering Day
              </h3>
              <p className="text-md">
                Penghargaan atas kontribusi luar biasa dalam penelitian dan
                pengembangan di bidang orienteering. Prestasi ini menyoroti
                dedikasi kami dalam memajukan ilmu pengetahuan dan keterampilan
                praktis.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center">
                <Camera size={150} color="#030303" weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold">
                Juara 1 Lomba Fotografi, Tingkat Provinsi Banten
              </h3>
              <p className="text-md">
                Tim mahasiswa kami meraih juara pertama dalam kompetisi
                fotografi tingkat provinsi. Karya mereka menggabungkan teknik
                fotografi yang canggih dengan tema-tema budaya lokal.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center">
                <Globe size={150} color="#030303" weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold">
                Juara 2 Web Design Tingkat Kota Tangerang
              </h3>
              <p className="text-md">
                Penghargaan ini diberikan untuk inovasi luar biasa dalam desain
                web yang menunjukkan keahlian dalam estetika dan fungsi. Proyek
                ini menampilkan desain modern yang responsif.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center">
                <Basketball size={150} color="#030303" weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold">
                Juara 2 PORDA (Pekan Olahraga Mahasiswa)
              </h3>
              <p className="text-md">
                Tim olahraga kami meraih juara kedua dalam Pekan Olahraga
                Mahasiswa. Prestasi ini menunjukkan kemampuan atletik dan
                semangat kompetitif para mahasiswa kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
