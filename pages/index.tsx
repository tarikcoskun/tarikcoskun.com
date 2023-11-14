// Components
import Layout from "@/ui/Layout";
import Box from "@/ui/Box";
import Section from "@/ui/Section";
import Image from "next/image";
import Slider from "@/ui/Slider";
import { ArrowUpRightIcon } from "@/ui/Icon";

// Data
import { works } from "@/data/works";
import { social } from "@/data/social";

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
              hi@tarikcoskun.com
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 rounded-full bg-theme-surface p-1.5 pr-3 text-theme-heading transition-colors hover:bg-color-neutral-800 hover:text-color-neutral-100"
              >
                <link.icon width={18} height={18} /> <span className="text-sm font-medium leading-none">{link.label}</span>
              </a>
            ))}
          </div>
        </Section>
      </Box>

      <Box className="overflow-hidden">
        <Section>
          <h2 className="font-serif text-xl font-medium text-theme-heading">Experiences</h2>
          <div className="mt-6 flex flex-col gap-y-16">
            {works.map((work, idx) => (
              <Work {...work} key={idx} />
            ))}
          </div>
        </Section>
      </Box>
    </Layout>
  );
}

function Work(work: (typeof works)[number]) {
  return (
    <article>
      <header className="flex items-center gap-x-4">
        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-theme-outline ring-offset-2 ring-offset-theme-background"
        >
          <Image src={work.logo} alt={work.title} width={48} height={48} className="h-full w-full rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRightIcon width={24} height={24} className="text-white" />
          </div>
        </a>
        <div>
          <h3 className="leading-none">
            <a href={work.link} target="_blank" rel="noopener noreferrer" className="link font-medium">
              {work.title}
            </a>
          </h3>
          <span className="text-sm leading-none text-theme-subtext">
            {new Date(work.startDate).getFullYear()}-{new Date(work.endDate).getFullYear().toString().substring(2)}
          </span>
        </div>
      </header>

      <div className="mt-4">
        <p>{work.description}</p>
        {work.slides && <Slider slides={work.slides} />}
      </div>
    </article>
  );
}
