import Link from "next/link";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <header className="border-dark/20 container mx-auto flex items-center justify-between border-b py-8">
      <Link href="/">
        <h1 className="font-display text-4xl tracking-wider uppercase">
          Invictrix
        </h1>
      </Link>
      <div className="flex gap-16">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/">About</CustomLink>
        <CustomLink href="/">Membership</CustomLink>
      </div>
      <button className="border-dark/20 cursor-pointer rounded-full border px-4 py-1 text-2xl">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
