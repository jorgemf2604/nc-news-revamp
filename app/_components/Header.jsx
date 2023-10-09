import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";
import Animation from "./Animation";

const Header = () => {
  return (
    <header className="px-8 py-4 shadow-md fixed left-0 right-0 h-20 bg-white z-20">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <div className="hover:scale-105 hover:cursor-pointer transition duration-300">
          <Link href="/">
            <Image src={Logo} alt="my logo" height={50} />
          </Link>
        </div>
        <div className="hidden md:block">
          <Animation />
        </div>
        <nav className="flex items-center gap-4">
          <button className="nav-button">
            <Link href="/">Home</Link>
          </button>
          <button className="nav-button">
            <Link href="/articles">Articles</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
