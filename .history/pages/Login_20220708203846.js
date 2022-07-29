const Login = () => {
  return (
    <div className="relative h-screen grid place-items-center">
      <div className="w-1/2 border border-1 border-black">
        <h1 className="text-center font-semibold text-3xl">Login</h1>
        <form className="w-full flex flex-col justify-center items-center mt-4 border border-1 border-black">
          <div className="w-full border border-1 border-black">
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
              className="px-4 py-2 mb-4 border-[1px] border-gray-600 w-3/4 focus:ring-black"
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
              className="px-4 py-2 mb-4 border-[1px] border-gray-600 focus:ring-black w-3/4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
