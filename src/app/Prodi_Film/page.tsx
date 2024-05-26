export default function Page() {
  return (
    <>
      <div
        className="parallax"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/800x600?film')",
        }}
      >
        <div className="overlay" data-aos="fade-in">
          <h1
            className="text-white text-5xl font-extrabold text-center py-20"
            id="project"
          >
            Program Studi Film, Television & Media
          </h1>
        </div>
      </div>
      <div className="profile-fakultas mt-20 px-4">
        <h2
          className="text-3xl font-extrabold mb-4 text-center"
          data-aos="fade-up"
        >
          Visi Dan Misi
        </h2>
        <div className="mb-10" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-2">Visi :</h3>
          <p className="text-lg leading-relaxed">
            Menjadi pusat unggulan dalam pendidikan, penelitian, dan pengabdian
            masyarakat di bidang film, televisi, dan media yang mampu
            menghasilkan lulusan kreatif, inovatif, dan berdaya saing global.
          </p>
        </div>
        <div className="mb-10" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-2">Misi :</h3>
          <ul className="list-decimal list-inside text-lg leading-relaxed">
            <li>
              Menyelenggarakan pendidikan yang berkualitas tinggi di bidang
              film, televisi, dan media untuk menghasilkan lulusan yang
              kompeten, profesional, dan kreatif.
            </li>
            <li>
              Melaksanakan penelitian yang inovatif dan aplikatif dalam bidang
              film, televisi, dan media untuk mendukung perkembangan ilmu
              pengetahuan dan industri kreatif.
            </li>
            <li>
              Melaksanakan pengabdian kepada masyarakat dengan mengaplikasikan
              ilmu dan keterampilan di bidang film, televisi, dan media untuk
              meningkatkan kualitas kehidupan masyarakat.
            </li>
            <li>
              Mengembangkan kerjasama dengan industri kreatif, pemerintah, dan
              institusi pendidikan lain baik di dalam maupun luar negeri untuk
              meningkatkan kualitas pendidikan, penelitian, dan pengabdian
              masyarakat.
            </li>
          </ul>
        </div>
        <div>
          <h3
            className="text-3xl font-extrabold my-4 text-center"
            data-aos="fade-up"
          >
            Pilihan Konsentrasi :
          </h3>
          <ol className="space-y-6">
            <li data-aos="fade-up">
              <h4 className="text-xl font-semibold py-2">
                Visual Media Communication (VMC):
              </h4>
              <p className="text-lg leading-relaxed">
                Konsentrasi Visual Media Communication (VMC) berfokus pada aspek
                visual dan estetika dalam film, televisi, dan media. Mahasiswa
                akan mempelajari berbagai teknik dan teori visual storytelling,
                desain grafis, animasi, dan multimedia. Lulusan VMC diharapkan
                memiliki kemampuan untuk membuat konten visual yang menarik dan
                informatif, memahami dan menggunakan berbagai software desain
                dan multimedia, bekerja secara kreatif dan kolaboratif dalam
                tim, memahami dan menganalisis budaya visual.
              </p>
            </li>
            <li data-aos="fade-up">
              <h4 className="text-xl font-semibold py-2">
                Public Relation & Digital Communication (PRDC) :
              </h4>
              <p className="text-lg leading-relaxed">
                Konsentrasi Public Relation & Digital Communication (PRDC)
                berfokus pada strategi komunikasi dan penggunaan media digital
                dalam membangun dan memelihara hubungan dengan publik. Mahasiswa
                akan mempelajari berbagai teori dan praktik public relations,
                media sosial, dan komunikasi digital. Lulusan PRDC diharapkan
                memiliki kemampuan untuk menyusun strategi komunikasi yang
                efektif, menggunakan media digital untuk membangun dan
                memelihara hubungan dengan publik, menganalisis dan mengukur
                efektivitas program komunikasi, memahami dan mengikuti
                perkembangan teknologi komunikasi digital.
              </p>
            </li>
          </ol>
          <h2
            className="text-3xl py-4 font-extrabold mb-4 text-center"
            data-aos="fade-up"
          >
            Potensi Karir
          </h2>
          <table
            className="min-w-full bg-white border border-gray-200"
            data-aos="fade-up"
          >
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100">Konsentrasi</th>
                <th className="py-2 px-4 border-b bg-gray-100">
                  Potensi Karir
                </th>
              </tr>
            </thead>
            <tbody>
              <tr data-aos="fade-up">
                <td className="py-2 px-4 border-b">VMC</td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc list-inside">
                    <li>Desainer grafis</li>
                    <li>Animator</li>
                    <li>Video editor</li>
                    <li>Content creator</li>
                    <li>Motion graphic artist</li>
                    <li>Visual effects artist</li>
                  </ul>
                </td>
              </tr>
              <tr data-aos="fade-up">
                <td className="py-2 px-4 border-b">PRDC</td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc list-inside">
                    <li>Public relations officer</li>
                    <li>Social media specialist</li>
                    <li>Digital marketing specialist</li>
                    <li>Content strategist</li>
                    <li>Communication consultant</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
          <img
            src="https://source.unsplash.com/random/800x600?film"
            alt="Gambar FTI 1"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up-right"
          />
          <img
            src="https://source.unsplash.com/random/800x601?film"
            alt="Gambar FTI 2"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
          />
          <img
            src="https://source.unsplash.com/random/800x602?film"
            alt="Gambar FTI 3"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up-left"
          />
          <img
            src="https://source.unsplash.com/random/800x603?film"
            alt="Gambar FTI 4"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up-right"
          />
          <img
            src="https://source.unsplash.com/random/800x604?film"
            alt="Gambar FTI 5"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
          />
          <img
            src="https://source.unsplash.com/random/800x605?film"
            alt="Gambar FTI 6"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up-left"
          />
        </div>
      </div>
    </>
  );
}
