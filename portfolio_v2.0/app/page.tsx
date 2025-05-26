'use client';
import { use } from "react";

import Navbar from "./components/Navbar";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <section className="Home flex flex-col">
        <h1 className="text-4xl font-bold ml-10 mt-20 mb-7 md:text-6xl lg:mt-40 lg:mb-20 lg:text-8xl">
          Ayman msaoub
        </h1>

        <h1 className="text-4xl text-[var(--color-accent-dark)] font-bold ml-10 mb-10 md:text-6xl lg:text-8xl">
          Frontend Developer
        </h1>
      </section>
    </div>
  );
}

