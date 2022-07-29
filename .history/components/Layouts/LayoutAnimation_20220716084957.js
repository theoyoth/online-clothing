import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 1, x: 0, y: -100 },
};

const LayoutAnimation = ({ children, title }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, type: "easeInOut" }}
    >
      {title && (
        <Head>
          {" "}
          <title>{title}</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      {children}
    </motion.div>
  );
};

export default LayoutAnimation;
