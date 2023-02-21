import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={84.42} height={48} />
    </Link>
  );
};

export default Logo;
