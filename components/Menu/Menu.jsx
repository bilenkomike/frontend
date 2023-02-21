import classes from "./Menu.module.scss";
import Image from "next/image";
import Arrow from "../../public/icons/arrow.svg";
import MenuIcon from "../../public/icons/menu-menu_alt_05.svg";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <div className={classes.menu__lang}>
        ENG
        <Arrow className={classes.svg} />
      </div>
      <div className={classes.menu__icon}>
        <MenuIcon className={classes.svg} />
      </div>
    </div>
  );
};

export default Menu;
