import Image from "next/image";

export default function Page() {
  return (
    <>
      <div
        className="parallax"
        style={{
          backgroundImage:
            "url('https://i0.wp.com/global.ac.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-03-at-14.59.03.jpeg?fit=1600%2C800&ssl=1)",
        }}
      >
        <div className="overlay" data-aos="fade-in">
          <h1
            className="text-white text-5xl font-extrabold text-center py-20"
            id="project"
          >
            Struktur Organisasi
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 items-center justify-center pt-10 pb-4">
        <Image src={"/struktur.svg"} height={500} width={500} alt="" />
        <p className="text-2xl font-semibold">Struktur Organisasi FTIK</p>
        <div className="bg-gray-400 flex flex-col w-1/2 gap-2 px-2">
          <p className="font-semibold text-lg pt-5">Dekan FTIK :</p>
          <p>Rahmat Tullah, M.Kom</p>
          <p className="font-semibold text-lg pt-5">Sekretaris Fakultas :</p>
          <p>Nunung Nurmaesah, M.Kom</p>
          <p className="font-semibold text-lg pt-5">Ka. Prodi TI :</p>
          <p>Dr (Cand) Fredy Susanto, M.Kom</p>
          <p className="font-semibold text-lg pt-5">Ka. Prodi SI :</p>
          <p>Ahmad Sidik, M.Kom</p>
          <p className="font-semibold text-lg pt-5">Ka. Prodi KFTM :</p>
          <p className="pb-5">M. Lutfi Prabowo, M.Kom</p>
        </div>
      </div>
    </>
  );
}
