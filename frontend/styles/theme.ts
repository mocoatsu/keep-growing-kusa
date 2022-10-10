import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#F7FAFC",
        margin: "5rm",
      },
      html: {
        height: "100%",
      },
    },
  },
});
