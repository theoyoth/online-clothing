import Navbar from "../Layout";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <div>Layout</div>
    </>
  );
};

export default Layout;
