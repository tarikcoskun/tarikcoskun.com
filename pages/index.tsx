import anime from "animejs";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { config } from "@/web.config";
import { useTheme } from "next-themes";
import { Tech } from "@/components/Tech";
import { Work } from "@/components/Work";
import { Moon, Sun, GitHub, Twitter } from "@/icons";

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    anime({
      targets: ["#home h1", "#home h2", "#home p"],
      opacity: [0, 1],
      translateX: [-30, 0],
      delay: anime.stagger(250),
      easing: "spring(0, 10, 20, 0)",
    });

    anime({
      targets: ["#accounts a"],
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(250, { start: 1000 }),
      easing: "spring(0, 10, 20, 0)",
    });
  }, []);

  return (
    <main>
      <header>
        <section>
          <h1 className="mb:hidden">{config.name}</h1>
          <div id="links">
            <Link to="home" smooth={true} offset={-73} activeClass="active" spy>
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-73}
              activeClass="active"
              spy
            >
              About
            </Link>
            <Link
              to="works"
              smooth={true}
              offset={-73}
              activeClass="active"
              spy
            >
              Works
            </Link>
            <a
              href={`mailto:${config.email}`}
              target="_blank"
              rel="noreferrer"
              className="button mb:hidden"
            >
              Contact
            </a>
            <button
              className="button theme-switch"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Moon /> : <Sun />}
            </button>
          </div>
        </section>
      </header>

      <div className="wrapper wrapper-home">
        <section id="home">
          <h1>{config.name}</h1>
          <h2>{config.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: config.bio }} />

          <div id="accounts">
            <a
              href={`mailto:${config.email}`}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Contact
            </a>
            <a
              href={`https://github.com/${config.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href={`https://twitter.com/${config.twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </div>
        </section>
      </div>

      <div className="wrapper wrapper-about">
        <section id="about">
          <div id="first-col">
            <h1>About Me</h1>
            <p>{config.about}</p>
            <p>
              Recently, I&#39;ve been working with...
              <div className="recent-tech">
                {config.recentTech.map((tech, index) => (
                  <span key={index}>
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </p>
          </div>

          <div id="second-col">
            {config.favouriteTech.map((tech, index) => (
              <Tech
                icon={tech.icon}
                name={tech.name}
                since={tech.since}
                key={index}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="wrapper wrapper-works">
        <section id="works">
          <h1 className="text-center">Works</h1>
          <div>
            {config.works.map((work, index) => (
              <Work
                href={work.href}
                img={work.img}
                name={work.name}
                role={work.role}
                description={work.description}
                key={index}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
