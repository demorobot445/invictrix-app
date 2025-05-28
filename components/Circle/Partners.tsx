import { PartnerContents, Partners as PartnersType } from "@/types/invictrix";
import Image from "next/image";

type Props = PartnerContents & { partners: PartnersType[] };

// Increased offset range for noticeable effect
const getRandomOffset = () => {
  const offsetX = Math.floor(Math.random() * 101) - 50; // -10 to +10
  const offsetY = Math.floor(Math.random() * 101) - 50; // -10 to +10
  return `lg:translate(${offsetX}px, ${offsetY}px)`;
};

const Partners: React.FC<Props> = ({ heading, description, partners }) => {
  return (
    <section className="partners absolute top-full left-0 z-30 flex h-full w-full flex-col items-center justify-center gap-4 bg-white px-3 pt-[70px] lg:px-0 lg:pt-[114px]">
      <h1 className="font-display text-dark-primary text-center text-4xl lg:text-6xl">
        {heading}
      </h1>
      <p className="text-center text-xl text-black lg:text-2xl">
        {description}
      </p>
      <div className="container grid grid-cols-4 items-center justify-center justify-items-center gap-4 lg:grid-cols-5 lg:gap-0 2xl:mt-16 2xl:gap-8">
        {partners.map(({ companyLogo }) => {
          const randomTransform = getRandomOffset();
          return (
            <Image
              key={companyLogo.id}
              src={companyLogo.url}
              alt="company-logo"
              height={400}
              width={400}
              style={{ transform: randomTransform }}
              className="cursor-pointer object-contain grayscale-100 transition duration-700 hover:grayscale-0 lg:w-[150px] 2xl:w-[200px]"
            />
          );
        })}
      </div>
      <div className="h-12"></div>
    </section>
  );
};

export default Partners;
