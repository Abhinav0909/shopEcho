import Link from 'next/link';

export interface NavBarProps{}
const Navbar: React.FC<NavBarProps> = () => {
  return (
    <div className='flex justify-between p-4 text-white bg-indigo-900'>
      <Link href='/'>
        <a className='text-xl font-semibold '>shopEcho</a>
      </Link>
    <div className='space-x-6 font-semibold font-size-xl'>
      <Link href='/'>
        <a className=''>Home</a>
      </Link>
      <Link href='/Lab'>
        <a className=''>Lab</a>
      </Link>
      <Link href='/auth'>
        <a className=''>Sign In</a>
        </Link>
        <Link href='/Contact'>
        <a className=''>Contact Us</a>
        </Link>
      </div> 
      
    </div>
     
  )
}

export default Navbar;
