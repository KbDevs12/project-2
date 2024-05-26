export default function Page() {
  return (
    <>
      <div
        className="parallax"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/800x600?tecnology')",
        }}
      >
        <div className="overlay">
          <h1 className="text-white text-4xl font-bold" id="project">
            Program Studi Teknik Informatika
          </h1>
        </div>
      </div>
      <div className="profile-fakultas mt-20 px-4">
        <h2 className="text-2xl font-bold mb-2">Visi Dan Misi</h2>
        <h2 className="text-2xl font-bold mb-2">Visi :</h2>
        <p className="text-lg mb-10">
          Menjadi fakultas unggul dalam pendidikan, penelitian, dan pengabdian
          masyarakat di bidang Teknik Informatika, yang mampu menghasilkan
          lulusan berdaya saing global dan inovatif dalam pengembangan teknologi
          informasi.
          <br />
        </p>

        <h2 className="text-2xl font-bold mb-1">Misi :</h2>
        <p className="mb-1 text-lg ">
          1. Menyelenggarakan pendidikan Teknik Informatika yang berkualitas
          tinggi untuk menghasilkan lulusan yang kompeten, profesional, dan
          beretika.
        </p>
        <p className="mb-1 text-lg ">
          2. Melaksanakan penelitian yang inovatif dan aplikatif di bidang
          Teknik Informatika untuk mendukung perkembangan ilmu pengetahuan dan
          teknologi.
        </p>
        <p className="mb-1 text-lg ">
          3. Melaksanakan pengabdian kepada masyarakat dengan mengaplikasikan
          ilmu Teknik Informatika untuk meningkatkan kesejahteraan masyarakat.
        </p>
        <p className="mb-1 text-lg ">
          4. Mengembangkan kerjasama dengan industri, pemerintah, dan institusi
          pendidikan lain baik di dalam maupun luar negeri untuk meningkatkan
          kualitas pendidikan, penelitian, dan pengabdian masyarakat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-4 gap-4 pb-8">
          <img
            src="https://source.unsplash.com/random/800x600?technology"
            alt="Gambar FTI 1"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x601?technology"
            alt="Gambar FTI 2"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x602?technology"
            alt="Gambar FTI 3"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x603?technology"
            alt="Gambar FTI 4"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x604?technology"
            alt="Gambar FTI 5"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x605?technology"
            alt="Gambar FTI 6"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
