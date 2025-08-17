"use client";
import Image from "next/image";
import Header from "./components/Header";
import SectionBanner from "./components/SectionBanner";
import SectionGames from "./components/SectionGames";
import SectionTimes from "./components/SectionTimes";

export default function Home() {
  return (
    <>
      <Header />
      <SectionBanner />
      <SectionGames />
      <SectionTimes />
    </>
  );
}
