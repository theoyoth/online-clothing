import { motion, animatePresence } from "framer-motion";
import Head from "next/head";

const LayoutAnimation = ({ children, title }) => {
  return (
    <animatePresence>
      <motion.div>
        {title && (
          <Head>
            {" "}
            <title>{title} - Theoyoth</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
      </motion.div>
    </animatePresence>
  );
};

export default LayoutAnimation;
