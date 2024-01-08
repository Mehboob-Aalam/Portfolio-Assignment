import { StarIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

interface Props{
    name:string,
    role:string,
    image:string,
   
}

function ClientReview({name,role,image}:Props) {
  return (
    <section className="flex flex-col text-center justify-center">
      <div>
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
         
          className="mx-auto mb-8 rounded-full object-cover"
        />
      </div>
   
      <div className="flex items-center mx-auto justify-center">
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
        <StarIcon className="w-8 h-8 text-yellow-500" />
      </div>
      <h1 className="text-2xl text-white mt-4 ">{name}</h1>
      <p className="text-lg text-white mt-2 opacity-75 mb-[1.4rem] ">
        {role}
      </p>
      <p className="text-white text-base opacity-50 w-[90%] md:w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        perferendis cum nam eos totam perspiciatis exercitationem facilis ab!
        Voluptate possimus earum nobis, quas tempora eius consectetur dicta
        atque dignissimos nostrum?
      </p>
    </section>
  );
}

export default ClientReview