import Link from "next/link";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="logo">
          Next<span>Course</span>
        </Link>

        <nav className="navbar">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="/blog" className="nav-link">
            Blog
          </Link>

         

          <Link href="/product" className="nav-link">
            Products
          </Link>

        </nav>

      
        <div className="header-actions">
          <Link href="/login" className="btn btn-outline">
            Login
          </Link>

          <Link href="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;