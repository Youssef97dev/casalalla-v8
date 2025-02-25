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
        <p className="text-[16px] leading-[22.4px]">{`Le restaurant Casa Lalla Takerkoust est une véritable invitation au voyage, où l’esprit envoûtant de Mykonos, Ibiza et des îles Baléares rencontre la sérénité des eaux cristallines de Lalla Takerkoust et le décor majestueux des montagnes du Haut Atlas.`}</p>
        <p className="text-[16px] leading-[22.4px]">{`À seulement 30 minutes de Marrakech, laissez-vous porter par des rythmes enivrants venus des quatre coins du monde et savourez une cuisine méditerranéenne raffinée, pensée pour être partagée entre amis, anciens et nouveaux.`}</p>
        <p className="text-[16px] leading-[22.4px]">{`Plus qu’un simple restaurant, Casa Lalla Takerkoust est une parenthèse enchantée, où le luxe authentique se mêle à la beauté naturelle du paysage, à la chaleur des rencontres et à une énergie vibrante. Ici, chaque instant est une célébration de la vie.`}</p>
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
