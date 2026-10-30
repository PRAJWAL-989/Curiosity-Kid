/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { ContinuousKidCanvas } from './components/ContinuousKidCanvas';
import { Track2CharacterSheet } from './components/Track2CharacterSheet';
import { Scene4CodeTerminal } from './components/Scene4CodeTerminal';
import { MagicMagnifierLens } from './components/MagicMagnifierLens';
import { HackathonDocsModal } from './components/HackathonDocsModal';
import { AccessibilitySettings } from './types';
import { storyScenes } from './data/storyData';
import { soundEffects } from './utils/soundEffects';
import { Sparkles, ArrowRight, BookOpen, Volume2, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'story' | 'character' | 'terminal'>('story');
  const [isDocsOpen, setIsDocsOpen] = useState<boolean>(false);
  const [exploredChassis, setExploredChassis] = useState<boolean>(false);
  const [isReading, setIsReading] = useState<boolean>(false);

  // Real-time accessibility state
  const [a11y, setA11y] = useState<AccessibilitySettings>({
    theme: 'crayons',
    reducedMotion: false,
    soundEnabled: true,
    dyslexiaFont: false,
    fontSizeMultiplier: 1.0,
    magicLensActive: false,
    highContrastOutlines: true,
    speechNarrator: false
  });

  // Handle Text-To-Speech read aloud
  const handleReadStory = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    window.speechSynthesis.cancel();
    const fullStory = storyScenes.map(s => `${s.title}. ${s.storyText}`).join(' ');
    const utterance = new SpeechSynthesisUtterance(fullStory);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);

    window.speechSynthesis.speak(utterance);
  };

  // Determine container styling based on theme
  const getThemeClass = () => {
    switch (a11y.theme) {
      case 'midnight':
        return 'bg-dark-chalkboard text-stone-100';
      case 'highlighter':
        return 'bg-black text-[#facc15]';
      case 'clean-slate':
        return 'bg-[#f4f4f5] text-stone-900';
      case 'cyber-green':
        return 'bg-[#031d0d] text-[#4ade80]';
      case 'crayons':
      default:
        return 'bg-notebook-ruled text-stone-900';
    }
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 relative ${getThemeClass()} ${
        a11y.dyslexiaFont ? 'font-clean' : 'font-doodle'
      } ${a11y.reducedMotion ? 'no-motion' : ''}`}
      style={{ fontSize: `${a11y.fontSizeMultiplier * 100}%` }}
    >
      {/* Navigation Header */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        a11y={a11y}
        setA11y={setA11y}
        onOpenDocs={() => setIsDocsOpen(true)}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        
        {/* TAB 1: THE STORY (Continuous Living Kid Doodle Canvas - No Line Sections!) */}
        {activeTab === 'story' && (
          <ContinuousKidCanvas
            a11y={a11y}
            onOpenTrack2Dossier={() => setActiveTab('character')}
          />
        )}

        {/* TAB 2: TRACK 2 CHARACTER SHEET */}
        {activeTab === 'character' && (
          <Track2CharacterSheet a11y={a11y} />
        )}

        {/* TAB 3: INVENTION LAB TERMINAL */}
        {activeTab === 'terminal' && (
          <div className="space-y-6">
            <div className="bg-white/95 p-6 rounded-3xl shadow-lg">
              <h2 className="font-sketch text-3xl font-bold text-stone-900">
                🛠️ Prajwal&apos;s Invention Workshop
              </h2>
              <p className="font-doodle text-stone-700 text-sm mt-1">
                Customize your very own invention using real-time code parameters, interactive propulsion, and accessibility tools!
              </p>
            </div>
            <Scene4CodeTerminal a11y={a11y} />
          </div>
        )}

      </main>

      {/* Floating Magic Magnifier Lens (Active when toggled in Settings) */}
      <MagicMagnifierLens active={a11y.magicLensActive} />

      {/* Hackathon Track 2 & Pull Request Docs Modal */}
      <HackathonDocsModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />

      {/* Footer - No hard border line */}
      <footer className="mt-16 bg-[#fdfaf2]/90 py-8 px-4 text-center font-doodle text-xs text-stone-600">
        <p className="font-bold text-stone-800">
          Built for hax.baby Hackathon — Track 2: &ldquo;Your Own Baby (Original Character)&rdquo;
        </p>
        <p className="mt-1">
          Drawn in 10-Year-Old Crayon &amp; Marker Style • Real-Time Accessible Physics • No Rule Violations
        </p>
      </footer>
    </div>
  );
}
