import { motion } from "framer-motion";

const Login = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div
      className="relative h-screen grid place-items-center"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <div className="w-1/2 py-4 border border-1 border-black">
        <h1 className="text-center font-semibold text-3xl">Login</h1>
        <form className="w-full flex flex-col justify-center items-center mt-4 border-t-[1px] border-black py-4">
          <div className="w-3/4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-500"
            >
              email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your email"
              className="px-4 py-2 mb-4 border-[1px] border-gray-600 w-full focus:ring-black"
            />
          </div>
          <div className="w-3/4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-500"
            >
              password
            </label>
            <input
              type="password"
              placeholder="your password"
              className="px-4 py-2 mb-4 border-[1px] border-gray-600 focus:ring-black w-full"
            />
          </div>
          <button className="w-3/4 mt-4 py-2 bg-gray-900 text-center text-white hover:bg-gray-700 duration-150 ease-out">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
