const Contact = () => {
  return (
    <section className="flex min-h-[50vh] justify-between">
      <div className="w-1/2"></div>
      <div className="flex w-1/2 flex-col">
        <h2 className="text-primary mb-20 text-7xl transition-all duration-700 group-hover:-translate-y-[72px]">
          Let&apos;s Connect.
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-dark text-2xl">info@invictrixventures.com</p>
          <p className="text-dark text-2xl">www.invictrixventures.com</p>
          <p className="text-dark text-2xl">000-0000-0000</p>
          <p className="text-dark text-2xl">New York, NY</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
