import Navbar from "../Navbar";
import Footer from "../Footer";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
