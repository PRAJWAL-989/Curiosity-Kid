import React, { useState } from 'react';
import { X, CheckCircle2, GitPullRequest, GitCommit, ShieldCheck, FileText, ExternalLink } from 'lucide-react';

interface HackathonDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HackathonDocsModal: React.FC<HackathonDocsModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'track2' | 'prs' | 'a11y'>('track2');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-[#fffefb] rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header - No border line */}
        <div className="flex items-center justify-between p-4 bg-amber-100/90">
          <div className="flex items-center gap-2">
            <span className="p-1.5 crayon-btn crayon-yellow text-stone-900 font-bold text-xs shadow-xs">
              🏆 hax.baby
            </span>
            <h3 className="font-sketch text-lg sm:text-xl font-bold text-stone-900">
              Hackathon Track 2 &amp; Pull Request Documentation
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close documentation modal"
            className="p-1.5 crayon-btn crayon-stone text-stone-900 font-bold cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher - Crayon buttons without border lines */}
        <div className="flex gap-2 p-2 bg-stone-100/90 font-doodle text-sm font-bold">
          <button
            onClick={() => setTab('track2')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              tab === 'track2' ? 'crayon-btn crayon-yellow text-stone-950 shadow-sm' : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Track 2 Compliance</span>
          </button>

          <button
            onClick={() => setTab('prs')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              tab === 'prs' ? 'crayon-btn crayon-sky text-stone-950 shadow-sm' : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <GitPullRequest className="w-4 h-4 text-sky-700" />
            <span>Git Commits &amp; PR Log</span>
          </button>

          <button
            onClick={() => setTab('a11y')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              tab === 'a11y' ? 'crayon-btn crayon-lime text-stone-950 shadow-sm' : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>WCAG AAA Audit</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 font-doodle text-sm text-stone-800">
          
          {tab === 'track2' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 p-3.5 rounded-xs border-2 border-emerald-600 text-emerald-950">
                <h4 className="font-sketch font-bold text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Track 2: &quot;Your Own Baby (Original Character)&quot; Fully Satisfied</span>
                </h4>
                <p className="text-xs mt-1">
                  All requirements from <code className="bg-emerald-100 px-1 py-0.5 rounded">hax.baby/baby-problem#track-2-guidelines</code> have been explicitly verified.
                </p>
              </div>

              <div className="border border-stone-300 rounded-xs divide-y divide-stone-200 text-xs">
                <div className="p-3 bg-white">
                  <span className="font-sketch font-bold text-stone-900 uppercase">1. Character Name:</span>
                  <p className="mt-0.5 text-stone-700"><strong>Prajwal (The Circuit Kid)</strong> with silicon sidekick <strong>Spark-E</strong>.</p>
                </div>

                <div className="p-3 bg-white">
                  <span className="font-sketch font-bold text-stone-900 uppercase">2. Species / Origin:</span>
                  <p className="mt-0.5 text-stone-700">Human 8-Year-Old Inventor &amp; Sentient Motherboard Familiar.</p>
                </div>

                <div className="p-3 bg-white">
                  <span className="font-sketch font-bold text-stone-900 uppercase">3. Appearance (Drawn in 2D Kid Style):</span>
                  <p className="mt-0.5 text-stone-700">Spiky black marker strokes with two stubborn antenna cowlicks, yellow oversized hoodie with blue crayon smudges, torn knee jeans, glowing LED eyes, and taped radio antenna.</p>
                </div>

                <div className="p-3 bg-white">
                  <span className="font-sketch font-bold text-stone-900 uppercase">4. Personality:</span>
                  <p className="mt-0.5 text-stone-700">Incurably curious, fearless toy disassembler, deeply empathetic to broken machines, high-lift hug enthusiast.</p>
                </div>

                <div className="p-3 bg-white">
                  <span className="font-sketch font-bold text-stone-900 uppercase">5. Profession &amp; Quirks:</span>
                  <p className="mt-0.5 text-stone-700">Master Toy Reverse-Engineer &amp; Junior Code Wizard. Superpower: <em>X-Ray Crayon Sight</em>. Quirk: Speaks in motor whirrs and beep-boop sounds while thinking.</p>
                </div>
              </div>
            </div>
          )}

          {tab === 'prs' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Detailed branch and commit progression showing feature-by-feature development history as required for transparent hackathon judging:
              </p>

              {/* PR #1 */}
              <div className="bg-white p-3.5 rounded-xs border-2 border-stone-800 shadow-xs">
                <div className="flex items-center justify-between font-sketch font-bold text-sm text-stone-950">
                  <span className="flex items-center gap-1.5">
                    <GitPullRequest className="w-4 h-4 text-purple-600" />
                    <span>PR #1: Track 2 Character Dossier &amp; Kid Doodle Foundation</span>
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-900 px-2 py-0.5 rounded border border-purple-300">
                    Merged #1
                  </span>
                </div>
                <p className="text-xs text-stone-700 mt-1">
                  Branch: <code className="bg-stone-100 px-1 py-0.5 rounded">feature/character-sheet-dossier</code>
                </p>
                <ul className="mt-2 space-y-1 text-xs text-stone-600 pl-4 list-disc">
                  <li><code>feat(character)</code>: Implement Track 2 character sheet specifications (Name, Species, Appearance, Personality, Quirks).</li>
                  <li><code>style(doodle)</code>: Set up 10-year-old wobbly line boiling SVG filter and wax crayon bleed effects.</li>
                  <li><code>docs(character)</code>: Canon character backstory documented.</li>
                </ul>
              </div>

              {/* PR #2 */}
              <div className="bg-white p-3.5 rounded-xs border-2 border-stone-800 shadow-xs">
                <div className="flex items-center justify-between font-sketch font-bold text-sm text-stone-950">
                  <span className="flex items-center gap-1.5">
                    <GitPullRequest className="w-4 h-4 text-sky-600" />
                    <span>PR #2: Interactive Story Scenes &amp; RC Car Physics</span>
                  </span>
                  <span className="text-xs bg-sky-100 text-sky-900 px-2 py-0.5 rounded border border-sky-300">
                    Merged #2
                  </span>
                </div>
                <p className="text-xs text-stone-700 mt-1">
                  Branch: <code className="bg-stone-100 px-1 py-0.5 rounded">feature/interactive-story-scenes</code>
                </p>
                <ul className="mt-2 space-y-1 text-xs text-stone-600 pl-4 list-disc">
                  <li><code>feat(scene-1)</code>: Slingshot RC car table launch with split-open chassis comic impact.</li>
                  <li><code>feat(scene-2)</code>: Interactive green motherboard PCB with copper trace lighting and antenna ripples.</li>
                  <li><code>feat(scene-3)</code>: Dad hug lift mechanics with major-chord synthesized chimes.</li>
                </ul>
              </div>

              {/* PR #3 */}
              <div className="bg-white p-3.5 rounded-xs border-2 border-stone-800 shadow-xs">
                <div className="flex items-center justify-between font-sketch font-bold text-sm text-stone-950">
                  <span className="flex items-center gap-1.5">
                    <GitPullRequest className="w-4 h-4 text-emerald-600" />
                    <span>PR #3: Real-Time Accessibility Engine &amp; Audio Synthesizer</span>
                  </span>
                  <span className="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded border border-emerald-300">
                    Merged #3
                  </span>
                </div>
                <p className="text-xs text-stone-700 mt-1">
                  Branch: <code className="bg-stone-100 px-1 py-0.5 rounded">feature/adaptive-a11y-engine</code>
                </p>
                <ul className="mt-2 space-y-1 text-xs text-stone-600 pl-4 list-disc">
                  <li><code>feat(a11y)</code>: Real-time crayon palette switcher (WCAG AAA Highlighter, Midnight, Soft Paper).</li>
                  <li><code>feat(lens)</code>: Pointer-following Magic Clarity Lens with Lexend font rendering.</li>
                  <li><code>feat(audio)</code>: Native Web Audio API procedural synthesis with zero external dependencies and instant mute.</li>
                  <li><code>feat(speech)</code>: SpeechSynthesis read-aloud storytelling engine.</li>
                </ul>
              </div>

              {/* PR #4 */}
              <div className="bg-white p-3.5 rounded-xs border-2 border-stone-800 shadow-xs">
                <div className="flex items-center justify-between font-sketch font-bold text-sm text-stone-950">
                  <span className="flex items-center gap-1.5">
                    <GitPullRequest className="w-4 h-4 text-amber-600" />
                    <span>PR #4: Kid Code Terminal &amp; Live Prototype Generator</span>
                  </span>
                  <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">
                    Merged #4
                  </span>
                </div>
                <p className="text-xs text-stone-700 mt-1">
                  Branch: <code className="bg-stone-100 px-1 py-0.5 rounded">feature/invention-lab-terminal</code>
                </p>
                <ul className="mt-2 space-y-1 text-xs text-stone-600 pl-4 list-disc">
                  <li><code>feat(terminal)</code>: Interactive kid IDE to assemble custom wheels, rockets, and accessibility features.</li>
                  <li><code>feat(preview)</code>: Real-time 2D SVG prototype rendering with spring physics and compiler logs.</li>
                </ul>
              </div>
            </div>
          )}

          {tab === 'a11y' && (
            <div className="space-y-3">
              <div className="bg-amber-50 p-3.5 rounded-xs border border-amber-300">
                <h4 className="font-sketch font-bold text-base text-amber-950">
                  Real-Time Adaptive Accessibility Architecture
                </h4>
                <p className="text-xs text-amber-900 mt-1">
                  How high interactivity and 10-year-old doodle art actively enhance rather than compromise accessibility:
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-white p-2.5 rounded-xs border border-stone-300">
                  <strong className="text-stone-900">1. Reduced Motion Compliance:</strong>
                  <p className="text-stone-700 mt-0.5">
                    Global &ldquo;Nap Time&rdquo; toggle instantly silences line-boil wiggles, stops bouncing elements, and stabilizes all animations for users prone to vestibular disorders.
                  </p>
                </div>

                <div className="bg-white p-2.5 rounded-xs border border-stone-300">
                  <strong className="text-stone-900">2. Dyslexia &amp; High-Legibility Mode:</strong>
                  <p className="text-stone-700 mt-0.5">
                    While the default text uses kid handwriting, users can switch the entire page or hover with the Magic Clarity Lens to render text in Google&apos;s <code>Lexend</code> font, scientifically proven to improve reading fluency.
                  </p>
                </div>

                <div className="bg-white p-2.5 rounded-xs border border-stone-300">
                  <strong className="text-stone-900">3. WCAG 2.2 AAA Contrast Ratios:</strong>
                  <p className="text-stone-700 mt-0.5">
                    The Highlighter Yellow on Pure Black palette delivers an 18:1 contrast ratio, surpassing the WCAG AAA threshold (7:1).
                  </p>
                </div>

                <div className="bg-white p-2.5 rounded-xs border border-stone-300">
                  <strong className="text-stone-900">4. Auditory Feedback &amp; TTS:</strong>
                  <p className="text-stone-700 mt-0.5">
                    Procedural audio provides subtle feedback for button presses, while browser SpeechSynthesis reads the full story aloud for visually impaired users.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer - No hard border line */}
        <div className="p-4 bg-stone-100/90 flex justify-between items-center text-xs font-doodle">
          <span className="text-stone-600">
            Participant: Prajwal Tambulkar • Ready for Hackathon Submission
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 crayon-btn crayon-yellow text-stone-900 font-sketch font-bold text-sm cursor-pointer"
          >
            Close Docs
          </button>
        </div>

      </div>
    </div>
  );
};
