const Signup = () => {
  return (
    <div className="relative h-screen grid place-items-center">
      <div className="w-1/2 border border-1 border-black py-4">
        <h1 className="text-center font-semibold text-3xl">Register</h1>
        <form className="w-full flex flex-col justify-center items-center mt-4">
          <div className="w-3/4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your email
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
              className="block text-sm font-medium text-gray-700"
            >
              Your password
            </label>
            <input
              type="password"
              placeholder="your password"
              className="px-4 py-2 mb-4 border-[1px] border-gray-600 focus:ring-black w-full"
            />
          </div>
          <div className="w-3/4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm your password
            </label>
            <input
              type="password"
              placeholder="your password"
              className="px-4 py-2 mb-4 border-[1px] border-gray-600 focus:ring-black w-full"
            />
          </div>
          <button className="px-8 py-2 bg-gray-900 text-center text-white hover:bg-gray-800 duration-150 ease-in">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
