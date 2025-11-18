"use client";

import { Code2, Lightbulb, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Passionate about building intelligent solutions that make a
            difference
          </p>
        </div>

        {/* Main Content – Mobile: Stacked | Desktop: Side-by-side */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Left: Bio Text */}
          <div className="space-y-5 text-slate-300">
            <p className="text-base sm:text-lg leading-relaxed">
              I&apos;m a Full-Stack Developer and AI Engineer with a passion for
              creating innovative solutions at the intersection of web
              development and artificial intelligence. With expertise in both
              frontend and backend technologies, I specialize in building
              scalable applications that leverage the power of AI.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              My journey took an unconventional path - I began my career in
              disaster management before transitioning back to my roots in tech.
              This unique background gives me a problem-solving perspective that
              combines crisis response thinking with technical innovation.
              I&apos;ve since worked on diverse projects ranging from FinTech
              platforms to multi-agent AI systems, always focused on writing
              clean, maintainable code and creating intuitive user experiences.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring the latest
              developments in AI, contributing to open-source projects, or
              sharing knowledge with the developer community. I&apos;m always
              eager to take on new challenges and collaborate on projects that
              push the boundaries of what&apos;s possible.
            </p>
          </div>

          {/* Right: Highlight Cards – Mobile: 1-col → Tablet: 2-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Code2,
                title: "Full-Stack Expertise",
                desc: "React · Next.js · Django · Spring Boot",
                color: "blue",
              },
              {
                icon: Lightbulb,
                title: "AI Integration",
                desc: "LangChain · OpenAI · RAG · Multi-Agent Systems",
                color: "cyan",
              },
              {
                icon: Zap,
                title: "Performance Focused",
                desc: "Optimized, scalable, production-ready code",
                color: "purple",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Agile · Code Reviews · Remote-First Teams",
                color: "green",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-5 sm:p-6 
                         hover:border-cyan-500 hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center
                    bg-${item.color}-500/10 group-hover:bg-${item.color}-500/20 transition-colors`}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section – Always 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "15+", label: "Technologies Mastered" },
            { number: "100%", label: "Commitment" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-bold 
                bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                {stat.number}
              </div>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
