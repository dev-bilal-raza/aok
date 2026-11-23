import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Art of Freelancing Karachi home">
          <span>Art of Freelancing</span>
          <small>Karachi</small>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#courses">Courses</Link>
          <Link href="/#campus">Campus</Link>
        </nav>
      </div>
    </header>
  );
}
