import { useEffect } from "react";
import anime from "animejs";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";

import { Tech } from "@components/Tech";
import { Work } from "@components/Work";

import SunIcon from "@icons/Sun";
import MoonIcon from "@icons/Moon";
import GitHubIcon from "@icons/GitHub";
import TwitterIcon from "@icons/Twitter";
import ReactIcon from "@icons/Tech/React";
import VueIcon from "@icons/Tech/Vue";
import TailwindIcon from "@icons/Tech/Tailwind";
import SassIcon from "@icons/Tech/Sass";
import TypeScriptIconInline from "@icons/Tech/TypeScriptInline";
import VueIconInline from "@icons/Tech/VueInline";
import ReactIconInline from "@icons/Tech/ReactInline";
import SvelteIconInline from "@icons/Tech/SvelteInline";
import TailwindIconInline from "@icons/Tech/TailwindInline";
import { GameMakerIconInline } from "@icons/Tech/GameMakerInline";

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
          <h1 className="mb:hidden">Tarık Coşkun</h1>
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
            <button
              className="button theme-switch"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </section>
      </header>

      <div className="wrapper wrapper-home">
        <section id="home">
          <h1>Tarık Coşkun</h1>
          <h2>Full-stack Developer</h2>
          <p>
            My name is Tarık and I&#39;m a full-stack developer from Turkey
            <br />I like working on front-end more
          </p>

          <div id="accounts">
            <a
              href="mailto:tarikcskun@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Contact
            </a>
            <a
              href="https://github.com/tarikcoskun"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/tarikcskun"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
        </section>
      </div>

      <div className="wrapper wrapper-about">
        <section id="about">
          <div id="first-col">
            <h1>About Me</h1>
            <p>
              I&#39;ve been in web development since 2018. Since then, I&#39;ve
              been learning more and more technologies. I mainly use Node.js
              based technologies.
            </p>
            <p>
              Recently, I&#39;ve been working with...
              <div className="recent-tech">
                <span>
                  <TypeScriptIconInline />
                  TypeScript
                </span>
                <span>
                  <VueIconInline /> Vue
                </span>
                <span>
                  <ReactIconInline /> React
                </span>
                <span>
                  <SvelteIconInline /> Svelte
                </span>
                <span>
                  <TailwindIconInline /> Tailwind
                </span>
                <span>
                  <GameMakerIconInline /> GML
                </span>
              </div>
            </p>
          </div>

          <div id="second-col">
            <Tech icon={<VueIcon />} title="Vue" since="2021" />
            <Tech icon={<ReactIcon />} title="React" since="2021" />
            <Tech icon={<TailwindIcon />} title="Tailwind" since="2020" />
            <Tech icon={<SassIcon />} title="Sass" since="2018" />
          </div>
        </section>
      </div>

      <div className="wrapper wrapper-works">
        <section id="works">
          <h1 className="text-center">Works</h1>
          <div>
            <Work
              href="https://discords.com/templates"
              img="templates"
              title="Discord Templates"
              role="Moderator"
              description="A template library that helps you create your own kingdom with a diverse range of templates"
            />
            <Work
              href="https://premid.app"
              img="premid"
              title="PreMiD"
              role="Translator"
              description="A utility that allows you to show what you're doing on the web in your Discord status"
            />
            <Work
              href="https://crumblingstatue.github.io/FloweysTimeMachine"
              img="floweystimemachine"
              title="Flowey's Time Machine"
              role="Designer"
              description="An editor tool for Undertale that allows you to change your save content with a friendly UI"
            />
            <Work
              href="https://unicorns.software"
              img="unicornssoftware"
              title="Unicorn's Software"
              role="Lead Developer"
              description="An editor tool for Will You Snail? that allows you to change your save content with a friendly UI"
            />
            <Work
              href="https://crumblingstatue.github.io/FloweysTimeMachine"
              img="willyousnail"
              title="Will You Snail?"
              role="Translator & Tester"
              description="A fast paced platformer where an evil AI tries to kill you by predicting your movement"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
