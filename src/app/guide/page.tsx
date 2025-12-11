"use client"

import { motion } from "framer-motion"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { guides } from "@/data/guides"

export default function GuidePage() {
    // Featured guide is the first one
    const featuredGuide = guides[0]

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
                                    <div className="aspect-[4/3] md:aspect-video relative overflow-hidden">
                                        <img
                                            src={featuredGuide.image}
                                            alt="Featured Article"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Desktop Gradients */}
                                        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-5 bg-white lg:bg-transparent lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-8 lg:bg-gradient-to-t lg:from-black/60 lg:to-transparent">
                                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:text-white mb-2 leading-tight group-hover:text-blue-600 lg:group-hover:text-white lg:group-hover:underline decoration-2 underline-offset-4 transition-colors">
                                            {featuredGuide.title}
                                        </h2>
                                        <p className="text-gray-600 lg:text-white/90 text-sm sm:text-base line-clamp-2 max-w-xl">
                                            {featuredGuide.excerpt}
                                        </p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid */}
                <section className="px-4 sm:px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {guides.slice(1).map((guide, index) => (
                                <motion.a
                                    href={guide.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={guide.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg flex flex-col h-full"
                                >
                                    <div className="relative overflow-hidden aspect-video bg-gray-100">
                                        <img
                                            src={guide.image}
                                            alt={guide.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
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
                                        <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-3">
                                            {guide.excerpt}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
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
