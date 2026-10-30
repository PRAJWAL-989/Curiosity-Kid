import React, { useState } from 'react';
import { AccessibilitySettings } from '../types';
import { soundEffects } from '../utils/soundEffects';
import { Play, RotateCcw, Sparkles } from 'lucide-react';

interface Scene1CrashProps {
  a11y: AccessibilitySettings;
  onExploredChassis: () => void;
}

export const Scene1Crash: React.FC<Scene1CrashProps> = ({ a11y, onExploredChassis }) => {
  const [carState, setCarState] = useState<'idle' | 'driving' | 'crashed'>('idle');
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  const startCarRun = () => {
    if (carState === 'driving') return;
    setCarState('driving');
    soundEffects.playCarVroom();

    setTimeout(() => {
      setCarState('crashed');
      soundEffects.playCrash();
      onExploredChassis();
    }, 1200);
  };

  const resetCar = () => {
    soundEffects.playBeep(400);
    setCarState('idle');
  };

  return (
    <div className="bg-[#fffefb] p-6 rounded-xs border-3 border-stone-900 shadow-[6px_6px_0px_#1c1917] relative overflow-hidden">
      {/* Tape decor */}
      <div className="absolute top-2 right-4 px-2 py-0.5 bg-rose-200 text-stone-900 text-xs font-doodle font-bold border border-stone-800 rotate-2 shadow-xs">
        SCENE 1: THE ACCIDENT
      </div>

      <div className="mb-4">
        <h3 className="font-sketch text-2xl font-bold text-stone-950 flex items-center gap-2">
          <span>🏎️ The Table Launch Experiment</span>
        </h3>
        <p className="font-doodle text-stone-700 text-sm mt-1">
          Prajwal gripped the remote transmitter, pushed the plastic joystick all the way up, and sent the red buggy flying toward the edge!
        </p>
      </div>

      {/* Interactive 2D Kid-Drawn Stage */}
      <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-sky-50 to-amber-50/50 rounded-xs border-2 border-stone-800 overflow-hidden flex flex-col justify-end">
        {/* Table Surface (Woodgrain marker doodles) */}
        <div className="relative w-3/5 h-20 bg-amber-200 border-t-4 border-r-4 border-stone-900 shadow-sm flex items-center px-4">
          <span className="font-doodle text-xs text-amber-900/60 font-bold select-none">
            ~~~ Dining Room Table ~~~
          </span>
          {/* Edge warning doodle */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-red-400/80 animate-pulse" />
        </div>

        {/* Floor carpet (Squiggly markers) */}
        <div className="w-full h-12 bg-amber-100 border-t-3 border-stone-900 flex items-center justify-around px-4">
          <span className="text-xs font-doodle text-stone-400 select-none">
            *living room carpet fibers*
          </span>
          <span className="text-xs font-doodle text-stone-400 select-none">
            *dust bunny*
          </span>
        </div>

        {/* The RC Car Actor */}
        <div
          className={`absolute transition-all duration-1000 ease-in-out ${
            carState === 'idle'
              ? 'left-6 bottom-20 rotate-0'
              : carState === 'driving'
              ? 'left-[55%] bottom-22 rotate-[-8deg]'
              : 'left-[72%] bottom-10 rotate-[42deg]'
          }`}
        >
          {carState !== 'crashed' ? (
            /* Intact RC Car (2D Kid Drawing with color bleed) */
            <div className="relative cursor-pointer" onClick={startCarRun}>
              <svg width="130" height="75" viewBox="0 0 130 75" fill="none">
                {/* CRAYON BLEED (Red spills outside lines) */}
                <path
                  d="M 15 50 Q 30 20 65 20 Q 95 20 115 50 Z"
                  fill="#ef4444"
                  opacity="0.9"
                  transform="translate(4, -3)"
                />
                <circle cx="28" cy="54" r="16" fill="#3b82f6" opacity="0.6" />
                <circle cx="98" cy="54" r="16" fill="#3b82f6" opacity="0.6" />

                {/* Hand drawn outline */}
                <path
                  d="M 12 52 Q 28 22 62 22 Q 92 22 112 52 Z"
                  stroke="#18181b"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Spoilers & Antenna */}
                <line x1="14" y1="35" x2="6" y2="15" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <line x1="85" y1="22" x2="105" y2="5" stroke="#71717a" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="105" cy="5" r="3" fill="#ef4444" />

                {/* Monster wheels */}
                <circle cx="30" cy="54" r="14" stroke="#18181b" strokeWidth="4" fill="#27272a" />
                <circle cx="30" cy="54" r="5" fill="#facc15" />
                <circle cx="95" cy="54" r="14" stroke="#18181b" strokeWidth="4" fill="#27272a" />
                <circle cx="95" cy="54" r="5" fill="#facc15" />

                {/* Speed lines */}
                {carState === 'driving' && (
                  <g className="animate-pulse">
                    <line x1="-15" y1="30" x2="-2" y2="30" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                    <line x1="-22" y1="42" x2="-4" y2="42" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                  </g>
                )}
              </svg>
              {carState === 'idle' && (
                <span className="absolute -top-7 left-2 px-2 py-0.5 bg-yellow-300 text-stone-900 text-xs font-doodle font-bold border border-stone-800 animate-bounce rounded-xs">
                  Click to Zoom!
                </span>
              )}
            </div>
          ) : (
            /* Split Wide Open Chassis (The Moment of Discovery) */
            <div className="relative">
              <svg width="160" height="95" viewBox="0 0 160 95" fill="none">
                {/* Comic Boom Cloud */}
                <path
                  d="M 20 40 Q 30 15 55 20 Q 80 5 105 18 Q 130 10 140 35 Q 155 60 135 80 Q 95 95 55 85 Q 10 80 20 40 Z"
                  fill="#fef08a"
                  stroke="#18181b"
                  strokeWidth="3"
                />

                {/* Broken Red Chassis Split Shell */}
                <path
                  d="M 25 35 Q 45 15 65 30 L 70 50 Z"
                  fill="#ef4444"
                  stroke="#18181b"
                  strokeWidth="3"
                  transform="rotate(-20 45 35)"
                />
                <path
                  d="M 95 30 Q 115 15 135 35 L 120 55 Z"
                  fill="#ef4444"
                  stroke="#18181b"
                  strokeWidth="3"
                  transform="rotate(25 115 35)"
                />

                {/* Exposed Bright Green Motherboard popping out */}
                <rect
                  x="52"
                  y="42"
                  width="55"
                  height="34"
                  rx="3"
                  fill="#22c55e"
                  stroke="#18181b"
                  strokeWidth="3.5"
                  className="animate-pulse"
                />
                {/* Golden copper traces */}
                <path d="M 58 50 H 75 V 65 H 90" stroke="#f59e0b" strokeWidth="2.5" />
                <circle cx="75" cy="50" r="2.5" fill="#f59e0b" />
                <circle cx="90" cy="65" r="2.5" fill="#f59e0b" />

                {/* Glowing LED */}
                <circle cx="62" cy="68" r="3.5" fill="#ef4444" stroke="#18181b" strokeWidth="1.5" />

                {/* Silver antenna springing out */}
                <path
                  d="M 98 42 Q 115 25 130 15"
                  stroke="#71717a"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="130" cy="15" r="4" fill="#38bdf8" stroke="#18181b" strokeWidth="1.5" />

                {/* Detached Wheel rolling away */}
                <circle cx="140" cy="78" r="11" fill="#27272a" stroke="#18181b" strokeWidth="2.5" />
              </svg>

              {/* Comic Impact Text */}
              <div className="absolute -top-6 -left-4 bg-red-500 text-white font-sketch text-lg font-black px-2 py-0.5 rounded-xs border-2 border-stone-900 rotate-[-12deg] shadow-xs">
                CRASHHH! 💥
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Control Buttons & Kid Observations */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {carState !== 'crashed' ? (
            <button
              onClick={startCarRun}
              className="px-4 py-2 bg-red-400 hover:bg-red-500 text-stone-950 font-sketch font-bold rounded-xs border-2 border-stone-900 shadow-[3px_3px_0px_#1c1917] flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Play className="w-4 h-4 fill-stone-900" />
              <span>Full Throttle Off Table!</span>
            </button>
          ) : (
            <button
              onClick={resetCar}
              className="px-4 py-2 bg-amber-200 hover:bg-amber-300 text-stone-950 font-sketch font-bold rounded-xs border-2 border-stone-900 shadow-[3px_3px_0px_#1c1917] flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Toy & Table</span>
            </button>
          )}

          <button
            onClick={() => {
              soundEffects.playCarVroom();
              setSpeedMultiplier(prev => (prev === 3 ? 1 : prev + 1));
            }}
            className="px-3 py-2 bg-yellow-200 hover:bg-yellow-300 text-stone-900 text-xs font-doodle font-bold rounded-xs border-2 border-stone-800 shadow-[2px_2px_0px_#1c1917]"
          >
            ⚡ Motor Boost: {speedMultiplier}x
          </button>
        </div>

        {carState === 'crashed' && (
          <div className="flex items-center gap-2 bg-emerald-100 px-3 py-1.5 rounded-xs border-2 border-emerald-700 animate-pulse">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-doodle font-bold text-emerald-950">
              Motherboard revealed! Scroll to Scene 2 to inspect!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
