import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/16/solid"


function Footer() {
  return (
    <footer className="pt-32 pb-16 bg-[#02050a]"id="contact">
      <div className="grid border-b pb-24 border-gray-400 grid-cols-1 md:grid-cols-3 lg:w-4/5 md:w-11/12 items-center justify-center w-11/12 gap-5 mx-auto lg:gap-12 md:gap-3 ">
        <div className="flex items-center space-x-6">
          <div className="xl:w-[6.5rem] xl:h-[6.5rem] lg:w-[9rem] lg:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="lg:w-20 lg:h-20 w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="text-2xl mb-1 font-semibold text-white">Address</h1>
            <p className="text-base w-11/12 text-white opacity-60">
              Rawalpindi,Punjab Pakistan
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="lg:w-[6.5rem] lg:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="lg:w-20 lg:h-20 w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="lg:text-2xl text-xl mb-1 font-semibold text-white">Phone</h1>
            <p className="text-base w-11/12 text-white opacity-60">
              +92123456789 <br />
              +92123456789
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="xl:w-[6.5rem] xl:h-[6.5rem] lg:w-[7.5rem] lg:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="lg:w-20 lg:h-20 w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="lg:text-2xl text-xl mb-1 font-semibold text-white">Send Us Email</h1>
            <p className="text-base w-11/12 text-white opacity-60">
              example@gmail.com
            </p>
          </div>
        </div>
      </div>
     
    </footer>
  );
}

export default Footer