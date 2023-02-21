import Nav from "@/components/Nav/Nav";
import Logo from "@/components/Logo/Logo";
import classes from "./Header.module.scss";
import Menu from "@/components/Menu/Menu";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
      <Menu />
    </header>
  );
};

export default Header;
