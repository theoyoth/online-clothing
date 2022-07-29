const Login = () => {
  return (
    <div className="relative h-screen grid place-items-center">
      <div className="w-1/2">
        <h1 className="text-center font-semibold text-3xl">Login</h1>
        <form className="flex flex-col">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <input
              id="email"
              type="text"
              placeholder="your email"
              className="px-4 py-2 my-4 border-b-2 border-black focus:outline-none"
            />
          </div>
          <input
            type="password"
            placeholder="your password"
            className="px-4 py-2 my-4 border-b-2 border-black focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
