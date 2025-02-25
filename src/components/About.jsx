"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/casa_9.jpg",
  "/images/casa_8.jpg",
  "/images/casa_5.jpg",
  "/images/casa_6.jpg",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-screen bg-[url('/images/casa-texture.png')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row justify-start lg:justify-between items-center p-4 lg:p-10">
      <div className="w-full flex flex-col justify-center items-start text-text_color gap-4 px-3 lg:px-20">
        <h1 className="text-[33.184px] leading-[46.4576px] font-galdeano mb-5">
          Casa Lalla Takerkoust
        </h1>
        <p className="text-[16px] leading-[22.4px]">{`Le lien profond avec la nature, présent dans tous les aspects de l'expérience, fait du séjour dans ce restaurant de luxe un véritable paradis.
`}</p>
        <p className="text-[16px] leading-[22.4px]">{`Les espaces de restauration sont dotés de superbes terrasses et de pergolas élégantes. Les espaces intérieurs, au décor rustique somptueux et authentique, constituent également le moyen idéal de goûter aux saveurs du domaine. Les plats d'inspiration méditerranéenne sont préparés à partir d'ingrédients d'origine presque locale.`}</p>
        <p className="text-[16px] leading-[22.4px]">{`Avec une vue sensationnelle sur le domaine et le lac, le romantisme de la nature est votre toile de fond.

`}</p>
      </div>
      <div className="relative w-full h-full mt-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-lg  h-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
