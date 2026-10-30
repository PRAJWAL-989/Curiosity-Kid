import React, { useEffect, useState } from 'react';
import { Glasses } from 'lucide-react';

interface MagicMagnifierLensProps {
  active: boolean;
}

export const MagicMagnifierLens: React.FC<MagicMagnifierLensProps> = ({ active }) => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [hoveredText, setHoveredText] = useState<string>('');

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Detect text under cursor
      const elem = document.elementFromPoint(e.clientX, e.clientY);
      if (elem && (elem.tagName === 'P' || elem.tagName === 'SPAN' || elem.tagName === 'H1' || elem.tagName === 'H2' || elem.tagName === 'H3' || elem.tagName === 'H4' || elem.tagName === 'LI')) {
        const text = elem.textContent?.trim();
        if (text && text.length > 5) {
          setHoveredText(text.slice(0, 140) + (text.length > 140 ? '...' : ''));
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [active]);

  if (!active || pos.x < 0) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75"
      style={{
        left: `${pos.x + 18}px`,
        top: `${pos.y + 18}px`,
        transform: 'translate3d(0,0,0)'
      }}
    >
      {/* 2D Kid-Drawn Magnifying Glass Frame */}
      <div className="relative bg-white/95 text-stone-950 p-3 rounded-md border-3 border-stone-900 shadow-[6px_6px_0px_#1c1917] max-w-xs backdrop-blur-xs">
        <div className="flex items-center gap-1.5 pb-1 mb-1 border-b border-stone-300 text-xs font-bold text-purple-700">
          <Glasses className="w-3.5 h-3.5" />
          <span className="font-sketch">MAGIC CLARITY LENS</span>
        </div>

        <div className="font-clean font-bold text-xs leading-relaxed text-stone-900 bg-yellow-50 p-1.5 rounded-xs border border-yellow-300">
          {hoveredText || "Hover over any story text or instructions to read in crystal-clear Lexend font!"}
        </div>
      </div>
    </div>
  );
};
