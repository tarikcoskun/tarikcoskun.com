import { motion } from "framer-motion";

import { Tech } from "@components/Tech";
import { Work } from "@components/Work";

import GitHubIcon from "@icons/GitHub";
import TwitterIcon from "@icons/Twitter";
import ReactIcon from "@icons/React";
import VueIcon from "@icons/Vue";
import TailwindIcon from "@icons/Tailwind";
import SassIcon from "@icons/Sass";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { x: -64, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const account = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const easing = {
  type: "spring",
  stiffness: 30,
};

export default function Home() {
  return (
    <main>
      <div className="wrapper wrapper-home">
        <motion.section
          id="home"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.h1 variants={item} transition={easing}>
            Tarık Coşkun
          </motion.h1>
          <motion.h1 variants={item} transition={easing}>
            Full-stack Developer
          </motion.h1>
          <motion.p variants={item} transition={easing}>
            My name is Tarık and I&#39;m a full-stack web developer from Turkey
            <br />I like working on front-end side more
          </motion.p>

          <motion.div
            id="accounts"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.a
              href="mailto:tarikcskun@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="button"
              variants={account}
              transition={{ ...easing, delay: 1.25 }}
            >
              Contact
            </motion.a>
            <motion.a
              href="https://github.com/tarikcoskun"
              target="_blank"
              rel="noreferrer"
              variants={account}
              transition={{ ...easing, delay: 1.25 }}
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href="https://github.com/tarikcoskun"
              target="_blank"
              rel="noreferrer"
              variants={account}
              transition={{ ...easing, delay: 1.25 }}
            >
              <TwitterIcon />
            </motion.a>
          </motion.div>
        </motion.section>
      </div>

      <div className="wrapper wrapper-bg">
        <section id="about">
          <div id="first-col">
            <h1>About Me</h1>
            <p>
              I&#39;ve been in web development since 2018. Since then, I&#39;ve
              been learning more and more technologies. I mainly use Node.js
              based technologies.
              <br />
              <br />
              Recently, I&#39;ve been working with TypeScript, React, Vue,
              Svelte and Tailwind. And also on the right, you can see the
              technologies I mainly use.
            </p>
          </div>

          <motion.div id="second-col">
            <Tech icon={<ReactIcon />} title="React" since="2021" />
            <Tech icon={<VueIcon />} title="Vue" since="2021" />
            <Tech icon={<TailwindIcon />} title="Tailwind" since="2020" />
            <Tech icon={<SassIcon />} title="Sass" since="2018" />
          </motion.div>
        </section>
      </div>

      <div className="wrapper">
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
