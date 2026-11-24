import Link from "next/link";

export function Footer() {
  const address = process.env.AOF_CAMPUS_ADDRESS?.trim();

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Art of Freelancing Karachi</p>
          {address && <p className="footer-address">{address}</p>}
        </div>
        <div className="footer-links">
          <nav aria-label="Course navigation">
            <Link href="/#courses">Courses</Link>
            <Link href="/#campus">Campus</Link>
          </nav>
          <nav aria-label="Social links">
            <a href="https://www.facebook.com/Artoffreelancing/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/artoffreelancing/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.instagram.com/aofkarachicampus/" target="_blank" rel="noreferrer">Karachi campus</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
