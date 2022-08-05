import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/atomsAndMolecules/header";

function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    const MockServer = () => import("../src/mocks/worker");
    MockServer();
  }

  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default App;
