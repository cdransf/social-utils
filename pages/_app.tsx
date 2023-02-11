import "@/css/fira.css";
import "@/css/omg.css";

import siteMetadata from "@/data/siteMetadata";
import * as Fathom from "fathom-client";

import Head from "next/head";
import Footer from "@/components/Footer";
import LayoutWrapper from "@/components/LayoutWrapper";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    Fathom.load(siteMetadata.fathomCode, {
      url: siteMetadata.fathomUrl,
      includedDomains: [siteMetadata.siteDomain],
    });
    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
        <Footer />
      </LayoutWrapper>
    </>
  );
}
