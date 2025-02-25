import Image from "next/image";

const Music = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 px-6 pt-10 pb-3">
      <div className="w-full flex flex-col justify-center items-center gap-3 px-3 lg:px-64 text-center">
        <h1 className="uppercase text-[33.184px] leading-[46.4576px] font-galdeano text-book_btn">
          La Musique au coeur de la maison
        </h1>
        <p className="text-[16px] leading-[22.4px] text-text_color">{`Un décor bohème chic les pieds dans le sable et la programmation musicale la plus pointue et envoûtante de St Tropez sera orchestrée par notre équipe de directeurs artistiques qu’on ne présente plus.
`}</p>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3">
        <Image
          src="/images/casa_10.jpg"
          alt={`Image casa lalla`}
          height={500}
          width={1000}
          className="object-cover rounded-lg w-full lg:w-[30%]"
        />
        <Image
          src="/images/casa_11.jpg"
          alt={`Image casa lalla`}
          height={500}
          width={1000}
          className="object-cover rounded-lg w-full lg:w-[30%]"
        />
        <Image
          src="/images/casa_12.jpg"
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
