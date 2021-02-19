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
            <div className="container pt-12 mx-auto text-center sm:px-4">
              <a
                href="https://pollls.co/"
                className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0"
              >
                <span className="text-4xl font-black leading-none text-white select-none logo">
                  po<span className="text-yellow-200">lll</span>s
                </span>
              </a>
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                <span className="block">
                  <span className="text-yellow-200">s</span>implified{" "}
                  <span className="text-yellow-200">s</span>urveying
                </span>
              </h1>
              <div className="max-w-lg mx-auto mt-6 text-sm text-center text-yellow-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
                The newest, fastest, easiest, <i>sleekest</i> way to make polls,
                <br />
                surveys, forms, login forms, and <b>more!</b>
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
                    With pollls' new social media interface, it's never been
                    easier to get answers.
                  </p>
                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <a
                      href="https://pollls.co/signup/"
                      className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-yellow-400 rounded-md sm:mb-0 hover:bg-yellow-500 sm:w-auto  transition ease-in-out"
                    >
                      Create An Account For Free!
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full h-auto overflow-hidden">
                  <img src="smart_answers.svg" />
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
