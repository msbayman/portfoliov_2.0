'use client';
import { use } from "react";

import Navbar from "./components/Navbar";
import Btn_accent_green from "./components/Btn_accent_green";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import { Contact } from "lucide-react";
import Contacts from "./sections/contacts";
import { IoIosCodeDownload, IoMdDownload } from "react-icons/io";
import DrawOutlineButton from "./components/DrawOutlineButton";

export default function Home() {
  return (

    <div className="flex flex-col min-h-svh ">
      <Navbar></Navbar>
      <section className="Home min-h-screen flex flex-col">
        <h1 className="text-4xl font-bold ml-10 mt-20 mb-7 md:text-6xl lg:mt-40 lg:mb-20 lg:text-8xl">
          Ayman msaoub
        </h1>

        <h1 className="text-4xl text-[var(--color-accent-dark)] font-bold ml-10 mb-10 md:text-6xl lg:text-8xl">
          Frontend Developer{" </>"}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] ml-10  md:text-xl lg:text-1xl lg:ml-11 lg:mb-2">
          I am a frontend developer with a passion for creating beautiful and
          functional user interfaces.</p>
        <p className="text-sm text-[var(--color-text-secondary)] ml-10 mb-10 md:text-xl lg:text-1xl lg:ml-11 lg:mb-20">
          I have experience in HTML, CSS, JavaScript,
          and React.</p>
        {/* <Btn_accent_green text="resume "  /> */}
        <div className="flex w-full items-center justify-center">

          <a href="../../public/Ayman_Msaoub_Resume.pdf" download="Ayman_Msaoub_Resume.pdf" className="flex items-center justify-center">
            <DrawOutlineButton className="flex items-center justify-center ml-30 mb-10">
              <IoIosCodeDownload className="size-36 " />
            </DrawOutlineButton>

          </a>
        </div>

        <a href="#about">
          <div className="flex flex-col items-center h-full opacity-70 mt-20 justify-center   mb-10 lg:mb-20 hover:cursor-pointer  transition-all duration-300 ease-in-out hover:opacity-100">
            <h1 className="lg:text-3xl font-light  ">see  more info</h1>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-icon lucide-arrow-down "><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
          </div>
        </a>


      </section>

      <div id="about">
        <About />
      </div>

      <div id="Projects" className="w-full h-fit flex items-center justify-center">
        <Projects />
      </div>

      <div id="Experiences" className="w-full h-fit flex items-center justify-center" >
        <Experience
        />
      </div>



      <div id="Contact" className="w-full h-fit flex items-center justify-center" >
        <Contacts></Contacts>
      </div>

    </div>

  );
}

