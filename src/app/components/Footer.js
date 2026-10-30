import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Footer Brand */}
        <div className="footer-brand">
          <Link href="/" className="logo">
            Next<span>Course</span>
          </Link>

          <p>
            Learn, build, and grow with our practical development resources.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/docs">Documentation</Link>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h3>Resources</h3>

          <Link href="/products">Products</Link>
          <Link href="/users">Users</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Create Account</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Stay Connected</h3>

          <p>Keep learning and building amazing projects.</p>

          <Link href="/about" className="footer-cta">
            Learn More →
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} NextCourse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;