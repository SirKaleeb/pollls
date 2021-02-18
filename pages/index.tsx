import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Pollls</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <body className="bg-yellow-500">
        <header className="h-auto w-full px-3 pb-12 antialiased select-none lg:px-6">
          <div className="mx-auto max-w-7xl">
            <nav className="flex items-center w-full h-24">
              <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                <a href="/" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                  <span className="text-4xl font-black leading-none text-white select-none logo">
                    po<span className="text-yellow-200">lll</span>s
                  </span>
                </a>
                <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">
                  <div className="flex-col w-full h-auto h-full overflow-hidden bg-yellow-500 rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                    <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-yellow-700 md:text-yellow-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                      <a
                        href="#"
                        className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-yellow-700 md:hover:text-white lg:mx-3 md:text-center transition ease-in-out"
                      >
                        Browse
                      </a>
                      <a
                        href="#"
                        className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-yellow-700 md:hover:text-white lg:mx-3 md:text-center transition ease-in-out"
                      >
                        Create
                      </a>
                    </div>
                    <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                      <a
                        href="#_"
                        className="w-full pl-6 mr-0 text-yellow-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto"
                      >
                        Sign In
                      </a>
                      <a
                        href="#_"
                        className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-yellow-600 whitespace-no-wrap transition duration-150 ease-in-out bg-yellow-100 border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-yellow-700 focus:shadow-outline-yellow active:bg-yellow-700"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden">
                  <svg
                    className="w-6 h-6"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                  <svg
                    className="w-6 h-6"
                    x-show="showMenu"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              </div>
            </nav>
            <div className="container py-8 mx-auto text-center sm:px-4">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                <span className="block">
                  <span className="text-yellow-200">s</span>implified{" "}
                  <span className="text-yellow-200">s</span>urveying
                </span>
              </h1>
              <div className="max-w-lg mx-auto mt-6 text-sm text-center text-yellow-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
                If you are ready to change the way you design websites,
                <br />
                then use our block builder to make it fun and easy!
              </div>
            </div>
          </div>
        </header>

        <section className="px-2 py-32 bg-white md:px-0">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline text-black">
                      the smartest way to{" "}
                    </span>
                    <span className="block xl:inline text-yellow-400">
                      get answers
                    </span>
                  </h1>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    It's never been easier to build beautiful websites that
                    convey your message and tell your story.
                  </p>
                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <a
                      href="#_"
                      className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-yellow-400 rounded-md sm:mb-0 hover:bg-yellow-500 sm:w-auto  transition ease-in-out"
                    >
                      Try It Free
                    </a>
                    <a
                      href="#_"
                      className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 transition ease-in-out"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full h-auto overflow-hidden">
                  <img src="form_components_graphic.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Index;
