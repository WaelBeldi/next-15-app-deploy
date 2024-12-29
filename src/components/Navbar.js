import Link from "next/link";

export default function Navbar() {

  return (
    <header className="header">
        <nav className="nav">
          <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/products"><li>Products</li></Link>
          </ul>
        </nav>
      </header>
  );
}