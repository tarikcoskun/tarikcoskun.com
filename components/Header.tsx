import { Link, animateScroll as scroll } from "react-scroll";

export const Header: React.FC = () => {
  return (
    <header>
      <section>
        <h1 className="mb:hidden">Tarık Coşkun</h1>
        <div id="links">
          <Link to="home" smooth={true} offset={-73} activeClass="active">
            Home
          </Link>
          <Link to="about" smooth={true} offset={-73} activeClass="active">
            About
          </Link>
          <Link to="works" smooth={true} offset={-73} activeClass="active">
            Works
          </Link>
          <a
            href="mailto:tarikcskun@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Contact
          </a>
        </div>
      </section>
    </header>
  );
};
