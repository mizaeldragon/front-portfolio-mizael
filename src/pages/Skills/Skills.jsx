import * as React from "react";
import reactL from "../../assets/img/react.webp";
import jsL from "../../assets/img/js-logo.webp";
import nodeL from "../../assets/img/node-logo.webp";
import htmlL from "../../assets/img/html-logo.webp";
import cssL from "../../assets/img/css-logo.webp";
import tsL from "../../assets/img/ts-logo.webp";
import msL from "../../assets/img/ms-logo.webp";
import twL from "../../assets/img/tw-logo.webp";
import ffL from "../../assets/img/ff-logo.webp";
import exL from "../../assets/img/ex-logo.webp";
import { CarouselMobile } from "@/components/CarouselMobile";
import ptgsql from "../../assets/img/postgresql.webp"

export function Skills() {
  return (
    <>
      <div className="hidden lg:flex ">
        <div className="w-full h-screen lg:mt-24 2xl:mt-56">
          <h1 className="text-white flex justify-center items-center font-bold text-5xl font-mono z-10 reveal">
            Tecnologias
          </h1>
          <div className="grid grid-cols-5 justify-center items-center text-white">
            {/* Grid de Tecnologias */}
            <div>
              <div className="flex flex-col gap-8 justify-center items-center -mt-1 reveal">
                <img
                  className="size-28 mt-20 animate-grow-shrink"
                  src={htmlL}
                  alt="HTML logo"
                />
                HTML
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center -mt-1 reveal">
                <img
                  className="size-28 mt-20 animate-grow-shrink"
                  src={cssL}
                  alt="CSS logo"
                />
                CSS
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-2 reveal">
                <img
                  className="size-24 mt-20 animate-grow-shrink"
                  src={jsL}
                  alt="JavaScript logo"
                />
                JAVASCRIPT
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-2 reveal">
                <img
                  className="size-24 mt-20 animate-grow-shrink"
                  src={reactL}
                  alt="React logo"
                />
                REACT JS
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-16 reveal">
                <img
                  className="size-28 mt-2 animate-grow-shrink"
                  src={nodeL}
                  alt="Node.js logo"
                />
                NODE JS
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-24 reveal">
                <img
                  className="size-24 animate-grow-shrink"
                  src={tsL}
                  alt="TypeScript logo"
                />
                TYPESCRIPT
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-24 reveal">
                <img
                  className="size-24 animate-grow-shrink"
                  src={msL}
                  alt="MySQL logo"
                />
                MYSQL
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-24 reveal">
                <img
                  className="size-28 animate-grow-shrink"
                  src={ptgsql}
                  alt="postgreSQL logo"
                />
                POSTGRESQL
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-28 reveal">
                <img
                  className="size-24 animate-grow-shrink"
                  src={twL}
                  alt="Tailwind CSS logo"
                />
                TAILWIND CSS
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-24 reveal">
                <img
                  className="size-28 animate-grow-shrink"
                  src={ffL}
                  alt="Fastify logo"
                />
                FASTIFY
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 justify-center items-center mt-28 reveal">
                <img
                  className="size-24 animate-grow-shrink"
                  src={exL}
                  alt="Express.js logo"
                />
                EXPRESS JS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <CarouselMobile />
      </div>
    </>
  );
}
