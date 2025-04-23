const About = () => {
  return (
    <section className="about-section relative z-10 container mx-auto flex flex-col px-5 py-24">
      <div className="relative mb-12">
        <video
          className="h-[580px] w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        >
          <source src="/about/video.mp4" />
          <source src="/about/video.webm" />
        </video>
        <p className="text-darkl absolute top-1/2 left-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[url('/about/valvet.jpg')] bg-cover bg-center bg-no-repeat text-sm uppercase">
          watch !
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-1/3">
          <div className="flex w-fit items-center justify-center bg-white">
            <h2 className="bg-dark flex h-16 w-16 items-center justify-center text-4xl text-white">
              80
            </h2>
            <p className="px-12 text-xl">kg salt per year</p>
          </div>
        </div>
        <div className="w-2/3">
          <p className="w-full max-w-[720px] text-xl">
            Salt from the sea normalizes the activity of the sebaceous glands,
            which helps to get rid of the oily shine of the face and clogging of
            pores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
