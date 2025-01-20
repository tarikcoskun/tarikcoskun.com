// Components
import { Slider } from "@/ui/Slider";
import { Icon } from "@/ui/Icon";

// Data
import { works } from "@/data/works";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <div className="box hero-gradient">
        <section>
          <h1>Tarık Coşkun</h1>
          <p className="mt-2">Freelance web developer from Istanbul, TR.</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {socials.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button group relative gap-x-1.5 overflow-hidden p-1.5 pr-3 hover:pr-6 hover:text-neutral-50"
              >
                <Icon collection="mdi" icon={link.icon} size={18} />
                <span className="text-sm font-medium leading-none">{link.label}</span>
                <Icon icon="arrow-up-right" className="absolute right-1.5 origin-bottom-left scale-0 !text-neutral-300 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="box overflow-hidden">
        <section>
          <h2>Experiences</h2>
          <div className="mt-6 flex flex-col gap-y-12">
            {works.map((work) => (
              <article key={work.title}>
                <h3>{work.title}</h3>
                <p className="mt-2">{work.description}</p>
                {work.slides && (
                  <div className="mt-6">
                    <Slider slides={work.slides} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="box">
        <section>
          <h2>Projects</h2>
          <div className="mt-6 flex flex-col gap-y-8">
            {projects.map((project) => (
              <article key={project.title}>
                <h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="link">
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2">{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
