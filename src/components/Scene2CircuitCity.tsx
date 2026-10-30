import React, { useState } from 'react';
import { AccessibilitySettings, CircuitPart } from '../types';
import { circuitParts } from '../data/characterData';
import { soundEffects } from '../utils/soundEffects';
import { Cpu, GitBranch, Radio, RotateCw, Sparkles, HelpCircle } from 'lucide-react';

interface Scene2CircuitCityProps {
  a11y: AccessibilitySettings;
}

export const Scene2CircuitCity: React.FC<Scene2CircuitCityProps> = ({ a11y }) => {
  const [selectedPart, setSelectedPart] = useState<CircuitPart>(circuitParts[0]);
  const [signalActive, setSignalActive] = useState<boolean>(false);

  const handleSelectPart = (part: CircuitPart) => {
    soundEffects.playBeep(520 + Math.random() * 200);
    setSelectedPart(part);
  };

  const pulseAntenna = () => {
    soundEffects.playBeep(880);
    setSignalActive(true);
    setTimeout(() => setSignalActive(false), 1200);
  };

  return (
    <div className="bg-[#fffefb] p-6 rounded-xs border-3 border-stone-900 shadow-[6px_6px_0px_#1c1917] relative">
      <div className="absolute top-2 right-4 px-2 py-0.5 bg-emerald-200 text-stone-900 text-xs font-doodle font-bold border border-stone-800 rotate-[-1.5deg] shadow-xs">
        SCENE 2: THE HIDDEN CITY
      </div>

      <div className="mb-4">
        <h3 className="font-sketch text-2xl font-bold text-stone-950 flex items-center gap-2">
          <span>🔬 The Secret World Under the Plastic</span>
        </h3>
        <p className="font-doodle text-stone-700 text-sm mt-1">
          Prajwal knelt on the carpet. Instead of broken rubbish, he discovered an entire miniature world of green islands, silver antennas, and winding golden highways.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive 2D Kid-Drawn PCB Diagram */}
        <div className="lg:col-span-7 bg-[#1c2c20] p-5 rounded-xs border-3 border-stone-900 shadow-[5px_5px_0px_#1c1917] relative overflow-hidden">
          {/* Subtle PCB Grid Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="flex items-center justify-between pb-3 border-b border-emerald-800/60 mb-3 text-emerald-300 font-doodle text-xs">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE MOTHERBOARD EXPLORER</span>
            </span>
            <span>Click any component to inspect</span>
          </div>

          {/* Interactive SVG Circuit Board */}
          <div className="relative flex justify-center py-2">
            <svg viewBox="0 0 400 280" className="w-full max-w-md h-auto" fill="none">
              {/* Green PCB Board with Crayon Over-bleed */}
              <rect x="25" y="20" width="350" height="240" rx="8" fill="#15803d" stroke="#0f172a" strokeWidth="4" />
              {/* Crayon smear outside lines */}
              <rect x="20" y="24" width="360" height="240" rx="10" fill="#22c55e" opacity="0.3" transform="translate(4, 5)" />

              {/* Copper Traces (Gold pathways) */}
              <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 60 70 H 130 V 120 H 170" />
                <path d="M 230 120 H 280 V 60 H 330" />
                <path d="M 200 160 V 220 H 100 V 240" />
                <path d="M 200 160 V 200 H 300 V 230" />
                <path d="M 70 180 H 150 V 160" />
              </g>

              {/* Trace Solder Dots */}
              {[
                [60, 70], [130, 120], [170, 120], [230, 120], [280, 60],
                [330, 60], [200, 200], [300, 200], [100, 220], [70, 180]
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4" fill="#fbbf24" stroke="#000" strokeWidth="1.5" />
              ))}

              {/* Antenna Component (Silver Coil on top-right) */}
              <g
                onClick={() => {
                  handleSelectPart(circuitParts[2]);
                  pulseAntenna();
                }}
                className="cursor-pointer group"
              >
                <circle cx="330" cy="50" r="16" fill={selectedPart.id === 'antenna' ? '#38bdf8' : '#64748b'} stroke="#ffffff" strokeWidth="2.5" />
                <line x1="330" y1="50" x2="330" y2="10" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                <circle cx="330" cy="10" r="5" fill="#ef4444" stroke="#000" strokeWidth="2" />
                
                {/* Antenna radio ripples if active */}
                {signalActive && (
                  <g className="animate-ping">
                    <circle cx="330" cy="10" r="12" stroke="#38bdf8" strokeWidth="2" fill="none" />
                    <circle cx="330" cy="10" r="22" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                  </g>
                )}
                <text x="310" y="78" fill="#e2e8f0" fontSize="10" fontFamily="Patrick Hand" fontWeight="bold">ANTENNA</text>
              </g>

              {/* Center Microcontroller / CPU Chip */}
              <g
                onClick={() => handleSelectPart(circuitParts[0])}
                className="cursor-pointer group"
              >
                <rect
                  x="165"
                  y="105"
                  width="70"
                  height="55"
                  rx="4"
                  fill="#09090b"
                  stroke={selectedPart.id === 'motherboard' ? '#4ade80' : '#475569'}
                  strokeWidth="3"
                />
                {/* Chip pins */}
                {[-10, 5, 20, 35].map((offset, i) => (
                  <React.Fragment key={i}>
                    <line x1="155" y1={115 + offset} x2="165" y2={115 + offset} stroke="#e2e8f0" strokeWidth="2" />
                    <line x1="235" y1={115 + offset} x2="245" y2={115 + offset} stroke="#e2e8f0" strokeWidth="2" />
                  </React.Fragment>
                ))}
                <text x="175" y="136" fill="#4ade80" fontSize="11" fontFamily="Architects Daughter" fontWeight="bold">PRA-08</text>
                <text x="175" y="148" fill="#a1a1aa" fontSize="8" fontFamily="Patrick Hand">KID-BRAIN</text>
              </g>

              {/* H-Bridge Motor Driver Chip */}
              <g
                onClick={() => handleSelectPart(circuitParts[3])}
                className="cursor-pointer group"
              >
                <rect
                  x="60"
                  y="170"
                  width="50"
                  height="35"
                  rx="3"
                  fill="#1e1b4b"
                  stroke={selectedPart.id === 'motor-driver' ? '#ec4899' : '#6366f1'}
                  strokeWidth="2.5"
                />
                <text x="68" y="192" fill="#f472b6" fontSize="9" fontFamily="Patrick Hand" fontWeight="bold">MOTORS</text>
              </g>

              {/* Glowing Indicator LEDs */}
              <g
                onClick={() => handleSelectPart(circuitParts[4])}
                className="cursor-pointer"
              >
                {/* Red LED */}
                <circle cx="280" cy="225" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                {/* Blue LED */}
                <circle cx="310" cy="225" r="7" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" className="animate-bounce" />
                <text x="275" y="248" fill="#e2e8f0" fontSize="9" fontFamily="Patrick Hand">LEDS</text>
              </g>

              {/* Resistors (striped cylinders) */}
              <g
                onClick={() => handleSelectPart(circuitParts[1])}
                className="cursor-pointer"
              >
                <rect x="60" y="65" width="28" height="10" rx="3" fill="#fef08a" stroke="#000" strokeWidth="1.5" />
                <line x1="68" y1="65" x2="68" y2="75" stroke="#ef4444" strokeWidth="2" />
                <line x1="74" y1="65" x2="74" y2="75" stroke="#000" strokeWidth="2" />
                <line x1="80" y1="65" x2="80" y2="75" stroke="#f59e0b" strokeWidth="2" />
                <text x="50" y="55" fill="#fef08a" fontSize="9" fontFamily="Patrick Hand">COPPER TRACE</text>
              </g>
            </svg>
          </div>

          {/* Quick part select buttons */}
          <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
            {circuitParts.map((part) => (
              <button
                key={part.id}
                onClick={() => handleSelectPart(part)}
                className={`px-2.5 py-1 rounded-xs text-xs font-doodle font-bold border transition-all ${
                  selectedPart.id === part.id
                    ? 'bg-emerald-400 text-stone-950 border-white shadow-[2px_2px_0px_#ffffff]'
                    : 'bg-emerald-950/80 text-emerald-200 border-emerald-700 hover:bg-emerald-900'
                }`}
              >
                {part.kidName}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Kid-Friendly Explanation Card */}
        <div className="lg:col-span-5 bg-yellow-50 p-5 rounded-xs border-2 border-stone-800 shadow-[4px_4px_0px_#1c1917] relative">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b-2 border-dashed border-stone-400">
            <span className="p-2 rounded-xs border border-stone-800" style={{ backgroundColor: selectedPart.color }}>
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            <div>
              <span className="text-xs font-doodle text-stone-500 uppercase font-bold">
                {selectedPart.name}
              </span>
              <h4 className="font-sketch text-xl font-bold text-stone-900 leading-tight">
                {selectedPart.kidName}
              </h4>
            </div>
          </div>

          <div className="space-y-3 font-doodle">
            <div>
              <p className="text-xs font-sketch text-stone-500 font-bold uppercase">Role in the Toy:</p>
              <p className="text-sm font-bold text-stone-800">
                {selectedPart.role}
              </p>
            </div>

            <div className="bg-white p-3 rounded-xs border border-stone-700 text-stone-800 text-sm leading-relaxed">
              <p>{selectedPart.explanation}</p>
            </div>

            <div className="bg-amber-100/90 p-2.5 rounded-xs border border-amber-400 text-amber-950 text-xs">
              <p className="font-bold flex items-center gap-1 mb-0.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Prajwal&apos;s Wonder Note:</span>
              </p>
              <p>{selectedPart.funFact}</p>
            </div>

            {selectedPart.id === 'antenna' && (
              <button
                onClick={pulseAntenna}
                className="w-full py-2 bg-sky-300 hover:bg-sky-400 text-stone-900 font-sketch font-bold text-xs rounded-xs border border-stone-900 shadow-[2px_2px_0px_#1c1917] flex items-center justify-center gap-1.5 transition-transform hover:-translate-y-0.5"
              >
                <Radio className="w-3.5 h-3.5 text-sky-900" />
                <span>Beam Invisible Radio Waves Now!</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
