import React, { useState } from 'react';
import { AccessibilitySettings } from '../types';
import { soundEffects } from '../utils/soundEffects';
import { Heart, Sparkles, Smile, MessageCircle } from 'lucide-react';

interface Scene3DadHugProps {
  a11y: AccessibilitySettings;
}

export const Scene3DadHug: React.FC<Scene3DadHugProps> = ({ a11y }) => {
  const [hugCount, setHugCount] = useState<number>(1);
  const [isHugging, setIsHugging] = useState<boolean>(false);
  const [ledEyesGlow, setLedEyesGlow] = useState<boolean>(true);

  const triggerHug = () => {
    soundEffects.playHugChime();
    setIsHugging(true);
    setHugCount(prev => prev + 1);
    setTimeout(() => setIsHugging(false), 900);
  };

  const toggleLedEyes = () => {
    soundEffects.playBeep(740);
    setLedEyesGlow(prev => !prev);
  };

  return (
    <div className="bg-[#fffefb] p-6 rounded-xs border-3 border-stone-900 shadow-[6px_6px_0px_#1c1917] relative overflow-hidden">
      <div className="absolute top-2 right-4 px-2 py-0.5 bg-rose-200 text-stone-900 text-xs font-doodle font-bold border border-stone-800 rotate-1 shadow-xs">
        SCENE 3: THE TURNING POINT
      </div>

      <div className="mb-4">
        <h3 className="font-sketch text-2xl font-bold text-stone-950 flex items-center gap-2">
          <span>🤗 The Flying Hug & The Secret of Code</span>
        </h3>
        <p className="font-doodle text-stone-700 text-sm mt-1">
          No scolding. No anger. Just a sudden burst of laughter as Dad swooped in, lifted Prajwal toward the ceiling lamp, and opened the door to invention.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: 2D Kid-Drawn Dad Hug Illustration */}
        <div className="lg:col-span-6 bg-gradient-to-b from-amber-50 to-orange-50/40 p-4 rounded-xs border-2 border-stone-800 shadow-[4px_4px_0px_#1c1917] flex flex-col items-center relative">
          
          {/* Confetti hearts floating up */}
          {isHugging && (
            <div className="absolute inset-0 pointer-events-none flex justify-around items-start pt-4 animate-bounce">
              <span className="text-2xl">❤️</span>
              <span className="text-2xl">✨</span>
              <span className="text-2xl">🌟</span>
              <span className="text-2xl">❤️</span>
            </div>
          )}

          {/* Hand-Drawn SVG Dad Lifting Prajwal */}
          <div className="py-2 select-none">
            <svg
              viewBox="0 0 260 260"
              className={`w-64 h-64 transition-transform ${isHugging ? '-translate-y-2 scale-105' : ''}`}
              fill="none"
            >
              {/* CRAYON BLEED FILLS (Over the lines!) */}
              {/* Dad's dark blue sweater fill outside lines */}
              <path
                d="M 50 170 Q 30 250 50 260 H 180 Q 190 240 170 170 Z"
                fill="#3b82f6"
                opacity="0.8"
                transform="translate(4, 3)"
              />
              {/* Prajwal's yellow hoodie high in the air */}
              <circle cx="150" cy={isHugging ? "80" : "95"} r="35" fill="#fde047" opacity="0.9" />

              {/* DAD'S BODY (10-year-old marker doodle) */}
              {/* Dad's head */}
              <circle cx="90" cy="140" r="30" stroke="#18181b" strokeWidth="4" fill="#ffedd5" />
              {/* Dad's glasses */}
              <rect x="75" y="130" width="16" height="12" rx="3" stroke="#18181b" strokeWidth="2.5" fill="#e0f2fe" opacity="0.7" />
              <rect x="95" y="130" width="16" height="12" rx="3" stroke="#18181b" strokeWidth="2.5" fill="#e0f2fe" opacity="0.7" />
              <line x1="91" y1="136" x2="95" y2="136" stroke="#18181b" strokeWidth="2" />
              {/* Dad's cheerful laugh smile */}
              <path d="M 82 152 Q 95 165 106 152" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />

              {/* Dad's arms reaching UP to hold Prajwal */}
              <path
                d="M 70 180 Q 90 140 120 120"
                stroke="#18181b"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 125 180 Q 140 145 165 125"
                stroke="#18181b"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

              {/* PRAJWAL (Lifted high in the air!) */}
              <g transform={isHugging ? "translate(0, -14)" : "translate(0, 0)"}>
                {/* Spiky hair */}
                <path
                  d="M 130 65 L 120 40 L 145 50 L 160 30 L 175 55 L 190 45 L 180 75 Z"
                  fill="#18181b"
                />
                {/* Prajwal head */}
                <circle cx="155" cy="75" r="24" stroke="#18181b" strokeWidth="3.5" fill="#fed7aa" />

                {/* Glowing LED Eyes */}
                <circle
                  cx="146"
                  cy="72"
                  r="5"
                  fill={ledEyesGlow ? "#22c55e" : "#18181b"}
                  stroke="#18181b"
                  strokeWidth="2"
                  className={ledEyesGlow ? "animate-pulse" : ""}
                />
                <circle
                  cx="166"
                  cy="72"
                  r="5"
                  fill={ledEyesGlow ? "#22c55e" : "#18181b"}
                  stroke="#18181b"
                  strokeWidth="2"
                  className={ledEyesGlow ? "animate-pulse" : ""}
                />

                {/* Wide excited open smile */}
                <path d="M 147 84 Q 156 95 167 84 Z" fill="#ef4444" stroke="#18181b" strokeWidth="2.5" />

                {/* Flying legs kicking playfully */}
                <line x1="140" y1="125" x2="120" y2="155" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
                <line x1="160" y1="125" x2="175" y2="155" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
              </g>

              {/* Floor broken car bits below them */}
              <rect x="190" y="235" width="22" height="14" rx="2" fill="#22c55e" stroke="#18181b" strokeWidth="2" />
              <circle cx="225" cy="242" r="7" fill="#27272a" stroke="#18181b" strokeWidth="2" />
            </svg>
          </div>

          {/* Interactive Hug Trigger */}
          <div className="w-full flex items-center justify-between gap-2 mt-2 pt-2 border-t border-stone-300">
            <button
              onClick={triggerHug}
              className="flex-1 py-2 bg-rose-400 hover:bg-rose-500 text-stone-950 font-sketch font-bold text-sm rounded-xs border-2 border-stone-900 shadow-[3px_3px_0px_#1c1917] flex items-center justify-center gap-1.5 transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-rose-900 text-rose-900" />
              <span>Lift Prajwal Higher! ({hugCount})</span>
            </button>

            <button
              onClick={toggleLedEyes}
              title="Toggle LED Eye Glow"
              className={`px-3 py-2 text-xs font-doodle font-bold rounded-xs border-2 border-stone-800 shadow-[2px_2px_0px_#1c1917] transition-all ${
                ledEyesGlow ? 'bg-emerald-300 text-stone-900' : 'bg-stone-200 text-stone-600'
              }`}
            >
              💡 LED Eyes: {ledEyesGlow ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {/* Right Column: Dad's Lesson & The Philosophy of Code */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Dad's Quote Card */}
          <div className="bg-amber-100/80 p-4 rounded-xs border-2 border-stone-800 shadow-[4px_4px_0px_#1c1917] relative">
            <span className="absolute -top-3 left-4 px-2 py-0.5 bg-yellow-300 text-stone-900 text-xs font-doodle font-bold border border-stone-800 rotate-[-1deg]">
              DAD&apos;S GOLDEN RULE
            </span>
            <div className="flex items-start gap-3 mt-1">
              <span className="text-3xl">🗣️</span>
              <div>
                <p className="font-sketch text-lg font-bold text-stone-900">
                  &ldquo;You really are a trouble-maker, aren&apos;t you?&rdquo;
                </p>
                <p className="font-doodle text-sm text-stone-700 mt-1 leading-relaxed">
                  He laughed! He didn&apos;t worry about the $20 toy. He knelt on the floor right beside the scattered pieces and started pointing out the components.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Lesson Cards */}
          <div className="space-y-2">
            <div className="bg-white p-3.5 rounded-xs border border-stone-800 shadow-xs flex items-start gap-2.5">
              <span className="p-1.5 bg-blue-100 text-blue-900 rounded-xs font-bold text-xs border border-stone-800">
                01
              </span>
              <div>
                <h5 className="font-sketch font-bold text-sm text-stone-900">
                  Hardware is the Musician, Code is the Sheet Music
                </h5>
                <p className="font-doodle text-xs text-stone-700 mt-0.5">
                  The plastic wheels and gears don&apos;t know what to do on their own. They wait for invisible electrical instructions written by human coders.
                </p>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xs border border-stone-800 shadow-xs flex items-start gap-2.5">
              <span className="p-1.5 bg-emerald-100 text-emerald-900 rounded-xs font-bold text-xs border border-stone-800">
                02
              </span>
              <div>
                <h5 className="font-sketch font-bold text-sm text-stone-900">
                  Curiosity Beats Perfection Every Time
                </h5>
                <p className="font-doodle text-xs text-stone-700 mt-0.5">
                  Every great engineer started by taking things apart. If you know how the tiny pieces connect, you can invent anything you imagine.
                </p>
              </div>
            </div>
          </div>

          {/* Transition Prompt to Scene 4 */}
          <div className="bg-sky-50 p-3 rounded-xs border-2 border-dashed border-sky-400 text-sky-950 font-doodle text-xs flex items-center justify-between">
            <span>Next step: Dad pulled Prajwal up to the big glowing computer monitor...</span>
            <span className="font-bold underline">Scroll down! ⬇️</span>
          </div>

        </div>

      </div>
    </div>
  );
};
