"use client";
import Header from "./components/Header";
import SectionBanner from "./Section/SectionBanner";
import SectionGames from "./Section/SectionGames";
import SectionTimes from "./Section/SectionTimes";
import SectionDeo from "./Section/SectionDeo";
import { Footer } from "./components/Footer";
import { SectionProviders } from "./Section/SectionProviders";

export default function Home() {
  return (
    <main>
      <Header />
      <SectionBanner />
      <SectionGames />
      <SectionTimes />
      <SectionDeo />
      <Footer />
    </main>
  );
}
