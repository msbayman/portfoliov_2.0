'use client';
import { use } from "react";

import Navbar from "./components/Navbar";
import Btn_accent_green from "./components/Btn_accent_green";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <section className="Home min-h-screen flex flex-col">
        <h1 className="text-4xl font-bold ml-10 mt-20 mb-7 md:text-6xl lg:mt-40 lg:mb-20 lg:text-8xl">
          Ayman msaoub
        </h1>

        <h1 className="text-4xl text-[var(--color-accent-dark)] font-bold ml-10 mb-10 md:text-6xl lg:text-8xl">
          Frontend Developer
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] ml-10  md:text-xl lg:text-1xl lg:ml-11 lg:mb-2">
          I am a frontend developer with a passion for creating beautiful and
          functional user interfaces.</p>
        <p className="text-sm text-[var(--color-text-secondary)] ml-10 mb-10 md:text-xl lg:text-1xl lg:ml-11 lg:mb-20">
          I have experience in HTML, CSS, JavaScript,
          and React.</p>
        <Btn_accent_green text="Contact Me" />
      </section>
      <Btn_accent_green text="Contact Me" />

    </div>
  );
}

