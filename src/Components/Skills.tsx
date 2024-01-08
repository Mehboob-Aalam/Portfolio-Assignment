import React from "react";
import SkillsItem from "@/Components/SkillsItem";
import SkillsLanguage from "@/Components/SkillsLanguage";

function Skills() {
  return (
    <section className="pt-16 lg:pt-32 pb-20 bg-[#09101a]">
      <h1 className="text-white text-center text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        education & <span className="text-yellow-400">skill</span>
      </h1>
      <div className="md:w-4/5 w-4/5 mx-auto pt-16 grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center justify-center">
        <div className="">
          <SkillsItem title="React Developer" year="2014 - 2018" />
          <SkillsItem title="Next Js Developer" year="2016 - 2020" />
          <SkillsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="Typescript"
            level1="w-[75%]"
            level2="w-[80%]"
            level3="w-[78%]"
          />
        </div>
        <div className="">
          <SkillsItem title="Node Js Developer" year="2018 - 2021" />
          <SkillsItem title="MERN Developer" year="2021 - 2023" />
          <SkillsLanguage
            skill1="HTML"
            skill2="Tailwind CSS"
            skill3="Javascript"
            level1="w-[70%]"
            level2="w-[75%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
