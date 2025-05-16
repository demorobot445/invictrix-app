import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { LenisRef as LR, ReactLenis } from "lenis/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  const headerRef = useRef<HTMLElement>(null);

  const lenisRef = useRef<LR>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      <Layout headerRef={headerRef}>
        <Component {...pageProps} headerRef={headerRef} />
      </Layout>
    </ReactLenis>
  );
}
