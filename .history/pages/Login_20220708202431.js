const Login = () => {
  return (
    <div className="relative h-screen grid place-items-center">
      <div className="w-1/2">
        <h1 className="text-center font-semibold text-3xl">Login</h1>
        <form className="flex flex-col mt-4 border border-1 border-black">
          <div className="w-full">
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
              className="px-4 py-2 my-4 border-2 border-black focus:outline-none w-3/4"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your password
            </label>
            <input
              type="password"
              placeholder="your password"
              className="px-4 py-2 my-4 border-[1px] border-black focus:outline-none w-3/4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
