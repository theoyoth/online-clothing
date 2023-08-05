import { motion, animatePresence } from "framer-motion";
import Head from "next/head";

const LayoutAnimation = ({ children, title }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <animatePresence>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {title && (
          <Head>
            {" "}
            <title>{title} - Theoyoth</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
        {children}
      </motion.div>
    </animatePresence>
  );
};

export default LayoutAnimation;
