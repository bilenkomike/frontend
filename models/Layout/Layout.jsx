import classes from "./Layout.module.scss";
import Head from "next/head";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>dhg</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
