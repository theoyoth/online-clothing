import Navbar from "../Navbar";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <div className="py-1 px-4">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
