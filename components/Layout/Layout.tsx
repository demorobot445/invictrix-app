import Header from "./Header/Header";
import localFont from "next/font/local";

const lonear = localFont({ src: "fonts/Lonear.otf", variable: "--lonear" });
const proximaNova = localFont({
  src: "fonts/ProximaNova.woff2",
  variable: "--proxima-nova",
});

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main
      className={`${lonear.variable} ${proximaNova.variable} overflow-x-hidden bg-[#f4f4f4] font-sans`}
    >
      <Header />
      {children}
    </main>
  );
};

export default Layout;
