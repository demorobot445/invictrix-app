import Link from "next/link";

const Present = () => {
  return (
    <section className="container mx-auto flex h-screen w-full flex-col px-3 lg:px-0">
      <div className="mt-auto flex flex-col gap-4">
        <h2 className="font-display text-dark-primary text-center text-2xl">
          New York - Los Angeles - Miami - Chicago - Houston… and beyond.
        </h2>
        <h3 className="font-display text-center text-3xl text-white">
          WHERE YOU GO NEXT MAY SHAPE EVERYTHING.
        </h3>
        <div className="flex w-full items-center justify-center py-2">
          <Link
            className="font-display text-center text-2xl text-white uppercase underline underline-offset-2"
            href="/"
          >
            start begin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Present;
