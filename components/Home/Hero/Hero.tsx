import Image from "next/image";
import Star from "./Star";

const Hero = () => {
  return (
    <section className="relative z-10 container mx-auto flex w-full items-center py-24">
      <div className="relative z-20 flex w-1/2 flex-col px-9">
        <h1 className="text-dark font-display mb-16 text-8xl uppercase">
          salt
          <br />
          level
          <br />
          activated
        </h1>
        <p className="mb-6 text-sm uppercase">get the catalogue</p>
        <div className="flex gap-7">
          <input
            className="w-2/3 bg-white px-4 placeholder:text-[#d1d1d1] focus:outline-none"
            placeholder="Enter Your Email"
            type="text"
          />
          <button className="bg-primary h-16 w-1/3 cursor-pointer px-4 py-2 text-xl text-white">
            Sign Up
          </button>
        </div>
      </div>
      <div className="relative flex w-1/2 items-center justify-center">
        <div className="relative h-[590px] w-[450px]">
          <div
            style={{ animationDuration: "25s" }}
            className="star absolute top-1/2 -left-[275px] h-[550px] w-[550px] -translate-y-1/2 animate-spin"
          >
            <Star />
          </div>
          <Image
            className="relative z-10 h-full w-full object-cover"
            src="/home/hero.jpg"
            alt="hero-img"
            height={590}
            width={450}
          />
          <p className="absolute top-4 -right-10 z-20 flex h-28 w-28 rotate-45 items-center justify-center rounded-full bg-[url('/home/valvet.jpg')] bg-cover bg-center bg-no-repeat text-sm text-white uppercase">
            new !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
