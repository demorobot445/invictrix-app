const Hero = () => {
  return (
    <section className="relative z-10 container mx-auto flex w-full flex-col items-center">
      <div className="mt-[114px] flex h-full min-h-[calc(100vh-114px)] w-full flex-col px-3 lg:flex-row lg:px-0">
        <div className="min-h-[50vh] lg:w-1/2"></div>
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <h1 className="text-dark-primary font-display text-4xl lg:text-6xl">
            Private by Design.
            <br />
            Personal by Legacy.
          </h1>
          <p className="hero-text text-2xl text-white lg:text-4xl">
            Invictrix Ventures is a private client firm for the elite— those who
            shape culture, command influence, and build enduring legacies.
          </p>
          <p className="hero-text text-2xl text-white lg:text-4xl">
            You&apos;ve arrived at the threshold of intentional luxury.
          </p>
        </div>
      </div>
      <div className="flex h-full min-h-screen w-full flex-col-reverse px-3 lg:flex-row lg:px-0">
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <p className="hero-text text-2xl text-black lg:text-3xl">
            Through invitation-only experiences and prestige-level discretion,
            we elevate life&apos;s moments into timeless milestones.
          </p>
          <p className="hero-text text-2xl text-black lg:text-3xl">
            Invictrix curates identity through intention, excellence, and
            profound care for emerging icons, architects of generational wealth,
            and stewards of cultural relevance.
          </p>
          <h1 className="text-dark-primary font-display text-4xl lg:text-5xl">
            More than Service.
            <br />
            More than Access.
          </h1>
        </div>
        <div className="min-h-[50vh] w-full lg:w-1/2"></div>
      </div>
      <div className="flex h-full min-h-screen w-full flex-col justify-end px-3 lg:px-0">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="hero-text max-w-[1100px] text-center text-2xl text-black lg:text-4xl">
            We are your architects of identity— your private bridge between
            ambition, emotion, and the extraordinary.
          </p>
          <h1 className="text-dark-primary font-display text-center text-2xl lg:text-6xl">
            It begins with you — and becomes everything.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
