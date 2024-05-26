export default function PrestasiPage() {
  return (
    <>
      <div className="prestasi-page">
        <div
          className="parallax"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/800x600?achievement')",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://source.unsplash.com/random/800x600?award"
                alt="Penghargaan 1"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Penghargaan Akademik</h3>
              <p className="text-md">
                Penghargaan atas kontribusi luar biasa dalam penelitian dan
                pengembangan.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://source.unsplash.com/random/800x601?award"
                alt="Penghargaan 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">
                Juara Kompetisi Nasional
              </h3>
              <p className="text-md">
                Tim mahasiswa kami berhasil meraih juara dalam kompetisi
                teknologi tingkat nasional.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://source.unsplash.com/random/800x602?award"
                alt="Penghargaan 3"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Inovasi Terbaik</h3>
              <p className="text-md">
                Penghargaan untuk inovasi terbaik dalam bidang teknologi
                informasi.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://source.unsplash.com/random/800x603?award"
                alt="Penghargaan 4"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Pengabdian Masyarakat</h3>
              <p className="text-md">
                Penghargaan atas kontribusi dalam program pengabdian masyarakat.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://source.unsplash.com/random/800x604?award"
                alt="Penghargaan 5"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Kerjasama Internasional</h3>
              <p className="text-md">
                Penghargaan atas kerjasama internasional dengan universitas
                terkemuka.
              </p>
            </div>
            <div className="prestasi-item p-4 bg-white rounded-lg shadow-lg">
              <img
                src="https://source.unsplash.com/random/800x605?award"
                alt="Penghargaan 6"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Penelitian Unggulan</h3>
              <p className="text-md">
                Penghargaan untuk penelitian unggulan dalam bidang sains dan
                teknologi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
