import { Link } from "react-scroll";

export const Header: React.FC = () => {
  return (
    <header>
      <section>
        <h1 className="mb:hidden">Tarık Coşkun</h1>
        <div id="links">
          <Link to="home" smooth={true} offset={-73} activeClass="active" spy>
            Home
          </Link>
          <Link to="about" smooth={true} offset={-73} activeClass="active" spy>
            About
          </Link>
          <Link to="works" smooth={true} offset={-73} activeClass="active" spy>
            Works
          </Link>
          <a
            href="mailto:tarikcskun@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="button mb:hidden"
          >
            Contact
          </a>
          <a
            href="mailto:tarikcskun@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="pc:hidden"
          >
            Contact
          </a>
        </div>
      </section>
    </header>
  );
};
