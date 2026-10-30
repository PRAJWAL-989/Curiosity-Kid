import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  FastForward,
  Wrench,
  Cpu,
  Layers,
  Radio,
  ExternalLink,
  Film
} from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface RedCarMakingAnimationVideoProps {
  autoPlay?: boolean;
}

export const RedCarMakingAnimationVideo: React.FC<RedCarMakingAnimationVideoProps> = ({
  autoPlay = true
}) => {
  // Video duration: 25 seconds across 5 core stages
  const TOTAL_DURATION = 25;
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'self-made-animation' | 'real-diy-video'>('self-made-animation');
  const animFrameRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  // Animation timeline loop
  useEffect(() => {
    if (!isPlaying) {
      lastTimestampRef.current = null;
      return;
    }

    const updateFrame = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const deltaSec = ((timestamp - lastTimestampRef.current) / 1000) * playbackSpeed;
      lastTimestampRef.current = timestamp;

      setCurrentTime(prev => {
        const next = prev + deltaSec;
        if (next >= TOTAL_DURATION) {
          setIsPlaying(false);
          if (soundOn) soundEffects.playVictoryFanfare();
          return TOTAL_DURATION;
        }
        return next;
      });

      animFrameRef.current = requestAnimationFrame(updateFrame);
    };

    animFrameRef.current = requestAnimationFrame(updateFrame);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, soundOn, TOTAL_DURATION]);

  // Subtle continuous sound effects per scene
  useEffect(() => {
    if (!isPlaying || !soundOn) return;

    // Trigger sound effects at scene boundaries
    if (currentTime >= 0.1 && currentTime < 0.4) {
      soundEffects.playCrayonScratch();
    } else if (currentTime >= 5.0 && currentTime < 5.3) {
      soundEffects.playBeep(440);
    } else if (currentTime >= 10.0 && currentTime < 10.3) {
      soundEffects.playLensHum();
    } else if (currentTime >= 15.0 && currentTime < 15.3) {
      soundEffects.playBeep(620);
    } else if (currentTime >= 20.0 && currentTime < 20.3) {
      soundEffects.playMotorZoom();
    }
  }, [Math.floor(currentTime), isPlaying, soundOn]);

  const handleTogglePlay = () => {
    if (currentTime >= TOTAL_DURATION) {
      setCurrentTime(0);
      setIsPlaying(true);
      return;
    }
    const next = !isPlaying;
    setIsPlaying(next);
    if (soundOn) soundEffects.playBeep(next ? 580 : 380);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    if (soundOn) soundEffects.playBeep(640);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
  };

  // Determine current stage info
  const getStageInfo = () => {
    if (currentTime < 5) {
      return {
        stageNum: 1,
        title: "Stage 1: Carving & Molding the Scarlet Chassis Shell",
        subtitle: "Dad heat-shapes lightweight red polycarbonate and cuts wheel arches with exact calipers.",
        dadQuote: "“Every fast racecar needs a sleek aerodynamic shell to cut through the bedroom breeze!”",
        phaseProgress: currentTime / 5
      };
    }
    if (currentTime < 10) {
      return {
        stageNum: 2,
        title: "Stage 2: Mounting the High-Torque 6V Motor & Gears",
        subtitle: "Dad secures the high-RPM electric DC motor and meshes the interlocking brass reduction gears.",
        dadQuote: "“These brass teeth multiply our torque so the car can climb right over thick rugs!”",
        phaseProgress: (currentTime - 5) / 5
      };
    }
    if (currentTime < 15) {
      return {
        stageNum: 3,
        title: "Stage 3: Hand-Soldering the Emerald Circuit Board",
        subtitle: "Dad solders the H-bridge motor driver, microswitch, and filter capacitors with glowing solder iron.",
        dadQuote: "“See that puff of rosin smoke? That means our electric copper highways are permanently fused!”",
        phaseProgress: (currentTime - 10) / 5
      };
    }
    if (currentTime < 20) {
      return {
        stageNum: 4,
        title: "Stage 4: Snapping Rubber Tires & Coiling the 2.4GHz Antenna",
        subtitle: "Dad presses on high-traction knobby rubber wheels and solders the silver spring radio antenna.",
        dadQuote: "“This silver spring catches invisible radio waves sent through the air from your controller!”",
        phaseProgress: (currentTime - 15) / 5
      };
    }
    return {
      stageNum: 5,
      title: "Stage 5: Flashing the Code & First Bedroom Rug Test Zoom!",
      subtitle: "Dad pairs the handheld transmitter, hits full throttle, and watches the red car zoom across the rug!",
      dadQuote: "“Finished! That is why I was never mad when you broke it, Prajwal—we can always make it again!”",
      phaseProgress: (currentTime - 20) / 5
    };
  };

  const stage = getStageInfo();

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-3 font-kid">
      {/* Video Mode Tabs (Self-made Animation vs Real DIY RC Car Build) */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab('self-made-animation');
              soundEffects.playBeep(520);
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'self-made-animation'
                ? 'crayon-btn crayon-yellow text-stone-950 font-black shadow-sm -translate-y-0.5'
                : 'crayon-btn bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-red-600" />
              <span>Dad&apos;s Self-Made Animation Video</span>
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('real-diy-video');
              soundEffects.playBeep(560);
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'real-diy-video'
                ? 'crayon-btn crayon-red text-white font-black shadow-sm -translate-y-0.5'
                : 'crayon-btn bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Real Red RC Car Build Video</span>
            </span>
          </button>
        </div>

        <span className="hidden sm:inline-block text-xs text-amber-900 font-bold bg-amber-100/80 px-2.5 py-1 rounded-full">
          ⏱️ {formatTime(currentTime)} / {formatTime(TOTAL_DURATION)}
        </span>
      </div>

      {/* ================================================================= */}
      {/* TAB 1: SELF-MADE ANIMATION VIDEO (Frame-by-frame animated build!) */}
      {/* ================================================================= */}
      {activeTab === 'self-made-animation' ? (
        <div className="relative w-full bg-[#18181b] rounded-2xl overflow-hidden shadow-md flex flex-col">
          
          {/* Top Video Header Tag */}
          <div className="px-3 py-2 bg-[#27272a] text-xs font-bold text-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-red-500 animate-ping' : 'bg-amber-400'}`} />
              <span className="font-marker text-sm sm:text-base text-yellow-300">
                📹 Dad_Workshop_Making_Prajwals_Car.mp4 {isPlaying ? '[PLAYING]' : '[PAUSED]'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-stone-400">
              FRAME {Math.floor(currentTime * 24)} • {stage.stageNum}/5
            </span>
          </div>

          {/* Core Animation Screen SVG */}
          <div className="relative w-full aspect-video sm:h-80 bg-[#1e293b] flex items-center justify-center overflow-hidden select-none">
            <svg
              viewBox="0 0 600 360"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Workshop Blueprint Graph Paper Background */}
              <rect width="600" height="360" fill="#1e293b" />
              <defs>
                <pattern id="vid-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#334155" strokeWidth="0.8" opacity="0.6" />
                </pattern>
                {/* Radial glow around workbench */}
                <radialGradient id="desk-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="600" height="360" fill="url(#vid-grid)" />
              <circle cx="300" cy="180" r="220" fill="url(#desk-glow)" />

              {/* Workbench Wooden Tabletop Surface */}
              <path d="M 40 240 Q 300 230 560 240 L 580 340 L 20 340 Z" fill="#78350f" opacity="0.85" />
              <path d="M 50 255 Q 300 245 550 255" stroke="#92400e" strokeWidth="3" strokeDasharray="16 8" />
              <path d="M 70 280 Q 300 270 530 280" stroke="#b45309" strokeWidth="2" strokeDasharray="10 14" opacity="0.5" />

              {/* ======================================================= */}
              {/* STAGE 1: CARVING & MOLDING THE RED CHASSIS (0 - 5s)     */}
              {/* ======================================================= */}
              {currentTime < 5 && (
                <g className="transition-all duration-200">
                  {/* Calipers and ruler on workbench */}
                  <rect x="80" y="270" width="100" height="12" rx="3" fill="#cbd5e1" />
                  <line x1="85" y1="270" x2="85" y2="282" stroke="#475569" strokeWidth="1.5" />
                  <line x1="100" y1="270" x2="100" y2="282" stroke="#475569" strokeWidth="1.5" />
                  <line x1="115" y1="270" x2="115" y2="282" stroke="#475569" strokeWidth="1.5" />

                  {/* Red Car Chassis Shell being formed */}
                  <g transform={`translate(${220 + Math.sin(currentTime * 4) * 2}, ${140})`}>
                    {/* Raw Shell Outline */}
                    <path
                      d="M 10 70 Q 20 30 70 24 Q 130 18 170 30 Q 185 45 190 70 Z"
                      fill="#dc2626"
                      stroke="#991b1b"
                      strokeWidth="3.5"
                    />
                    {/* Cockpit canopy */}
                    <path d="M 60 30 Q 100 15 130 30 Z" fill="#67e8f9" opacity="0.85" stroke="#0891b2" strokeWidth="2" />
                    {/* Racing number 07 */}
                    <text x="90" y="58" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="monospace">07</text>

                    {/* Wheel arch cutouts */}
                    <circle cx="45" cy="70" r="18" fill="#1e293b" />
                    <circle cx="155" cy="70" r="18" fill="#1e293b" />

                    {/* Spray paint effect / sparks */}
                    {isPlaying && (
                      <g transform="translate(140, -10)">
                        {/* Red Spray Can */}
                        <rect x="20" y="10" width="22" height="40" rx="4" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
                        <rect x="27" y="4" width="8" height="6" fill="#f87171" />
                        <line x1="20" y1="16" x2="10" y2="24" stroke="#fca5a5" strokeWidth="2" strokeDasharray="3 3" />
                        <line x1="20" y1="18" x2="2" y2="30" stroke="#f87171" strokeWidth="2" strokeDasharray="2 2" />
                        <line x1="20" y1="22" x2="12" y2="38" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
                      </g>
                    )}
                  </g>

                  {/* Dad's hands holding carving tool */}
                  <g transform="translate(180, 200)">
                    <path d="M 0 30 Q 20 15 45 25 L 35 45 Z" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
                    <line x1="45" y1="25" x2="65" y2="15" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  <text x="300" y="60" textAnchor="middle" fill="#fef08a" fontSize="22" fontWeight="bold" fontFamily="Caveat, cursive">
                    &ldquo;Step 1: Carving the sleek aerodynamic body from red thermoplastic!&rdquo;
                  </text>
                </g>
              )}

              {/* ======================================================= */}
              {/* STAGE 2: MOUNTING 6V MOTOR & BRASS GEARS (5 - 10s)      */}
              {/* ======================================================= */}
              {currentTime >= 5 && currentTime < 10 && (
                <g className="transition-all duration-200">
                  {/* Motor Bracket Chassis Tray */}
                  <rect x="180" y="160" width="240" height="90" rx="8" fill="#334155" stroke="#64748b" strokeWidth="3" />
                  
                  {/* High RPM 6V DC Motor (Silver Cylinder) */}
                  <rect x="200" y="180" width="90" height="50" rx="6" fill="#cbd5e1" stroke="#475569" strokeWidth="2.5" />
                  <rect x="290" y="196" width="18" height="18" fill="#94a3b8" />
                  <text x="210" y="210" fill="#1e293b" fontSize="12" fontWeight="bold" fontFamily="monospace">6V DC MOTOR</text>
                  <text x="212" y="222" fill="#047857" fontSize="10" fontWeight="bold" fontFamily="monospace">18,500 RPM</text>

                  {/* Brass Reduction Gears (Interlocking & Spinning!) */}
                  <g transform="translate(325, 205)">
                    {/* Gear 1 */}
                    <g transform={`rotate(${currentTime * 180})`}>
                      <circle cx="0" cy="0" r="22" fill="#f59e0b" stroke="#78350f" strokeWidth="2.5" />
                      <circle cx="0" cy="0" r="7" fill="#451a03" />
                      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <rect
                          key={deg}
                          x="-3"
                          y="-26"
                          width="6"
                          height="7"
                          fill="#d97706"
                          transform={`rotate(${deg})`}
                        />
                      ))}
                    </g>

                    {/* Interlocking Gear 2 */}
                    <g transform={`translate(36, 0) rotate(${-currentTime * 180})`}>
                      <circle cx="0" cy="0" r="16" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
                      <circle cx="0" cy="0" r="5" fill="#451a03" />
                      {[0, 60, 120, 180, 240, 300].map(deg => (
                        <rect
                          key={deg}
                          x="-2.5"
                          y="-19"
                          width="5"
                          height="5"
                          fill="#f59e0b"
                          transform={`rotate(${deg})`}
                        />
                      ))}
                    </g>
                  </g>

                  {/* Dad's Precision Screwdriver */}
                  <g transform={`translate(${280 + Math.sin(currentTime * 8) * 3}, ${110})`}>
                    <rect x="0" y="0" width="14" height="40" rx="3" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
                    <rect x="5" y="40" width="4" height="35" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" />
                    <polygon points="4,75 10,75 7,82" fill="#475569" />
                  </g>

                  <text x="300" y="60" textAnchor="middle" fill="#fef08a" fontSize="22" fontWeight="bold" fontFamily="Caveat, cursive">
                    &ldquo;Step 2: Installing the 18,500 RPM motor &amp; meshing the brass gear train!&rdquo;
                  </text>
                </g>
              )}

              {/* ======================================================= */}
              {/* STAGE 3: SOLDERING THE EMERALD PCB & CHIPS (10 - 15s)   */}
              {/* ======================================================= */}
              {currentTime >= 10 && currentTime < 15 && (
                <g className="transition-all duration-200">
                  {/* Green PCB Motherboard */}
                  <rect x="160" y="140" width="280" height="130" rx="6" fill="#047857" stroke="#065f46" strokeWidth="3" />
                  
                  {/* Golden Copper Circuit Traces */}
                  <path d="M 180 160 L 220 160 L 240 190 L 320 190" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
                  <path d="M 180 230 L 250 230 L 270 205 L 320 205" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
                  <path d="M 370 160 L 410 160 L 410 240" stroke="#fbbf24" strokeWidth="2" fill="none" />

                  {/* Dual H-Bridge Motor Driver IC Chip */}
                  <rect x="250" y="180" width="60" height="40" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                  <text x="256" y="202" fill="#e4e4e7" fontSize="10" fontWeight="bold" fontFamily="monospace">L298N H-BRIDGE</text>
                  <text x="262" y="214" fill="#22c55e" fontSize="9" fontWeight="bold" fontFamily="monospace">PWR OK</text>
                  {/* IC Pins */}
                  {[0, 10, 20, 30, 40].map(x => (
                    <g key={x}>
                      <rect x={260 + x} y="174" width="4" height="6" fill="#cbd5e1" />
                      <rect x={260 + x} y="220" width="4" height="6" fill="#cbd5e1" />
                    </g>
                  ))}

                  {/* Resistors & Capacitors */}
                  <circle cx="200" cy="180" r="10" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
                  <rect x="360" y="195" width="24" height="10" rx="3" fill="#d97706" />

                  {/* Soldering Iron with glowing tip and rising smoke */}
                  <g transform={`translate(${330 + Math.sin(currentTime * 10) * 2}, ${170}) rotate(-35)`}>
                    <rect x="-8" y="-70" width="16" height="50" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
                    <rect x="-3" y="-20" width="6" height="25" fill="#e2e8f0" />
                    {/* Glowing orange tip */}
                    <polygon points="-3,5 3,5 0,15" fill="#f97316" />
                    <circle cx="0" cy="14" r="3" fill="#facc15" className="animate-ping" />
                  </g>

                  {/* Rosin smoke curling up */}
                  <g opacity="0.75" transform={`translate(${330}, ${150 - (currentTime % 2) * 15})`}>
                    <path d="M 0 0 Q -10 -20 5 -35 Q 20 -50 0 -65" stroke="#e2e8f0" strokeWidth="2.5" fill="none" strokeDasharray="4 4" />
                  </g>

                  <text x="300" y="60" textAnchor="middle" fill="#fef08a" fontSize="22" fontWeight="bold" fontFamily="Caveat, cursive">
                    &ldquo;Step 3: Soldering the H-Bridge chips onto the emerald motherboard!&rdquo;
                  </text>
                </g>
              )}

              {/* ======================================================= */}
              {/* STAGE 4: WHEELS, SERVO & ANTENNA (15 - 20s)              */}
              {/* ======================================================= */}
              {currentTime >= 15 && currentTime < 20 && (
                <g className="transition-all duration-200">
                  {/* Full assembled Red Car Body */}
                  <g transform="translate(190, 150)">
                    {/* Red body shell */}
                    <path
                      d="M 10 55 Q 30 15 90 12 Q 160 10 200 22 Q 225 35 230 60 Z"
                      fill="#dc2626"
                      stroke="#991b1b"
                      strokeWidth="3.5"
                    />
                    <path d="M 75 18 Q 125 8 160 20 Z" fill="#67e8f9" opacity="0.9" stroke="#0891b2" strokeWidth="2" />
                    <text x="110" y="44" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="monospace">07</text>

                    {/* Silver Spring Antenna with radio waves */}
                    <path d="M 195 20 Q 200 5 195 -10 Q 190 -25 195 -40" stroke="#cbd5e1" strokeWidth="3.5" fill="none" />
                    <circle cx="195" cy="-40" r="4" fill="#38bdf8" className="animate-ping" />
                    {/* Radiating radio signals */}
                    <path d="M 205 -48 A 12 12 0 0 1 205 -32" stroke="#38bdf8" strokeWidth="2" fill="none" />
                    <path d="M 215 -56 A 22 22 0 0 1 215 -24" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.6" />

                    {/* Front Wheel Hub & Steering Link */}
                    <rect x="35" y="45" width="20" height="35" rx="5" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                    <circle cx="45" cy="62" r="14" fill="#27272a" />
                    <circle cx="45" cy="62" r="6" fill="#f59e0b" />
                    {/* Tire treads */}
                    <line x1="33" y1="52" x2="33" y2="72" stroke="#e4e4e7" strokeWidth="2" />

                    {/* Rear Wheel Hub */}
                    <rect x="175" y="45" width="22" height="38" rx="5" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                    <circle cx="186" cy="64" r="16" fill="#27272a" />
                    <circle cx="186" cy="64" r="7" fill="#f59e0b" />
                    <line x1="173" y1="54" x2="173" y2="74" stroke="#e4e4e7" strokeWidth="2" />
                  </g>

                  {/* Dad tightening wheel nut with mini wrench */}
                  <g transform={`translate(${190 + 35}, ${150 + 60})`}>
                    <path d="M 0 0 L 25 -25 L 32 -18 L 7 7 Z" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
                  </g>

                  <text x="300" y="60" textAnchor="middle" fill="#fef08a" fontSize="22" fontWeight="bold" fontFamily="Caveat, cursive">
                    &ldquo;Step 4: Snapping on rubber traction wheels &amp; silver 2.4GHz antenna!&rdquo;
                  </text>
                </g>
              )}

              {/* ======================================================= */}
              {/* STAGE 5: FIRST TEST DRIVE ZOOM ACROSS RUG! (20 - 25s)   */}
              {/* ======================================================= */}
              {currentTime >= 20 && (
                <g className="transition-all duration-200">
                  {/* Zooming Motion Lines across rug */}
                  <line x1="60" y1="260" x2="220" y2="260" stroke="#fef08a" strokeWidth="4" strokeDasharray="14 10" />
                  <line x1="100" y1="285" x2="260" y2="285" stroke="#fef08a" strokeWidth="3" strokeDasharray="20 12" />

                  {/* Speed dust clouds */}
                  <g transform="translate(140, 240)">
                    <circle cx="0" cy="0" r="14" fill="#cbd5e1" opacity="0.6" />
                    <circle cx="20" cy="5" r="10" fill="#94a3b8" opacity="0.5" />
                    <circle cx="-15" cy="8" r="8" fill="#e2e8f0" opacity="0.4" />
                  </g>

                  {/* The Complete Red RC Car Zooming Forward! */}
                  <g transform={`translate(${240 + Math.min(220, (currentTime - 20) * 45)}, ${180})`}>
                    {/* Car Body */}
                    <path
                      d="M 10 50 Q 30 12 90 10 Q 160 8 195 20 Q 220 32 225 55 Z"
                      fill="#ef4444"
                      stroke="#991b1b"
                      strokeWidth="3.5"
                    />
                    <path d="M 70 16 Q 120 6 155 18 Z" fill="#38bdf8" opacity="0.9" stroke="#0284c7" strokeWidth="2" />
                    <text x="105" y="40" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="monospace">07</text>

                    {/* Antenna whipping back with speed */}
                    <path d="M 190 18 Q 170 5 155 -15" stroke="#cbd5e1" strokeWidth="3.5" fill="none" />
                    <circle cx="155" cy="-15" r="4" fill="#22c55e" />

                    {/* Spinning Wheels */}
                    <circle cx="45" cy="58" r="16" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                    <circle cx="45" cy="58" r="7" fill="#fbbf24" />
                    <circle cx="180" cy="58" r="16" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                    <circle cx="180" cy="58" r="7" fill="#fbbf24" />

                    {/* Headlights beam */}
                    <polygon points="225,48 310,25 310,75" fill="#fef08a" opacity="0.4" />
                  </g>

                  {/* Dad smiling with remote controller */}
                  <g transform="translate(60, 130)">
                    {/* Dad's face */}
                    <circle cx="50" cy="40" r="28" fill="#fed7aa" stroke="#c2410c" strokeWidth="2.5" />
                    {/* Glasses */}
                    <circle cx="42" cy="38" r="8" stroke="#1e293b" strokeWidth="2" fill="none" />
                    <circle cx="58" cy="38" r="8" stroke="#1e293b" strokeWidth="2" fill="none" />
                    <line x1="50" y1="38" x2="50" y2="38" stroke="#1e293b" strokeWidth="2" />
                    {/* Big happy smile */}
                    <path d="M 42 52 Q 50 62 58 52" stroke="#991b1b" strokeWidth="2.5" fill="none" />

                    {/* Remote Controller in hand */}
                    <rect x="25" y="75" width="50" height="35" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                    <circle cx="38" cy="92" r="6" fill="#dc2626" />
                    <circle cx="62" cy="92" r="6" fill="#dc2626" />
                    <line x1="50" y1="75" x2="50" y2="55" stroke="#cbd5e1" strokeWidth="3" />
                  </g>

                  <text x="300" y="55" textAnchor="middle" fill="#4ade80" fontSize="24" fontWeight="bold" fontFamily="Caveat, cursive">
                    🎉 &ldquo;Test Zoom Succeeded! Ready for Prajwal to play with!&rdquo;
                  </text>
                </g>
              )}

              {/* Watermark in bottom corner */}
              <text x="580" y="340" textAnchor="end" fill="#64748b" fontSize="12" fontFamily="monospace">
                CIRCUIT KID • DAD&apos;S WORKSHOP RECORDING
              </text>
            </svg>

            {/* Big center play button overlay when paused */}
            {!isPlaying && (
              <button
                onClick={handleTogglePlay}
                aria-label="Play video"
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 bg-red-600/90 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-1" />
              </button>
            )}
          </div>

          {/* Video Scrubber & Playback Controls */}
          <div className="p-3 bg-[#18181b] space-y-2.5">
            {/* Timeline Scrub Slider */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-stone-300 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={TOTAL_DURATION}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                aria-label="Video scrubber"
                className="flex-1 h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <span className="text-xs font-mono text-stone-400 w-10">
                {formatTime(TOTAL_DURATION)}
              </span>
            </div>

            {/* Buttons Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex items-center gap-2">
                {/* Play / Pause button */}
                <button
                  onClick={handleTogglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-marker font-bold text-base flex items-center gap-1.5 cursor-pointer shadow-sm transition-transform active:scale-95"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-white" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                      <span>{currentTime >= TOTAL_DURATION ? "Replay" : "Play"}</span>
                    </>
                  )}
                </button>

                {/* Restart button */}
                <button
                  onClick={handleRestart}
                  title="Restart from beginning"
                  aria-label="Restart video"
                  className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Jump to stage buttons */}
                <button
                  onClick={() => {
                    const prevSec = Math.max(0, (stage.stageNum - 2) * 5);
                    setCurrentTime(prevSec);
                  }}
                  title="Previous Step"
                  aria-label="Previous Step"
                  className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const nextSec = Math.min(TOTAL_DURATION, stage.stageNum * 5);
                    setCurrentTime(nextSec);
                  }}
                  title="Next Step"
                  aria-label="Next Step"
                  className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Speed & Sound Controls */}
              <div className="flex items-center gap-2">
                {/* Playback speed */}
                <div className="flex items-center bg-stone-800 rounded-xl px-1.5 py-0.5 text-xs text-stone-300">
                  <FastForward className="w-3.5 h-3.5 mr-1 text-stone-400" />
                  {[1, 1.5, 2].map(speed => (
                    <button
                      key={speed}
                      onClick={() => setPlaybackSpeed(speed)}
                      className={`px-1.5 py-0.5 rounded-lg font-mono ${
                        playbackSpeed === speed ? 'bg-red-600 text-white font-bold' : 'hover:text-white'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>

                {/* Sound toggle */}
                <button
                  onClick={() => setSoundOn(!soundOn)}
                  title={soundOn ? "Mute audio" : "Enable audio"}
                  aria-label="Toggle video sound"
                  className={`p-1.5 rounded-xl cursor-pointer ${
                    soundOn ? 'bg-lime-500/20 text-lime-400' : 'bg-stone-800 text-stone-500'
                  }`}
                >
                  {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Current Stage Narration & Dad's Quote */}
          <div className="p-3 sm:p-4 bg-[#27272a] text-stone-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono px-2 py-0.5 bg-amber-400/20 text-yellow-300 rounded-md">
                {stage.title}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                Stage {stage.stageNum} of 5
              </span>
            </div>
            <p className="text-sm sm:text-base text-stone-300">
              {stage.subtitle}
            </p>
            <p className="font-marker text-base sm:text-lg text-yellow-200 italic pt-1">
              Dad: {stage.dadQuote}
            </p>
          </div>

        </div>
      ) : (
        /* ================================================================= */
        /* TAB 2: REAL RED RC CAR BUILDING VIDEO (YouTube DIY Build)         */
        /* ================================================================= */
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-stone-700">
            <span className="flex items-center gap-1.5 font-marker text-base text-stone-900">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span>Real Red RC Car Making Video (DIY Workshop Build)</span>
            </span>
            <a
              href="https://www.youtube.com/results?search_query=how+to+make+diy+red+rc+car+from+scratch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 underline"
            >
              <span>Search More Red RC Car Builds</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Real DIY RC Car Build video embed */}
          <div className="relative w-full aspect-video sm:h-80 bg-black rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/g2qJ4sZkO5A?autoplay=1&rel=0&modestbranding=1"
              title="Real Red RC Car Making Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="text-xs text-stone-600 italic">
            💡 <em>Here is a real hobbyist workshop video assembling a red high-speed RC car from chassis to motor and transmitter!</em>
          </p>
        </div>
      )}

    </div>
  );
};
