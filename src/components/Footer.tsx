"use client"
import { Github, Mail } from "lucide-react"

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

type FooterProps = {
  companyName?: string
  tagline?: string
  sections?: FooterSection[]
  socialLinks?: {
    twitter?: string
    linkedin?: string
    github?: string
    email?: string
  }
  copyrightText?: string
}

const defaultSections: FooterSection[] = [
  {
    title: "Explore",
    links: [
      { label: "Find a Plan", href: "/plans" },
      { label: "Student Guides", href: "/guide" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "mailto:test@gmail.com" },
    ],
  },
]

export const Footer = ({
  companyName = "GoUS",
  tagline = "Helping International Students Connect in America",
  sections = defaultSections,
  socialLinks = {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com/gz2436/Ideation-final",
    email: "test@gmail.com",
  },
  copyrightText,
}: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const copyright = copyrightText || `© ${currentYear} ${companyName}. All rights reserved.`

  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Column (Span 5) */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <a href="/" className="inline-block transition-opacity hover:opacity-80">
                <h3 className="text-2xl font-bold text-[#111] mb-3 tracking-tight font-display">
                  {companyName}
                </h3>
              </a>
              <div className="flex flex-col gap-6">
                <p className="text-sm text-[#666] leading-relaxed max-w-sm">
                  {tagline}
                </p>
                {/* 
                  Ideas for this space:
                  - A simple newsletter signup form
                  - A "Made with ❤️ in NYC" badge
                  - A trust badge (e.g., "100% Free for Students")
                */}
              </div>
            </div>

            {/* Social icons removed as requested */}
          </div>

          {/* Spacer (Span 2) */}
          <div className="col-span-1 md:col-span-2 hidden md:block"></div>

          {/* Links Column (Span 5 - split into 2 sub-columns) */}
          <div className="col-span-1 md:col-span-5 grid grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-xs font-bold text-[#111] mb-5 uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-sm text-[#666] hover:text-black transition-colors font-medium">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Attribution */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>{copyright}</p>

          {/* Subtle Attribution */}
          <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <span>Data sourced from</span>
            <a
              href="https://www.bestphoneplans.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-500 hover:text-[#111] border-b border-transparent hover:border-gray-400 transition-colors pb-px"
            >
              BestPhonePlans.net
            </a>
            <span>by Stetson Doggett</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
