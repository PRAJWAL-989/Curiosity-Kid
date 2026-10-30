import React, { useState } from 'react';
import { circuitKidCharacter } from '../data/characterData';
import { AccessibilitySettings } from '../types';
import { soundEffects } from '../utils/soundEffects';
import { Sparkles, Zap, Heart, Wrench, Shield, CheckCircle2 } from 'lucide-react';

interface Track2CharacterSheetProps {
  a11y: AccessibilitySettings;
}

export const Track2CharacterSheet: React.FC<Track2CharacterSheetProps> = ({ a11y }) => {
  const char = circuitKidCharacter;
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [antennaWiggle, setAntennaWiggle] = useState(false);

  const triggerAntenna = () => {
    soundEffects.playBeep(780);
    setAntennaWiggle(true);
    setTimeout(() => setAntennaWiggle(false), 800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Official Hackathon Track 2 Banner Badge - No hard borders */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-amber-100/90 p-5 rounded-3xl shadow-md">
        <div className="flex items-center gap-2">
          <span className="p-2.5 crayon-btn crayon-yellow text-stone-900 font-bold text-sm">
            🏆 Track 2
          </span>
          <div>
            <h2 className="font-marker text-xl sm:text-2xl font-bold text-stone-900">
              Official Hackathon Character Dossier
            </h2>
            <p className="text-sm font-kid text-stone-700">
              Meets all hax.baby Track 2 guidelines: Name, Species, Appearance, Personality, Profession & Quirks.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-kid font-bold text-emerald-950 bg-emerald-200/90 px-3 py-1.5 rounded-full shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          <span>Rule Verified & Canon</span>
        </div>
      </div>

      {/* Main Binder Card - Soft organic sketchbook card */}
      <div className="relative bg-[#fffdfa] rounded-3xl shadow-xl p-6 sm:p-8 overflow-hidden">
        {/* Binder Ring Holes decor on the left edge */}
        <div className="hidden md:flex flex-col justify-around absolute left-3 top-0 bottom-0 py-6 pointer-events-none">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-stone-300 shadow-inner" />
          ))}
        </div>

        {/* Top Tape Header - No border line */}
        <div className="md:ml-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-kid font-bold px-3 py-1 crayon-btn crayon-red text-white rotate-[-2deg] shadow-xs">
                ORIGINAL CHARACTER
              </span>
              <span className="text-xs font-kid text-stone-500">
                Created for hax.baby Hackathon
              </span>
            </div>
            <h1 className="font-marker text-4xl sm:text-5xl font-black text-stone-950 mt-1 tracking-tight">
              {char.name}
            </h1>
            <p className="font-kid text-xl text-amber-800 font-bold">
              Codename: &ldquo;{char.codename}&rdquo; • Age: {char.age}
            </p>
          </div>

          <div className="bg-yellow-100/90 px-4 py-2.5 rounded-2xl rotate-[1.5deg] shadow-sm">
            <p className="text-xs font-kid font-bold text-stone-500">SPECIES</p>
            <p className="font-marker text-stone-900 font-bold text-base sm:text-lg">
              {char.species}
            </p>
          </div>
        </div>

        {/* Content Columns: Kid Doodle Avatar on Left, Track 2 Specs on Right */}
        <div className="md:ml-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          
          {/* Left Column: Hand-Drawn 2D Portrait with Color Bleeding */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative p-5 bg-amber-50/90 rounded-3xl shadow-lg w-full max-w-sm">
              {/* Tape at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-yellow-200/90 rounded-full rotate-[-1deg] shadow-xs" />

              {/* 2D Kid-Drawn Character SVG */}
              <div 
                onClick={triggerAntenna}
                title="Click Prajwal to wiggle his antenna!"
                className="relative cursor-pointer select-none py-2 flex flex-col items-center"
              >
                <svg
                  viewBox="0 0 240 240"
                  className={`w-56 h-56 transition-transform ${antennaWiggle ? 'scale-105 rotate-2' : ''} ${!a11y.reducedMotion ? 'hover:scale-102' : ''}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* CRAYON BLEED FILLS (Over the lines!) */}
                  {/* Spilled yellow hoodie fill */}
                  <path
                    d="M 50 150 C 40 180, 45 220, 55 235 C 100 245, 160 240, 190 230 C 205 210, 200 170, 185 145 Z"
                    fill="#fde047"
                    opacity="0.95"
                    transform="translate(6, 4)"
                  />
                  {/* Spilled blue paint smear */}
                  <path
                    d="M 120 170 Q 150 160 165 190 Q 140 215 110 200 Z"
                    fill="#60a5fa"
                    opacity="0.75"
                    transform="translate(-4, 3)"
                  />
                  {/* Spilled peach skin fill outside lines */}
                  <circle cx="124" cy="94" r="48" fill="#fed7aa" opacity="0.9" />

                  {/* UNPOLISHED HAND-DRAWN BLACK OUTLINE STROKES */}
                  {/* Spiky 10-year-old marker hair */}
                  <path
                    d="M 70 85 L 60 55 L 85 65 L 95 35 L 120 58 L 140 30 L 155 60 L 180 50 L 175 85 Z"
                    fill="#18181b"
                    stroke="#18181b"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                  {/* Taped silver antenna sticking out */}
                  <g className={antennaWiggle ? 'animate-bounce' : ''}>
                    <line x1="120" y1="45" x2="110" y2="10" stroke="#71717a" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="110" cy="10" r="6" fill="#ef4444" stroke="#18181b" strokeWidth="2.5" />
                    {/* Duct tape holding antenna */}
                    <rect x="106" y="32" width="22" height="10" fill="#93c5fd" stroke="#18181b" strokeWidth="2" transform="rotate(-15 117 37)" />
                  </g>

                  {/* Head outline (improper hand-drawn circle) */}
                  <path
                    d="M 75 90 C 70 130, 85 145, 120 148 C 155 145, 170 130, 165 90 C 160 55, 80 55, 75 90 Z"
                    stroke="#18181b"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Glowing Green LED Eyes */}
                  {/* Left Eye */}
                  <ellipse cx="102" cy="98" rx="8" ry="11" fill="#4ade80" stroke="#18181b" strokeWidth="3" />
                  <circle cx="104" cy="95" r="3" fill="#ffffff" />
                  {/* Right Eye */}
                  <ellipse cx="138" cy="98" rx="8" ry="11" fill="#4ade80" stroke="#18181b" strokeWidth="3" />
                  <circle cx="140" cy="95" r="3" fill="#ffffff" />

                  {/* Freckles (resistor color dots) */}
                  <circle cx="94" cy="115" r="1.5" fill="#f59e0b" />
                  <circle cx="98" cy="118" r="1.5" fill="#ef4444" />
                  <circle cx="142" cy="115" r="1.5" fill="#3b82f6" />
                  <circle cx="146" cy="118" r="1.5" fill="#10b981" />

                  {/* Big toothy grin */}
                  <path
                    d="M 100 125 Q 120 142 140 125"
                    stroke="#18181b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Hoodie body outline */}
                  <path
                    d="M 78 145 L 55 195 L 75 230 L 165 230 L 185 195 L 162 145"
                    stroke="#18181b"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Big pouch pocket */}
                  <path
                    d="M 90 185 L 85 220 L 155 220 L 150 185 Z"
                    stroke="#18181b"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Little screwdriver sticking out of pocket */}
                  <line x1="135" y1="188" x2="148" y2="165" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                  <line x1="148" y1="165" x2="152" y2="155" stroke="#71717a" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Little Spark-E companion peeking out */}
                  <g transform="translate(180, 160) scale(0.65)">
                    {/* Green board */}
                    <rect x="0" y="0" width="45" height="35" rx="3" fill="#22c55e" stroke="#18181b" strokeWidth="3" />
                    {/* Cute eyes */}
                    <circle cx="14" cy="16" r="3" fill="#000" />
                    <circle cx="31" cy="16" r="3" fill="#000" />
                    <line x1="18" y1="26" x2="27" y2="26" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                    <line x1="22" y1="0" x2="22" y2="-12" stroke="#eab308" strokeWidth="2" />
                    <circle cx="22" cy="-12" r="3" fill="#eab308" />
                  </g>
                </svg>

                <p className="text-xs font-doodle text-stone-600 mt-1 text-center">
                  👆 <em>Click Prajwal to test antenna radio-reception!</em>
                </p>
              </div>

              {/* Character Quote Banner */}
              <div className="mt-3 bg-white/95 p-3.5 rounded-2xl rotate-[-1deg] shadow-sm">
                <p className="font-doodle text-sm font-bold text-stone-800 italic">
                  &ldquo;{char.personality.catchphrase}&rdquo;
                </p>
              </div>
            </div>

            {/* Interactive Crayon Stats */}
            <div className="w-full max-w-sm mt-4 bg-yellow-50/90 p-5 rounded-3xl shadow-md">
              <h3 className="font-sketch font-bold text-stone-900 text-sm mb-2 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Crayon Power Levels</span>
              </h3>

              <div className="space-y-3 text-xs font-doodle">
                <div>
                  <div className="flex justify-between font-bold text-stone-800 mb-1">
                    <span>Curiosity (Maxed Out!)</span>
                    <span>{char.stats.curiosity}%</span>
                  </div>
                  <div className="w-full h-3 bg-stone-200/80 rounded-full overflow-hidden">
                    <div 
                      className="h-full crayon-yellow rounded-full" 
                      style={{ width: `${char.stats.curiosity}%` }} 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-stone-800 mb-1">
                    <span>Disassembly & Reverse Engineering</span>
                    <span>{char.stats.toolBreakerSkill}%</span>
                  </div>
                  <div className="w-full h-3 bg-stone-200/80 rounded-full overflow-hidden">
                    <div 
                      className="h-full crayon-lime rounded-full" 
                      style={{ width: `${char.stats.toolBreakerSkill}%` }} 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-stone-800 mb-1">
                    <span>Dad Hug Happiness Morale</span>
                    <span>{char.stats.hugEnergy}%</span>
                  </div>
                  <div className="w-full h-3 bg-stone-200/80 rounded-full overflow-hidden">
                    <div 
                      className="h-full crayon-red rounded-full" 
                      style={{ width: `${char.stats.hugEnergy}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Track 2 Required Sections in Kid-Notebook Style */}
          <div className="lg:col-span-7 space-y-6">

            {/* 1. APPEARANCE (Track 2 Guideline) */}
            <section className="bg-white/95 p-6 rounded-3xl shadow-lg relative">
              <span className="absolute -top-3 right-4 px-3 py-1 crayon-btn crayon-yellow text-stone-900 text-xs font-doodle font-bold rotate-1 shadow-xs">
                RULE 1: APPEARANCE
              </span>
              <h3 className="font-sketch text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <span>🎨 Visual Appearance & Gear</span>
              </h3>
              <p className="font-doodle text-base text-stone-800 mb-3 leading-relaxed">
                {char.appearance.clothing} {char.appearance.hair} {char.appearance.eyes}
              </p>
              
              <div className="bg-amber-50/80 p-4 rounded-2xl shadow-xs">
                <p className="text-xs font-sketch font-bold text-stone-600 mb-1.5 uppercase">
                  Everyday Inventor Inventory:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-doodle font-bold text-stone-800">
                  {char.appearance.gear.map((g, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 2. PERSONALITY (Track 2 Guideline) */}
            <section className="bg-white/95 p-6 rounded-3xl shadow-lg relative">
              <span className="absolute -top-3 right-4 px-3 py-1 crayon-btn crayon-lime text-stone-900 text-xs font-doodle font-bold rotate-[-1deg] shadow-xs">
                RULE 2: PERSONALITY
              </span>
              <h3 className="font-sketch text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <span>🧠 Personality & Mindset</span>
              </h3>
              
              <ul className="space-y-1.5 text-sm font-doodle text-stone-800 mb-3">
                {char.personality.traits.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 text-xs font-doodle">
                <div className="bg-rose-100/90 px-3 py-1.5 rounded-xl text-rose-950 font-bold shadow-xs">
                  <strong>❤️ Loves:</strong> {char.personality.loves.join(', ')}
                </div>
                <div className="bg-blue-100/90 px-3 py-1.5 rounded-xl text-blue-950 font-bold shadow-xs">
                  <strong>⚡ Nemesis:</strong> {char.personality.fears.join(', ')}
                </div>
              </div>
            </section>

            {/* 3. PROFESSION & QUIRKS (Track 2 Guideline) */}
            <section className="bg-white/95 p-6 rounded-3xl shadow-lg relative">
              <span className="absolute -top-3 right-4 px-3 py-1 crayon-btn crayon-sky text-stone-900 text-xs font-doodle font-bold rotate-1 shadow-xs">
                RULE 3: PROFESSION & QUIRKS
              </span>
              <h3 className="font-sketch text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <span>🔧 Profession, Superpowers & Quirks</span>
              </h3>

              <div className="mb-3">
                <p className="text-xs font-sketch text-stone-500 font-bold uppercase">Primary Calling:</p>
                <p className="font-doodle text-base font-bold text-stone-900">
                  {char.professionAndQuirks.primaryRole}
                </p>
              </div>

              <div className="mb-3 bg-amber-50/90 p-3.5 rounded-2xl shadow-xs">
                <p className="text-xs font-sketch text-amber-900 font-bold uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Unique Superpower:</span>
                </p>
                <p className="font-doodle text-sm text-stone-800">
                  {char.professionAndQuirks.superpower}
                </p>
              </div>

              <div>
                <p className="text-xs font-sketch text-stone-500 font-bold uppercase mb-1">Kid Quirks:</p>
                <ul className="space-y-1 text-xs font-doodle text-stone-700">
                  {char.professionAndQuirks.quirks.map((q, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="text-amber-500">★</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
