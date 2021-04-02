import { useContext } from "react";
import Header from "../components/Header";

import AuthContext from "../context/AuthContext";

export default function Home() {
  const { user, logoutUser, getToken } = useContext(AuthContext);

  return (
    <>
      <head>
        <title>Pollls</title>
      </head>

      <body>
        <section className="w-full px-3 antialiased bg-yellow-400 lg:px-6">
          <div className="mx-auto max-w-7xl">
            <Header />
            <div className="container py-32 mx-auto text-center sm:px-4">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                <span className="block">Simplify the way you</span>{" "}
                <span className="relative inline-block mt-3 text-transparent text-white">
                  design websites
                </span>
              </h1>
              <div className="max-w-lg mx-auto mt-6 text-sm text-center text-yellow-400 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
                If you are ready to change the way you design websites, then
                you'll want to use our block builder to make it fun and easy!
              </div>
              <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-none rounded-md">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="w-full h-12 px-6 py-2 font-medium text-yellow-400 focus:outline-none"
                />
                <span className="relative top-0 right-0 block">
                  <button
                    type="button"
                    className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-yellow-200 border border-transparent hover:bg-yellow-500 focus:outline-none active:bg-yellow-500"
                  >
                    Sign Up
                  </button>
                </span>
              </div>
              <div className="mt-8 text-sm text-yellow-100">
                By signing up, you agree to our terms and services.
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
