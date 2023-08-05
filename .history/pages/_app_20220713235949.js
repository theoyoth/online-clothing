import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
