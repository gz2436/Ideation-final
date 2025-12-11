"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Find a Plan", href: "/plans" },
      { label: "Student Guide", href: "/guide" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "mailto:contact@gous.app" },
      { label: "GitHub", href: "https://github.com/gz2436/Ideation-final" },
    ],
  },
]

export const Footer = ({
  companyName = "GoUS",
  tagline = "Empowering international students to connect confidently in the US.",
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-6 md:mb-8">

          {/* --- Brand Column (Span 4) - Tightened width --- */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 font-display">
                {companyName}
              </h3>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              {tagline}
            </p>

            {/* Feature: Presentation Entry (Subtle) */}
            <Link
              href="/presentation"
              className="group flex items-center gap-2 mt-2 text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors"
            >
              <span className="uppercase tracking-wide">Final Project Presentation</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Spacer (Span 1) */}
          <div className="md:col-span-1 hidden md:block" />

          {/* --- Navigation Columns (Span 7) --- */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-gray-400">
          <p>© {currentYear} {companyName}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <span>Data sourced from</span>
            <a
              href="https://www.bestphoneplans.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-500 hover:text-gray-900 border-b border-gray-200 hover:border-gray-900 transition-all pb-px"
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
