/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Card = ({fetchData}:{fetchData:string}) => {
    return (
        <div className='lg:w-1/3 xl:w-1/4 mx-auto my-10 md:w-1/2 w-3/4'>
        <Link href='Lab' >
                <div className='my-auto hover:-translate-y-1 transform rounded-lg bg-card  bg-cover  bg-no-repeat flex justify-center  mx-auto md:h-56 md:w-56 h-48 w-48 border-4 border-blue-500 '>
                    <p className='my-auto text-green-200 md:text-xl text-lg font-semibold '>{fetchData}</p>
                    </div>
            </Link>
            </div>
       
    )
}

export default Card;
