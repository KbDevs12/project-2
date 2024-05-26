export default function Page() {
  return (
    <>
      <div className="profile-fakultas mt-20 px-4">
        <h2 className="text-4xl font-bold mb-5" id="project">
          Profil Fakultas Sistem Informatika
        </h2>
        <h2 className="text-2xl font-bold mb-1">Visi Dan Misi</h2>
        <h2 className="text-2xl font-bold mb-1">Visi :</h2>
        <p className="text-lg mb-10">
          Menjadi fakultas terdepan dalam bidang sistem informatika yang mampu
          menghasilkan lulusan berkualitas, berintegritas, dan berdaya saing
          global, serta berkontribusi dalam pengembangan ilmu pengetahuan dan
          teknologi.
          <br />
        </p>

        <h2 className="text-2xl font-bold mb-1">Misi :</h2>
        <p className="mb-1 text-lg ">
          1. Menyelenggarakan pendidikan yang berkualitas tinggi di bidang
          sistem informatika untuk menghasilkan lulusan yang kompeten dan
          profesional.
        </p>
        <p className="mb-1 text-lg ">
          2. Mengembangkan penelitian yang inovatif dan aplikatif untuk kemajuan
          ilmu pengetahuan dan teknologi.
        </p>
        <p className="mb-1 text-lg ">
          3. Melakukan pengabdian kepada masyarakat dengan menerapkan ilmu dan
          teknologi untuk meningkatkan kesejahteraan masyarakat.
        </p>
        <p className="mb-1 text-lg ">
          4. Membangun kerjasama dengan industri, pemerintah, dan lembaga
          pendidikan lain baik di dalam maupun luar negeri untuk meningkatkan
          kualitas pendidikan, penelitian, dan pengabdian masyarakat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8">
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
