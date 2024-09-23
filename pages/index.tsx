// Components
import Layout from "@/ui/Layout";
import Box from "@/ui/Box";
import Section from "@/ui/Section";
import Slider from "@/ui/Slider";
import { ArrowUpRightIcon } from "@/ui/Icon";

// Data
import { works } from "@/data/works";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <Layout>
      <Box className="bg-hero-gradient dark:bg-hero-gradient-dark">
        <Section>
          <h1 className="font-serif text-xl lg:text-2xl">
            <span className="font-medium text-theme-heading">Tarık Coşkun.</span> <br className="lg:hidden" /> Developer & Designer.
          </h1>
          <p className="mt-4">
            Front-end developer passionate about crafting experiences with polished interfaces. Always seeking new opportunities. Reach me
            at{" "}
            <a href="mailto:tarikcskun@gmail.com" className="link">
              tarikcskun@gmail.com
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-x-1.5 overflow-hidden rounded-full bg-theme-surface p-1.5 pr-3 text-theme-heading transition-all hover:bg-color-neutral-800 hover:pr-6 hover:text-color-neutral-10"
              >
                <link.icon width={18} height={18} /> <span className="text-sm font-medium leading-none">{link.label}</span>
                <ArrowUpRightIcon className="absolute right-1.5 origin-bottom-left scale-0 !text-color-neutral-300 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Section>
      </Box>

      <Box className="overflow-hidden">
        <Section>
          <h2 className="font-serif text-xl font-medium text-theme-heading">Experiences</h2>
          <div className="mt-6 flex flex-col gap-y-12">
            {works.map((work) => (
              <article key={work.title}>
                <h3 className="leading-none font-medium text-theme-heading">{work.title}</h3>
                <div className="mt-2">
                  <p>{work.description}</p>
                  {work.slides && <Slider slides={work.slides} containerClassName="mt-6" />}
                </div>
              </article>
            ))}
          </div>
        </Section>
      </Box>

      <Box>
        <Section>
          <h2 className="font-serif text-xl font-medium text-theme-heading">Projects</h2>
          <div className="mt-6 flex flex-col gap-y-8">
            {projects.map((project) => (
              <article key={project.title}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link font-medium">
                  {project.title}
                </a>
                <div className="mt-2">
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </Box>
    </Layout>
  );
}
