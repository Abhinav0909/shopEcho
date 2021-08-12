import Link from 'next/link';

export interface NavBarProps{}
const Navbar: React.FC<NavBarProps> = () => {
  const clickHandler = () => {
    const menu:Element = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }
  return (
    <div className='fixed top-0 z-50 w-full'>
       <nav className="bg-indigo-900 bg-center bg-no-repeat bg-cover">
    <div className='flex p-4 text-white bg-indigo-900'>
      <Link href='/'>
        <a className='text-xl font-semibold '>shopEcho</a>
      </Link>
    <div className='hidden mx-auto space-x-6 font-semibold font-size-xl lg:block'>
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
      <div className='absolute flex flex-col right-3 top-3 lg:hidden '>
        <button onClick={clickHandler}>
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
        </button>
      </div>
      </div>
      <div className='hidden w-full mobile-menu lg:hidden '>
      <Link href='/'>
        <a className='block px-4 py-2 text-base font-semibold text-center text-white border-blue-600'>Home</a>
      </Link>
      <Link href='/Lab'>
        <a className='block px-4 py-2 text-base font-semibold text-center text-white border-white'>Lab</a>
      </Link>
      <Link href='/auth'>
        <a className='block px-4 py-2 text-base font-semibold text-center text-white border-white'>Sign In</a>
        </Link>
        <Link href='/Contact'>
        <a className='block px-4 py-2 text-base font-semibold text-center text-white border-white'>Contact Us</a>
        </Link>
        </div>
        </nav>
      </div>


     
  )
}

export default Navbar;
