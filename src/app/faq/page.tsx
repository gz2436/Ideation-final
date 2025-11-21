"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { faqs } from "@/data/faqs"
import { ChevronDown, ChevronUp, Search, CreditCard, Signal, Smartphone, Globe } from "lucide-react"

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [openId, setOpenId] = useState<string | null>(null)

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id)
    }

    // Filter FAQs based on search
    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Split into two columns for desktop
    const midPoint = Math.ceil(filteredFaqs.length / 2)
    const leftColumnFaqs = filteredFaqs.slice(0, midPoint)
    const rightColumnFaqs = filteredFaqs.slice(midPoint)

    const categories = [
        { name: 'Billing & Costs', icon: CreditCard, color: 'bg-purple-100 text-purple-600' },
        { name: 'Coverage & 5G', icon: Signal, color: 'bg-red-100 text-red-600' },
        { name: 'Plans & Switching', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
        { name: 'International', icon: Globe, color: 'bg-green-100 text-green-600' },
    ]

    return (
        <>
            <PortfolioNavbar />

            <div className="min-h-screen bg-[#FAFAFA] pt-20 pb-20">

                {/* Search Hero Section - Light Theme */}
                <section className="bg-white text-[#202020] px-8 md:px-12 pt-32 pb-24 relative overflow-hidden">
                    {/* Abstract Background Shapes - Subtle */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60"></div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold mb-6 tracking-tight text-[#202020]"
                            style={{ fontFamily: 'var(--font-figtree), Figtree' }}
                        >
                            How can we help you?
                        </motion.h1>

                        {/* Large Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative max-w-2xl mx-auto"
                        >
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="h-6 w-6 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for answers (e.g. 'roaming', 'cancel', '5G')"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-full text-gray-900 bg-white shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-base placeholder-gray-400 transition-all border border-gray-100"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Quick Categories - Floating Cards */}
                <section className="px-8 md:px-12 -mt-12 mb-20 relative z-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {categories.map((cat, index) => (
                                <motion.div
                                    key={cat.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group"
                                >
                                    <div className={`p-4 rounded-full mb-4 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{cat.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ List - Split Columns */}
                <section className="px-8 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {searchQuery ? `Search Results for "${searchQuery}"` : "Top Questions"}
                            </h2>
                            {!searchQuery && (
                                <span className="text-sm text-gray-500 hidden sm:inline-block">
                                    Updated weekly based on user feedback
                                </span>
                            )}
                        </div>

                        {filteredFaqs.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    {leftColumnFaqs.map((faq) => (
                                        <FAQItem key={faq.id} faq={faq} openId={openId} toggle={toggleAccordion} />
                                    ))}
                                </div>
                                {/* Right Column */}
                                <div className="space-y-4">
                                    {rightColumnFaqs.map((faq) => (
                                        <FAQItem key={faq.id} faq={faq} openId={openId} toggle={toggleAccordion} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                                <p className="text-gray-500">Try adjusting your search terms or browse the categories above.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Contact Support Banner - Compact & Consistent */}
                <section className="px-8 md:px-12 mt-14">
                    <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-gray-200 shadow-sm">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1.5">Still need help?</h3>
                            <p className="text-gray-600 text-sm">Our team is available Mon-Fri, 9am - 5pm EST.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-sm shadow-sm">
                                Email Us
                            </button>
                            <button className="px-5 py-2.5 bg-[#202020] text-white font-semibold rounded-full hover:bg-gray-800 transition-colors text-sm shadow-sm">
                                Chat Support
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

// Helper Component for FAQ Item
function FAQItem({ faq, openId, toggle }: { faq: any, openId: string | null, toggle: (id: string) => void }) {
    const isOpen = openId === faq.id

    return (
        <div className={`bg-white border rounded-xl transition-all duration-300 ${isOpen ? 'border-blue-500 shadow-md ring-1 ring-blue-500/20' : 'border-gray-200 hover:border-gray-300'}`}>
            <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-start justify-between p-5 text-left focus:outline-none"
            >
                <span className={`font-semibold pr-4 transition-colors ${isOpen ? 'text-blue-700' : 'text-gray-900'}`}>
                    {faq.question}
                </span>
                <div className={`mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-blue-500' : 'text-gray-400'}`} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed text-sm border-t border-transparent">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
