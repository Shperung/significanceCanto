import Link from "next/link";

const Navbar = () => (
  <nav>
    <Link href="/">
      <a>Main</a>
    </Link>
    <Link href="/artists">
      <a>Artists</a>
    </Link>
  </nav>
);

export default Navbar;
