import Link from "next/link";
import Image from "next/image";
import about from '@/assets/About.jpg'
import fiverr from '@/assets/fiverr.svg'

function About() {
  return (
    <section
      className="bg-[#121121] pb-[3rem] pt-[4rem] lg:pt-[8rem]"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto gap-[3rem] items-center">
        <div className="flex-1">
          <h1 className="text-xl font-bold uppercase text-[#55e6a5] mb:[1rem]">
            About me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[20%] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-4/5 ">
              I am a full-stack web developer with a vast array of knowledge in
              many different front-end and back-end languages, responsive
              frameworks, databases, and best code practices. I bring years of
              research and industry experience to the table and can understand
              requirements thoroughly, and build the software required by the
              client in a timely fashion.
            </p>
          </div>
          <button className="px-8 hover:bg-yellow-400 transition-all duration-500 py-4 bg-[#55e6a5] flex items-center space-x-2">
            <Link target="_blank" href={"https://www.fiverr.com/"}>
              <Image
                src={fiverr}
                alt=""
                className="w-[7rem] h-[1.7rem] text-black"
              />
            </Link>
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] flex-1  relative mx-auto md:mx-0 mt-[2rem] lg:mt-0"
        >
          <Image
            className="relative w-full h-full object-contain "
            src={about}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}

export default About