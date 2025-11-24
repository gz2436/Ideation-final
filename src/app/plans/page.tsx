"use client"

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { carriers, NetworkType } from '@/data/carriers'
import { CheckIcon, Cross2Icon, CaretSortIcon, InfoCircledIcon, StarFilledIcon } from '@radix-ui/react-icons'
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"

type SortField = 'price' | 'data' | 'rating' | 'popularity' | null
type SortOrder = 'asc' | 'desc'

export default function PlansPage() {
    const [budgetFilter, setBudgetFilter] = useState<string>('all')
    const [dataFilter, setDataFilter] = useState<string>('all')
    const [networkFilter, setNetworkFilter] = useState<NetworkType | 'all'>('all')
    const [sortField, setSortField] = useState<SortField>(null)
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

    // Recommended plan IDs for highlighting in table
    const recommendedIds = ['verizon-top-unlimited', 'mint-mobile-5gb-plan', 'att-prepaid-unlimited-max']

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            if (sortOrder === 'asc') {
                setSortOrder('desc')
            } else {
                setSortField('popularity') // Default to popularity
                setSortOrder('desc') // Popularity is usually desc (high to low)
            }
        } else {
            setSortField(field)
            setSortOrder('asc')
        }
    }

    const filteredCarriers = useMemo(() => {
        return carriers.map(carrier => {
            const filteredPlans = carrier.plans.filter(plan => {
                let matchesBudget = true
                if (budgetFilter === 'all') {
                    matchesBudget = true
                } else if (budgetFilter === '45+') {
                    matchesBudget = plan.price >= 45
                } else {
                    const [min, max] = budgetFilter.split('-').map(Number)
                    matchesBudget = plan.price >= min && plan.price <= max
                }

                const matchesNetwork = networkFilter === 'all' || carrier.network === networkFilter || carrier.network === 'Multi'

                let matchesData = true
                if (dataFilter !== 'all') {
                    if (dataFilter === 'unlimited') {
                        matchesData = plan.data.toLowerCase().includes('unlimited')
                    } else {
                        const dataValue = parseInt(plan.data)
                        const filterValue = parseInt(dataFilter)
                        matchesData = !isNaN(dataValue) && dataValue >= filterValue
                    }
                }

                return matchesBudget && matchesNetwork && matchesData
            })

            return {
                ...carrier,
                plans: filteredPlans
            }
        }).filter(carrier => carrier.plans.length > 0)
    }, [budgetFilter, dataFilter, networkFilter])

    const totalPlans = filteredCarriers.reduce((sum, carrier) => sum + carrier.plans.length, 0)

    // Helper functions
    const getLogoHeight = (carrierId: string) => {
        switch (carrierId) {
            case 'mint-mobile':
            case 'verizon-prepaid':
            case 't-mobile-prepaid':
                return 'h-5'
            case 'visible':
            case 'att-prepaid':
                return 'h-8'
            case 'google-fi':
                return 'h-6'
            case 'metro':
            case 'cricket':
                return 'h-7'
            default:
                return 'h-6'
        }
    }

    const getRating = (carrierId: string) => {
        const ratings: Record<string, number> = {
            'mint-mobile': 4.8,
            'visible': 4.7,
            'us-mobile': 4.9,
            'verizon-prepaid': 4.5,
            'google-fi': 4.6,
            'att-prepaid': 4.2,
            't-mobile-prepaid': 4.3,
            'cricket': 4.1,
            'metro': 4.0,
            'boost': 3.9,
            'tello': 4.5,
            'ultra-mobile': 4.2,
            'consumer-cellular': 4.4
        }
        return ratings[carrierId] || 4.0
    }

    const get5GSpeed = (carrierId: string) => {
        const speeds: Record<string, number> = {
            'verizon-prepaid': 3, 'visible': 3, 'us-mobile': 3,
            't-mobile-prepaid': 3, 'mint-mobile': 3, 'google-fi': 3, 'metro': 3,
            'att-prepaid': 2, 'cricket': 2, 'consumer-cellular': 2,
            'boost': 2, 'tello': 2, 'ultra-mobile': 2
        }
        return speeds[carrierId] || 2
    }

    const getActivationFee = (carrierId: string) => {
        const fees: Record<string, number> = {
            'verizon-prepaid': 35, 'att-prepaid': 25, 't-mobile-prepaid': 25, 'cricket': 25,
            'metro': 25, 'boost': 25,
            'visible': 0, 'mint-mobile': 0, 'google-fi': 0, 'us-mobile': 0, 'tello': 0,
            'ultra-mobile': 0, 'consumer-cellular': 0
        }
        return fees[carrierId] || 0
    }

    const getPopularity = (carrierId: string) => {
        const popularity: Record<string, number> = {
            'visible': 100, 'mint-mobile': 95, 'att-prepaid': 90,
            'verizon-prepaid': 85, 't-mobile-prepaid': 85, 'google-fi': 80,
            'us-mobile': 75, 'metro': 70, 'cricket': 65, 'boost': 60,
            'consumer-cellular': 55, 'tello': 50, 'ultra-mobile': 45
        }
        return popularity[carrierId] || 0
    }

    // Flatten and sort all plans
    const allPlans = useMemo(() => {
        let plans = filteredCarriers.flatMap(carrier =>
            carrier.plans.map(plan => ({
                carrier,
                plan,
                planId: `${carrier.id}-${plan.name.toLowerCase().replace(/\s+/g, '-')}`,
                rating: getRating(carrier.id),
                popularity: getPopularity(carrier.id),
                dataValue: plan.data.toLowerCase().includes('unlimited') ? 999 : parseInt(plan.data) || 0
            }))
        )

        if (sortField) {
            plans.sort((a, b) => {
                let comparison = 0
                if (sortField === 'price') {
                    comparison = a.plan.price - b.plan.price
                } else if (sortField === 'data') {
                    comparison = a.dataValue - b.dataValue
                } else if (sortField === 'rating') {
                    comparison = a.rating - b.rating
                } else if (sortField === 'popularity') {
                    comparison = a.popularity - b.popularity
                }
                return sortOrder === 'asc' ? comparison : -comparison
            })
        } else {
            // Default sort by popularity (desc)
            plans.sort((a, b) => b.popularity - a.popularity)
        }

        return plans
    }, [filteredCarriers, sortField, sortOrder])

    return (
        <>
            <PortfolioNavbar />

            <div className="min-h-screen bg-[#FAFAFA] pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
                {/* Hero Section */}
                <section className="px-4 sm:px-6 mb-8 md:mb-12">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#202020] mb-4 tracking-tight leading-[1.1]"
                                style={{ fontFamily: 'var(--font-figtree), Figtree' }}
                            >
                                Find your perfect plan.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-base sm:text-lg leading-6 sm:leading-7 text-gray-500"
                                style={{ fontFamily: 'var(--font-figtree), Figtree' }}
                            >
                                Compare the best student phone plans.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Top Picks - Clean Cards */}
                <section className="px-4 sm:px-6 mb-12 md:mb-16">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-12 text-center font-mono" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>Editor's Choice</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                            {/* Verizon (Left) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col items-start text-left scale-100 opacity-100 md:scale-95 md:opacity-90 hover:scale-100 hover:opacity-100"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                                <div className="flex items-center justify-between w-full mb-4">
                                    <img src="/images/960px-Verizon_2024.svg.png" alt="Verizon" className="h-6 w-auto object-contain" />
                                    <span className="text-[10px] font-bold px-2 py-1 bg-red-50 text-red-700 rounded-full">BEST NETWORK</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-gray-900 tracking-tight">$35</span>
                                    <span className="text-gray-500 font-medium">/mo</span>
                                </div>
                                <div className="text-sm text-gray-600 mb-4">
                                    15GB Data · Verizon 5G <br />
                                    Premium Network Access
                                </div>
                                <div className="text-xs text-gray-400">
                                    *Loyalty discounts available
                                </div>
                            </motion.div>

                            {/* Mint Mobile (Middle - Highlighted) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col items-start text-left scale-100 md:scale-105 z-10 hover:scale-110"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
                                <div className="flex items-center justify-between w-full mb-6">
                                    <img src="/images/Mint_Mobile_Logo.svg" alt="Mint" className="h-6 w-auto object-contain" />
                                    <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">BEST VALUE</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900 tracking-tight">$15</span>
                                    <span className="text-gray-500 font-medium">/mo</span>
                                </div>
                                <div className="text-base text-gray-600 mb-6">
                                    5GB Data · T-Mobile 5G <br />
                                    Unlimited Talk & Text
                                </div>
                                <div className="text-xs text-gray-400">
                                    *New customer offer
                                </div>
                            </motion.div>

                            {/* AT&T (Right) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col items-start text-left scale-100 opacity-100 md:scale-95 md:opacity-90 hover:scale-100 hover:opacity-100"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                                <div className="flex items-center justify-between w-full mb-4">
                                    <img src="/images/960px-AT&T_logo_2016.svg.png" alt="AT&T" className="h-9 w-auto object-contain" />
                                    <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded-full">BEST COVERAGE</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-gray-900 tracking-tight">$30</span>
                                    <span className="text-gray-500 font-medium">/mo</span>
                                </div>
                                <div className="text-sm text-gray-600 mb-4">
                                    5GB Data · AT&T 5G <br />
                                    Rollover Data Included
                                </div>
                                <div className="text-xs text-gray-400">
                                    *Online offer
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section >
                {/* All Plans - Table Format */}
                <section className="px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Filter Bar */}
                        <div className="mb-8 sticky top-20 z-30 bg-[#FAFAFA]/90 backdrop-blur-sm py-4 border-b border-gray-200/50">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                    <select
                                        value={budgetFilter}
                                        onChange={(e) => setBudgetFilter(e.target.value)}
                                        className="px-4 py-2 pr-8 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_6px] bg-[right_1rem_center] bg-no-repeat"
                                    >
                                        <option value="all">All Budgets</option>
                                        <option value="10-25">$10-25/mo</option>
                                        <option value="25-45">$25-45/mo</option>
                                        <option value="45+">$45+/mo</option>
                                    </select>

                                    <select
                                        value={dataFilter}
                                        onChange={(e) => setDataFilter(e.target.value)}
                                        className="px-4 py-2 pr-8 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_6px] bg-[right_1rem_center] bg-no-repeat"
                                    >
                                        <option value="all">All Data</option>
                                        <option value="10">10GB+</option>
                                        <option value="unlimited">Unlimited</option>
                                    </select>

                                    <select
                                        value={networkFilter}
                                        onChange={(e) => setNetworkFilter(e.target.value as NetworkType | 'all')}
                                        className="px-4 py-2 pr-8 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_6px] bg-[right_1rem_center] bg-no-repeat"
                                    >
                                        <option value="all">All Networks</option>
                                        <option value="T-Mobile">T-Mobile</option>
                                        <option value="Verizon">Verizon</option>
                                        <option value="AT&T">AT&T</option>
                                    </select>
                                </div>
                                <div className="text-sm text-gray-500 font-medium text-right">
                                    <div className="mb-1">Updated Nov. 2025</div>
                                    <div>Showing {allPlans.length} plans</div>
                                </div>
                            </div>
                        </div>
                        {/* Table */}
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50/50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                                            <th className="py-4 px-6 text-center">Carrier</th>
                                            <th className="py-4 px-6 text-center">Plan</th>
                                            <th className="py-4 px-6 text-center cursor-pointer hover:text-gray-800" onClick={() => handleSort('price')}>
                                                <div className="flex items-center justify-center gap-1">Price <CaretSortIcon /></div>
                                            </th>
                                            <th className="py-4 px-6 text-center cursor-pointer hover:text-gray-800" onClick={() => handleSort('data')}>
                                                <div className="flex items-center justify-center gap-1">Data <CaretSortIcon /></div>
                                            </th>
                                            <th className="py-4 px-6 text-center">Network</th>
                                            <th className="py-4 px-6 text-center">Hotspot</th>
                                            <th className="py-4 px-6 text-center">Intl</th>
                                            <th className="py-4 px-6 text-center cursor-pointer hover:text-gray-800" onClick={() => handleSort('rating')}>
                                                <div className="flex items-center justify-center gap-1">Rating <CaretSortIcon /></div>
                                            </th>
                                            <th className="py-4 px-6 text-center">
                                                <div className="flex items-center justify-center gap-1 group relative cursor-help">
                                                    Fees <InfoCircledIcon className="w-3 h-3" />
                                                    <div className="hidden group-hover:block absolute bottom-full mb-2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
                                                        One-time activation
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {allPlans.map(({ carrier, plan, planId, rating }) => {
                                            const isRecommended = recommendedIds.includes(planId)
                                            const activationFee = getActivationFee(carrier.id)

                                            return (
                                                <tr
                                                    key={planId}
                                                    className={`group transition-colors hover:bg-gray-50/80 ${isRecommended ? 'bg-blue-50/30' : ''}`}
                                                >
                                                    <td className="py-4 px-6">
                                                        <div className="flex items-center justify-center">
                                                            <div className="w-16 h-8 flex items-center justify-center">
                                                                <img
                                                                    src={carrier.logo}
                                                                    alt={carrier.name}
                                                                    className={`${getLogoHeight(carrier.id)} w-auto object-contain max-w-full max-h-full`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <div className="font-semibold text-gray-900 text-sm">{plan.name}</div>
                                                        {isRecommended && (
                                                            <span className="text-[10px] font-bold text-blue-600">Top Pick</span>
                                                        )}
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <div className="flex flex-col items-center">
                                                            <span className="font-bold text-gray-900">${plan.price}</span>
                                                            {carrier.studentDiscount && (
                                                                <span className="text-[10px] text-amber-600 font-medium">Student Deal</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <span className="text-sm text-gray-700 font-medium">{plan.data}</span>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <span className={`text-[10px] font-bold px-2 py-1 rounded border ${carrier.network === 'Verizon' ? 'bg-red-50 text-red-700 border-red-100' :
                                                            carrier.network === 'T-Mobile' ? 'bg-pink-50 text-pink-700 border-pink-100' :
                                                                carrier.network === 'AT&T' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                                    'bg-gray-100 text-gray-700 border-gray-200'
                                                            }`}>
                                                            {carrier.network}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        {plan.hotspot ? <CheckIcon className="w-4 h-4 text-green-500 mx-auto" /> : <Cross2Icon className="w-4 h-4 text-gray-300 mx-auto" />}
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        {plan.intlCalling ? <CheckIcon className="w-4 h-4 text-green-500 mx-auto" /> : <Cross2Icon className="w-4 h-4 text-gray-300 mx-auto" />}
                                                    </td>
                                                    <td className="py-4 px-6 text-center">
                                                        <div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-700">
                                                            {rating} <StarFilledIcon className="w-3 h-3 text-yellow-400" />
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-center text-sm">
                                                        {activationFee === 0 ? <span className="text-green-600 font-medium">Free</span> : `$${activationFee}`}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>
                </section >
            </div >

            <Footer />
        </>
    )
}
