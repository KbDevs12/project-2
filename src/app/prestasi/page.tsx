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
              <img
                src="https://media.istockphoto.com/id/1488521147/photo/global-network-usa-united-states-of-america-north-america-global-business-flight-routes.webp?b=1&s=170667a&w=0&k=20&c=RLF6E5QQzTwFnxTww_9CjkfL6vlLwKJbS-H4Olan9l0="
                alt="Penghargaan 1"
                className="w-full h-auto rounded-lg mb-4"
              />
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
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
                alt="Penghargaan 2"
                className="w-full h-auto rounded-lg mb-4"
              />
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
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Penghargaan 3"
                className="w-full h-auto rounded-lg mb-4"
              />
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
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHx8MHx8fDA%3D"
                alt="Penghargaan 4"
                className="w-full h-auto rounded-lg mb-4"
              />
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
