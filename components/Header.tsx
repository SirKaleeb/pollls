import { useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="flex items-center w-full h-24 select-none">
      <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
        <span className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
          <Link href="/">
            <span className="p-1 text-3xl font-black leading-none text-white select-none">
              <span>
                po<span className="text-yellow-200">lll</span>s
              </span>
            </span>
          </Link>
        </span>
        <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">
          <div className="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
            <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-yellow-400 md:text-yellow-50 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <a
                href="#"
                className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-yellow-400 md:hover:text-white lg:mx-3 md:text-center"
              >
                Features
              </a>
              <a
                href="#"
                className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-yellow-400 md:hover:text-white lg:mx-3 md:text-center"
              >
                Blog
              </a>
              <a
                href="#"
                className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-yellow-400 md:hover:text-white lg:mx-3 md:text-center"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
              {!user && (
                <Link href="login">
                  <span className="cursor-pointer inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-yellow-400 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent hover:bg-white focus:outline-none focus:border-yellow-500 focus:shadow-yellow-NaN active:bg-yellow-500 rounded-none rounded-md">
                    Go To Account
                  </span>
                </Link>
              )}

              {user && (
                <Link href="account">
                  <span className="cursor-pointer inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-yellow-400 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent hover:bg-white focus:outline-none focus:border-yellow-500 focus:shadow-yellow-NaN active:bg-yellow-500 rounded-none rounded-md">
                    Go To Account
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10 text-gray-100">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
