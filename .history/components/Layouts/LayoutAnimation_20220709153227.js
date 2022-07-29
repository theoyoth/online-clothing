import { motion, animatePresence } from "framer-motion";
import Head from "next/head";

const LayoutAnimation = () => {
  return (
    <animatePresence>
      <motion.div></motion.div>
    </animatePresence>
  );
};

export default LayoutAnimation;
