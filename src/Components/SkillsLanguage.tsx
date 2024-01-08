import React from 'react'
interface Props{
    skill1:string
    skill2:string
    skill3:string
    level1:string
    level2:string
    level3:string
}
function SkillsLanguage({skill1,skill2,skill3,level1,level2,level3}:Props) {
  return (
    <div>
      <div className="relative mb-12">
        <h1 className="lg:p-7 p-6 w-full uppercase bg-gray-800 rounded-xl text-white text-xl font-bold">
          {skill1}
        </h1>
        <span className={`${level1} bottom-0 rounded-full  h-2 absolute bg-[#55e6a5]`}></span>
      </div>
      <div className="relative mb-12">
        <h1 className="lg:p-7 p-6 w-full uppercase bg-gray-800 rounded-xl text-white text-xl font-bold">
          {skill2}
        </h1>
        <span className={`${level2} bottom-0 rounded-full h-2 absolute bg-[#55e6a5]`}></span>
      </div>
      <div className="relative mb-12">
        <h1 className="lg:p-7 p-6 w-full uppercase bg-gray-800 rounded-xl text-white text-xl font-bold">
          {skill3}
        </h1>
        <span className={`${level3} bottom-0 rounded-full h-2 absolute bg-[#55e6a5]`}></span>
      </div>
    </div>
  );
}

export default SkillsLanguage