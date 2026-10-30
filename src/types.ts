/**
 * Types for The Circuit Kid - Track 2 Hackathon Project
 */

export interface CharacterSheet {
  name: string;
  codename: string;
  age: number;
  species: string;
  appearance: {
    hair: string;
    clothing: string;
    eyes: string;
    gear: string[];
    crayonColors: string[];
  };
  personality: {
    traits: string[];
    catchphrase: string;
    fears: string[];
    loves: string[];
  };
  professionAndQuirks: {
    primaryRole: string;
    superpower: string;
    quirks: string[];
    specialMoves: string[];
  };
  stats: {
    curiosity: number; // 0 - 100
    toolBreakerSkill: number;
    tinkeringSpeed: number;
    hugEnergy: number;
    snackLevel: number;
  };
}

export type ColorTheme = 
  | 'crayons'        // Wild 10-year-old crayon bleed (Default)
  | 'midnight'       // High-contrast chalkboard dark mode
  | 'highlighter'    // Yellow/Black ultra-high contrast WCAG AAA
  | 'clean-slate'    // Minimal soft contrast for light sensitivity
  | 'cyber-green'    // Phosphor green terminal aesthetic
  | 'colorblind-safe';// Protanopia/Deuteranopia friendly palette

export interface AccessibilitySettings {
  theme: ColorTheme;
  reducedMotion: boolean;
  soundEnabled: boolean;
  dyslexiaFont: boolean;
  fontSizeMultiplier: number; // 1.0, 1.2, 1.4
  magicLensActive: boolean;
  highContrastOutlines: boolean;
  speechNarrator: boolean;
}

export interface CircuitPart {
  id: string;
  name: string;
  kidName: string;
  role: string;
  explanation: string;
  icon: string;
  color: string;
  glowColor: string;
  funFact: string;
}

export interface StoryChapter {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
}
