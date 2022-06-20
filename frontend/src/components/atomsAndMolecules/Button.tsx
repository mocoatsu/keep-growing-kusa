import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export function Button({ children, ...buttonProps }: props & ButtonProps) {
  return <ChakraButton {...buttonProps}>{children}</ChakraButton>;
}
