import React, { useState, useEffect, useRef } from 'react';
import { AccessibilitySettings } from '../types';
import { soundEffects } from '../utils/soundEffects';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ArrowDown, 
  ChevronRight,
  Radio,
  Film
} from 'lucide-react';
import { CarMakingEasterEggModal } from './CarMakingEasterEggModal';

interface ContinuousKidCanvasProps {
  a11y: AccessibilitySettings;
  onOpenTrack2Dossier: () => void;
}

interface StoryBeat {
  id: number;
  timeStart: number;
  timeEnd: number;
  title: string;
  kidTag: string;
  storyText: string;
  kidNote: string;
  audioPrompt: string;
}

const TOTAL_DURATION = 36; // 36 seconds animation

const storyBeats: StoryBeat[] = [
  {
    id: 1,
    timeStart: 0,
    timeEnd: 3,
    title: "The Living Room Speedway",
    kidTag: "🏎️ 6-FOOT RUNWAY CLEARED",
    storyText: "Prajwal cleared away the salt shakers and napkins to turn the long dining table into a high-speed runway. He gripped the remote trigger, rubber tires gripping the polished wood.",
    kidNote: "The wooden polish gave the tires maximum grip! I was already vibrating with excitement.",
    audioPrompt: "Prajwal cleared the dining table into a high-speed runway for his favorite red remote-control buggy."
  },
  {
    id: 2,
    timeStart: 3,
    timeEnd: 6,
    title: "Full Throttle to the Edge!",
    kidTag: "⚡ MOTOR WHINING AT 9000 RPM",
    storyText: "Prajwal jammed the plastic joystick all the way up! The electric car bolted forward in a scarlet blur, roaring straight for the sheer cliff of the table.",
    kidNote: "I wanted to see if it could brake before the drop. It definitely could not brake in time!",
    audioPrompt: "Prajwal jammed the joystick all the way up! The car bolted forward, roaring straight for the table edge."
  },
  {
    id: 3,
    timeStart: 6,
    timeEnd: 9,
    title: "The Airborne Parabola",
    kidTag: "✈️ FREE FLIGHT OVER THE RUG",
    storyText: "The wheels ran out of wood! The red buggy launched into the empty living room air, floating in a breathtaking parabola with tires spinning furiously.",
    kidNote: "For half a second, I thought I had accidentally invented an actual flying spaceship!",
    audioPrompt: "The wheels ran out of wood! The red buggy launched into the empty air, floating in a breathtaking parabola."
  },
  {
    id: 4,
    timeStart: 9,
    timeEnd: 12,
    title: "THE LOUD CRASH!",
    kidTag: "💥 KABOOM! CRACK! SNAP!",
    storyText: "CRASH! The car slammed nose-first onto the living room floor! Screws rattled across the floorboards, one wheel bounced away, and the plastic shell split with a deafening crack.",
    kidNote: "The sound was so loud it rattled the room! But I didn't even drop a single tear.",
    audioPrompt: "Crash! The car slammed nose-first onto the living room floor with a sharp plastic crack."
  },
  {
    id: 5,
    timeStart: 12,
    timeEnd: 15,
    title: "Frozen in Pure Awe",
    kidTag: "😲 NO TEARS, JUST TREASURE",
    storyText: "Instead of crying over his broken toy, the 8-year-old stood completely frozen in awe. Where most saw ruined plastic, Prajwal's eyes widened at a hidden kingdom spilling from the cracks.",
    kidNote: "My brain felt completely calm and tingly. Something glowing green was looking back at me from the plastic.",
    audioPrompt: "Instead of crying over his broken toy, the eight-year-old stood completely frozen in awe."
  },
  {
    id: 6,
    timeStart: 15,
    timeEnd: 18,
    title: "The Green Motherboard Island",
    kidTag: "🏝️ EMERALD SILICON CITY",
    storyText: "Spilling out from the broken chassis was an emerald-green printed circuit board. To Prajwal's imagination, it looked like an alien metropolis packed with black skyscrapers and silver towers.",
    kidNote: "I touched the green fiberglass with my finger. It smelled like warm electronics and pure mystery.",
    audioPrompt: "Spilling out from the broken chassis was an emerald-green printed circuit board, looking like an alien metropolis."
  },
  {
    id: 7,
    timeStart: 18,
    timeEnd: 21,
    title: "Golden Copper Lightning Roads",
    kidTag: "🛣️ INVISIBLE ELECTRON HIGHWAYS",
    storyText: "Winding across the board were thousands of tiny, gleaming copper paths. Electric messengers danced across them at nearly light-speed carrying commands.",
    kidNote: "I followed one track from the battery wire all the way into the center chip without lifting my eye!",
    audioPrompt: "Winding across the board were thousands of tiny, gleaming copper paths carrying electric messengers."
  },
  {
    id: 8,
    timeStart: 21,
    timeEnd: 24,
    title: "The Silver Sky Whisperer",
    kidTag: "📡 SECRET RADIO ANTENNA",
    storyText: "Springing up from the edge was a silver antenna coil. When Prajwal tapped it, it twanged with springy energy—the exact antenna that caught invisible radio waves in the air.",
    kidNote: "Dad said radio waves can pass right through walls, tables, and even socks! That blew my mind.",
    audioPrompt: "Springing up from the edge was a silver antenna coil that caught invisible radio triggers dancing through the air."
  },
  {
    id: 9,
    timeStart: 24,
    timeEnd: 27,
    title: "Footsteps in the Hallway!",
    kidTag: "👟 DAD IS APPROACHING!",
    storyText: "THUMP! THUMP! THUMP! Rapid footsteps echoed down the hallway. Dad had heard the massive crash from the other room and rushed in to investigate.",
    kidNote: "For one second my stomach did a backflip. Was I about to get grounded for launching the car off the dinner table?!",
    audioPrompt: "Rapid footsteps echoed down the hallway. Dad had heard the massive crash and rushed in to investigate."
  },
  {
    id: 10,
    timeStart: 27,
    timeEnd: 30,
    title: "The Joyous Flying Dad Hug!",
    kidTag: "🤗 BEST DAD MOMENT EVER",
    storyText: "Suddenly, Dad swooped into the room! Instead of yelling, he saw Prajwal's awe-struck face, burst into laughter, lifted him high into the air, and laughed: 'You really are a trouble-maker, aren't you?'",
    kidNote: "He lifted me so high my feet kicked the air! He wasn't mad about the $20 toy—he was excited that I was excited.",
    audioPrompt: "Suddenly, Dad swooped into the room! He saw Prajwal's awe-struck face, burst into laughter, and lifted him into a giant playful hug."
  },
  {
    id: 11,
    timeStart: 30,
    timeEnd: 33,
    title: "Dad's Carpet Workshop: Hardware & Code",
    kidTag: "💡 HARDWARE VS CODE",
    storyText: "Right there on the rug, Dad sat down cross-legged among the scattered plastic. He explained how hardware is just the physical body, but code is the invisible thought that tells the machine when to dance and turn.",
    kidNote: "Prajwal's eyes practically glowed like green LEDs. He asked Dad 50 questions a minute!",
    audioPrompt: "Right there on the rug, Dad sat down and explained how hardware is just the physical body, but code is the invisible thought."
  },
  {
    id: 12,
    timeStart: 33,
    timeEnd: 36,
    title: "To the Big Glowing Screen & The Future!",
    kidTag: "🚀 WHAT WILL I MAKE NEXT?",
    storyText: "Dad pulled Prajwal up to a big glowing computer monitor. He told him that if he learned to guide these machines, he could invent his own cars, robots, and devices from scratch. Prajwal smiled with a racing heart: 'What awesome thing am I going to make next?'",
    kidNote: "In that moment, an engineer was born. Every broken toy in the world became a puzzle waiting for my code!",
    audioPrompt: "Dad pulled Prajwal up to a big glowing computer monitor. Prajwal stared into the bright screen: What awesome thing am I going to make next?"
  }
];

export const ContinuousKidCanvas: React.FC<ContinuousKidCanvasProps> = ({
  a11y,
  onOpenTrack2Dossier
}) => {
  const [activeBeatIdx, setActiveBeatIdx] = useState<number>(0);
  const [animTime, setAnimTime] = useState<number>(0);
  const [flipbookBoil, setFlipbookBoil] = useState<number>(0);
  const [isReadingAloud, setIsReadingAloud] = useState<number | null>(null);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState<boolean>(false);

  const handleOpenEasterEgg = () => {
    soundEffects.playVictoryFanfare();
    setIsEasterEggOpen(true);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<(HTMLElement | null)[]>([]);

  // ONE SINGLE COMMON SCROLL FLOW:
  // When the user scrolls the page, determine which text beat is in view,
  // and smoothly drive the animation time so the constant animation area transforms!
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const viewportMid = scrollY + window.innerHeight * 0.45;

      // Find the beat currently in view
      let currentIdx = 0;
      for (let i = 0; i < beatRefs.current.length; i++) {
        const el = beatRefs.current[i];
        if (el) {
          const top = el.offsetTop;
          if (viewportMid >= top) {
            currentIdx = i;
          }
        }
      }

      setActiveBeatIdx(currentIdx);

      // Smoothly map current beat position to animation time
      const currentBeat = storyBeats[currentIdx];
      const nextBeat = storyBeats[currentIdx + 1];
      const currentEl = beatRefs.current[currentIdx];

      if (currentBeat && currentEl) {
        const beatTop = currentEl.offsetTop;
        const beatHeight = currentEl.offsetHeight;
        const progressInBeat = Math.max(0, Math.min(1, (viewportMid - beatTop) / beatHeight));
        
        const targetTime = currentBeat.timeStart + progressInBeat * (currentBeat.timeEnd - currentBeat.timeStart);
        setAnimTime(targetTime);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous hand-drawn flipbook line-boil (110ms cycle)
  useEffect(() => {
    if (a11y.reducedMotion) return;
    const interval = setInterval(() => {
      setFlipbookBoil(prev => (prev + 1) % 3);
    }, 110);
    return () => clearInterval(interval);
  }, [a11y.reducedMotion]);

  // Jump to specific beat by scrolling the common page scrollbar
  const scrollToBeat = (idx: number) => {
    const el = beatRefs.current[idx];
    if (el) {
      soundEffects.playBeep(450 + (idx % 6) * 50);
      const topOffset = el.offsetTop - window.innerHeight * 0.15;
      window.scrollTo({ top: topOffset, behavior: a11y.reducedMotion ? 'auto' : 'smooth' });
    }
  };

  // Read aloud specific beat
  const toggleSpeechBeat = (beat: StoryBeat) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isReadingAloud === beat.id) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(null);
      return;
    }
    window.speechSynthesis.cancel();
    const textToRead = `${beat.title}. ${beat.storyText} ${beat.kidNote}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    utterance.onstart = () => setIsReadingAloud(beat.id);
    utterance.onend = () => setIsReadingAloud(null);
    utterance.onerror = () => setIsReadingAloud(null);
    window.speechSynthesis.speak(utterance);
  };

  // =========================================================================
  // FRAME-BY-FRAME MATHEMATICAL RIG CALCULATIONS (Continuous smooth motion)
  // =========================================================================
  let carRig = { x: 120, y: 220, rot: 0, wheelRot: animTime * 360, visible: true };

  if (animTime < 3.0) {
    const jiggle = Math.sin(animTime * 25) * 1.5;
    carRig = { x: 120 + Math.sin(animTime * 3) * 15, y: 220 + jiggle, rot: Math.sin(animTime * 15) * 1, wheelRot: animTime * 180, visible: true };
  } else if (animTime < 6.0) {
    const t = (animTime - 3.0) / 3.0;
    carRig = { x: 120 + t * 240, y: 220 + Math.sin(animTime * 35) * 2, rot: 0, wheelRot: animTime * 1440, visible: true };
  } else if (animTime < 9.0) {
    const t = (animTime - 6.0) / 3.0;
    const flightX = 360 + t * 140;
    const flightY = 220 - Math.sin(t * Math.PI) * 110 + t * 65;
    const flightRot = -15 + t * 65;
    carRig = { x: flightX, y: flightY, rot: flightRot, wheelRot: animTime * 720, visible: true };
  } else if (animTime < 15.0) {
    carRig = { x: 490, y: 285, rot: 42, wheelRot: 0, visible: true };
  } else {
    carRig.visible = animTime < 24.0;
  }

  // Shell split fracture
  let shellSplitOffset = 0;
  if (animTime >= 9.0 && animTime < 15.0) {
    const t = Math.min(1, (animTime - 9.0) / 1.5);
    shellSplitOffset = t * 45;
  } else if (animTime >= 15.0) {
    shellSplitOffset = 45;
  }

  // Impact starburst
  let impactExplosionScale = 0;
  if (animTime >= 9.0 && animTime <= 11.2) {
    const t = (animTime - 9.0) / 2.2;
    impactExplosionScale = Math.sin(t * Math.PI) * 1.35;
  }

  // Camera zoom into PCB (Time 15 to 24s)
  let pcbCameraZoom = 0;
  if (animTime >= 14.5 && animTime < 24.0) {
    if (animTime < 16.5) {
      pcbCameraZoom = (animTime - 14.5) / 2.0;
    } else if (animTime < 22.5) {
      pcbCameraZoom = 1.0;
    } else {
      pcbCameraZoom = 1.0 - (animTime - 22.5) / 1.5;
    }
  }

  // Moving electrons
  const electronFlow = (animTime * 120) % 240;

  // Antenna vibration
  const antennaOscillate = Math.sin(animTime * 18) * (animTime >= 21.0 && animTime <= 24.0 ? 8 : 1.5);

  // Dad swooping in & lifting Prajwal (Time 24 to 31s)
  let dadHeight = -260;
  let prajwalLiftY = 0;
  if (animTime >= 24.0 && animTime < 31.0) {
    if (animTime < 27.0) {
      const t = (animTime - 24.0) / 3.0;
      dadHeight = -260 + t * 260;
    } else {
      dadHeight = 0;
      prajwalLiftY = Math.sin((animTime - 27.0) * 3) * 20;
    }
  }

  // Monitor glow & future machine (Time 31 to 36s)
  let monitorVisibility = 0;
  if (animTime >= 31.0) {
    monitorVisibility = Math.min(1, (animTime - 31.0) / 1.5);
  }

  const boilX = flipbookBoil === 0 ? 0 : flipbookBoil === 1 ? 0.8 : -0.8;
  const boilY = flipbookBoil === 0 ? 0 : flipbookBoil === 1 ? -0.7 : 0.7;

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto px-3 sm:px-4">
      
      {/* =================================================================== */}
      {/* STICKY QUICK-JUMP SCENE BAR (Common with single page scroll!) */}
      {/* =================================================================== */}
      <div className="sticky top-14 z-30 py-2 bg-[#fdfaf2]/90 backdrop-blur-xs flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/15 mb-4">
        
        {/* Jump dots for all 12 scenes */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          {storyBeats.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => scrollToBeat(idx)}
              className={`h-2.5 sm:h-3 rounded-full transition-all border border-stone-800 ${
                activeBeatIdx === idx
                  ? 'w-6 sm:w-8 bg-red-500 ring-2 ring-yellow-400'
                  : idx < activeBeatIdx
                  ? 'w-2.5 sm:w-3 bg-yellow-400'
                  : 'w-2 sm:w-2.5 bg-stone-300'
              }`}
              title={`Jump to Scene ${b.id}: ${b.title}`}
              aria-label={`Jump to Scene ${b.id}: ${b.title}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-marker font-bold text-sm sm:text-base text-amber-900 rotate-[-1deg]">
            📜 Scene {activeBeatIdx + 1} of 12
          </span>
          <button
            onClick={onOpenTrack2Dossier}
            className="px-2.5 py-1 bg-purple-200 hover:bg-purple-300 text-purple-950 font-kid font-bold text-xs rounded-full border border-stone-800 cursor-pointer"
          >
            ⭐ Track 2 Dossier
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* PINNED SCROLLYTELLING LAYOUT: ONE SINGLE COMMON SCROLL FLOW */}
      {/* Left: Constant/Pinned Animation Area */}
      {/* Right: Scrolling Story Text Stream (Full Text Completely Revealed!) */}
      {/* =================================================================== */}
      <div className="relative flex flex-col md:grid md:grid-cols-12 gap-6 items-start">
        
        {/* ================================================================= */}
        {/* LEFT COLUMN: CONSTANT STICKY ANIMATION AREA */}
        {/* Stays pinned in view while the user scrolls through the story text */}
        {/* ================================================================= */}
        <div className="w-full md:col-span-6 lg:col-span-7 sticky top-28 md:top-28 z-20 h-[34vh] xs:h-[38vh] sm:h-[44vh] md:h-[calc(100vh-8.5rem)] flex items-center justify-center overflow-hidden bg-transparent select-none">
          
          <svg
            viewBox="0 0 600 380"
            className="w-full h-full max-h-full transition-transform duration-75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `translate(${boilX}px, ${boilY}px)` }}
          >
            {/* Background table & floor */}
            <g>
              <path d="M 20 250 Q 180 245 360 250 L 360 370 L 20 370 Z" fill="#fef3c7" stroke="#1c1917" strokeWidth="4" />
              <path d="M 40 275 Q 180 270 340 277" stroke="#d97706" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.6" />
              <line x1="355" y1="250" x2="355" y2="370" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 4" />
              
              <path d="M 360 320 Q 470 315 580 320 L 580 375 L 360 375 Z" fill="#fed7aa" stroke="#1c1917" strokeWidth="3.5" />
            </g>

            {/* Prajwal holding controller (Scenes 1-2: Time < 6s) */}
            {animTime < 6.0 && (
              <g transform="translate(40, 160)">
                <circle cx="20" cy="25" r="18" fill="#fed7aa" stroke="#1c1917" strokeWidth="3" />
                <path d="M 5 18 L 0 5 L 14 8 L 22 -2 L 28 8 L 38 4 L 32 20 Z" fill="#18181b" />
                <circle cx="15" cy="24" r="3.5" fill="#1c1917" />
                <circle cx="25" cy="24" r="3.5" fill="#1c1917" />
                <line x1="16" y1="33" x2="24" y2="33" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
                <path d="M 8 43 L 0 95 L 40 95 L 32 43 Z" fill="#fde047" stroke="#1c1917" strokeWidth="3" />
                <rect x="35" y="38" width="28" height="42" rx="4" fill="#3b82f6" stroke="#1c1917" strokeWidth="2.5" />
                <line x1="49" y1="38" x2="49" y2="18" stroke="#71717a" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="49" cy="18" r="3.5" fill="#ef4444" />
                <circle cx="49" cy="50" r="5" fill="#1c1917" />
                <line x1="49" y1="50" x2="49" y2={animTime >= 3.0 ? "42" : "46"} stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              </g>
            )}

            {/* Speed streaks (Scene 2: Time 3 to 6s) */}
            {animTime >= 3.0 && animTime < 6.0 && (
              <g stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round">
                <line x1={carRig.x - 70} y1={carRig.y + 10} x2={carRig.x - 25} y2={carRig.y + 10} />
                <line x1={carRig.x - 90} y1={carRig.y + 22} x2={carRig.x - 35} y2={carRig.y + 22} />
              </g>
            )}

            {/* THE RED BUGGY CAR */}
            {carRig.visible && (
              <g transform={`translate(${carRig.x}, ${carRig.y}) rotate(${carRig.rot})`}>
                <path
                  d="M -35 18 Q 0 -8 45 12 Q 35 28 -25 28 Z"
                  fill="#ef4444"
                  stroke="#1c1917"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  transform={`translate(0, ${shellSplitOffset})`}
                />
                <path
                  d="M -32 15 Q 0 -35 42 -5 Q 22 10 -22 15 Z"
                  fill="#dc2626"
                  stroke="#1c1917"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  transform={`translate(0, ${-shellSplitOffset * 0.9}) rotate(${-shellSplitOffset * 0.5})`}
                />

                {/* Spinning wheels with spokes */}
                <g transform={`translate(-22, ${30 + shellSplitOffset * 0.5})`}>
                  <circle cx="0" cy="0" r="14" fill="#27272a" stroke="#1c1917" strokeWidth="3.5" />
                  <circle cx="0" cy="0" r="5" fill="#facc15" />
                  <line x1="-10" y1="0" x2="10" y2="0" stroke="#facc15" strokeWidth="2" transform={`rotate(${carRig.wheelRot})`} />
                  <line x1="0" y1="-10" x2="0" y2="10" stroke="#facc15" strokeWidth="2" transform={`rotate(${carRig.wheelRot})`} />
                </g>

                <g transform={`translate(32, ${30 + shellSplitOffset * 0.9})`}>
                  <circle cx="0" cy="0" r="14" fill="#27272a" stroke="#1c1917" strokeWidth="3.5" />
                  <circle cx="0" cy="0" r="5" fill="#facc15" />
                  <line x1="-10" y1="0" x2="10" y2="0" stroke="#facc15" strokeWidth="2" transform={`rotate(${carRig.wheelRot})`} />
                  <line x1="0" y1="-10" x2="0" y2="10" stroke="#facc15" strokeWidth="2" transform={`rotate(${carRig.wheelRot})`} />
                </g>

                {/* Exposed Motherboard */}
                {animTime >= 9.0 && (
                  <g transform="translate(0, 4)">
                    <rect x="-22" y="-12" width="46" height="28" rx="3" fill="#22c55e" stroke="#1c1917" strokeWidth="3" />
                    <path d="M -16 -4 H 0 V 8 H 16" stroke="#f59e0b" strokeWidth="2.5" />
                    <path d={`M 12 -12 Q ${22 + antennaOscillate} -26 ${30 + antennaOscillate * 1.5} -36`} stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
                    <circle cx={30 + antennaOscillate * 1.5} cy="-36" r="4.5" fill="#38bdf8" stroke="#1c1917" strokeWidth="1.5" />
                  </g>
                )}
              </g>
            )}

            {/* Impact burst */}
            {impactExplosionScale > 0.05 && (
              <g transform={`translate(490, 280) scale(${impactExplosionScale})`}>
                <path
                  d="M 0 0 L 40 -35 L 35 -10 L 80 -20 L 55 15 L 90 40 L 45 45 L 60 85 L 15 60 L -15 90 L -5 50 L -45 40 L -20 15 Z"
                  fill="#fef08a"
                  stroke="#1c1917"
                  strokeWidth="3.5"
                />
                <text x="-25" y="32" fill="#dc2626" fontFamily="Architects Daughter" fontSize="28" fontWeight="black">
                  CRASHHH!
                </text>
              </g>
            )}

            {/* Zoomed in Motherboard View (Time 15-24s) */}
            {pcbCameraZoom > 0.05 && (
              <g transform={`translate(300, 190) scale(${pcbCameraZoom * 1.6}) translate(-140, -90)`}>
                <rect x="15" y="15" width="250" height="150" rx="8" fill="#15803d" stroke="#1c1917" strokeWidth="4" />
                <rect x="20" y="20" width="250" height="150" rx="8" fill="#22c55e" opacity="0.3" transform="translate(5, 5)" />
                <path d="M 45 55 H 110 V 95 H 160" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                <path d="M 160 95 V 135 H 75" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                <path d="M 200 95 H 235 V 55" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />

                {/* Animated electron pulses */}
                <circle cx={45 + (electronFlow % 115)} cy="55" r="3.5" fill="#ffffff" className="animate-ping" />
                <circle cx={160} cy={95 + (electronFlow % 40)} r="3.5" fill="#facc15" />

                <rect x="125" y="70" width="55" height="42" rx="3" fill="#09090b" stroke="#4ade80" strokeWidth="2.5" />
                <text x="132" y="93" fill="#4ade80" fontFamily="Gaegu" fontSize="13" fontWeight="bold">PRA-08</text>
                <text x="132" y="105" fill="#94a3b8" fontFamily="Patrick Hand" fontSize="9">CHIP BRAIN</text>

                <g>
                  <line x1="235" y1="55" x2={235 + antennaOscillate} y2="15" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                  <circle cx={235 + antennaOscillate} cy="15" r="7" fill="#38bdf8" stroke="#1c1917" strokeWidth="2" />
                  <circle cx={235 + antennaOscillate} cy="15" r="14" stroke="#38bdf8" strokeWidth="2" fill="none" className="animate-ping" />
                </g>

                <circle cx="55" cy="135" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
                <circle cx="78" cy="135" r="6" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" className="animate-bounce" />
              </g>
            )}

            {/* Dad Swooping in & Lifting Prajwal (Time 24-31s) */}
            {dadHeight > -240 && (
              <g transform={`translate(160, ${dadHeight})`}>
                <circle cx="140" cy="90" r="34" fill="#ffedd5" stroke="#1c1917" strokeWidth="4" />
                <rect x="124" y="80" width="15" height="12" rx="2" stroke="#1c1917" strokeWidth="2.5" fill="#e0f2fe" opacity="0.8" />
                <rect x="144" y="80" width="15" height="12" rx="2" stroke="#1c1917" strokeWidth="2.5" fill="#e0f2fe" opacity="0.8" />
                <line x1="139" y1="86" x2="144" y2="86" stroke="#1c1917" strokeWidth="2" />
                <path d="M 128 106 Q 140 118 152 106" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
                <path d="M 115 120 Q 125 160 160 170" stroke="#1c1917" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M 170 120 Q 165 160 205 170" stroke="#1c1917" strokeWidth="6" strokeLinecap="round" fill="none" />

                <g transform={`translate(150, ${110 + prajwalLiftY})`}>
                  <circle cx="20" cy="25" r="18" fill="#fed7aa" stroke="#1c1917" strokeWidth="3" />
                  <ellipse cx="15" cy="23" rx="3.5" ry="5" fill="#22c55e" className="animate-pulse" />
                  <ellipse cx="25" cy="23" rx="3.5" ry="5" fill="#22c55e" className="animate-pulse" />
                  <path d="M 16 31 Q 20 38 24 31" stroke="#1c1917" strokeWidth="2" />
                  <circle cx="20" cy="55" r="18" fill="#fde047" stroke="#1c1917" strokeWidth="3" />
                  <line x1="12" y1="70" x2={5 + Math.sin(animTime * 12) * 8} y2="92" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
                  <line x1="28" y1="70" x2={35 - Math.sin(animTime * 12) * 8} y2="92" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
                </g>

                <text x="60" y="80" fontSize="24">❤️</text>
                <text x="210" y="70" fontSize="24">✨</text>
              </g>
            )}

            {/* DAD'S COMPUTER WITH PAUSED VIDEO ON SCREEN (EASTER EGG) */}
            {monitorVisibility > 0.05 && (
              <g 
                transform="translate(300, 190) scale(1.08) translate(-170, -115)" 
                opacity={monitorVisibility}
                onClick={handleOpenEasterEgg}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpenEasterEgg(); }}
                tabIndex={0}
                role="button"
                aria-label="Click computer monitor to play video of making the car Prajwal broke"
                className="cursor-pointer group focus:outline-hidden"
                style={{ pointerEvents: 'auto' }}
              >
                {/* Computer Stand and Desktop Base */}
                <path d="M 140 205 L 125 238 L 215 238 L 200 205 Z" fill="#27272a" stroke="#1c1917" strokeWidth="3.5" />
                <rect x="105" y="234" width="130" height="12" rx="4" fill="#18181b" stroke="#1c1917" strokeWidth="3" />
                <line x1="120" y1="239" x2="220" y2="239" stroke="#52525b" strokeWidth="1.5" />

                {/* Outer Monitor Frame (CRT / Modern Hybrid Bezel) */}
                <rect 
                  x="15" 
                  y="8" 
                  width="310" 
                  height="200" 
                  rx="10" 
                  fill="#1c1917" 
                  stroke="#38bdf8" 
                  strokeWidth="3.5" 
                  className="filter drop-shadow-[0_0_12px_rgba(56,189,248,0.45)] transition-all group-hover:stroke-yellow-400 group-hover:drop-shadow-[0_0_18px_rgba(250,204,21,0.65)]" 
                />

                {/* Power LED Indicator */}
                <circle cx="310" cy="199" r="3" fill="#22c55e" className="animate-pulse" />

                {/* Video Window Title Bar */}
                <rect x="23" y="16" width="294" height="22" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <circle cx="35" cy="27" r="3.5" fill="#ef4444" />
                <circle cx="47" cy="27" r="3.5" fill="#eab308" />
                <circle cx="59" cy="27" r="3.5" fill="#22c55e" />
                <text x="72" y="30.5" fill="#cbd5e1" fontFamily="monospace" fontSize="9" fontWeight="bold">
                  📹 Dad_DIY_Making_Red_RC_Car.mp4
                </text>
                <rect x="245" y="20" width="62" height="14" rx="2" fill="#dc2626" />
                <text x="276" y="30.5" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="black" letterSpacing="0.5">
                  ❚❚ PAUSED
                </text>

                {/* Video Screen Viewport: Workbench Assembly Scene */}
                <rect x="23" y="38" width="294" height="140" fill="#064e3b" />
                {/* Cutting Mat Blueprint Grid */}
                <path 
                  d="M 23 66 H 317 M 23 94 H 317 M 23 122 H 317 M 23 150 H 317 M 72 38 V 178 M 121 38 V 178 M 170 38 V 178 M 219 38 V 178 M 268 38 V 178" 
                  stroke="#047857" 
                  strokeWidth="1" 
                  strokeDasharray="2 2" 
                  opacity="0.65" 
                />

                {/* Workbench Tools & Blueprint Annotations */}
                <text x="32" y="52" fill="#34d399" fontFamily="monospace" fontSize="8" opacity="0.85">
                  BENCH_01: RC BUGGY BUILD
                </text>
                {/* Yellow Screwdriver */}
                <line x1="36" y1="62" x2="56" y2="82" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
                <line x1="56" y1="82" x2="62" y2="88" stroke="#cbd5e1" strokeWidth="2.5" />

                {/* The Exact Red Broken Car being Assembled! */}
                {/* 1. Red Chassis halves */}
                <path d="M 125 106 Q 165 72 215 90 Q 200 112 145 112 Z" fill="#ef4444" stroke="#ffffff" strokeWidth="1.8" />
                <path d="M 128 103 Q 165 58 210 76 Q 190 90 140 99 Z" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
                
                {/* 2. DC Motor & Gearbox being mounted */}
                <rect x="156" y="112" width="28" height="18" rx="2" fill="#71717a" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="156" cy="121" r="3.5" fill="#facc15" />
                <path d="M 184 116 Q 194 114 204 124" stroke="#ef4444" strokeWidth="1.5" fill="none" />
                <path d="M 184 124 Q 194 128 204 130" stroke="#09090b" strokeWidth="1.5" fill="none" />

                {/* 3. Green PCB board with silver antenna being soldered */}
                <rect x="202" y="114" width="34" height="22" rx="2" fill="#22c55e" stroke="#ffffff" strokeWidth="1.5" />
                <line x1="226" y1="114" x2="238" y2="92" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                <circle cx="238" cy="92" r="3" fill="#38bdf8" />

                {/* 4. Wheels with yellow rims beside the frame */}
                <circle cx="95" cy="128" r="13" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="95" cy="128" r="5" fill="#facc15" />
                <circle cx="254" cy="128" r="13" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="254" cy="128" r="5" fill="#facc15" />

                {/* Darkened Paused Video Scrim Overlay */}
                <rect x="23" y="38" width="294" height="140" fill="#000000" opacity="0.45" />

                {/* Pulsing Central Play Button / Paused Overlay */}
                <circle cx="170" cy="95" r="24" fill="#ef4444" stroke="#ffffff" strokeWidth="2.5" className="animate-pulse" />
                <polygon points="163,83 163,107 183,95" fill="#ffffff" />

                {/* Bright Click-to-Play Marker Ribbon */}
                <rect x="42" y="132" width="256" height="26" rx="5" fill="#facc15" stroke="#1c1917" strokeWidth="2" />
                <text x="170" y="149" fill="#1c1917" textAnchor="middle" fontFamily="Architects Daughter" fontSize="12" fontWeight="bold">
                  ▶ VIDEO PAUSED • CLICK TO PLAY! 🎬
                </text>

                {/* Bottom Video Player Scrub Bar */}
                <rect x="23" y="178" width="294" height="20" fill="#0f172a" />
                <polygon points="34,184 34,192 41,188" fill="#ef4444" />
                {/* Scrubber background track */}
                <rect x="48" y="186" width="180" height="4" rx="2" fill="#334155" />
                {/* Scrubber handle at 0% position */}
                <circle cx="50" cy="188" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                <text x="236" y="191" fill="#94a3b8" fontFamily="monospace" fontSize="8.5">
                  0:00 / 0:58
                </text>
                {/* Fullscreen icon */}
                <path d="M 295 184 H 300 V 187 M 307 184 H 302 V 187 M 295 192 H 300 V 189 M 307 192 H 302 V 189" stroke="#94a3b8" strokeWidth="1" fill="none" />

                {/* Bouncing Hand-Drawn Easter Egg Callout Banner */}
                <g transform="translate(170, -1)" className="animate-bounce">
                  <path d="M -90 -22 L 90 -22 L 80 -2 L 15 -2 L 0 5 L -10 -2 L -90 -2 Z" fill="#fde047" stroke="#1c1917" strokeWidth="2" />
                  <text x="0" y="-8" fill="#78350f" textAnchor="middle" fontFamily="Patrick Hand" fontSize="13" fontWeight="bold">
                    🐣 EASTER EGG: Click computer to play video! 👆
                  </text>
                </g>
              </g>
            )}

          </svg>
        </div>

        {/* ================================================================= */}
        {/* RIGHT COLUMN: SCROLLING STORY TEXT STREAM (ONE COMMON SCROLLBAR!) */}
        {/* All 12 scenes scroll past naturally. As each text area is read and */}
        {/* completed, scrolling down triggers the next animation phase! */}
        {/* ================================================================= */}
        <div className="w-full md:col-span-6 lg:col-span-5 space-y-28 sm:space-y-36 md:space-y-48 pb-40">
          
          {storyBeats.map((beat, idx) => (
            <article
              key={beat.id}
              ref={el => { beatRefs.current[idx] = el; }}
              className={`min-h-[50vh] md:min-h-[80vh] flex flex-col justify-center space-y-3 sm:space-y-4 py-6 transition-opacity duration-300 ${
                activeBeatIdx === idx ? 'opacity-100' : 'opacity-40 hover:opacity-80'
              }`}
            >
              {/* Scene Number & Kid Tag */}
              <div className="flex items-center justify-between gap-2 border-b-2 border-dashed border-stone-400 pb-1.5">
                <span className="font-kid font-bold text-xs sm:text-sm text-amber-900 uppercase tracking-widest">
                  SCENE {beat.id} OF 12 • {beat.kidTag}
                </span>

                <button
                  onClick={() => toggleSpeechBeat(beat)}
                  className={`px-2.5 py-0.5 rounded-full border border-stone-800 font-kid font-bold text-xs flex items-center gap-1 cursor-pointer ${
                    isReadingAloud === beat.id ? 'bg-rose-300 animate-pulse' : 'bg-yellow-200 hover:bg-yellow-300'
                  }`}
                >
                  {isReadingAloud === beat.id ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                  <span>{isReadingAloud === beat.id ? "Stop" : "Read"}</span>
                </button>
              </div>

              {/* Title in Kid Marker */}
              <h2 className="font-marker text-3xl sm:text-4xl md:text-5xl font-black text-stone-950 leading-tight">
                {beat.title}
              </h2>

              {/* Story Narrative (Full text completely revealed, never cut off!) */}
              <p className="font-kid text-xl sm:text-2xl text-stone-900 font-bold leading-relaxed">
                {beat.storyText}
              </p>



              {/* Prajwal's Memory Note */}
              <div className="pt-1">
                <p className="font-kid text-base sm:text-lg text-amber-900 italic font-bold">
                  ✏️ <em>&ldquo;{beat.kidNote}&rdquo;</em>
                </p>
              </div>

              {/* Scroll prompt to go to next animation area */}
              {idx < storyBeats.length - 1 ? (
                <div 
                  onClick={() => scrollToBeat(idx + 1)}
                  className="pt-2 flex items-center gap-2 text-stone-600 font-kid text-sm cursor-pointer hover:text-stone-950"
                >
                  <ArrowDown className="w-4 h-4 text-amber-600 animate-bounce" />
                  <span>Scroll down to finish this text and unlock the next animation scene!</span>
                </div>
              ) : (
                <div className="pt-3 space-y-4">
                  {/* Easter Egg Trigger Card right in Scene 12 text */}
                  <div 
                    onClick={handleOpenEasterEgg}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpenEasterEgg(); }}
                    className="p-4 bg-gradient-to-r from-amber-100 to-yellow-200 hover:from-amber-200 hover:to-yellow-300 border-2 border-stone-900 rounded-xs shadow-[4px_4px_0px_#1c1917] cursor-pointer transition-all hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 bg-red-600 text-white font-kid font-bold text-xs rounded-xs border border-stone-900 shadow-xs">
                        🐣 SECRET EASTER EGG
                      </span>
                      <span className="font-kid font-bold text-xs text-stone-800 flex items-center gap-1 group-hover:text-red-700">
                        <Play className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                        <span>Paused on Computer Screen</span>
                      </span>
                    </div>
                    <h3 className="font-marker text-xl sm:text-2xl font-bold text-stone-950 mt-1.5 flex items-center gap-2">
                      <span>🖥️ Dad&apos;s Paused Video: The Secret Car Build!</span>
                    </h3>
                    <p className="font-kid text-sm sm:text-base text-stone-800 mt-1">
                      On the glowing computer screen, Dad paused a secret video! Click the monitor or click here to watch the full video of making the exact car that Prajwal broke!
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white font-marker text-xs sm:text-sm rounded-xs border border-stone-900 shadow-xs group-hover:bg-red-700">
                      <Film className="w-4 h-4" />
                      <span>Click to Play Dad&apos;s Video Now!</span>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={onOpenTrack2Dossier}
                      className="px-4 py-2 bg-purple-300 hover:bg-purple-400 text-purple-950 font-kid font-bold text-base rounded-xs border-2 border-stone-900 shadow-[3px_3px_0px_#1c1917] flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>View Full Track 2 Character Sheet</span>
                    </button>
                  </div>
                </div>
              )}

            </article>
          ))}

        </div>

      </div>

      {/* Easter Egg Video Modal */}
      <CarMakingEasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />

    </div>
  );
};
