import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
