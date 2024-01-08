import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Services() {
  return (
    <section
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="services"
    >
      <div>
        <p className="text-white text-center text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
          My <span className="text-yellow-400">services</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-500 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
            <h1 className="text-xl md:text-3xl mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-base text-[#d3d2d2] font-normal">
              Figma JavaScript, ReactJs, NextJs, Typescript reactJS / nextJS
              Frontend web development in reactJS, nextJS / Web Application or
              portal API Integration in React web app.
            </p>
          </div>
        </div>
        <div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-orange-700 hover:scale-110 transform transition-all duration-500 uppercase font-semibold text-center p-[2rem]"
          >
            <RocketLaunchIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
            <h1 className="text-xl md:text-3xl mt-[1.5rem] mb-[1.5rem]">
              backend
            </h1>
            <p className="text-base text-[#d3d2d2] font-normal">
              I specialize backend development, Mern-stack projects, React js &
              next js applications, landing pages, and NFT websites.I pride
              myself on writing SEO-friendly and clean code.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-500 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
            <h1 className="text-xl md:text-3xl mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p className="text-base text-[#d3d2d2] font-normal">
              My expertise includes JavaScript, ReactJs, NextJs, Typescript,
              NodeJS, Express, MongoDB.I specialize in providing high-quality
              services in frontend & backend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services