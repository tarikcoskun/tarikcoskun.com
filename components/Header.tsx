import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header>
      <section>
        <h1 className="mb:hidden">Tarık Coşkun</h1>
        <div id="links">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#works">Works</Link>
          <a
            href="mailto:tarikcskun@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="pc:button"
          >
            Contact
          </a>
        </div>
      </section>
    </header>
  );
};
