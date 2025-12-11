'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

// --- Types ---
type SlideComponent = React.FC;

// --- Shared Layout Components ---
const SlideContainer = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`w-full h-full bg-white text-[#1d1d1f] font-sans flex flex-col relative overflow-hidden p-6 md:p-8 ${className}`}>
    {/* Global Styles for Gradient Animation */}
    <style jsx global>{`
            @keyframes gradient-flow {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
            }
            .gradient-text-flow {
                /* Modern 'Atmospheric' Full Spectrum Gradient */
                background: linear-gradient(
                    to right,
                    #ff0000, /* Red */
                    #ff4d00, /* Orange */
                    #ffcc00, /* Yellow */
                    #00cc00, /* Green */
                    #00ccff, /* Cyan */
                    #0000ff, /* Blue */
                    #9900ff, /* Purple */
                    #ff0000  /* Red (Loop) */
                );
                background-size: 400% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                /* Soft Glow for Premium Feel */
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.1); 
                animation: gradient-flow 10s linear infinite;
            }
        `}</style>
    {children}
  </div>
);


// --- SLIDE 1: COVER (V2 Split + Rainbow) ---
const Slide1_Cover: SlideComponent = () => {
  return (
    <SlideContainer className="flex items-center justify-center">
      {/* Slide 1 Specific Header Element */}
      <div className="absolute top-6 right-8 text-[#86868b] font-medium text-sm tracking-wide uppercase">
        Final Project — 2025
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-10 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-[120px] leading-[0.92] font-semibold tracking-tighter text-[#1d1d1f] text-center">
            The <br />
            <Link href="/" className="inline-block cursor-pointer hover:scale-105 transition-transform duration-300">
              <span className="gradient-text-flow pb-4 px-4 -mx-4">Connectivity</span>
            </Link> <br />
            <span className="text-[#86868b]">Gap.</span>
          </h1>

          <div className="flex justify-center gap-32 pt-16">
            <div className="text-left space-y-1 group cursor-default">
              <div className="text-[#86868b] text-sm font-semibold tracking-wide uppercase mb-1">Research</div>
              <div className="text-2xl font-medium tracking-tight text-[#1d1d1f]">Shuhe Huang</div>
            </div>
            <div className="text-left space-y-1 group cursor-default">
              <div className="text-[#86868b] text-sm font-semibold tracking-wide uppercase mb-1">Prototyping</div>
              <div className="text-2xl font-medium tracking-tight text-[#1d1d1f]">Gavin Zhang</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  );
};

// --- Shared Components ---
const SlideTitle = ({ title, subtitle, dark = false }: { title: string, subtitle?: string, dark?: boolean }) => (
  <div className="absolute top-6 right-8 text-right z-10">
    <h2 className={`text-2xl font-bold tracking-tight ${dark ? 'text-white' : 'text-[#1d1d1f]'}`}>{title}</h2>
    {subtitle && <p className={`text-xs font-medium uppercase tracking-wide mt-1 ${dark ? 'text-gray-500' : 'text-[#86868b]'}`}>{subtitle}</p>}
  </div>
);

// --- SLIDE 2: THE HOOK (Bill Shock) ---
const Slide2_Hook: SlideComponent = () => (
  <SlideContainer className="flex items-center justify-center">
    {/* Page Title */}
    <SlideTitle title="The Hook" subtitle="Bill Shock" />

    <div className="w-full max-w-6xl grid grid-cols-2 gap-16 items-center">

      {/* Left: Expectation (Calm, Clean) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-start space-y-4"
      >
        <div className="text-[#86868b] text-sm font-semibold tracking-wide uppercase">What I Signed Up For</div>
        <div className="flex items-baseline gap-2">
          <span className="text-[100px] leading-none font-semibold tracking-tighter text-[#1d1d1f]">$75</span>
          <span className="text-3xl text-[#86868b] font-medium">/mo</span>
        </div>
        <div className="flex items-center gap-3 text-2xl text-[#1d1d1f] font-medium">
          <div className="w-6 h-6 rounded-full bg-[#34C759] flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" strokeWidth="3" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          Unlimited Data
        </div>
      </motion.div>

      {/* Right: Reality (Chaotic, Alert) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-col items-start space-y-6 relative"
      >
        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gray-200" />

        <div className="text-[#EA4335] text-sm font-semibold tracking-wide uppercase">What I Actually Paid</div>

        <motion.div
          animate={{ x: [0, -2, 2, -1, 1, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
          className="flex items-baseline gap-2"
        >    <span className="text-[120px] leading-none font-bold tracking-tighter text-[#EA4335]">$108</span>
          <span className="text-3xl text-[#EA4335]/70 font-medium">.42</span>
        </motion.div>

        {/* Pain Points List */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-3 text-xl text-[#1d1d1f]"
          >
            <span className="text-[#EA4335] font-bold">+</span>
            <span>Activation Fee ($35)</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="flex items-center gap-3 text-xl text-[#1d1d1f]"
          >
            <span className="text-[#EA4335] font-bold">+</span>
            <span>State & Local Taxes</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
            className="flex items-center gap-3 text-xl text-[#86868b] line-through decoration-[#EA4335]/50"
          >
            <span className="text-[#1d1d1f] no-underline">Unlimited High-Speed</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="text-[#EA4335] font-medium text-lg italic"
          >
            "Throttled after 20GB"
          </motion.div>
        </div>
      </motion.div>
    </div>
  </SlideContainer>
);

// --- SLIDE 3: LANDSCAPE (The Mess Map - Infinite Chaos) ---
const Slide3_Landscape: SlideComponent = () => {
  // 1. Define Nodes with fixed coordinates (%) - 21 Nodes
  const nodes = [
    { id: 'you', label: 'You 😵‍💫', x: 50, y: 50, type: 'center' },
    // Ring 1
    { id: 'carrier', label: 'Carrier Store', x: 20, y: 20 },
    { id: 'bank', label: 'US Bank', x: 80, y: 20 },
    { id: 'ssn', label: 'SSN Office', x: 20, y: 80 },
    { id: 'school', label: 'University', x: 80, y: 80 },
    // Ring 2
    { id: 'deposit', label: 'Deposit $500', x: 35, y: 15 },
    { id: 'sim', label: 'SIM Lock?', x: 65, y: 15 },
    { id: 'credit', label: 'Credit Check', x: 50, y: 10 },
    { id: 'compat', label: 'Compatibility', x: 50, y: 90 },
    { id: 'wifi', label: 'No Wi-Fi', x: 10, y: 50 },
    { id: 'plan', label: 'Which Plan?', x: 90, y: 50 },
    // Ring 3
    { id: 'contract', label: '3-Year Lock', x: 75, y: 5 },
    { id: 'prepaid', label: 'Prepaid?', x: 10, y: 65 },
    { id: 'esim', label: 'eSIM Fail', x: 85, y: 65 },
    { id: 'family', label: 'Family Plan', x: 35, y: 30 },
    { id: 'pin', label: 'Transfer PIN', x: 65, y: 30 },
    { id: 'fake', label: 'Fake Unlimited', x: 25, y: 70 },
    { id: 'fees', label: 'Hidden Fees', x: 75, y: 70 },
    { id: 'signal', label: 'No Signal', x: 5, y: 30 },
    { id: '2fa', label: '2FA Locked', x: 95, y: 30 },
    { id: 'scam', label: 'Scammed?', x: 40, y: 5 },
    { id: 'port', label: 'Porting...', x: 60, y: 95 }
  ];

  // 2. Generate Dense Connections (Random Node-to-Node)
  const connections = React.useMemo(() => {
    // Logic: Create 50 random links between distinct nodes
    const links: { start: any, end: any, color: string, dash: string, curve: number }[] = [];
    const colors = ["#EA4335", "#FBBC04", "#86868b", "#EA4335", "#4285F4"];

    // Ensure some guaranteed key connections first
    const keyPairs = [['you', 'carrier'], ['you', 'bank'], ['you', 'ssn'], ['carrier', 'credit'], ['school', 'wifi']];
    keyPairs.forEach(([s, e]) => {
      const start = nodes.find(n => n.id === s);
      const end = nodes.find(n => n.id === e);
      if (start && end) {
        links.push({ start, end, color: colors[0], dash: "0", curve: 0 });
      }
    });

    // Add random chaos
    for (let i = 0; i < 50; i++) {
      const start = nodes[Math.floor(Math.random() * nodes.length)];
      let end = nodes[Math.floor(Math.random() * nodes.length)];
      while (start.id === end.id) end = nodes[Math.floor(Math.random() * nodes.length)];

      links.push({
        start, end,
        color: colors[Math.floor(Math.random() * colors.length)],
        dash: i % 3 === 0 ? "5 5" : "0",
        curve: Math.random() * 40 - 20
      });
    }
    return links;
  }, []);

  return (
    <SlideContainer className="flex items-center justify-center relative bg-gray-50/50 overflow-hidden">
      <SlideTitle title="The Landscape" subtitle="Visualizing the Mess" />

      <div className="relative w-full h-full max-w-[1400px] flex items-center justify-center">

        {/* Background SVG for CONNECTED Chaos - Layer 0 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-60"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {connections.map((link, i) => (
            <motion.path
              key={i}
              // FIX: Removed '%' because SVG path 'd' attribute expects unitless numbers relative to viewBox
              d={`M${link.start.x},${link.start.y} Q${(link.start.x + link.end.x) / 2 + link.curve},${(link.start.y + link.end.y) / 2 - link.curve} ${link.end.x},${link.end.y}`}
              fill="none"
              stroke={link.color}
              strokeWidth={0.25} // Adjusted for 0-100 coordinate system (0.25 ~= 1-2px)
              strokeDasharray={link.dash === "5 5" ? "1 1" : "0"} // Adjusted dash scale
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0, 1], opacity: [0, 1, 0.4, 1, 0] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
              style={{ mixBlendMode: 'multiply' }}
            />
          ))}
        </svg>

        {/* Render Nodes - Layer 20 */}
        {nodes.map((node) => {
          const isCenter = node.type === 'center';
          return (
            <motion.div
              key={node.id}
              className={`absolute flex items-center justify-center text-center z-20 
                                ${isCenter
                  ? 'w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-red-100 text-4xl'
                  : 'px-3 py-2 bg-white/95 backdrop-blur rounded-md shadow-sm border border-gray-200 text-xs font-bold text-gray-600 hover:scale-110 transition-transform'
                }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)' // Centers div over coordinate
              }}
              animate={{
                x: ["-50%", "-51%", "-49%", "-50%"],
                y: ["-50%", "-49%", "-51%", "-50%"],
                scale: isCenter ? [1, 1.05, 1] : 1
              }}
              transition={{ duration: Math.random() * 0.5 + 0.2, repeat: Infinity }}
            >
              {isCenter ? (
                <>
                  <div>😵‍💫</div>
                  <div className="absolute top-20 text-xs font-bold uppercase tracking-widest text-gray-900 mt-2">You</div>
                  <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping opacity-20 -z-10"></div>
                </>
              ) : node.label}
            </motion.div>
          );
        })}

        {/* Floating Error Glitches */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`err-${i}`}
            className="absolute text-red-600 font-mono font-bold text-lg pointer-events-none opacity-60 z-10"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: Math.random() * 4 }}
          >
            {["ERROR", "!!!", "DENIED", "FAILED", "?", "NO SIM"][i % 6]}
          </motion.div>
        ))}

      </div>
    </SlideContainer>
  );
};

// --- SLIDE 4: RESEARCH (The Data - Clean Black V3) ---
const CountUp = ({ to, delay = 0 }: { to: number, delay?: number }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, to, { duration: 2, delay: delay, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [to, delay]);

  return <motion.span>{rounded}</motion.span>;
};

const Slide4_Research: SlideComponent = () => (
  <SlideContainer className="flex items-center justify-center bg-[#fafafa] relative overflow-hidden">
    <SlideTitle title="The Research" subtitle="Data & Methodology" />

    {/* Technical Background: Scrolling Data Stream */}
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-20 opacity-[0.03] overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="flex flex-col gap-4 text-xs font-mono font-bold"
          animate={{ y: [0, -1000] }}
          transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 40 }).map((_, j) => (
            <div key={j}>{["0x1A", "AF", "01", "3C", "8B", "FF", "00", "DATA"][j % 8]}</div>
          ))}
        </motion.div>
      ))}
    </div>

    {/* Decorative Ambience */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

    <div className="relative z-10 w-full max-w-7xl grid grid-cols-12 gap-8 items-center h-full">

      {/* Main Metric: Quantitative (Big Left) */}
      <div className="col-span-12 md:col-span-5 flex flex-col justify-center h-full pl-12 border-r border-gray-100/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="text-[#86868b] text-base font-bold tracking-widest uppercase mb-2">
            Quantitative
          </div>
          {/* Giant Solid Black Number */}
          <div className="text-[200px] leading-[0.85] font-bold tracking-tighter text-[#1d1d1f] -ml-2">
            <CountUp to={30} delay={0.2} />
          </div>
          <div className="text-4xl font-medium text-[#1d1d1f] mt-4 tracking-tight">Student Surveys</div>
          <div className="mt-4 text-lg text-gray-500 font-medium leading-relaxed max-w-sm">
            Comprehensive data gathering across NYU international student body.
          </div>
        </motion.div>
      </div>

      {/* Secondary Metrics: Right Stack */}
      <div className="col-span-12 md:col-span-7 grid grid-rows-2 h-full py-12 pl-12">

        {/* Metric 2: Interviews */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-8 border-b border-gray-100 pb-8 p-4 rounded-xl"
        >
          {/* Solid Black Number */}
          <div className="text-[140px] leading-none font-bold tracking-tighter text-[#1d1d1f]">
            <CountUp to={8} delay={0.6} />
          </div>
          <div className="flex flex-col">
            <div className="text-[#86868b] text-xs font-bold tracking-widest uppercase mb-1">Qualitative</div>
            <div className="text-3xl font-medium text-[#1d1d1f]">In-Depth Interviews</div>
            <div className="text-gray-500 mt-1">45-min deep dives into user pain points.</div>
          </div>
        </motion.div>

        {/* Metric 3: Field Research */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-8 pt-8 p-4 rounded-xl"
        >
          {/* Solid Black Number */}
          <div className="text-[140px] leading-none font-bold tracking-tighter text-[#1d1d1f]">
            <CountUp to={3} delay={0.8} />
          </div>
          <div className="flex flex-col">
            <div className="text-[#86868b] text-xs font-bold tracking-widest uppercase mb-1">Field</div>
            <div className="text-3xl font-medium text-[#1d1d1f]">Store Walkthroughs</div>
            <div className="text-gray-500 mt-1">On-site analysis of Carrier Store CX.</div>
          </div>
        </motion.div>

      </div>

    </div>
  </SlideContainer>
);

// --- SLIDE 5: USERS (3 Personas) ---
const Slide5_Users: SlideComponent = () => {
  const personas = [
    {
      icon: "✈️",
      title: "The Newcomer",
      subtitle: "Freshman • Arrived 2 days ago",
      pains: ["No SSN = $500 Deposit", "Confusing Plans", "Sim Lock Issues"]
    },
    {
      icon: "💸",
      title: "The Socialite",
      subtitle: "Junior • Streaming & Calls",
      pains: ["Unexpected Overage Fees", "Data Throttled at 20GB", "Auto-Pay Nightmares"]
    },
    {
      icon: "🚇",
      title: "The Professional",
      subtitle: "Senior • Job Hunting",
      pains: ["Subway Dead Zones", "Missed Recruiter Calls", "2FA OTP Delays"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <SlideContainer className="flex items-center justify-center bg-gray-50/50">
      <SlideTitle title="The Users" subtitle="Three Key Personas" />

      <div className="w-full max-w-6xl z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {personas.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start h-[420px] relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Decorative Top Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${i === 0 ? 'from-blue-400 to-blue-500' : i === 1 ? 'from-purple-400 to-pink-500' : 'from-green-400 to-teal-500'}`} />

              <div className="text-6xl mb-6 bg-gray-50 p-4 rounded-xl">{p.icon}</div>

              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-1">{p.title}</h3>
              <p className="text-[#86868b] font-medium text-sm tracking-wide uppercase mb-8">{p.subtitle}</p>

              <div className="space-y-4 w-full">
                {p.pains.map((pain, j) => (
                  <div key={j} className="flex items-center gap-3 text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    {pain}
                  </div>
                ))}
              </div>

              {/* Subtle Background Number */}
              <div className="absolute -bottom-4 -right-4 text-[120px] font-bold text-gray-50 opacity-50 select-none pointer-events-none group-hover:opacity-100 group-hover:text-gray-100 transition-colors duration-500">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideContainer>
  );
};

// --- SLIDE 6: INSIGHT (The Connectivity Gap) ---
const Slide6_Insight: SlideComponent = () => {
  return (
    <SlideContainer className="flex items-center justify-center bg-[#f5f5f7]">
      <SlideTitle title="The Insight" subtitle="The Connectivity Gap" />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[500px] z-10">

        {/* Card 1: Cost (Large Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05 1.18 1.91 2.53 1.91 1.29 0 2.13-.73 2.13-1.65 0-1.22-1.28-1.74-3.05-2.19-1.8-.46-3.48-1.13-3.48-3.29 0-1.79 1.48-2.96 2.97-3.27V4h2.67v1.93c1.41.33 2.63 1.16 2.98 3.02h-1.93c-.14-.84-.97-1.46-2.22-1.46-1.25 0-2.03.73-2.03 1.55 0 1.05 1.23 1.6 2.87 1.96 1.86.41 3.65 1.06 3.65 3.39 0 1.86-1.45 2.98-3.13 3.3z" /></svg>
          </div>
          <div>
            <div className="text-[#EA4335] font-bold uppercase tracking-widest text-sm mb-2">The Price Wall</div>
            <h3 className="text-4xl font-semibold text-[#1d1d1f] max-w-xs">International students pay <span className="text-[#EA4335]">3x more</span>.</h3>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-[80px] font-bold text-[#1d1d1f] leading-none">300</span>
            <span className="text-xl font-medium text-gray-500 mb-4">% Premium</span>
          </div>
        </motion.div>

        {/* Card 2: Transparency (Top Right) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-2 bg-white rounded-3xl p-8 flex items-center justify-between shadow-sm relative overflow-hidden"
        >
          <div>
            <div className="text-[#FBBC04] font-bold uppercase tracking-widest text-sm mb-1">The Transparency Gap</div>
            <h3 className="text-2xl font-semibold text-[#1d1d1f]">Hidden Fees</h3>
            <p className="text-gray-500 mt-2 text-sm">Activation, Sim Kits, Taxes...</p>
          </div>
          {/* Visual: Fee Stack */}
          <div className="flex flex-col gap-1 items-end opacity-60">
            <div className="w-16 h-2 bg-[#1d1d1f] rounded-full" />
            <div className="w-24 h-2 bg-[#1d1d1f] rounded-full" />
            <div className="w-20 h-2 bg-[#FBBC04] rounded-full ml-auto" />
            <div className="w-12 h-2 bg-[#FBBC04] rounded-full ml-auto" />
          </div>
        </motion.div>

        {/* Card 3: Time (Bottom Middle) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#1d1d1f] rounded-3xl p-8 flex flex-col justify-between shadow-sm text-white"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">48h</div>
            <div className="text-white/60 text-sm font-medium">To get online</div>
          </div>
        </motion.div>

        {/* Card 4: Control (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm"
        >
          <div className="text-[#34A853] font-bold uppercase tracking-widest text-sm mb-1">Control</div>
          <div className="text-2xl font-semibold text-[#1d1d1f]">Zero Digital<br />Management</div>
          <div className="flex gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-[#34A853]" />
          </div>
        </motion.div>

      </div>
    </SlideContainer>
  );
};



// --- SLIDE 7: TRANSITION (Video) ---
const Slide7_Video: SlideComponent = () => (
  <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
    <SlideTitle title="The Video" subtitle="Website Demo" />

    <motion.div
      className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        src="/presentation_video.mov"
      >
        Your browser does not support the video tag.
      </video>
    </motion.div>
  </div>
);

// --- SLIDE 8: SOLUTION (Discovery - The Curator) ---
const Slide8_Discovery: SlideComponent = () => (
  <SlideContainer className="bg-white p-0 relative overflow-hidden">
    <SlideTitle title="The Solution" subtitle="Discovery" />

    {/* Layer 1: Background Mockup (Full Height, Left Aligned) */}
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 z-0 flex items-center justify-start pointer-events-none"
    >
      <img
        src="/presentation_iphone.png"
        alt="GoUS Interface"
        className="h-[125%] w-[90%] object-contain object-left-center -ml-[10%]"
      />
    </motion.div>

    {/* Layer 2: Content Overlay (Right Aligned) */}
    <div className="relative z-10 w-full h-full flex items-center justify-end pr-12 md:pr-24 pointer-events-none">
      <div className="w-[45%] pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-9xl font-black text-[#1d1d1f] leading-[0.85] uppercase tracking-tighter">
            Gous<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d1d1f] to-gray-400">Curated</span>
          </h2>

          <div className="h-1 w-32 bg-[#1d1d1f]" />

          <p className="text-2xl font-medium text-gray-500 leading-relaxed">
            We filter the noise inside the chaos.<br />
            Only the verified, high-value plans make the list.
          </p>

          <div className="pt-6 opacity-60 font-mono text-xs tracking-widest text-[#1d1d1f]">
                        // TRUST_LAYER_V1.0
          </div>
        </motion.div>
      </div>
    </div>
  </SlideContainer>
);

// --- SLIDE 9: STANDARDIZATION (Apples to Apples) ---
// --- SLIDE 9: STANDARDIZATION (Apples to Apples) ---
const Slide9_Standardization: SlideComponent = () => {
  // Mock Data for "Real" Plans
  const plans = [
    { name: "Mint Mobile", color: "bg-green-400", price: "$15", data: "5GB", contract: "3 Mo", score: "9.2" },
    { name: "T-Mobile", color: "bg-pink-600", price: "$50", data: "Unlimited", contract: "None", score: "8.5" },
    { name: "Visible", color: "bg-blue-600", price: "$25", data: "Unlimited", contract: "None", score: "8.9" },
  ];

  return (
    <SlideContainer className="bg-[#f5f5f7] flex flex-col items-center justify-center overflow-hidden">
      <SlideTitle title="Standardization" subtitle="The Equalizer" />

      <div className="flex-1 w-full max-w-7xl flex items-center justify-center relative">

        {/* Background Context: The Problem (Fades out) */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <h3 className="text-[120px] font-black text-gray-200 leading-none text-center blur-sm opacity-50">
            CHAOS<br />CONFUSION<br />COMPLEXITY
          </h3>
        </motion.div>

        {/* The Solution: Cards Snapping into Place */}
        <div className="flex gap-8 z-10 perspective-1000">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              // Initial: Scattered, Rotated, Messy
              initial={{
                x: (index - 1) * 200 + (Math.random() * 100 - 50),
                y: Math.random() * 200 - 100,
                rotate: Math.random() * 30 - 15,
                opacity: 0
              }}
              // Animate: Aligned, Straight, Clean
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.5 + (index * 0.2)
              }}
              whileHover={{ y: -20, transition: { duration: 0.2 } }}
              className="w-80 h-[420px] bg-white rounded-[2rem] shadow-2xl p-6 flex flex-col justify-between border border-white/50 backdrop-blur-xl relative overflow-hidden group"
            >
              {/* Decorative Gradient Blob */}
              <div className={`absolute top-[-50%] right-[-50%] w-full h-full ${plan.color} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity`} />

              {/* Header */}
              <div className="flex justify-between items-start relative">
                <div className={`w-14 h-14 rounded-2xl ${plan.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {plan.name[0]}
                </div>
                <div className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full">
                  GoUS {plan.score}
                </div>
              </div>

              {/* Plan Details */}
              <div className="space-y-6 relative">
                <h3 className="text-2xl font-bold text-[#1d1d1f]">{plan.name}</h3>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                    <span className="text-gray-400 font-medium">Data</span>
                    <span className="text-[#1d1d1f] font-bold">{plan.data}</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                    <span className="text-gray-400 font-medium">Contract</span>
                    <span className="text-[#1d1d1f] font-bold">{plan.contract}</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                    <span className="text-gray-400 font-medium">Network</span>
                    <span className="text-[#1d1d1f] font-bold">5G UC</span>
                  </div>
                </div>
              </div>

              {/* Footer Price */}
              <div className="flex items-end gap-1 relative">
                <div className="text-5xl font-black text-[#1d1d1f] tracking-tight">{plan.price}</div>
                <div className="text-lg text-gray-400 font-medium mb-1">/mo</div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="z-10 mt-12 text-center text-[#1d1d1f] font-medium text-xl"
      >
        From market chaos to <span className="text-blue-600 font-bold">apples-to-apples</span> clarity.
      </motion.div>
    </SlideContainer>
  );
};

// --- SLIDE 10: EDUCATION (Zero to Expert) ---
// --- SLIDE 10: EDUCATION (The Knowledge Base) ---
const Slide10_Education: SlideComponent = () => {
  const guides = [
    { icon: "🎓", title: "F1 Visa & Phone Plans", desc: "Why you don't need an SSN.", time: "3 min" },
    { icon: "🚫", title: "The 'Free Phone' Trap", desc: "Read the fine print before signing.", time: "5 min" },
    { icon: "🌍", title: "Roaming Explained", desc: "How to save $10/day.", time: "4 min" }
  ];

  return (
    <SlideContainer className="bg-[#f5f5f7] relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Mesh */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-[100px] pointer-events-none"
      />

      <SlideTitle title="Education" subtitle="The Encyclopedia" />

      <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full items-center justify-center relative z-10">

        {/* Left: The Value Prop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-lg space-y-8"
        >
          <h3 className="text-7xl font-bold text-[#1d1d1f] leading-[0.95] tracking-tighter">
            We don't sell.<br />
            We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">empower.</span>
          </h3>
          <div className="h-1 w-20 bg-blue-600" />
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            The industry profits from your confusion. <br />
            <span className="text-[#1d1d1f] font-bold">GoUS Guide</span> is your defense system. Verified articles, breakdown videos, and community truth.
          </p>
        </motion.div>

        {/* Right: The Interactive Stack */}
        <div className="w-[500px] relative perspective-1000">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2 + (index * 0.15) }}
              whileHover={{
                scale: 1.05,
                x: -20,
                zIndex: 50,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-xl mb-4 relative z-0 cursor-pointer group origin-left"
              style={{ marginLeft: index * 20 }} // Staggered stack effect
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                    {guide.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1d1d1f] group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  {guide.time}
                </div>
              </div>

              {/* Hover Reveal Arrow */}
              <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </motion.div>
          ))}

          {/* Decorative "More" Indicator */}
          <div className="text-center mt-4 text-gray-400 text-sm font-medium animate-pulse">
            + 142 articles
          </div>
        </div>

      </div>
    </SlideContainer>
  );
};

// --- SLIDE 11: VISION (The New Standard) ---
const Slide11_Vision: SlideComponent = () => {
  const pillars = [
    { title: "Radical Transparency", desc: "No hidden fees. No 'gotchas'. Just the truth.", icon: "👁️" },
    { title: "Zero Friction", desc: "Complexity flattened into a single, beautiful score.", icon: "⚡" },
    { title: "Student Advocacy", desc: "We don't work for carriers. We work for you.", icon: "🛡️" }
  ];

  return (
    <SlideContainer className="bg-white flex flex-col items-center justify-center">
      <SlideTitle title="Vision" subtitle="The New Standard" />

      <div className="flex-1 w-full max-w-7xl flex items-center justify-center gap-8 relative z-10 px-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="flex-1 h-[500px] bg-[#f5f5f7] rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-[#1d1d1f] hover:text-white transition-all duration-500 group cursor-default shadow-lg"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm text-black group-hover:scale-110 transition-transform duration-500">
              {pillar.icon}
            </div>

            <div className="space-y-6">
              <h3 className="text-4xl font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                {pillar.title}
              </h3>
              <div className="h-[1px] w-12 bg-gray-300 group-hover:bg-gray-600 transition-colors" />
              <p className="text-xl text-gray-500 font-medium group-hover:text-gray-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>

            <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-gray-400 text-lg font-medium tracking-wide uppercase"
      >
        Connectivity is a right. Not a puzzle.
      </motion.div>
    </SlideContainer>
  );
};

// --- SLIDE 12: END (Finale) ---
const Slide12_End: SlideComponent = () => (
  <SlideContainer className="bg-white text-[#1d1d1f] flex flex-col items-center justify-center relative overflow-hidden">

    {/* Standardized Header */}
    <SlideTitle title="The End" subtitle="Thank You" />

    <div className="flex-1 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-24 relative z-10">

      {/* Left: Typography (Solid & Uppercase) */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-right flex flex-col items-end"
      >
        <h2 className="text-9xl font-black leading-[0.85] tracking-tighter text-[#1d1d1f]">
          THANK
        </h2>
        <h2 className="text-9xl font-black leading-[0.85] tracking-tighter text-[#1d1d1f]">
          YOU
        </h2>
      </motion.div>

      {/* Divider */}
      <div className="hidden md:block h-32 w-[1px] bg-gray-200" />

      {/* Right: QR Code (Clean) */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-blue-600 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl transform transition-transform duration-500 group-hover:scale-105 border border-gray-100">
          <img
            src="/QRcode.png"
            alt="GoUS App"
            className="w-64 h-64 object-contain mix-blend-multiply opacity-90"
          />
        </div>
      </motion.div>

    </div>
  </SlideContainer>
);

// --- MAIN PRESENTATION DECK ---
const SLIDES = [
  Slide1_Cover,
  Slide2_Hook,
  Slide3_Landscape,
  Slide4_Research,
  Slide5_Users,
  Slide6_Insight,
  Slide7_Video,
  Slide8_Discovery,
  Slide9_Standardization,
  Slide10_Education,
  Slide11_Vision,
  Slide12_End
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));
  const resetSlide = () => setCurrentSlide(0);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#1d1d1f] flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
      {/* Background Hint */}
      <div className="absolute top-4 text-center w-full text-white/20 text-[10px] font-mono select-none">
        Presentation Mode
      </div>

      {/* Slide Window */}
      <div className="relative w-full max-w-[1600px] aspect-[16/9] shadow-2xl overflow-hidden rounded-md bg-white group select-none">

        {/* Persistent Header (Outside AnimatePresence) */}
        <div
          className="absolute top-6 left-8 z-50 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={resetSlide}
          title="Return to Cover"
        >
          <div className="text-2xl font-bold tracking-tight text-[#1d1d1f]">GoUS</div>
        </div>

        {/* Click Zones for Navigation */}
        <div
          className="absolute top-0 left-0 w-[20%] h-full z-40 cursor-w-resize hover:bg-black/5 transition-colors"
          onClick={prevSlide}
          title="Previous Slide"
        />
        <div
          className="absolute top-0 right-0 w-[20%] h-full z-40 cursor-e-resize hover:bg-black/5 transition-colors"
          onClick={nextSlide}
          title="Next Slide"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Bottom UI Controls (Overlay) - Tighter Padding & Smaller Buttons */}
        <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end pointer-events-none z-50">
          {/* Progress Indicator - Corner */}
          <div className="font-mono text-[10px] font-medium text-[#86868b] tracking-widest bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gray-100">
            {String(currentSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </div>

          {/* Navigation Arrows - Smaller & Corner */}
          <div className="flex gap-2 pointer-events-auto">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-current"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === SLIDES.length - 1}
              className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-current"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
