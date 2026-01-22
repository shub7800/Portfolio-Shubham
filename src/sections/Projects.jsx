import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Netflix GPT",
    description:
      "A Netflix-inspired AI movie discovery platform built with React and Tailwind CSS, featuring Firebase authentication, GPT-powered search using the OpenAI API, and real-time movie data fetched from the TMDB API. The application focuses on performance, clean UI, responsive design, and personalized content recommendations.",
    image: "/projects/Project1.png",
    tags: ["React", "Tailwind CSS", "Firebase", "OpenAI API", "TMDB API"],
    link: "https://netflix-gpt-chi-peach.vercel.app/",
    github: "https://github.com/shub7800/Netflix-Gpt",
  },
  {
    title: "Prescripto",
    description:
      "An online doctor appointment booking platform designed to simplify healthcare access. Built with React and Tailwind CSS, Prescripto features secure user authentication, department-wise doctor listings, responsive UI design, and an intuitive booking flow. The application focuses on clean architecture, performance optimization, and seamless user experience across all devices.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "Firebase", "Responsive Design"],
    link: "https://prescripto.vercel.app/",
    github: "https://github.com/shub7800/Prescripto",
  },
  {
    title: "Real Estate Website",
    description:
      "A modern and responsive real estate platform built with React and Tailwind CSS. The website showcases property listings with a clean, user-friendly interface and includes a fully functional contact form powered by Web3Forms for seamless email communication. The project emphasizes performance optimization, responsive layouts, and a polished UI to deliver a smooth browsing experience across all devices.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "Web3Forms", "Responsive Design"],
    link: "https://real-estate-website-eight-mu.vercel.app/",
    github: "https://github.com/shub7800/Real-Estate-Website",
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Building real-world
            <span className="font-serif italic font-normal text-white">
              {" "}
              web solutions.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A curated selection of projects built during my 1.2+ years of
            experience as a software developer, focusing on scalable UI, clean
            architecture, and practical problem-solving using React, JavaScript,
            and modern web tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
