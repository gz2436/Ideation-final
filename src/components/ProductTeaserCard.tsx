"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
type ProductTeaserCardProps = {
  dailyVolume?: string
  dailyVolumeLabel?: string
  headline?: string
  subheadline?: string
  description?: string
  videoSrc?: string
  posterSrc?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

// @component: ProductTeaserCard
export const ProductTeaserCard = (props: ProductTeaserCardProps) => {
  const {
    dailyVolume = "1,430,992,688",
    dailyVolumeLabel = "Integrated Design and Media, M.S.",
    headline = "Your Complete Guide to\nUS Phone Plans",
    subheadline = "A final project for Ideation & Prototyping 2025 Fall.",
    description = "Trusted by fast-growing teams and enterprises, Auralink powers smarter communication across 1,000+ organizations — with enterprise-grade security, multilingual analysis, and instant emotional detection.",
    videoSrc = "https://cdn.sanity.io/files/1t8iva7t/production/a2cbbed7c998cf93e7ecb6dae75bab42b13139c2.mp4",
    posterSrc = "/images/design-mode/9ad78a5534a46e77bafe116ce1c38172c60dc21a-1069x1068.png",
    primaryButtonText = "Get Started",
    primaryButtonHref = "/guide",
    secondaryButtonText = "View Plans",
    secondaryButtonHref = "/plans",
  } = props

  // Mouse tracking for gradient orb
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  // @return
  return (
    <section
      className="w-full px-4 sm:px-6 md:px-8 pt-24 pb-12 sm:pb-0 sm:pt-24 md:pt-32 lg:pt-40 relative bg-white overflow-hidden min-h-[75dvh] sm:min-h-0 flex flex-col justify-center sm:block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style jsx>{`
        @keyframes gradient-flow {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes spin-centered {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .gradient-text {
          background: linear-gradient(
            to right,
            #EA4335 0%,
            #FF8C42 15%,
            #FBBC04 30%,
            #34A853 45%,
            #4285F4 60%,
            #EA4335 75%,
            #FF8C42 90%,
            #FBBC04 100%
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-flow 6s linear infinite;
        }
        .google-rainbow-bg {
          background: conic-gradient(
            from 0deg,
            #EA4335,
            #FF8C42,
            #FBBC04,
            #34A853,
            #4285F4,
            #EA4335
          );
          animation: spin-centered 4s linear infinite;
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}>
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] z-0 pointer-events-none overflow-hidden"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: isHovering ? 0.8 : 0,
          }}
          transition={{
            opacity: { duration: 0.5, ease: "easeOut" },
            left: { type: "spring", damping: 30, stiffness: 200 },
            top: { type: "spring", damping: 30, stiffness: 200 },
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #EA4335, #FF8C42, #FBBC04, #34A853, #4285F4, #EA4335)",
              animation: "spin 10s linear infinite",
              opacity: 0.6
            }}
          />
        </motion.div>

        {/* Secondary lighter glow for depth */}
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-[40px] sm:blur-[60px] lg:blur-[80px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: isHovering ? 0.4 : 0,
          }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            left: { type: "spring", damping: 25, stiffness: 150 },
            top: { type: "spring", damping: 25, stiffness: 150 },
          }}
        />
      </div>



      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          className="p-6 md:p-12 lg:p-16 md:aspect-[2/1]"
        >
          {/* Content */}
          <div className="flex flex-col justify-center items-center h-full max-w-[900px] mx-auto text-center">
            <a
              href="https://engineering.nyu.edu/academics/programs/integrated-design-media-ms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 text-[#666666] items-center hover:text-[#202020] transition-colors"
            >
              <motion.span
                initial={{
                  transform: "translateY(20px)",
                  opacity: 0,
                }}
                animate={{
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.6,
                }}
                className="text-sm uppercase tracking-tight font-mono flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                }}
              >
                {dailyVolumeLabel}
                <ArrowUpRight className="w-[0.71em] h-[0.71em]" />
              </motion.span>
            </a>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] md:leading-[1.1] lg:leading-[60px] tracking-tight text-[#202020] max-w-full sm:max-w-[600px] md:max-w-[700px] mb-6 mt-4 whitespace-pre-wrap text-center"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Your Complete Guide to{"\n"}US Phone Plans
            </h1>

            <p
              className="text-base sm:text-lg leading-6 sm:leading-7 text-muted-foreground max-w-2xl mx-auto mb-10 px-2"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4">
              <a
                href={primaryButtonHref}
                className="relative inline-block rounded-full p-[3px] group hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden"
              >
                {/* Rainbow Border Mask Wrapper */}
                <div
                  className="absolute inset-0 rounded-full z-0 pointer-events-none"
                  style={{
                    padding: '3px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                >
                  <span className="absolute top-1/2 left-1/2 w-[300%] h-[800%] google-rainbow-bg"></span>
                </div>

                {/* Glassmorphism Content */}
                <span className="relative block bg-white/60 backdrop-blur-md rounded-full px-[18px] py-[15px] text-[#202020] text-base leading-4 whitespace-nowrap z-10">
                  {primaryButtonText}
                </span>
              </a>

              <a
                href={secondaryButtonHref}
                className="text-sm font-medium text-[#555555] hover:text-[#202020] transition-colors underline decoration-1 underline-offset-4"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
