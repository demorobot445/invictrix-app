import { HomeSectionThree } from "@/types/invictrix";

type Props = HomeSectionThree & {};

const About: React.FC<Props> = ({ video }) => {
  return (
    <section className="about-section relative z-10 container mx-auto flex flex-col px-3 py-24 lg:px-0">
      <div className="relative mb-12">
        <video
          className="h-[580px] w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={video.url} />
        </video>
        <p className="text-darkl absolute top-1/2 left-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[url('/about/valvet.jpg')] bg-cover bg-center bg-no-repeat text-sm uppercase">
          watch !
        </p>
      </div>
      <div className="flex w-full"></div>
    </section>
  );
};

export default About;
