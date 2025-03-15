import { Link } from "react-scroll";
import mL from "../../assets/img/m-logo.webp";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import BinaryRain from "../../components/BinaryRain";
import { About } from "../About/About.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { Skills } from "../Skills/Skills.jsx";
import { Projects } from "../Projects/Projects.jsx";
import { NavApplication } from "@/Nav/NavApplication";
import { NavMenuMobile } from "@/Nav/NavMenuMobile";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export function Home() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "left",
      distance: "100%",
      duration: 1000,
      delay: 300,
      reset: true,
    });
  }, []);

  return (
    <div className="h-full select-none">
      <nav className="z-[59] bg-gradient-to-r p-2  to-slate-950 via-blue-800 from-slate-950 text-white fixed w-full shadow-md shadow-slate-950 ">
        <div className="sm:hidden lg:flex justify-evenly items-center w-full">
          <a to="home" className="size-16 select-none">
            <img className="size-14" src={mL} alt="logo" loading="lazy" />
          </a>
          <Link to="home" smooth={true} duration={500}>
            <NavApplication className="text-white">Home</NavApplication>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <NavApplication className="text-white">Sobre</NavApplication>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <NavApplication className="text-white">Habilidades</NavApplication>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <NavApplication className="text-white">Projetos</NavApplication>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <NavApplication className="text-white">Contato</NavApplication>
          </Link>
        </div>
      </nav>

      <div className="flex lg:hidden">
        <NavMenuMobile />
      </div>

      <section id="home">
        <div className="h-screen bg-gradient-to-r to-slate-950 via-blue-800 from-slate-950 flex items-center justify-center -z-50">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-80">
            <div className="flex flex-col items-center text-center text-white z-50 reveal">
              <h1 className="sm:text-4xl lg:text-6xl">
                Olá prazer, sou Mizael
              </h1>
              <p className="sm:text-xl lg:text-2xl mt-4">
                Que privilégio você por aqui! Sou desenvolvedor full stack
              </p>
              <div className="mt-10 animate-grow-ShrinkButton">
                <a href="/curriculo-mizael-costa.pdf" download>
                  <Button
                    variant="gradient"
                    className="sm:w-48 sm:h-9 lg:w-56 lg:h-10 gap-2 shadow-lg shadow-blue-500 "
                  >
                    Download CV
                    <ArrowDownToLine />
                  </Button>
                </a>
              </div>
            </div>
            <BinaryRain />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-16 bg-gradient-to-r to-slate-950 via-blue-800 from-slate-950"
      >
        <About />
      </section>

      <section
        id="skills"
        className="py-16 bg-gray-100 bg-gradient-to-r to-slate-950 via-blue-800 from-slate-950"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="py-16 gap-24 bg-gradient-to-r to-slate-950 via-blue-800 from-slate-950"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="py-16 bg-gray-100 bg-gradient-to-r to-slate-950 via-blue-800 from-slate-950"
      >
        <Contact />
      </section>

      <footer id="footer" className="py-8 bg-slate-950 text-white text-center ">
        <p>&copy; Mizael Costa 2025 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
