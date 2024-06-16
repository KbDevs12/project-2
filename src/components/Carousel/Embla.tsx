"use client";
import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Pengalaman saya di Fakultas Teknik Informatika sangat berharga. Saya belajar banyak dari dosen dan teman-teman, dan sekarang saya bekerja di perusahaan teknologi besar.",
    name: "Diki Niki Sulistiyo, S.Kom",
    role: "Alumni 2020",
    image:
      "https://i0.wp.com/global.ac.id/wp-content/uploads/2021/02/testimoni-global-institute-up-3.jpg?fit=445%2C569&ssl=1",
  },
  {
    quote:
      "Program studi ini benar-benar menyiapkan saya untuk karir di industri kreatif. Teknik yang saya pelajari sangat relevan dan bermanfaat.",
    name: "Sari",
    role: "Mahasiswa",
  },
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2500 }),
  ]);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    if (typeof autoplay.play === "function") {
      autoplay.play();
    }
  }, [emblaApi]);

  return (
    <>
      <div className="mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Testimonial</h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((testimonial, index) => (
              <div className="embla__slide" key={index}>
                <div className="flex bg-blue-400 shadow-2xl shadow-black rounded-lg p-6">
                  <div>
                    <p className="text-white">"{testimonial.quote}"</p>
                    <p className="text-white mt-2 font-bold">
                      - {testimonial.name}, {testimonial.role}
                    </p>
                  </div>
                  <div className="flex hexagonWrapper">
                    <div className="hexagon">
                      <div className="hexagonInner">
                        <Image
                          src={
                            "https://i0.wp.com/global.ac.id/wp-content/uploads/2021/02/testimoni-global-institute-up-3.jpg?fit=445%2C569&ssl=1"
                          }
                          alt="testimonial"
                          height={300}
                          width={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
