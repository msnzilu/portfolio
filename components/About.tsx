'use client';

import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

export default function About() {
    return (
        <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                    About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Passionate about building intelligent solutions that make a difference
                </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Description */}
                <div className="space-y-6">
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 leading-relaxed text-lg">
                            I'm a Full-Stack Developer and AI Engineer with a passion for creating innovative solutions
                            at the intersection of web development and artificial intelligence. With expertise in both
                            frontend and backend technologies, I specialize in building scalable applications that
                            leverage the power of AI.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            My journey in software development has led me to work on diverse projects ranging from
                            FinTech platforms to multi-agent AI systems. I believe in writing clean, maintainable code
                            and creating user experiences that are both intuitive and powerful.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            When I'm not coding, I'm exploring the latest developments in AI, contributing to open-source
                            projects, or sharing knowledge with the developer community. I'm always eager to take on new
                            challenges and collaborate on projects that push the boundaries of what's possible.
                        </p>
                    </div>
                </div>

                {/* Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                <Code2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Full-Stack Expertise</h3>
                            <p className="text-slate-400 text-sm">
                                Proficient in modern web technologies from React & Next.js to Django & Spring Boot
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                <Lightbulb className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">AI Integration</h3>
                            <p className="text-slate-400 text-sm">
                                Experienced in LangChain, OpenAI, and building intelligent multi-agent systems
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <Zap className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Performance Focused</h3>
                            <p className="text-slate-400 text-sm">
                                Building fast, scalable applications with optimized code and best practices
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                <Users className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Team Collaboration</h3>
                            <p className="text-slate-400 text-sm">
                                Strong communicator with experience in agile development and team leadership
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        3+
                    </div>
                    <div className="text-slate-400 text-sm mt-2">Years Experience</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        20+
                    </div>
                    <div className="text-slate-400 text-sm mt-2">Projects Completed</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        10+
                    </div>
                    <div className="text-slate-400 text-sm mt-2">Technologies</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        100%
                    </div>
                    <div className="text-slate-400 text-sm mt-2">Client Satisfaction</div>
                </div>
            </div>
        </div>
    );
}