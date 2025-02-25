"use client";
import Image from "next/image";

const Events = () => {
  return (
    <div className="w-full h-full bg-[url('/images/casa-texture.png')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row justify-start lg:justify-between items-center p-4 lg:p-10">
      <div className="w-full flex flex-col justify-center items-start text-text_color gap-4 px-3 lg:px-20">
        <h1 className="text-[33.184px] leading-[46.4576px] font-galdeano mb-5">
          ÉVÉNEMENTS
        </h1>
        <p className="text-[16px] leading-[22.4px]">{`Depuis son ouverture, Casa Lalla est devenue une destination prisée pour des moments inoubliables. Pour cette saison, nous sommes ravis d'annoncer une série d'événements exclusifs, allant de dîners thématiques à des soirées musicales en plein air. Rejoignez-nous pour célébrer la culture marocaine dans une ambiance chaleureuse et festive, tout en profitant des vues spectaculaires sur le lac Takerkoust.
`}</p>
      </div>
      <div className="w-full h-full mt-4">
        <Image
          src="/images/casa_7.jpg"
          alt={`Image casa lalla`}
          height={500}
          width={1000}
          className="object-cover rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Events;
