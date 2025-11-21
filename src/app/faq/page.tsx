import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

export default function FAQPage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-20">
                <FAQSection />
            </main>
            <Footer />
        </>
    )
}
