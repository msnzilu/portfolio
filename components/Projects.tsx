'use client';

import { ExternalLink, Github } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    featured: boolean;
}

const projects: Project[] = [
    {
        title: 'Agents47 - Multi-Agent AI Platform',
        description: 'A sophisticated multi-agent AI system built with LangChain and LangGraph. Features autonomous agents for research, content creation, and data analysis with real-time collaboration capabilities.',
        technologies: ['Python', 'LangChain', 'LangGraph', 'OpenAI', 'FastAPI', 'React'],
        github: 'https://github.com/juliusmatheka/agents47',
        demo: 'https://agents47.demo.com',
        featured: true,
    },
    {
        title: 'FinTech Transaction Tracker',
        description: 'Comprehensive financial management platform with AI-powered expense categorization, budget tracking, and predictive analytics. Includes secure payment integration and real-time notifications.',
        technologies: ['React', 'Django', 'PostgreSQL', 'Stripe', 'TensorFlow', 'Docker'],
        github: 'https://github.com/juliusmatheka/fintech-tracker',
        demo: 'https://fintech-tracker.demo.com',
        featured: true,
    },
    {
        title: 'E-Commerce API Platform',
        description: 'RESTful API for a full-featured e-commerce platform with product management, shopping cart, order processing, and payment integration. Built with scalability and security in mind.',
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'JWT', 'Swagger'],
        github: 'https://github.com/juliusmatheka/ecommerce-api',
        featured: true,
    },
    {
        title: 'AI Resume Analyzer',
        description: 'Intelligent resume parsing and analysis tool that extracts key information and provides optimization suggestions using NLP and machine learning.',
        technologies: ['Python', 'OpenAI', 'Next.js', 'MongoDB', 'Tailwind CSS'],
        github: 'https://github.com/juliusmatheka/resume-analyzer',
        featured: false,
    },
    {
        title: 'Real-Time Chat Application',
        description: 'Scalable real-time messaging platform with WebSocket support, end-to-end encryption, file sharing, and group chat functionality.',
        technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Redis'],
        github: 'https://github.com/juliusmatheka/chat-app',
        featured: false,
    },
    {
        title: 'Portfolio Analytics Dashboard',
        description: 'Interactive analytics dashboard for tracking investment portfolios with real-time market data, performance metrics, and AI-powered insights.',
        technologies: ['React', 'Django', 'PostgreSQL', 'Chart.js', 'Alpha Vantage API'],
        github: 'https://github.com/juliusmatheka/portfolio-dashboard',
        featured: false,
    },
];

export default function Projects() {
    return (
        <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A showcase of my recent work in full-stack development and AI integration
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                        {/* Project Content */}
                        <div className="p-6 space-y-4">
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 pt-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}