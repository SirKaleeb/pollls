import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [input, setInput] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(input);
  };

  return (
    <div>
      <head>
        <title>Login</title>
      </head>

      <body className="overflow-hidden bg-yellow-400 h-screen w-screen flex justify-center items-center">
        <span className="absolute top-10 left-10">
          <a href="/">
            <span className="p-1 text-3xl font-black leading-none text-white select-none">
              <span>
                po<span className="text-yellow-200">lll</span>s
              </span>
            </span>
          </a>
        </span>

        <div className="h-auto w-1/3 rounded-lg shadow-lg bg-white p-12">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex justify-center mb-6">
              <h1 className="text-2xl font-bold text-yellow-400">Log In</h1>
            </div>

            <label className="font-medium text-gray-900 text-md">Email</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="email"
              className="block w-full px-3 py-2 mt-1 text-lg placeholder-gray-400 bg-gray-200 text-gray-500 focus:outline-none rounded-lg"
            />
            <div className="w-full flex justify-center mt-12">
              <button
                type="submit"
                className="bg-white border-2 rounded-md px-4 py-2 text-yellow-400 text-xl border-yellow-400 hover:bg-yellow-400 hover:text-white transition ease-in-out duration-200"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
}
