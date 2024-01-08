import React from 'react'
interface Props{
    title:string,
    year:string
}
function SkillsItem({title,year}:Props) {
  return (
    <div className='mb-16 md:mb-32 mx-auto'>
        <span className='px-8 text-[#55e6a5] py-[0.9rem] font-bold text-lg border-2 border-[#55e6a5]'>
            {year}
        </span>
        <h1 className='mt-16 md:mt-8 font-bold mb-4 uppercase text-2xl text-white'>
            {title}
        </h1>
        <p className='text-[#aaaaaa] font-normal w-4/5 text-base opacity-80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui doloremque molestiae doloribus magni earum ducimus sit ut asperiores fuga. Dignissimos enim distinctio provident voluptatum delectus fuga quae molestiae vero!
        </p>
    </div>
  )
}

export default SkillsItem