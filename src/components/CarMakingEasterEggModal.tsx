import React, { useState } from 'react';
import { X, Wrench, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import { RedCarMakingAnimationVideo } from './RedCarMakingAnimationVideo';

interface CarMakingEasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CarMakingEasterEggModal: React.FC<CarMakingEasterEggModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (!isOpen) return null;

  const diySteps = [
    {
      title: "Step 1: Shaping the Red Chassis Shell",
      description: "Cutting the lightweight plastic body from a mold, drilling axle holes, and painting it racing scarlet.",
      part: "Red Thermoplastic Body Shell",
      icon: "🚗"
    },
    {
      title: "Step 2: Mounting the 6V DC Motor & Gears",
      description: "Aligning the 18,500 RPM high-torque motor to the brass spur reduction gearbox so wheels spin with power.",
      part: "Brushed DC Motor & 1:48 Transmission",
      icon: "⚙️"
    },
    {
      title: "Step 3: Soldering the Green PCB & Copper Roads",
      description: "Soldering the H-Bridge dual motor driver chip onto the emerald fiberglass board to control forward and reverse.",
      part: "FR-4 Motherboard & H-Bridge Driver",
      icon: "🔬"
    },
    {
      title: "Step 4: Coiling the Silver 2.4GHz Antenna",
      description: "Winding the silver spring coil to catch invisible radio wave commands sent through the air from the transmitter.",
      part: "Quarter-Wave Monopole Radio Antenna",
      icon: "📡"
    },
    {
      title: "Step 5: Writing the Code & First Test Drive!",
      description: "Writing the steering firmware, pairing the radio frequency, and watching the car zoom across the floor!",
      part: "Embedded Microcontroller Firmware",
      icon: "💻"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-[#fffefb] rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header - No border lines, soft crayon yellow wash */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 bg-yellow-300/90">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 crayon-btn crayon-red text-white font-bold text-xs rotate-[-2deg] shadow-xs">
              SECRET EASTER EGG 🐣
            </span>
            <h3 className="font-marker text-xl sm:text-2xl font-black text-stone-950">
              The Making of Prajwal&apos;s Broken RC Car!
            </h3>
          </div>
          <button
            onClick={() => {
              soundEffects.playBeep(450);
              onClose();
            }}
            aria-label="Close easter egg video"
            className="p-1.5 crayon-btn crayon-stone text-stone-900 font-bold cursor-pointer hover:bg-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body - No border lines */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 font-kid text-stone-800">
          
          {/* Heartwarming Revelation Quote */}
          <div className="bg-amber-100/90 p-3 sm:p-4 rounded-2xl shadow-xs relative">
            <p className="font-marker text-lg sm:text-xl text-stone-950 font-bold">
              &ldquo;Dad! You built this entire car from scratch with your own hands?!&rdquo;
            </p>
            <p className="font-kid text-sm sm:text-base text-amber-950 mt-1">
              Dad smiled: <em>&ldquo;That&apos;s why I wasn&apos;t mad when you launched it off the table, buddy. Because I know how every screw fits together... and now, you will too!&rdquo;</em>
            </p>
          </div>

          {/* Self-Made Animated Video Component of Making the Red RC Car */}
          <RedCarMakingAnimationVideo autoPlay={true} />

          {/* Interactive Step-by-Step Blueprint of How the Car was Made - No border lines */}
          <div className="mt-4 pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-marker text-xl font-bold text-stone-950 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-700" />
                <span>Dad&apos;s 5-Step Car Building Blueprint</span>
              </h4>
              <span className="text-xs font-bold text-stone-500 font-mono bg-stone-100 px-2 py-0.5 rounded-full">
                Step {activeStep + 1} of 5
              </span>
            </div>

            {/* Step navigation tabs - Crayon colored buttons without borders */}
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {diySteps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundEffects.playBeep(500 + idx * 70);
                    setActiveStep(idx);
                  }}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-kid font-bold rounded-xl transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'crayon-btn crayon-yellow text-stone-950 font-black shadow-sm -translate-y-0.5'
                      : 'crayon-btn crayon-stone text-stone-700 hover:text-stone-950'
                  }`}
                >
                  <span className="mr-1">{s.icon}</span>
                  <span>Step {idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Active Step Details - Organic rounded background without hard borders */}
            <div className="bg-amber-50/80 p-4 rounded-2xl shadow-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <h5 className="font-marker text-lg font-bold text-stone-900">
                  {diySteps[activeStep].title}
                </h5>
                <span className="text-xs font-kid font-bold px-2.5 py-0.5 crayon-btn crayon-lime text-emerald-950">
                  {diySteps[activeStep].part}
                </span>
              </div>
              <p className="font-kid text-base text-stone-800 leading-relaxed">
                {diySteps[activeStep].description}
              </p>
            </div>
          </div>

        </div>

        {/* Footer - No borders */}
        <div className="p-3 sm:p-4 bg-stone-100/90 flex justify-between items-center text-xs font-kid">
          <span className="text-stone-600">
            🐣 Easter Egg unlocked: Prajwal discovers the secret origin of his car!
          </span>
          <button
            onClick={() => {
              soundEffects.playBeep(480);
              onClose();
            }}
            className="px-4 py-1.5 crayon-btn crayon-yellow text-stone-950 font-marker font-bold text-base cursor-pointer"
          >
            Back to Story
          </button>
        </div>

      </div>
    </div>
  );
};
