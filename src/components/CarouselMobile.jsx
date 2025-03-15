import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import reactL from "../assets/img/react.webp";
import jsL from "../assets/img/js-logo.webp";
import nodeL from "../assets/img/node-logo.webp";
import htmlL from "../assets/img/html-logo.webp";
import cssL from "../assets/img/css-logo.webp";
import tsL from "../assets/img/ts-logo.webp";
import msL from "../assets/img/ms-logo.webp";
import twL from "../assets/img/tw-logo.webp";
import ffL from "../assets/img/ff-logo.webp";
import exL from "../assets/img/ex-logo.webp";

export function CarouselMobile() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-44 select-none ">
        <h1 className="text-white flex justify-center items-center font-bold text-5xl font-mono z-10 sm:-mt-14 lg:mt-6 lg:-mb-8 reveal">
          Tecnologias
        </h1>
        <Carousel className="text-white bg-transparent lg:w-96 lg:h-96 md:w-96 md:h-96 sm:w-80 sm:h-96 lg:mt-24 rounded-lg sm:mt-8 reveal">
          <CarouselContent>
            <CarouselItem>
              <div className="flex justify-center items-center">
                <img
                  className="size-44 mt-20 animate-grow-shrink"
                  src={htmlL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-8 text-3xl font-mono">
                HTML
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center">
                <img
                  className="size-44 mt-20 animate-grow-shrink"
                  src={cssL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-8 text-3xl font-mono">
                CSS
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center">
                <img
                  className="size-40 mt-20 animate-grow-shrink"
                  src={jsL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-12 text-3xl font-mono">
                JAVASCRIPT
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center">
                <img
                  className="size-40 mt-20 animate-grow-shrink"
                  src={reactL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-12 text-3xl font-mono">
                REACT JS
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center mt-16">
                <img
                  className="size-48 animate-grow-shrink"
                  src={nodeL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-8 text-3xl font-mono">
                NODE JS
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center mt-24">
                <img
                  className="size-36 animate-grow-shrink"
                  src={tsL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-12 text-3xl font-mono">
                TYPESCRIPT
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center mt-24">
                <img
                  className="size-36 animate-grow-shrink"
                  src={msL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-12 text-3xl font-mono">
                MYSQL
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center mt-24">
                <img
                  className="size-36 animate-grow-shrink"
                  src={twL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-12 text-3xl font-mono">
                TAILWIND CSS
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center mt-24">
                <img
                  className="size-40 animate-grow-shrink"
                  src={ffL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-8 text-3xl font-mono">
                FASTIFY
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex justify-center items-center mt-28">
                <img
                  className="size-36 animate-grow-shrink"
                  src={exL}
                  alt="logo react"
                />
              </div>
              <div className="flex justify-center items-center mt-8 text-3xl font-mono">
                EXPRESS JS
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="sm:flex sm:ml-16  md:hidden lg:flex text-black" />
          <CarouselNext className="sm:flex sm:mr-16 md:hidden  lg:flex text-black" />
        </Carousel>
      </div>
    </div>
  );
}
