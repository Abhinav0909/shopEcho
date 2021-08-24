import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import en from "../locales/en.json"
import hi from '../locales/hi.json'
export interface NavBarProps {}
const Navbar: React.FC<NavBarProps> = () => {
  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en'? en:hi;
  const changeLanguages = (e:any) =>{
    const locale = e.target.value;
    router.push(router.pathname,router.asPath,{locale});
  }
  const [dropDown, setDropDown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const handleDropdown = () => setDropDown(!dropDown);
  const clickHandler = () => setHamburger(!hamburger);

  return (
    <div className="fixed top-0  w-full">
      <nav className="bg-indigo-900 bg-center bg-no-repeat bg-cover flex p-4 text-white my-auto">
        <Link href="/">
          <a className="text-xl font-semibold  ">{t.shopEcho}</a>
        </Link>

        <div className="hidden mx-auto space-x-6 font-semibold font-size-xl lg:block">
          <Link href="/">
            <a className="">{t.Home}</a>
          </Link>
          <Link href="/Card">
            <a className="">{t.Lab}</a>
          </Link>
          <Link href="/auth/SignIn">
            <a className="">{t.SignIn}</a>
          </Link>
          <Link href="/Contact">
            <a className="">{t.ContactUs}</a>
          </Link>
        </div>

        <div className="absolute right-3 top-3 lg:hidden ">
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
        {hamburger ? (
          <div className="flex flex-col my-auto w-full mt-10 lg:hidden  ">
            <Link href="/">
              <a className="block px-4 py-2 text-base font-semibold text-center text-white border-blue-600">
                {t.Home}
              </a>
            </Link>
            <Link href="/Lab">
              <a className="block px-4 py-2 text-base font-semibold text-center text-white border-white">
               {t.Lab}
              </a>
            </Link>
            <Link href="/auth/SignIn">
              <a className="block px-4 py-2 text-base font-semibold text-center text-white border-white">
                {t.SignIn}
              </a>
            </Link>
            <Link href="/Contact">
              <a className="block px-4 py-2 text-base font-semibold text-center text-white border-white">
               {t.ContactUs}
              </a>
            </Link>
          </div>
        ) : null}
        
        <div className="absolute right-3 top-3 lg:block border-2 border-blue-200 px-2 hidden">
          <button
            className="flex"
            onClick={handleDropdown}
          >
            {t.options}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          </div>
        {dropDown ? (
            <select className="lg:flex lg:flex-col lg:my-auto lg:w-20 lg:mt-8 rounded-md bg-indigo-800 hidden absolute top-8 right-6 cursor-pointer " onChange={changeLanguages} defaultValue={locale}>
            <option className=" block px-4 py-1 text-base font-semibold text-center text-white border-white" value='en'>
              en
            </option>
            <option className=" block px-4 py-1 text-base font-semibold text-center text-white border-white" value='hi'>
              hi
            </option>
            </select>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
