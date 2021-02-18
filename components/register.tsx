const Register = () => {
  return (
    <>
      <div className="relative flex items-center max-w-md mx-auto mt-12 text-center">
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="w-full h-12 px-6 py-2 font-medium text-yellow-800 rounded-l-full focus:outline-none"
          autoComplete="off"
        />
        <span className="relative top-0 right-0 block rounded-full">
          <button
            type="button"
            className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-yellow-400 border-none outline-none rounded-r-full focus:outline-none"
          >
            Sign Up
          </button>
        </span>
      </div>
      <div className="mt-8 text-sm text-yellow-300">
        By signing up, you agree to our terms and services.
      </div>
    </>
  );
};

export default Register;
