import classes from "./Nav.module.scss";
import CustomLink from "@/ui/Link/Link";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <CustomLink href="/services">Our services</CustomLink>
      <CustomLink href="/portfolio">Portfolio</CustomLink>
      <CustomLink href="/about">About us</CustomLink>
      <CustomLink href="/contact">Contact us</CustomLink>
    </nav>
  );
};

export default Nav;
