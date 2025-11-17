'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900/50 border-t border-slate-800 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <div className="text-slate-400 text-sm flex items-center gap-2">
                        <span>© {currentYear} Julius Matheka Charles.</span>
                        <span className="hidden md:inline">All rights reserved.</span>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span>Built with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>using Next.js & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}