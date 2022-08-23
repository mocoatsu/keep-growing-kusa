import Link from "next/link";

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
