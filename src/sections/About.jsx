import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Building reusable, modular components with clear structure, maintainable logic, and scalable architecture.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Improving application performance through efficient state management, memoization, and optimized rendering.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating with cross-functional teams, participating in code reviews, and contributing to shared engineering standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously learning modern tools and patterns to build reliable, production-ready applications.",
  },
];


export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building reliable software,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a Software Developer with experience building
                production-ready web applications focused on performance,
                scalability, and clean architecture. My journey started with
                strong fundamentals in programming and problem-solving and has
                grown into working on enterprise-level applications used in
                real-world environments.
              </p>

              <p>
                Currently, I work at{" "}
                <span className="font-medium text-foreground">
                  CETIZION Verifica
                </span>
                , contributing to enterprise applications and internal tools
                using React.js and modern JavaScript. My work includes building
                reusable component systems, integrating REST APIs, implementing
                secure authentication flows, and optimizing application
                performance through efficient state management and memoization
                techniques.
              </p>

              <p>
                I also have working knowledge of Node.js, Express.js, and
                MongoDB, which helps me understand backend workflows, API
                design, and data flow across the application. This allows me to
                collaborate effectively with backend teams and build features
                with a strong understanding of end-to-end system behavior.
              </p>

              <p>
                I enjoy working with React.js, Redux Toolkit, Context API, and
                Tailwind CSS, and I focus on writing maintainable, scalable code
                that performs well in production. I actively participate in code
                reviews, follow best engineering practices, and continuously
                improve my technical skill set.
              </p>

              <p>
                When I’m not coding, I spend time learning new technologies,
                refining my problem-solving skills, and building side projects
                to explore better patterns and tools.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My aim is to build software that is efficient, scalable, and
                easy to maintain — systems that solve real problems and evolve
                with the product.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
