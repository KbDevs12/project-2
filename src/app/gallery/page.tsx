export default function Page() {
  return (
    <>
      <div className="gallery-page">
        <div
          className="parallax"
          style={{
            backgroundImage:
              "url('https://i0.wp.com/global.ac.id/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-03-at-14.59.03.jpeg?fit=1600%2C800&ssl=1')",
          }}
        >
          <div className="overlay">
            <h1 className="text-white text-4xl font-bold" id="project">
              Gallery Kampus
            </h1>
          </div>
        </div>
        <div className="gallery-content mt-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2024/02/IMG_6266-scaled.jpg?resize=1024%2C683&ssl=1"
              alt="Gambar Kampus 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2024/04/IMG_1109-scaled.jpg?resize=1024%2C683&ssl=1"
              alt="Gambar Kampus 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2023/11/IMG_1775-scaled.jpg?resize=1024%2C683&ssl=1"
              alt="Gambar Kampus 3"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2023/11/IMG_8318-scaled.jpg?resize=1024%2C683&ssl=1"
              alt="Gambar Kampus 4"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2023/11/IMG_5963-scaled.jpg?resize=1024%2C683&ssl=1"
              alt="Gambar Kampus 5"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2022/11/Petanque-Global-Institute-2022.jpg?resize=1024%2C576&ssl=1"
              alt="Gambar Kampus 6"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
