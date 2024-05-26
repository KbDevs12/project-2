export default function Page() {
  return (
    <>
      <div className="gallery-page">
        <div
          className="parallax"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/800x600?campus')",
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
              src="https://source.unsplash.com/random/800x600?campus"
              alt="Gambar Kampus 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x601?campus"
              alt="Gambar Kampus 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x602?campus"
              alt="Gambar Kampus 3"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x603?campus"
              alt="Gambar Kampus 4"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x604?campus"
              alt="Gambar Kampus 5"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x605?campus"
              alt="Gambar Kampus 6"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
