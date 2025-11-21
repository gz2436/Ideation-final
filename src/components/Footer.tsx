"use client"
import { Github, Twitter, Linkedin, Mail, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { UpdateIcon } from "@radix-ui/react-icons"

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
    title: "Plans",
    links: [
      { label: "Carrier Comparison", href: "/plans" },
      { label: "Plan Finder", href: "/plans" },
      { label: "Student Guides", href: "/guide" },
      { label: "Activation Help", href: "/faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Getting Started", href: "/guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/guide" },
      { label: "Support Center", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "mailto:test@gmail.com" },
      { label: "Partnerships", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
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

  // State to track loading for specific elements
  const [loadingState, setLoadingState] = useState<Record<string, boolean>>({})

  const handleFakeLoading = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setLoadingState(prev => ({ ...prev, [id]: true }))

    // Stop spinning after 2 seconds
    setTimeout(() => {
      setLoadingState(prev => ({ ...prev, [id]: false }))
    }, 2000)
  }

  return (
    <footer className="w-full bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-14 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-1 sm:col-span-2"
          >
            <div className="mb-4">
              <h3
                className="text-2xl font-semibold text-[#202020] mb-2"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {companyName}
              </h3>
              <p className="text-sm leading-5 text-[#666666] max-w-xs" style={{ fontFamily: "Figtree" }}>
                {tagline}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  onClick={(e) => handleFakeLoading(e, 'email-icon')}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#666666] hover:text-[#202020] hover:border-[#202020] transition-colors duration-150"
                  aria-label="Email"
                >
                  {loadingState['email-icon'] ? (
                    <Loader2 className="w-4 h-4 animate-spin text-[#202020]" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </a>
              )}
            </div>
          </motion.div>

          {/* Link Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="col-span-1"
            >
              <h4
                className="text-sm font-medium text-[#202020] mb-4 uppercase tracking-wide"
                style={{ fontFamily: "Figtree", fontWeight: "500" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const isContactLink = link.label === "Contact" || link.href.startsWith("mailto:")
                  const linkId = `link-${index}-${linkIndex}`

                  return (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => isContactLink ? handleFakeLoading(e, linkId) : undefined}
                        className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150 flex items-center gap-2"
                        style={{ fontFamily: "Figtree" }}
                      >
                        {link.label}
                        {isContactLink && loadingState[linkId] && (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        )}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-[#e5e5e5]"
        >
          <div className="flex justify-center items-center">
            <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
              {copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
