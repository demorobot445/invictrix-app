import Link from "next/link";
import CustomLink from "./CustomLink";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-dark/20 fixed left-1/2 z-20 container mx-auto flex -translate-x-1/2 items-center justify-between border-b py-8">
      <Link href="/">
        <Image
          style={{ filter: "invert(1)" }}
          className="monogram object-contain"
          src="/logo.png"
          alt="logo"
          height={40}
          width={150}
        />
      </Link>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-12">
          <CustomLink href="/">The Essence</CustomLink>
          <CustomLink href="/">The Circle</CustomLink>
          <CustomLink href="/">The Intention</CustomLink>
        </div>
        <Image
          className="min-w-10 object-contain"
          src="/black-monogram.png"
          alt="monogram"
          height={50}
          width={50}
        />
      </div>
    </header>
  );
};

export default Header;
