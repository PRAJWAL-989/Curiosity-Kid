import React, { useState } from 'react';
import { AccessibilitySettings, ColorTheme } from '../types';
import { soundEffects } from '../utils/soundEffects';
import { 
  Palette, 
  ZoomIn, 
  Type, 
  Volume2, 
  VolumeX, 
  Moon, 
  Eye, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Glasses
} from 'lucide-react';

interface AccessibilityToyboxProps {
  a11y: AccessibilitySettings;
  setA11y: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  onReadCurrentScene?: () => void;
  isReading?: boolean;
}

export const AccessibilityToybox: React.FC<AccessibilityToyboxProps> = ({
  a11y,
  setA11y,
  onReadCurrentScene,
  isReading
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

  const changeTheme = (newTheme: ColorTheme) => {
    soundEffects.playCrayonScratch();
    setA11y(prev => ({ ...prev, theme: newTheme }));
  };

  const toggleDyslexia = () => {
    soundEffects.playBeep(520);
    setA11y(prev => ({ ...prev, dyslexiaFont: !prev.dyslexiaFont }));
  };

  const toggleMagicLens = () => {
    soundEffects.playLensHum();
    setA11y(prev => ({ ...prev, magicLensActive: !prev.magicLensActive }));
  };

  const adjustFontSize = (delta: number) => {
    soundEffects.playBeep(640);
    setA11y(prev => {
      const next = Math.min(1.5, Math.max(1.0, Number((prev.fontSizeMultiplier + delta).toFixed(1))));
      return { ...prev, fontSizeMultiplier: next };
    });
  };

  return (
    <aside 
      aria-label="Kid Accessibility Crayon Case"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 max-w-[calc(100vw-1.5rem)] sm:max-w-sm"
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="px-3 py-2 bg-[#fff9e6] hover:bg-yellow-200 text-stone-900 rounded-full border-2 border-stone-900 shadow-[3px_3px_0px_#1c1917] font-kid font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>🖍️</span>
          <span>Accessibility Crayon Case</span>
        </button>
      ) : (
        <div className="bg-[#fff9e6] rounded-xs border-3 border-stone-900 shadow-[6px_6px_0px_#1c1917] p-3 sm:p-4 relative">
        
        {/* Box Top Tab */}
        <div className="flex items-center justify-between border-b-2 border-stone-800 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="p-1 bg-yellow-400 rounded-xs border border-stone-800 text-xs">
              🖍️
            </span>
            <h4 className="font-sketch font-bold text-sm text-stone-900 flex items-center gap-1">
              <span>ACCESSIBILITY CRAYON CASE</span>
            </h4>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Collapse accessibility box" : "Expand accessibility box"}
            className="p-1 text-stone-700 hover:text-stone-950 font-bold"
          >
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-3 font-doodle text-xs">
            
            {/* 1. Real-time Crayon Palettes (Theme Shifter) */}
            <div>
              <p className="font-sketch font-bold text-stone-700 uppercase mb-1 flex items-center justify-between">
                <span>Color Vision & Contrast:</span>
                <span className="text-[10px] text-amber-800 font-bold">
                  {a11y.theme.toUpperCase()}
                </span>
              </p>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  { id: 'crayons', name: 'Crayons', bg: '#fde047', border: '#ca8a04', text: '#000' },
                  { id: 'midnight', name: 'Dark', bg: '#18181b', border: '#ffffff', text: '#fff' },
                  { id: 'highlighter', name: 'WCAG AAA', bg: '#000000', border: '#facc15', text: '#facc15' },
                  { id: 'clean-slate', name: 'Soft', bg: '#f4f4f5', border: '#71717a', text: '#000' },
                  { id: 'cyber-green', name: 'Green', bg: '#052e16', border: '#22c55e', text: '#22c55e' }
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => changeTheme(th.id as ColorTheme)}
                    style={{ backgroundColor: th.bg, color: th.text, borderColor: th.border }}
                    className={`h-8 rounded-xs border-2 text-[10px] font-bold transition-transform flex flex-col items-center justify-center ${
                      a11y.theme === th.id ? 'scale-110 shadow-xs ring-2 ring-stone-900' : 'opacity-85 hover:opacity-100'
                    }`}
                    title={th.name}
                  >
                    <span>{th.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Magic Reading Lens (Magnifier) */}
            <div className="flex items-center justify-between bg-white p-2 rounded-xs border border-stone-700">
              <div className="flex items-center gap-1.5">
                <Glasses className="w-4 h-4 text-purple-600" />
                <div>
                  <p className="font-sketch font-bold text-stone-900 text-xs">Magic Reading Lens</p>
                  <p className="text-[10px] text-stone-500">Magnify & clarify text on hover</p>
                </div>
              </div>
              <button
                onClick={toggleMagicLens}
                className={`px-2.5 py-1 text-xs font-bold rounded-xs border border-stone-800 transition-colors ${
                  a11y.magicLensActive
                    ? 'bg-purple-300 text-purple-950 font-bold'
                    : 'bg-stone-100 text-stone-600'
                }`}
              >
                {a11y.magicLensActive ? 'ACTIVE' : 'OFF'}
              </button>
            </div>

            {/* 3. Dyslexia Font & Text Zoom Controls */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={toggleDyslexia}
                className={`p-2 rounded-xs border border-stone-800 text-left transition-colors ${
                  a11y.dyslexiaFont
                    ? 'bg-emerald-200 text-emerald-950 font-bold'
                    : 'bg-white hover:bg-stone-50 text-stone-800'
                }`}
              >
                <div className="flex items-center gap-1 font-sketch font-bold text-xs">
                  <Type className="w-3.5 h-3.5" />
                  <span>Dyslexia Font</span>
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  {a11y.dyslexiaFont ? 'Lexend Active' : 'Kid Doodle Font'}
                </p>
              </button>

              <div className="bg-white p-2 rounded-xs border border-stone-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-sketch font-bold">
                  <span>Text Size:</span>
                  <span className="text-amber-700">{Math.round(a11y.fontSizeMultiplier * 100)}%</span>
                </div>
                <div className="flex items-center justify-between gap-1 mt-1">
                  <button
                    onClick={() => adjustFontSize(-0.1)}
                    disabled={a11y.fontSizeMultiplier <= 1.0}
                    className="flex-1 py-0.5 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-900 font-bold rounded-xs border border-stone-600 text-xs"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => adjustFontSize(0.1)}
                    disabled={a11y.fontSizeMultiplier >= 1.5}
                    className="flex-1 py-0.5 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-900 font-bold rounded-xs border border-stone-600 text-xs"
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Text-To-Speech Narrator */}
            {onReadCurrentScene && (
              <button
                onClick={onReadCurrentScene}
                className={`w-full py-1.5 px-3 rounded-xs border-2 border-stone-900 font-sketch font-bold text-xs flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 ${
                  isReading 
                    ? 'bg-rose-300 text-rose-950 animate-pulse'
                    : 'bg-amber-200 hover:bg-amber-300 text-stone-900 shadow-[2px_2px_0px_#1c1917]'
                }`}
              >
                <Volume2 className="w-4 h-4 text-stone-900" />
                <span>{isReading ? "🔊 Reading Story Aloud (Click to Stop)" : "🗣️ Read Story Aloud (Speech)"}</span>
              </button>
            )}

            <div className="text-[10px] text-stone-500 text-center font-doodle">
              ⚡ Real-time accessibility changes update the entire UI instantly.
            </div>

          </div>
        )}
      </div>
      )}
    </aside>
  );
};
