"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [loadingProvider, setLoadingProvider] = useState<string | null>(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorShake, setErrorShake] = useState(false)

    const handleSocialLogin = (provider: string) => {
        setLoadingProvider(provider)
        // Simulate login delay
        setTimeout(() => {
            localStorage.setItem("isLoggedIn", "true")
            router.push("/")
        }, 1500)
    }

    const handleEmailLogin = (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !password) {
            setErrorShake(true)
            setTimeout(() => setErrorShake(false), 500)
            return
        }

        setLoadingProvider('email')
        // Simulate login delay
        setTimeout(() => {
            localStorage.setItem("isLoggedIn", "true")
            router.push("/")
        }, 1500)
    }

    const handleAutoFill = () => {
        if (!email) {
            setEmail("student@university.edu")
            setPassword("password123")
        }
    }

    const handleCreateAccount = (e: React.MouseEvent) => {
        e.preventDefault()
        setLoadingProvider('create')
        // Simulate creation delay then login
        setTimeout(() => {
            localStorage.setItem("isLoggedIn", "true")
            router.push("/")
        }, 1500)
    }

    // The original handleLogin function is no longer used as handleEmailLogin takes its place for the form.
    // Keeping it commented out or removing it depends on future use, but for this change, it's effectively replaced.
    // const handleLogin = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     setIsLoading(true)
    //     // Simulate login delay
    //     setTimeout(() => {
    //         router.push("/")
    //     }, 1500)
    // }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-figtree">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[400px] bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2 text-[#202020]">Sign in to GoUS</h1>
                    <p className="text-gray-500 text-sm">Welcome back to your student portal</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-3">
                        <button
                            onClick={() => handleSocialLogin('google')}
                            disabled={!!loadingProvider}
                            className="w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium relative overflow-hidden group"
                        >
                            {loadingProvider === 'google' ? (
                                <div className="w-full flex justify-center">
                                    <div className="w-5 h-5 border-2 border-gray-300 border-t-[#EA4335] rounded-full animate-spin" />
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <div className="w-6 flex justify-center shrink-0">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                fill="#EA4335"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-gray-700">Sign in with Google</span>
                                </div>
                            )}
                        </button>

                        <button
                            onClick={() => handleSocialLogin('tiktok')}
                            disabled={!!loadingProvider}
                            className="w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium relative overflow-hidden group"
                        >
                            {loadingProvider === 'tiktok' ? (
                                <div className="w-full flex justify-center">
                                    <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <div className="w-6 flex justify-center shrink-0">
                                        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-gray-700">Sign in with TikTok</span>
                                </div>
                            )}
                        </button>

                        <button
                            onClick={() => handleSocialLogin('facebook')}
                            disabled={!!loadingProvider}
                            className="w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium relative overflow-hidden group"
                        >
                            {loadingProvider === 'facebook' ? (
                                <div className="w-full flex justify-center">
                                    <div className="w-5 h-5 border-2 border-gray-300 border-t-[#1877F2] rounded-full animate-spin" />
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <div className="w-6 flex justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-gray-700">Sign in with Facebook</span>
                                </div>
                            )}
                        </button>
                    </div>

                    <div className="relative mt-6 mb-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-400">Or continue with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <motion.div
                            className="space-y-1"
                            animate={errorShake ? { x: [-10, 10, -10, 10, 0] } : {}}
                            transition={{ duration: 0.4 }}
                        >
                            <label className="text-xs font-medium text-gray-700 ml-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onClick={handleAutoFill}
                                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border focus:bg-white focus:ring-2 outline-none transition-all text-sm ${errorShake ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : 'border-transparent focus:border-blue-500 focus:ring-blue-100'}`}
                                placeholder="student@university.edu"
                            />
                        </motion.div>
                        <motion.div
                            className="space-y-1"
                            animate={errorShake ? { x: [-10, 10, -10, 10, 0] } : {}}
                            transition={{ duration: 0.4, delay: 0.05 }}
                        >
                            <label className="text-xs font-medium text-gray-700 ml-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border focus:bg-white focus:ring-2 outline-none transition-all text-sm ${errorShake ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : 'border-transparent focus:border-blue-500 focus:ring-blue-100'}`}
                                placeholder="••••••••"
                            />
                        </motion.div>

                        <button
                            type="submit"
                            disabled={!!loadingProvider}
                            className="w-full bg-[#202020] text-white rounded-full py-3 font-medium text-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            {loadingProvider === 'email' ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}

                            {/* Rainbow hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </button>
                    </form>
                </div>

                <div className="mt-6 text-center">
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100 inline-block w-full">
                        <p className="text-xs text-amber-800 font-medium">
                            Demo Mode: <br />
                            No real authentication or data collection occurs.
                        </p>
                    </div>
                    <p className="text-xs text-gray-400">
                        Don't have an account?{" "}
                        <button
                            onClick={handleCreateAccount}
                            disabled={!!loadingProvider}
                            className="text-[#202020] font-medium hover:underline disabled:opacity-50"
                        >
                            {loadingProvider === 'create' ? 'Creating...' : 'Create account'}
                        </button>
                    </p>
                </div>
            </motion.div>

            <div className="mt-8 text-xs text-gray-400 flex gap-6">
                <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                <a href="#" className="hover:text-gray-600">Terms of Service</a>
            </div>
        </div>
    )
}
