"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { Check, X } from "lucide-react"

export default function AboutPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <>
                <PortfolioNavbar />
                <div className="min-h-screen bg-[#FAFAFA]" />
            </>
        )
    }

    return (
        <>
            <PortfolioNavbar />

            <div className="min-h-screen bg-[#FAFAFA] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20">

                {/* Hero Section - Direct & Clean */}
                <section className="px-8 md:px-12 mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#202020] mb-6 leading-[1.1] tracking-tight"
                            style={{ fontFamily: 'var(--font-figtree), Figtree' }}
                        >
                            Connectivity <br />
                            simplified.
                        </h1>
                        <div className="max-w-2xl mx-auto text-base text-gray-600 leading-relaxed">
                            <p>
                                <strong>GoUS</strong> is a non-profit platform that helps international students and newcomers navigate the US mobile market. We collect and organize public data to make phone plan comparisons simple and transparent—no fees, no commissions, just honest information.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Row - Sorted by size */}
                <section className="border-y border-gray-100 bg-gray-50/50 py-14 mb-24">
                    <div className="max-w-6xl mx-auto px-8 md:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                            {[
                                { label: "Plans Analyzed", value: "500+" },
                                { label: "Data Points", value: "50k+" },
                                { label: "Students Helped", value: "10k+" },
                                { label: "Carriers Tracked", value: "15" },
                                { label: "Hidden Fees", value: "$0" },
                                { label: "Profit Made", value: "$0" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">{stat.value}</div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Problem vs The Solution - Narrower & Closer */}
                <section className="px-8 md:px-12 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                            {/* The Old Way */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-3xl p-10 md:p-12 border border-gray-100"
                            >
                                <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                                    <span className="p-2 bg-gray-200 rounded-full"><X className="w-5 h-5 text-gray-500" /></span>
                                    The Old Way
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Confusing contracts & 24-month lock-ins",
                                        "Hidden activation fees & taxes",
                                        "Upselling features you don't need",
                                        "Hours spent on hold with support"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-500 text-lg">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2.5 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* The GoUS Way - Light Theme */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white text-gray-900 rounded-3xl p-10 md:p-12 relative overflow-hidden shadow-xl border border-gray-200"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-60"></div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 relative z-10">
                                    <span className="p-2 bg-green-100 rounded-full"><Check className="w-5 h-5 text-green-600" /></span>
                                    The GoUS Way
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    {[
                                        "No contracts, cancel anytime",
                                        "Transparent pricing, taxes included",
                                        "Unbiased recommendations based on data",
                                        "Instant digital activation (eSIM)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-600 text-lg font-medium">
                                            <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Core Values - Horizontal Scroll */}
                <section className="px-8 md:px-12 mb-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-12 text-center font-mono" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>Our Core Values</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Transparency", desc: "We show you the fine print so you don't have to squint.", color: "bg-blue-500" },
                                { title: "Student-First", desc: "Built for budgets, dorms, and study abroad semesters.", color: "bg-green-500" },
                                { title: "Data-Driven", desc: "Recommendations backed by real coverage maps, not ads.", color: "bg-purple-500" }
                            ].map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
                                >
                                    <div className={`w-12 h-1 ${value.color} mb-6 group-hover:w-20 transition-all duration-300`}></div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
