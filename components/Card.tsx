/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Card = ({compounds}:any) => {
    return (
        <Link href='Lab'>
            <div className=' lg:w-1/4 my-8 mx-auto w-3/4 md:w-1/2  '>
                <div className=' rounded-lg bg-card bg-blend-hard-light bg-cover object-cover bg-no-repeat flex justify-center  mx-auto md:h-56 md:w-56 h-48 w-48 border-4 border-blue-500 '>
                    <p className='my-auto text-green-200 text-2xl font-semibold '> Methane</p>
                    </div>
            </div>
            </Link>
       
    )
}

export default Card;
