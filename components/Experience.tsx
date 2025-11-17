'use client';

import { Briefcase, Calendar } from 'lucide-react';

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
        title: 'Full-Stack Developer & AI Engineer',
        company: 'TechVision Solutions',
        location: 'Nairobi, Kenya',
        period: 'Jan 2023 - Present',
        description: [
            'Led development of AI-powered FinTech applications serving 10,000+ users with 99.9% uptime',
            'Architected and implemented multi-agent AI systems using LangChain and LangGraph',
            'Reduced API response times by 40% through optimization and caching strategies',
            'Mentored junior developers and conducted code reviews to maintain high code quality',
        ],
        technologies: ['Python', 'React', 'Django', 'LangChain', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Backend Developer',
        company: 'InnovateTech Kenya',
        location: 'Nairobi, Kenya',
        period: 'Jun 2022 - Dec 2022',
        description: [
            'Developed RESTful APIs for e-commerce platform processing 1000+ daily transactions',
            'Implemented secure payment integration with Stripe and M-Pesa',
            'Optimized database queries resulting in 30% performance improvement',
            'Collaborated with frontend team to deliver seamless user experiences',
        ],
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker'],
    },
    {
        title: 'Software Development Intern',
        company: 'Digital Solutions Ltd',
        location: 'Nairobi, Kenya',
        period: 'Jan 2022 - May 2022',
        description: [
            'Assisted in building responsive web applications using React and Node.js',
            'Participated in agile development process and daily stand-ups',
            'Fixed bugs and implemented new features based on user feedback',
            'Wrote unit tests achieving 85% code coverage',
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Jest'],
    },
];

export default function Experience() {
    return (
        <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
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
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>

                            {/* Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 ml-8 md:ml-0">
                                    {/* Header */}
                                    <div className="space-y-2 mb-4">
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
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

                                    {/* Description */}
                                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        {exp.description.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-slate-300 text-sm flex items-start gap-2">
                                                <span className="text-cyan-400 mt-1">▸</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
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