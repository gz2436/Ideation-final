import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6 font-figtree">About GoUS</h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-figtree">
                        GoUS is dedicated to being the "First Friend" for international students arriving in the United States.
                        We understand the challenges of navigating a new country, and our mission is to simplify the essential
                        first steps of your journey—starting with staying connected.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
