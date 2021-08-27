import Image from "next/image";
import hero from "../public/hero.jpg";

function Banner() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] 
    xl:h-[600px] 2xl:h-[700px]"
    >
      <Image src={hero} alt="hero" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-xl font-semibold">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-14 py-6
        shadow-md rounded-full font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-150 font-lg"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
