import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import ScrollPage from "pages/parallaxScroll";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Hacking the Gender stack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <Header />
        <ScrollPage />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
