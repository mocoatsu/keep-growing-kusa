import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h1"} fontSize="2em">
      {children}
    </Heading>
  );
};
