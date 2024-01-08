"use client";
import { Bars3Icon } from '@heroicons/react/16/solid';

import Link from 'next/link';

import React from 'react'
interface Props {
  openNav:()=>void;
  
}
function Nav({openNav}:Props) {
  return (
    
      <nav className=''>
        <div className="w-full fixed top-0 z-[1] h-[12vh] bg-[#141c27] shadow-md">
          <div className="flex justify-between items-center w-4/5 mx-auto h-full">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] font-bold text-white font-primary">
              WEB
              <span className="text-yellow-300">DEV</span>
            </h1>
            
            
                <Link href={"#home"} className="hover:underline font-primary text-white cursor-pointer text-[17px] duration-300 lg:block hidden"> HOME
                </Link>
                <Link className="hover:underline font-primary text-white cursor-pointer text-[17px] duration-300 lg:block hidden" href={'#services'}> SERVICES </Link>
                <Link className="hover:underline font-primary text-white cursor-pointer text-[17px] duration-300 lg:block hidden" href={'#about'}> ABOUT</Link>
                <Link className="hover:underline font-primary text-white cursor-pointer text-[17px] duration-300 lg:block hidden" href={'#project'}> PROJECT</Link>
                 <Link className="hover:underline font-primary text-white cursor-pointer text-[17px] duration-300 lg:block hidden" href={'#review'}> REVIEW</Link>
                <Link className="hover:underline font-primary text-white cursor-pointer text-[17px] duration-300 lg:block hidden" href={'#contact'}> CONTACT </Link>
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] h-[2rem] cursor-pointer lg:hidden text-yellow-300'/>
                </div>
            
          </div>
        </div>
      </nav>
    
  );
}

export default Nav