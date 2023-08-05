import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <motion.div className="overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
