import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-casa_bg w-full h-screen p-4">
      <Image
        src="/images/casa_3.jpg"
        height={1000}
        width={600}
        className="object-cover h-full w-full rounded-lg block lg:hidden"
      />
      <Image
        src="/images/casa_7.jpg"
        height={500}
        width={1000}
        className="object-cover h-full w-full rounded-lg hidden lg:block"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 rounded-lg block lg:hidden m-4"></div>
      <Image
        src="/logo-2.png"
        height={200}
        width={200}
        className="absolute bottom-[38%] left-[25%] lg:left-[44%]  object-cover"
      />
    </div>
  );
};

export default Hero;
