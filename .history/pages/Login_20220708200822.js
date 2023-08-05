const Login = () => {
  return (
    <div className="relative h-screen">
      <div className="mt-16">
        <h1 className="text-center font-semibold text-3xl">Login</h1>
        <form>
          <input type="text" placeholder="your email" />
          <input type="password" placeholder="your password" />
        </form>
      </div>
    </div>
  );
};

export default Login;
