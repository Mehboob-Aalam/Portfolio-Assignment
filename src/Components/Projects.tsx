import Image from "next/image";
import project1 from "@/assets/project1.jpg";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.jpg";

function Projects() {
  return (
    <section className="bg-[#02050a] pt-16 md:pt-32 pb-4" id="project">
      <div>
        <h1 className="text-white text-center text-3xl md:text-[45px] font-bold uppercase">
          Pro<span className="text-yellow-400">ject</span>
        </h1>
      </div>
      <div className="w-4/5 pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-full h-[200px] md:h-[300px]">
            <Image
              src={project1}
              alt=""
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-full h-[200px] md:h-[300px]">
            <Image src={p2} alt="" layout="fill" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-full h-[200px] md:h-[300px]">
            <Image src={p6} alt="" layout="fill" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-full h-[200px] md:h-[300px]">
            <Image src={p4} alt="" layout="fill" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-full h-[200px] md:h-[300px]">
            <Image src={p5} alt="" layout="fill" className="object-contain" />
          </div>
        </div>
        <div data-aos="fade-up"  data-aos-delay="1400">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-full h-[200px] md:h-[300px]">
            <Image src={p3} alt="" layout="fill" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
