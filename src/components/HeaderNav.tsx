import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Moon, 
  Sun, 
  BookOpen, 
  User, 
  Terminal, 
  HelpCircle, 
  X, 
  Settings, 
  Type, 
  Glasses, 
  Sparkles,
  Palette
} from 'lucide-react';
import { AccessibilitySettings, ColorTheme } from '../types';
import { soundEffects } from '../utils/soundEffects';

interface HeaderNavProps {
  activeTab: 'story' | 'character' | 'terminal';
  setActiveTab: (tab: 'story' | 'character' | 'terminal') => void;
  a11y: AccessibilitySettings;
  setA11y: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  onOpenDocs: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  a11y,
  setA11y,
  onOpenDocs
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  // Monitor scroll: collapse to 3-line hamburger menu when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !a11y.soundEnabled;
    soundEffects.enabled = next;
    setA11y(prev => ({ ...prev, soundEnabled: next }));
    if (next) soundEffects.playBeep(600);
  };

  const toggleReducedMotion = () => {
    soundEffects.playBeep(450);
    setA11y(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

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

  const handleSelectTab = (tab: 'story' | 'character' | 'terminal') => {
    soundEffects.playBeep(520);
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <>
      {/* =================================================================== */}
      {/* 1. COLLAPSED 3-LINE BUTTON (Visible When Scrolled Down) */}
      {/* =================================================================== */}
      {isScrolled && !menuOpen && (
        <div className="fixed top-3 left-3 z-50 pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => {
              soundEffects.playBeep(540);
              setMenuOpen(true);
            }}
            aria-label="Open Navigation Menu"
            title="Open Menu (3 Lines)"
            className="px-3.5 py-2 crayon-btn crayon-yellow text-stone-950 flex items-center gap-2 cursor-pointer font-kid font-bold text-sm shadow-md"
          >
            {/* 3 Line Hamburger Icon */}
            <div className="flex flex-col gap-1 w-4 h-3.5 justify-center">
              <span className="w-4 h-0.5 bg-stone-950 rounded-full" />
              <span className="w-4 h-0.5 bg-stone-950 rounded-full" />
              <span className="w-4 h-0.5 bg-stone-950 rounded-full" />
            </div>
            <span className="font-marker font-bold text-stone-950 text-base">Menu</span>
          </button>

          {/* Settings in corner shortcut */}
          <button
            onClick={() => {
              soundEffects.playBeep(600);
              setSettingsOpen(true);
            }}
            aria-label="Open Accessibility Settings"
            title="Accessibility Settings"
            className="p-2.5 crayon-btn crayon-amber text-stone-950 cursor-pointer shadow-md"
          >
            <Settings className="w-4 h-4 text-stone-950" />
          </button>
        </div>
      )}

      {/* =================================================================== */}
      {/* 2. FULL TOP TASKBAR (Visible at top, or when 3-lines menu is opened) */}
      {/* =================================================================== */}
      {(!isScrolled || menuOpen) && (
        <header className={`${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'sticky top-0 z-40'} bg-[#fdfaf2]/95 backdrop-blur-xs transition-colors duration-200`}>
          {/* Tape decor */}
          <div className="w-full h-1.5 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 opacity-70" />

          <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            {/* Title & Badge */}
            <div className="flex items-center gap-2">
              <div className="relative inline-block rotate-[-1.5deg]">
                <h1 className="relative font-marker text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-stone-900 flex items-center gap-2">
                  <span>THE CIRCUIT KID</span>
                  <span className="text-xs font-kid px-2.5 py-0.5 crayon-btn crayon-red text-white font-bold rotate-2 shadow-xs">
                    Track 2
                  </span>
                </h1>
              </div>
              <p className="hidden md:block text-xs font-kid text-stone-600 ml-2">
                ✏️ Drawn by an 8-Year-Old Inventor
              </p>
            </div>

            {/* Navigation Tabs - Colored with crayons! */}
            <nav className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => handleSelectTab('story')}
                className={`px-3 py-1.5 text-xs sm:text-sm md:text-base font-kid font-bold transition-all cursor-pointer ${
                  activeTab === 'story'
                    ? 'crayon-btn crayon-yellow text-stone-950 shadow-sm -translate-y-0.5 rotate-[-1deg]'
                    : 'crayon-btn crayon-stone text-stone-700 hover:text-stone-950'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-800" />
                  <span>The Story</span>
                </span>
              </button>

              <button
                onClick={() => handleSelectTab('character')}
                className={`px-3 py-1.5 text-xs sm:text-sm md:text-base font-kid font-bold transition-all cursor-pointer ${
                  activeTab === 'character'
                    ? 'crayon-btn crayon-lime text-stone-950 shadow-sm -translate-y-0.5 rotate-[1deg]'
                    : 'crayon-btn crayon-stone text-stone-700 hover:text-stone-950'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-800" />
                  <span>Character Sheet</span>
                </span>
              </button>

              <button
                onClick={() => handleSelectTab('terminal')}
                className={`px-3 py-1.5 text-xs sm:text-sm md:text-base font-kid font-bold transition-all cursor-pointer ${
                  activeTab === 'terminal'
                    ? 'crayon-btn crayon-sky text-stone-950 shadow-sm -translate-y-0.5 rotate-[-0.5deg]'
                    : 'crayon-btn crayon-stone text-stone-700 hover:text-stone-950'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-800" />
                  <span>Invention Lab</span>
                </span>
              </button>
            </nav>

            {/* Quick Tools & Settings in Corner */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Settings Trigger */}
              <button
                onClick={() => {
                  soundEffects.playBeep(580);
                  setSettingsOpen(true);
                }}
                aria-label="Open Settings"
                title="Crayon Settings & Colors"
                className="px-2.5 py-1.5 text-xs font-kid font-bold crayon-btn crayon-amber text-stone-950 flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <Settings className="w-3.5 h-3.5 text-stone-900" />
                <span>Settings</span>
              </button>

              {/* BGM / Sound Toggle Button - Authentically colored with wax crayon! */}
              <button
                onClick={toggleSound}
                aria-label={a11y.soundEnabled ? "Mute interactive sounds" : "Enable interactive sounds"}
                title={a11y.soundEnabled ? "Sound ON (Crayon Colored)" : "Sound OFF (Click to unmute)"}
                className={`p-2 crayon-btn transition-all cursor-pointer ${
                  a11y.soundEnabled
                    ? 'crayon-lime text-stone-950 shadow-sm'
                    : 'crayon-stone text-stone-500'
                }`}
              >
                {a11y.soundEnabled ? <Volume2 className="w-4 h-4 text-stone-950" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
              </button>

              {/* Reduced Motion Toggle */}
              <button
                onClick={toggleReducedMotion}
                aria-label={a11y.reducedMotion ? "Motion is reduced" : "Reduce motion"}
                title={a11y.reducedMotion ? "Gentle Mode (Zero wobble)" : "Doodle Bounce Active"}
                className={`p-2 crayon-btn transition-all cursor-pointer ${
                  a11y.reducedMotion
                    ? 'crayon-purple text-stone-950 shadow-sm'
                    : 'crayon-stone text-stone-700'
                }`}
              >
                {a11y.reducedMotion ? <Moon className="w-4 h-4 text-purple-900" /> : <Sun className="w-4 h-4 text-amber-700" />}
              </button>

              {/* Hackathon Docs */}
              <button
                onClick={() => {
                  soundEffects.playBeep(700);
                  onOpenDocs();
                }}
                className="px-2.5 py-1.5 text-xs font-kid font-bold crayon-btn crayon-purple text-purple-950 flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <HelpCircle className="w-3.5 h-3.5 text-purple-900" />
                <span className="hidden sm:inline">Track 2 Docs</span>
                <span className="sm:hidden">Docs</span>
              </button>

              {/* Close Button when opened from 3-lines */}
              {isScrolled && (
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Collapse to 3 lines"
                  title="Collapse to 3 lines"
                  className="p-2 crayon-btn crayon-stone text-stone-950 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </header>
      )}

      {/* =================================================================== */}
      {/* 3. SETTINGS MODAL (No hard border lines - looks like a sketchbook card) */}
      {/* =================================================================== */}
      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-[#fff9e6] rounded-3xl shadow-2xl p-5 sm:p-6 overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 crayon-btn crayon-yellow text-sm">
                  🖍️
                </span>
                <h3 className="font-marker text-2xl font-black text-stone-950">
                  CRAYON &amp; ACCESSIBILITY SETTINGS
                </h3>
              </div>
              <button
                onClick={() => setSettingsOpen(false)}
                className="p-1.5 crayon-btn crayon-stone text-stone-900 font-bold cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 font-kid text-sm text-stone-800 max-h-[70vh] overflow-y-auto pr-1">
              
              {/* 1. Crayon Color Themes */}
              <div>
                <p className="font-marker font-bold text-base text-stone-900 uppercase mb-2 flex items-center justify-between">
                  <span>Color Vision &amp; Contrast:</span>
                  <span className="text-xs text-amber-900 font-bold">
                    {a11y.theme.toUpperCase()}
                  </span>
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { id: 'crayons', name: 'Crayons', bg: '#fde047', text: '#000' },
                    { id: 'midnight', name: 'Dark', bg: '#18181b', text: '#fff' },
                    { id: 'highlighter', name: 'WCAG AAA', bg: '#000000', text: '#facc15' },
                    { id: 'clean-slate', name: 'Soft', bg: '#f4f4f5', text: '#000' },
                    { id: 'cyber-green', name: 'Green', bg: '#052e16', text: '#22c55e' }
                  ].map((th) => (
                    <button
                      key={th.id}
                      onClick={() => changeTheme(th.id as ColorTheme)}
                      style={{ backgroundColor: th.bg, color: th.text }}
                      className={`h-9 rounded-xl text-xs font-bold transition-transform flex flex-col items-center justify-center cursor-pointer shadow-xs ${
                        a11y.theme === th.id ? 'scale-105 ring-2 ring-amber-400' : 'opacity-85 hover:opacity-100'
                      }`}
                    >
                      <span>{th.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Magic Reading Lens */}
              <div className="flex items-center justify-between bg-amber-50/80 p-3.5 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2">
                  <Glasses className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-marker font-bold text-stone-950 text-base">Magic Reading Lens</p>
                    <p className="text-xs text-stone-600">Magnify and clarify text under cursor</p>
                  </div>
                </div>
                <button
                  onClick={toggleMagicLens}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                    a11y.magicLensActive
                      ? 'crayon-btn crayon-purple text-purple-950 font-bold shadow-xs'
                      : 'crayon-btn crayon-stone text-stone-600'
                  }`}
                >
                  {a11y.magicLensActive ? 'ACTIVE' : 'OFF'}
                </button>
              </div>

              {/* 3. Dyslexia Mode & Font Size Slider */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={toggleDyslexia}
                  className={`p-3 rounded-2xl text-left transition-colors cursor-pointer shadow-xs ${
                    a11y.dyslexiaFont
                      ? 'crayon-btn crayon-lime text-emerald-950 font-bold'
                      : 'bg-white hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-1 font-marker font-bold text-sm">
                    <Type className="w-4 h-4" />
                    <span>Dyslexia Font</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {a11y.dyslexiaFont ? 'Lexend Active' : 'Kid Doodle Font'}
                  </p>
                </button>

                <div className="bg-white p-3 rounded-2xl flex flex-col justify-between shadow-xs">
                  <div className="flex items-center justify-between text-xs font-marker font-bold">
                    <span>Text Size:</span>
                    <span className="text-amber-800">{Math.round(a11y.fontSizeMultiplier * 100)}%</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 mt-1">
                    <button
                      onClick={() => adjustFontSize(-0.1)}
                      disabled={a11y.fontSizeMultiplier <= 1.0}
                      className="flex-1 py-1 crayon-btn crayon-stone disabled:opacity-40 text-stone-900 font-bold rounded-xl text-xs cursor-pointer"
                    >
                      A-
                    </button>
                    <button
                      onClick={() => adjustFontSize(0.1)}
                      disabled={a11y.fontSizeMultiplier >= 1.5}
                      className="flex-1 py-1 crayon-btn crayon-stone disabled:opacity-40 text-stone-900 font-bold rounded-xl text-xs cursor-pointer"
                    >
                      A+
                    </button>
                  </div>
                </div>
              </div>

              {/* 4. Reduced Motion & Sound Toggles */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={toggleReducedMotion}
                  className={`p-2.5 rounded-2xl flex items-center justify-center gap-1.5 font-bold text-xs cursor-pointer shadow-xs ${
                    a11y.reducedMotion ? 'crayon-btn crayon-purple text-indigo-950' : 'crayon-btn crayon-stone text-stone-800'
                  }`}
                >
                  {a11y.reducedMotion ? <Moon className="w-4 h-4 text-indigo-700" /> : <Sun className="w-4 h-4 text-amber-500" />}
                  <span>{a11y.reducedMotion ? 'Gentle Motion' : 'Wobbly Motion'}</span>
                </button>

                <button
                  onClick={toggleSound}
                  className={`p-2.5 rounded-2xl flex items-center justify-center gap-1.5 font-bold text-xs cursor-pointer shadow-xs ${
                    a11y.soundEnabled ? 'crayon-btn crayon-lime text-stone-900' : 'crayon-btn crayon-stone text-stone-500'
                  }`}
                >
                  {a11y.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>{a11y.soundEnabled ? 'Audio ON' : 'Audio Muted'}</span>
                </button>
              </div>

            </div>

            <div className="mt-4 pt-3 flex justify-end">
              <button
                onClick={() => setSettingsOpen(false)}
                className="px-5 py-2 crayon-btn crayon-yellow text-stone-950 font-marker font-bold text-base cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
