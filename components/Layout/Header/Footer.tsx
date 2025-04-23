import Arrow from "@/components/Home/Shop/Arrow";
import Image from "next/image";
import { Behance, Dribble, Facebook, Instagram, Linkdin } from "./SocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto flex flex-col px-5 py-24">
        <div className="mb-20 flex">
          <h1 className="font-display text-dark w-1/3 text-4xl tracking-wider uppercase">
            Invictrix
          </h1>
          <div className="flex w-2/3 flex-col">
            <p className="text-dark text-7xl">Still have questions?</p>
            <div className="border-primary group flex h-[72px] w-fit cursor-pointer flex-col overflow-hidden border-b">
              <p className="text-primary text-7xl transition-all duration-700 group-hover:-translate-y-[72px]">
                Let&apos;s talk.
              </p>
              <p className="text-primary text-7xl transition-all duration-700 group-hover:-translate-y-[72px]">
                Let&apos;s talk.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-20 flex">
          <div className="flex w-1/3 flex-col">
            <p className="text-dark mb-4 text-2xl">Subscribe to newsleter</p>
            <div className="border-dark/20 flex max-w-[280px] justify-between border-b-2 py-2">
              <input
                className="placeholder:text-dark/20 w-full focus:outline-none"
                type="text"
                placeholder="Email Address"
              />
              <button className="bg-dark flex h-10 w-10 min-w-10 items-center justify-center">
                <div className="h-3 w-3 *:fill-white">
                  <Arrow />
                </div>
              </button>
            </div>
          </div>
          <div className="flex w-2/3">
            <div className="flex w-1/2 flex-col">
              <p className="text-dark mb-4 text-2xl">Website map</p>
              <div className="mt-11 grid max-w-[400px] grid-cols-2 gap-y-3.5 2xl:gap-x-20">
                <Link href="/term-and-condition" className="text-dark text-lg">
                  Term & Condition
                </Link>
                <p className="text-dark text-lg">Best Seller</p>
                <p className="text-dark text-lg">About</p>
                <p className="text-dark text-lg">Membership</p>
              </div>
            </div>
            <div className="flex w-1/2 flex-col">
              <p className="text-dark mb-4 text-2xl">Contacts</p>
              <div className="mt-11 grid grid-cols-2 gap-y-3.5 2xl:gap-x-20">
                <p className="text-dark text-lg">mail@halo-lab.com</p>
                <p className="text-dark text-lg">www.halo-lab.com</p>
                <p className="text-dark text-lg">UK: +38 096 272 2100</p>
                <p className="text-dark text-lg">Ukraine, Odessa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <p className="text-dark max-w-[280px] text-lg">
              Salt from the sea does normalizes the activity of the sebaceous
            </p>
          </div>
          <div className="flex w-2/3">
            <div className="flex w-1/2 items-center gap-4">
              <div className="bg-dark h-10 w-10 rounded-full">
                <Image src="/monogram.png" alt="logo" height={40} width={40} />
              </div>
              <div className="flex flex-col">
                <p className="text-dark text-lg">
                  {new Date().getFullYear()} Invictrix
                </p>
                <p className="text-dark text-lg">&copy; All rights reserved</p>
              </div>
            </div>
            <div className="flex w-1/2 gap-6">
              <button className="border-dark/20 h-10 w-10 cursor-pointer border p-2">
                <Facebook />
              </button>
              <button className="border-dark/20 h-10 w-10 cursor-pointer border p-2">
                <Behance />
              </button>
              <button className="border-dark/20 h-10 w-10 cursor-pointer border p-2">
                <Linkdin />
              </button>
              <button className="border-dark/20 h-10 w-10 cursor-pointer border p-2">
                <Instagram />
              </button>
              <button className="border-dark/20 h-10 w-10 cursor-pointer border p-2">
                <Dribble />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
