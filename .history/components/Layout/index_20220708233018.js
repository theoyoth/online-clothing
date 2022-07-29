import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="overflow-x-hidden"
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        <Navbar />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
