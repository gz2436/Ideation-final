import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { Footer } from "@/components/Footer"

export default function GuidePage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-20">
                <BankingScaleHero />
                <IntegrationCarousel />
            </main>
            <Footer />
        </>
    )
}
