import Image from "next/image";
import Accordion from "./Accordion";

const Music = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 px-6 pt-10 pb-3">
      <div className="w-full flex flex-col justify-center items-center gap-3 px-3 lg:px-64 text-center">
        <h1 className="uppercase text-[40.184px] leading-[46.4576px] font-extralight mb-5 text-book_btn">
          Expérience Casa Lalla
        </h1>
        <Accordion />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/fz283m11oevyue91bn8h"
          alt={`Image casa lalla`}
          height={500}
          width={1000}
          className="object-cover rounded-lg w-full lg:w-[30%]"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/c4fnncbjzzxzamyriv79"
          alt={`Image casa lalla`}
          height={500}
          width={1000}
          className="object-cover rounded-lg w-full lg:w-[30%]"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/k530wqfiey0i2d9fhvow"
          alt={`Image casa lalla`}
          height={500}
          width={1000}
          className="object-cover rounded-lg w-full lg:w-[30%]"
        />
      </div>
    </div>
  );
};

export default Music;
