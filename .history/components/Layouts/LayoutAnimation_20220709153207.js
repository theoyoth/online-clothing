import { motion, animatePresence } from "framer-motion";

const LayoutAnimation = () => {
  return (
    <animatePresence>
      <motion.div></motion.div>
    </animatePresence>
  );
};

export default LayoutAnimation;
