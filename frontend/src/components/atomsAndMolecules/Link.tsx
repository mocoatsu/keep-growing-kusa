import Link from "next/link";
import { Link as ChakuraLink } from "@chakra-ui/react";

export const HeaderLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export const NavLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href} passHref>
      <ChakuraLink>{name}</ChakuraLink>
    </Link>
  );
};
