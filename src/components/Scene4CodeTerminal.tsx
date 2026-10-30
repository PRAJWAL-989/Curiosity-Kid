import React, { useState } from 'react';
import { AccessibilitySettings } from '../types';
import { soundEffects } from '../utils/soundEffects';
import { Play, Sparkles, Code2, Rocket, RotateCcw, Check } from 'lucide-react';

interface Scene4CodeTerminalProps {
  a11y: AccessibilitySettings;
}

export const Scene4CodeTerminal: React.FC<Scene4CodeTerminalProps> = ({ a11y }) => {
  // Invention configuration
  const [inventionName, setInventionName] = useState<string>("Spark-Mobile 3000");
  const [wheelType, setWheelType] = useState<'monster' | 'rockets' | 'hover'>('rockets');
  const [colorPaint, setColorPaint] = useState<string>('#3b82f6');
  const [antennaPower, setAntennaPower] = useState<string>('satellite');
  const [a11yFeature, setA11yFeature] = useState<string>('voice-guidance');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [runLog, setRunLog] = useState<string>("Ready to compile Prajwal's dream invention!");

  const handleRunCode = () => {
    soundEffects.playCarVroom();
    setIsRunning(true);
    setRunLog("⚡ Uploading firmware... Motor initialized... Antenna listening!");
    setTimeout(() => {
      soundEffects.playHugChime();
      setIsRunning(false);
      setRunLog(`✨ SUCCESS! "${inventionName}" is cruising with ${wheelType} propulsion!`);
    }, 1000);
  };

  return (
    <div className="bg-[#fffefb] p-6 rounded-3xl shadow-xl relative">
      <div className="absolute top-2 right-4 px-3 py-1 crayon-btn crayon-sky text-stone-900 text-xs font-doodle font-bold rotate-[-1deg] shadow-xs">
        SCENE 4: THE INVENTOR IS BORN
      </div>

      <div className="mb-4">
        <h3 className="font-sketch text-2xl font-bold text-stone-950 flex items-center gap-2">
          <span>💻 The Big Glowing Monitor & The Future</span>
        </h3>
        <p className="font-doodle text-stone-700 text-sm mt-1">
          &ldquo;If you learn to guide these machines, you can invent your own cars from scratch.&rdquo; Staring into the bright monitor, Prajwal asked: <em>What awesome thing am I going to make next?</em>
        </p>
      </div>

      {/* Interactive Code Lab */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Kid Terminal & Scratch-like Code Builder */}
        <div className="lg:col-span-6 bg-stone-900 text-emerald-400 p-5 sm:p-6 rounded-3xl shadow-lg font-mono">
          <div className="flex items-center justify-between pb-3 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-stone-400 font-bold ml-1">Prajwal_IDE_v1.0.exe</span>
            </div>
            <span className="text-stone-400">RC_BRAIN_ONLINE</span>
          </div>

          {/* Interactive Code Configuration Lines */}
          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-yellow-300">inventionName</span> ={' '}
              <input
                type="text"
                value={inventionName}
                onChange={(e) => setInventionName(e.target.value)}
                className="bg-stone-800 text-emerald-300 border border-stone-700 px-2 py-0.5 rounded-xs text-xs font-mono focus:outline-none focus:border-emerald-400 w-44"
              />
              ;
            </div>

            {/* Wheel Propulsion Chooser */}
            <div>
              <span className="text-purple-400">let</span>{' '}
              <span className="text-sky-300">propulsion</span> ={' '}
              <span className="text-stone-400">// click to choose:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {(['rockets', 'hover', 'monster'] as const).map((w) => (
                  <button
                    key={w}
                    onClick={() => {
                      soundEffects.playBeep(600);
                      setWheelType(w);
                    }}
                    className={`px-2 py-0.5 rounded-xs text-xs uppercase font-bold border transition-all ${
                      wheelType === w
                        ? 'bg-emerald-400 text-stone-950 border-white'
                        : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
                    }`}
                  >
                    &quot;{w}&quot;
                  </button>
                ))}
              </div>
            </div>

            {/* Crayon Color Chooser */}
            <div>
              <span className="text-purple-400">let</span>{' '}
              <span className="text-amber-300">crayonPaint</span> ={' '}
              <div className="flex items-center gap-2 mt-1">
                {[
                  { name: 'Red', color: '#ef4444' },
                  { name: 'Blue', color: '#3b82f6' },
                  { name: 'Yellow', color: '#eab308' },
                  { name: 'Green', color: '#22c55e' },
                  { name: 'Purple', color: '#a855f7' }
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      soundEffects.playCrayonScratch();
                      setColorPaint(c.color);
                    }}
                    style={{ backgroundColor: c.color }}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      colorPaint === c.color ? 'scale-125 border-white shadow-xs' : 'border-stone-800'
                    }`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Built-in Accessibility Superpower */}
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-pink-300">accessibilityAssistance</span> ={' '}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {[
                  { id: 'voice-guidance', label: 'Audio Chimes & Speech' },
                  { id: 'auto-swerve', label: 'Obstacle Sonar' },
                  { id: 'high-contrast', label: 'Glow-in-the-Dark' }
                ].map((feat) => (
                  <button
                    key={feat.id}
                    onClick={() => {
                      soundEffects.playBeep(700);
                      setA11yFeature(feat.id);
                    }}
                    className={`px-2 py-0.5 rounded-xs text-xs font-bold border transition-all ${
                      a11yFeature === feat.id
                        ? 'bg-pink-400 text-stone-950 border-white'
                        : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
                    }`}
                  >
                    {feat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Run Code Button */}
          <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-sketch font-bold rounded-xs border border-white shadow-[2px_2px_0px_#ffffff] flex items-center gap-1.5 cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              <span>{isRunning ? "Compiling..." : "Run Code & Build Car!"}</span>
            </button>

            <span className="text-xs text-stone-400 font-mono">
              ⚡ 0 Errors • 100% Kid Logic
            </span>
          </div>

          {/* Console Log Output */}
          <div className="mt-3 p-2 bg-black/60 rounded-xs border border-stone-800 text-xs font-mono text-stone-300">
            <span className="text-emerald-400">&gt;</span> {runLog}
          </div>
        </div>

        {/* Right: Live 2D Kid-Drawn Preview of the Invented Car */}
        <div className="lg:col-span-6 bg-[#f8f5eb] p-5 rounded-xs border-3 border-stone-900 shadow-[5px_5px_0px_#1c1917] flex flex-col items-center">
          <div className="w-full flex items-center justify-between pb-2 border-b-2 border-dashed border-stone-300 mb-3">
            <span className="font-sketch text-lg font-bold text-stone-900">
              🏎️ Prajwal&apos;s Prototype Viewer
            </span>
            <span className="text-xs font-doodle font-bold px-2 py-0.5 bg-yellow-200 text-stone-800 rounded-xs border border-stone-700">
              LIVE 2D RENDERING
            </span>
          </div>

          <div className="relative w-full h-56 bg-sky-100/60 rounded-xs border-2 border-stone-800 flex items-center justify-center overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-graph-paper opacity-50" />

            {/* The Custom Built Car Graphic */}
            <div className={`relative transition-all duration-300 ${isRunning ? 'animate-bounce' : ''}`}>
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                {/* CRAYON BLEED FILLS (Over the lines!) */}
                {/* Body fill outside lines */}
                <path
                  d="M 30 75 Q 60 30 110 30 Q 160 30 190 75 Z"
                  fill={colorPaint}
                  opacity="0.85"
                  transform="translate(6, 4)"
                />

                {/* Hand-drawn body outline */}
                <path
                  d="M 28 75 Q 58 28 108 28 Q 158 28 188 75 Z"
                  stroke="#18181b"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Windshield */}
                <path d="M 90 32 L 135 32 L 155 58 L 90 58 Z" fill="#e0f2fe" stroke="#18181b" strokeWidth="3" />

                {/* Antenna */}
                <line x1="145" y1="30" x2="165" y2="10" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
                <circle cx="165" cy="10" r="4" fill="#38bdf8" stroke="#18181b" strokeWidth="2" />
                <circle cx="165" cy="10" r="8" stroke="#38bdf8" strokeWidth="1.5" className="animate-ping" />

                {/* WHEELS / PROPULSION BASED ON SELECTION */}
                {wheelType === 'rockets' && (
                  <g>
                    {/* Rocket flames */}
                    <path d="M 25 70 Q 5 65 0 75 Q 5 85 25 80 Z" fill="#f97316" className="animate-pulse" />
                    <path d="M 20 72 Q 8 70 5 75 Q 8 80 20 78 Z" fill="#facc15" />
                    {/* Wheels */}
                    <circle cx="65" cy="82" r="16" fill="#27272a" stroke="#18181b" strokeWidth="3.5" />
                    <circle cx="65" cy="82" r="6" fill="#facc15" />
                    <circle cx="155" cy="82" r="16" fill="#27272a" stroke="#18181b" strokeWidth="3.5" />
                    <circle cx="155" cy="82" r="6" fill="#facc15" />
                  </g>
                )}

                {wheelType === 'hover' && (
                  <g>
                    {/* Blue anti-gravity hover pads */}
                    <ellipse cx="65" cy="88" rx="22" ry="7" fill="#38bdf8" stroke="#18181b" strokeWidth="3" opacity="0.9" />
                    <ellipse cx="155" cy="88" rx="22" ry="7" fill="#38bdf8" stroke="#18181b" strokeWidth="3" opacity="0.9" />
                    <ellipse cx="65" cy="95" rx="16" ry="4" fill="#67e8f9" opacity="0.6" className="animate-ping" />
                    <ellipse cx="155" cy="95" rx="16" ry="4" fill="#67e8f9" opacity="0.6" className="animate-ping" />
                  </g>
                )}

                {wheelType === 'monster' && (
                  <g>
                    {/* Extra giant monster wheels */}
                    <circle cx="60" cy="80" r="22" fill="#18181b" stroke="#18181b" strokeWidth="4" />
                    <circle cx="60" cy="80" r="9" fill="#eab308" />
                    <circle cx="160" cy="80" r="22" fill="#18181b" stroke="#18181b" strokeWidth="4" />
                    <circle cx="160" cy="80" r="9" fill="#eab308" />
                  </g>
                )}

                {/* Prajwal's custom name written on the door */}
                <text x="80" y="70" fill="#ffffff" fontSize="9" fontFamily="Architects Daughter" fontWeight="bold">
                  {inventionName.slice(0, 14)}
                </text>
              </svg>
            </div>
          </div>

          <div className="w-full mt-3 bg-amber-100/70 p-3 rounded-xs border border-stone-800 text-xs font-doodle text-stone-800">
            <p className="font-bold flex items-center gap-1.5 text-stone-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Invention Specs:</span>
            </p>
            <p className="mt-1">
              Equipped with <strong>{wheelType.toUpperCase()}</strong> drive, custom crayon chassis, and <strong>{a11yFeature.toUpperCase()}</strong> accessibility copilot!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
