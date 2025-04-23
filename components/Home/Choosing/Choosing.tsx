import Image from "next/image";
import Star from "./Star";

const Choosing = () => {
  return (
    <section className="choosing-section relative z-10 container mx-auto pt-24 pb-14">
      <div className="flex w-full bg-white">
        <div className="relative flex justify-between py-12 pr-16 pl-24">
          <div className="absolute left-10 h-6 w-6">
            <Star />
          </div>
          <div className="flex w-1/2 flex-col justify-between">
            <h2 className="text-dark text-3xl">
              Choosing us — choosing
              <br /> the right body care.
            </h2>
            <div className="flex gap-4">
              {[...Array(3)].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border-dark/20 group h-[72px] w-[72px] overflow-hidden border"
                  >
                    <Image
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-200"
                      src={`/diamond.png`}
                      height={180}
                      width={180}
                      alt="demo-img"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <h3 className="text-dark text-2xl">Care crystal salt</h3>
            <p className="text-dark mt-4">
              Salt from the sea normalizes the activity of the sebaceous glands,
              which helps to get rid of the oily. Slow down, take a moment, and
              allow the restorative effects of Fensea help create a stronger
              you.
            </p>
            <button className="text-primary border-primary mt-14 w-fit cursor-pointer border-b text-lg">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choosing;
