import Image from 'next/image';
import Link from 'next/link';
import linkedIn from '@/assets/linkedIn.svg'
import TextEffect from '@/Components/TextEffect';
import mainImage from '@/assets/2.png'
import {  PlayCircleIcon } from '@heroicons/react/16/solid';

function Hero() {
  return (
    <section className="mt-[10vh] xl:min-h-screen bg-black" id="home">
      <div className="w-4/5 grid-cols-1 mx-auto grid lg:grid-cols-2 gap-9 h-full items-center">
        <div className="mt-32">
          <h1 className="text-4xl md:text-[40px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">MEHBOOB!</span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] xl:text-[20px] lg:text-lg text-base text-[#ffffff92]">
            I am a full-stack web developer with a vast array of knowledge in
            many different front-end and back-end languages, responsive
            frameworks, databases, and best code practices. I bring years of
            research and industry experience to the table and can understand
            requirements thoroughly, and build the software required by the
            client in a timely fashion.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 ">
            <button className="xl:px-8 px-8 hover:bg-yellow-400 transition-all duration-500 xl:py-4 lg:py-2 py-4 lg:text-2xl md:text-2xl text-xl font-bold uppercase bg-[#55e6a5] text-blue-700 flex items-center xl:space-x-2">
              <Link className='flex justify-center items-center'
                target="_blank"
                href={
                  "https://www.linkedin.com/"
                }
              >
                Linked In
                <Image src={linkedIn} alt="" className="w-[2.5rem] h-[2rem]" />
              </Link>
            </button>
            <button className=" flex items-center space-x-2">
              <PlayCircleIcon className="w-16 h-16 hover:bg-yellow-400 transition-all duration-500 text-[#55e6a5]" />
              <p className="text-white text-xl font-semibold ">
                Watch the Video
              </p>
            </button>
          </div>
        </div>
        <div className="xl:w-[500px] hidden xl:h-[500px] lg:w-96 lg:h-96 relative bg-[#55e6a5] lg:flex items-center rounded-full mt-5">
          <Image
            className="object-cover rounded-full"
            src={mainImage}
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero