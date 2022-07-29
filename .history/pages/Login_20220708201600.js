const Login = () => {
  return (
    <div className="relative h-screen grid place-items-center">
      <div className="border border-1 border-black w-1/2">
        <h1 className="text-center font-semibold text-3xl">Login</h1>
        <form className="border border-1 border-black flex flex-col">
          <input
            type="text"
            placeholder="your email"
            className="px-4 py-2 my-4 border-b-1 border-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="your password"
            className="px-4 py-2 my-4 border-b-1 border-black focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
