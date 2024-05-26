export default function Page() {
  return (
    <>
      <div className="profile-fakultas mt-20 px-4">
        <h2 className="text-4xl font-bold mb-5" id="project">
          Profil Fakultas Film, TV dan Media
        </h2>
        <h2 className="text-2xl font-bold mb-1">Visi Dan Misi</h2>
        <h2 className="text-2xl font-bold mb-1">Visi :</h2>
        <p className="text-lg mb-10">
          Menjadi pusat unggulan dalam pendidikan, penelitian, dan pengabdian
          masyarakat di bidang film, televisi, dan media yang mampu menghasilkan
          lulusan kreatif, inovatif, dan berdaya saing global.
          <br />
        </p>

        <h2 className="text-2xl font-bold mb-1">Misi :</h2>
        <p className="mb-1 text-lg ">
          1. Menyelenggarakan pendidikan yang berkualitas tinggi di bidang film,
          televisi, dan media untuk menghasilkan lulusan yang kompeten,
          profesional, dan kreatif.
        </p>
        <p className="mb-1 text-lg ">
          2. Melaksanakan penelitian yang inovatif dan aplikatif dalam bidang
          film, televisi, dan media untuk mendukung perkembangan ilmu
          pengetahuan dan industri kreatif.
        </p>
        <p className="mb-1 text-lg ">
          3. Melaksanakan pengabdian kepada masyarakat dengan mengaplikasikan
          ilmu dan keterampilan di bidang film, televisi, dan media untuk
          meningkatkan kualitas kehidupan masyarakat.
        </p>
        <p className="mb-1 text-lg ">
          4. Mengembangkan kerjasama dengan industri kreatif, pemerintah, dan
          institusi pendidikan lain baik di dalam maupun luar negeri untuk
          meningkatkan kualitas pendidikan, penelitian, dan pengabdian
          masyarakat.
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
