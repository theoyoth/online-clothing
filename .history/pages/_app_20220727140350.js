import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../lib/Context";

import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <CartProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Toaster />
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
