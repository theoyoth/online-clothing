import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className="overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Layout;
