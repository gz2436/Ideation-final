"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { guides } from "@/data/guides"
import { ArrowRight } from "lucide-react"

export default function GuidePage() {
    const [activeCategory, setActiveCategory] = useState('All Stories')

    // Filter guides
    const filteredGuides = activeCategory === 'All Stories'
        ? guides
        : guides.filter(guide => guide.category === activeCategory)

    // Featured guide is the first one
    const featuredGuide = guides[0]
    const gridGuides = activeCategory === 'All Stories' ? guides.slice(1) : filteredGuides.filter(g => g.id !== featuredGuide.id)

    const categories = ['All Stories', 'Switching', 'Technology', 'Savings', 'Travel', 'Reviews']

    return (
        <>
            <PortfolioNavbar />

            <div className="min-h-screen bg-[#FAFAFA] pt-16 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-20">

                {/* Magazine Hero Section */}
                <section className="px-4 sm:px-6 md:px-12 mb-24 md:mb-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                            {/* Left: Text Content */}
                            <div className="lg:col-span-5">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full"
                                >
                                    The GoUS Journal
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#202020] mb-4 leading-[1.1] tracking-tight"
                                    style={{ fontFamily: 'var(--font-figtree), Figtree' }}
                                >
                                    Master your <br className="hidden sm:block" />
                                    mobile life.
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-gray-600 mb-0 leading-relaxed"
                                >
                                    Expert advice on plans, phones, and saving money.
                                    Curated for students, by students.
                                </motion.p>
                            </div>

                            {/* Right: Featured Article Card */}
                            <div className="lg:col-span-7">
                                <motion.a
                                    href={featuredGuide.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="block group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col lg:block"
                                >
                                    <div className="aspect-[4/3] lg:aspect-[16/9] relative overflow-hidden">
                                        <img
                                            src={featuredGuide.image}
                                            alt="Featured Article"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Mobile Category Tag */}
                                        <div className="absolute top-4 left-4 lg:hidden">
                                            <span className="px-3 py-1 text-[10px] font-bold bg-white/90 backdrop-blur-sm rounded-full uppercase tracking-wider text-gray-800 shadow-sm">
                                                {featuredGuide.category}
                                            </span>
                                        </div>
                                        {/* Desktop Gradients */}
                                        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-5 bg-white lg:bg-transparent lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-8 lg:bg-gradient-to-t lg:from-black/60 lg:to-transparent">
                                        {/* Desktop Category Tag */}
                                        <span className="hidden lg:inline-block px-3 py-1 mb-3 text-xs font-bold text-white bg-white/20 backdrop-blur-md rounded-full uppercase tracking-wider">
                                            {featuredGuide.category}
                                        </span>
                                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:text-white mb-2 leading-tight group-hover:text-blue-600 lg:group-hover:text-white lg:group-hover:underline decoration-2 underline-offset-4 transition-colors">
                                            {featuredGuide.title}
                                        </h2>
                                        <p className="text-gray-600 lg:text-white/90 text-sm sm:text-base line-clamp-2 max-w-xl">
                                            {featuredGuide.excerpt}
                                        </p>

                                        {/* Mobile Read More Link */}
                                        <div className="flex lg:hidden items-center text-blue-600 font-semibold text-xs mt-4">
                                            Read Article <ArrowRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Bar - Centered */}
                <section className="px-4 sm:px-6 md:px-12 mb-8 md:mb-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pb-4 bg-[#FAFAFA]/95 backdrop-blur-sm py-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-[#202020] text-white shadow-md'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Grid */}
                <section className="px-4 sm:px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {gridGuides.map((guide) => (
                                    <motion.a
                                        href={guide.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={guide.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                                    >
                                        <div className="relative overflow-hidden aspect-[3/2] bg-gray-100">
                                            <img
                                                src={guide.image}
                                                alt={guide.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 text-[10px] font-bold bg-white/90 backdrop-blur-sm rounded-full uppercase tracking-wider text-gray-800 shadow-sm">
                                                    {guide.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-5 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-3 font-medium uppercase tracking-wide">
                                                <span>{guide.date}</span>
                                                <span>•</span>
                                                <span>{guide.readTime}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {guide.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                                {guide.excerpt}
                                            </p>
                                            <div className="flex items-center text-blue-600 font-semibold text-xs group-hover:translate-x-1 transition-transform mt-auto">
                                                Read Article <ArrowRight className="w-3 h-3 ml-1" />
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {gridGuides.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                No articles found in this category.
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter Section - Compact & Consistent */}
                <section className="px-4 sm:px-6 md:px-12 mt-8 md:mt-16 mb-12">
                    <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Stay smarter than your carrier.</h2>
                        <p className="text-gray-600 mb-5 text-sm max-w-md mx-auto">Get the latest plan drops and money-saving tips.</p>
                        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                            />
                            <button className="px-6 py-2.5 bg-[#202020] text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-sm shadow-sm">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
