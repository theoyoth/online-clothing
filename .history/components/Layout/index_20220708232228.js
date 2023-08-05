import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="overflow-x-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <Navbar />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
