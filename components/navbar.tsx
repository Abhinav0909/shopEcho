import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import en from "../locales/en.json";
import hi from "../locales/hi.json";
export interface NavBarProps {}
const Navbar: React.FC<NavBarProps> = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hi;
  const changeLanguages = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  const [dropDown, setDropDown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const handleDropdown = () => setDropDown(!dropDown);
  const clickHandler = () => setHamburger(!hamburger);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const handleSignOut = () => {
    localStorage.setItem("token", "");
    setLoginStatus(false);
  };
  useEffect(() => {
    function checkLoginStatus() {
      const accessToken = localStorage.getItem("token");
      if (accessToken !== undefined && accessToken?.length !== 0) {
        setLoginStatus(true);
        console.info(accessToken);
        console.info(loginStatus);
      }
    }
    checkLoginStatus();
  }, [loginStatus]);
  return (
    <div className="fixed top-0  w-full ">
      <nav className="bg-blue-400 bg-center bg-no-repeat bg-cover flex p-4 text-white my-auto text-center font-serif">
        <Link href="/">
          <a className="text-xl font-semibold ">{t.shopEcho}</a>
        </Link>

        <div className="hidden mx-auto space-x-4 font-semibold font-size-xl lg:block   ">
          <Link href="/">
            <a className="">{t.Home}</a>
          </Link>
          {loginStatus ? (
            <Link href="/card">
              <a className="">{t.Lab}</a>
            </Link>
          ) : (
            <Link href="/card">
              <a className=""></a>
            </Link>
          )}
          {loginStatus === true ? (
            <button className="" onClick={handleSignOut} aria-label="Sign Out">
              {t.SignOut}
            </button>
          ) : (
            <Link href="/auth/signIn">
              <a>
                <button className="" aria-label="SignIn">
                  {t.SignIn}
                </button>
              </a>
            </Link>
          )}

          <Link href="/contact">
            <a className="">{t.ContactUs}</a>
          </Link>
        </div>

        <div className="absolute right-3 top-3 lg:hidden ">
          <button onClick={clickHandler} aria-label="Click on it">
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
          <div className="flex flex-col  w-full mt-10 lg:hidden items-center mx-auto space-y-2  ">
            <Link href="/">
              <a className="">{t.Home}</a>
            </Link>
            {loginStatus ? (
              <Link href="/card">
                <a className="">{t.Lab}</a>
              </Link>
            ) : (
              <Link href="/card">
                <a className=""></a>
              </Link>
            )}

            {loginStatus === true ? (
              <button
                className=""
                onClick={handleSignOut}
                aria-label="Sign Out"
              >
                {t.SignOut}
              </button>
            ) : (
              <Link href="/auth/signIn">
                <a>
                  <button className="" aria-label="SignIn">
                    {t.SignIn}
                  </button>
                </a>
              </Link>
            )}

            <Link href="/contact">
              <a className="">{t.ContactUs}</a>
            </Link>
          </div>
        ) : null}

        <div className="absolute right-3 top-3 lg:block border-2 border-blue-200 px-2 hidden">
          <button
            className="flex"
            onClick={handleDropdown}
            aria-label="Change the languages"
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
          <select
            className="lg:flex lg:flex-col lg:my-auto lg:w-20 lg:mt-8 rounded-md bg-indigo-500 hidden absolute top-8 right-6 cursor-pointer "
            onChange={changeLanguages}
            defaultValue={locale}
          >
            <option
              className=" block px-4 py-1 text-base font-semibold text-center text-white border-white"
              value="en"
            >
              en
            </option>
            <option
              className=" block px-4 py-1 text-base font-semibold text-center text-white border-white"
              value="hi"
            >
              hi
            </option>
          </select>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
