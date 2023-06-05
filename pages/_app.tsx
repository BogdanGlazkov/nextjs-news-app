import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Container } from "react-bootstrap";
import "@/styles/globals.css";
import s from "@/styles/App.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>NextJS News App</title>
        <meta name="description" content="NextJS news app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={s.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
