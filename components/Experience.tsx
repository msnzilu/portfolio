"use client";

import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Junior Full-Stack Developer Intern",
    company: "FinTech & Innovations Ltd",
    location: "Remote (Nairobi, Kenya)",
    period: "June 2024 – December 2024",
    description: [
      "Collaborated with a 5-person remote team to build and ship backend APIs for a mobile payment tracking application using Java/Spring Boot and Python/Django",
      "Developed secure, thread-safe RESTful APIs for payment processing endpoints handling high-concurrency transactions in a FinTech environment",
      "Optimized PostgreSQL queries and debugged React frontend integration issues, reducing page load times by 20%",
      "Implemented user authentication, data endpoints, and participated in daily Agile stand-ups + bi-weekly code reviews on GitHub",
      "Wrote clean, tested code following senior feedback; adopted best practices with pytest and modular design",
      "Containerized development environments using Docker and assisted in QA handover with cross-browser testing",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "Django REST Framework",
      "NextJS",
      "PostgreSQL",
      "Docker",
      "Git & GitHub",
      "pytest",
    ],
  },
];

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Work{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My professional journey in software development and AI engineering
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>

              {/* Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 ml-8 md:ml-0">
                  {/* Header */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Final version – colored bullets + tight + justified + centered feel */}
                  <div className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 
                 hover:bg-slate-800/30 rounded-lg 
                 transition-all duration-200"
                      >
                        {/* Colored bullet – centered vertically, not left-stuck */}
                        <div
                          className="w-2 h-2 rounded-full bg-cyan-500 
                      flex-shrink-0 
                      group-hover:scale-150 group-hover:bg-cyan-400 
                      transition-transform duration-200"
                        />

                        <p
                          className="flex-1 text-slate-300 
                    leading-snug text-sm 
                    text-justify hyphens-auto 
                    pr-2"
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Technologies */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
