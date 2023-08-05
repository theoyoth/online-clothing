import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "../lib/Context";

import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
