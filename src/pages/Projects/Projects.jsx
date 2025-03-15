import React, { useState } from "react";
import coffeImg from "../../assets/img/coffe-img.webp";
import lpIsa from "../../assets/img/lpIsa.webp";
import bgCardapio from "../../assets/img/bg-cardapio.webp";
import lpAdv from "../../assets/img/p-1.webp";
import authUser from "../../assets/img/auth-user.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaKey } from "react-icons/fa";
import { SiJavascript, SiPrisma, SiMongodb } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "SmashPoint",
    description: "Cardápio online para hamburguerias, restaurantes e pizzarias",
    technologies: [
      <FaHtml5 className="w-16 h-16 text-orange-500  animate-grow-ShrinkButton" />,
      <FaCss3Alt className="w-16 h-16 animate-grow-ShrinkButton" />,
      <SiJavascript className="w-14 h-14 text-yellow-400 mt-1 animate-grow-ShrinkButton" />,
    ],
    image: bgCardapio,
    link: "https://cardapio-online-coral.vercel.app/",
  },
  {
    id: 2,
    title: "Isa Micropigmentações",
    description:
      "Landing page para apresentar os serviços de micropigmentação.",
    technologies: [
      <FaHtml5 className="w-16 h-16 text-orange-500 animate-grow-ShrinkButton" />,
      <FaCss3Alt className="w-16 h-16 animate-grow-ShrinkButton" />,
      <SiJavascript className="w-14 h-14 text-yellow-400 mt-1 animate-grow-ShrinkButton" />,
    ],
    image: lpIsa,
    link: "https://mizaeldragon.github.io/isa-micropigmentacao/",
  },
  {
    id: 3,
    title: "API de Autenticação",
    description:
      "Este projeto é uma API simples para cadastro, autenticação e listagem de usuários.",
    technologies: [
      <FaNodeJs className="w-14 h-14 text-green-500 animate-grow-ShrinkButton" />,
      <FaKey className="w-14 h-14 text-red-500 animate-grow-ShrinkButton" />,
      <SiPrisma className="w-14 h-14 text-zinc-300 animate-grow-ShrinkButton" />,
      <SiMongodb className="w-14 h-14 text-green-500 animate-grow-ShrinkButton" />,
    ],
    image: authUser,
    link: "https://github.com/mizaeldragon/autenticacao-usuario",
  },
  {
    id: 4,
    title: "Veritas Advocacia",
    description:
      "Landing page para advogados com foco em captar clientes online.",
    technologies: [
      <FaHtml5 className="w-16 h-16 text-orange-500 animate-grow-ShrinkButton" />,
      <FaCss3Alt className="w-16 h-16 animate-grow-ShrinkButton" />,
      <SiJavascript className="w-14 h-14 text-yellow-400 mt-1 animate-grow-ShrinkButton" />,
    ],
    image: lpAdv,
    link: "https://landing-page-advogado.vercel.app/",
  },
  {
    id: 5,
    title: "Grão & Aroma",
    description: "Landing page de apresentação para uma cafeteria.",
    technologies: [
      <FaHtml5 className="w-16 h-16 text-orange-500 animate-grow-ShrinkButton" />,
      <FaCss3Alt className="w-16 h-16 animate-grow-ShrinkButton" />,
    ],
    image: coffeImg,
    link: "https://mizaeldragon.github.io/coffe/",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-white flex justify-center items-center font-bold text-5xl select-none mt-10 reveal">
        Projetos
      </h1>

      <div className="px-10 mt-24">
        <div className="grid justify-items-center 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="z-10 lg:mb-8 2xl:mb-20 hover:brightness-50 cursor-pointer reveal"
              onClick={() => openModal(project)}
            >
              <Card className="w-72 h-60 md:w-72 md:h-60 lg:w-[330px] lg:h-[300px] 2xl:w-[400px] 2xl:h-[360px] flex justify-center items-center flex-col select-none">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    className="hover:scale-110 hover:transition-all hover:duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-slate-950 text-white p-6 rounded-lg shadow-lg lg:w-[600px] lg:h-[500px] sm:w-[90%] sm:h-[90%]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-center flex-col">
              <h2 className="text-3xl font-bold mb-10 text-center">
                {selectedProject.title}
              </h2>
              <p className="mb-4 text-center text-xl">
                {selectedProject.description}
              </p>
              <h3 className="text-2xl font-bold mt-24">Tecnologias Usadas:</h3>
              <ul className="list-disc mt-10 mb-4 flex gap-10">
                {selectedProject.technologies.map((Icon, index) => (
                  <span key={index} className="text-blue-600">
                    {Icon}
                  </span>
                ))}
              </ul>
            </div>
            <div className="pb-16"></div>

            <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-4 bg-white border-t">
              <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Acessar o projeto
                </a>
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
