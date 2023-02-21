import classes from "./Link.module.scss";

import Link from "next/link";

const CustomLink = ({ children, href }) => {
  return (
    <Link href={href} className={classes.link}>
      {children}
    </Link>
  );
};

export default CustomLink;
