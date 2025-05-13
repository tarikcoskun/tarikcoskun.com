import { Icon } from "./components/Icon"
import { Slider } from "./components/Slider"
import { projects } from "./constants/projects"
import { socials } from "./constants/socials"
import { works } from "./constants/works"

function App() {
	return (
		<main className="font-sans">
			<div className="from-gradient bg-gradient-to-b to-transparent px-6 pt-24 pb-12 md:pt-32">
				<section className="mx-auto w-full max-w-(--content-width)">
					<h1 className="text-heading font-serif text-xl font-medium">Tarık Coşkun</h1>
					<p className="mt-3">Freelance web developer from Istanbul, TR.</p>
					<div className="mt-6 flex flex-wrap gap-1.5">
						{socials.map((link) => (
							<a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="button group relative gap-x-1.5 overflow-hidden p-1.5 pr-3 hover:pr-[calc(var(--spacing)*3+15px)]"
							>
								<Icon icon={link.icon} size={18} />
								<span className="text-sm leading-none font-medium">{link.label}</span>
								<Icon
									icon="lucide:arrow-up-right"
									className="text-surface-300 absolute right-1.5 origin-bottom-left scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
								/>
							</a>
						))}
					</div>
				</section>
			</div>

			<div className="overflow-hidden px-6 py-12">
				<section className="mx-auto w-full max-w-(--content-width)">
					<h2>Experiences</h2>
					<div className="mt-6 flex flex-col gap-y-12">
						{works.map((work) => (
							<article key={work.title}>
								<h3 className="text-heading font-medium">{work.title}</h3>
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

			<div className="px-6 pt-12 pb-24 md:pb-32">
				<section className="mx-auto w-full max-w-(--content-width)">
					<h2>Projects</h2>
					<div className="mt-6 flex flex-col gap-y-8">
						{projects.map((project) => (
							<article key={project.title}>
								<h3 className="text-heading font-medium">
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
	)
}

export default App
