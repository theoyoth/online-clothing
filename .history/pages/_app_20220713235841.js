import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
