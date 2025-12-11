import { ReactNode } from 'react';

interface PaperCardProps {
  children: ReactNode;
  className?: string;
  decoration?: 'tape' | 'staple' | 'clip' | 'pin' | 'none';
  torn?: 'top' | 'bottom' | 'both' | 'none';
}

export function PaperCard({ children, className = '', decoration = 'none', torn = 'none' }: PaperCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Torn edge top */}
      {(torn === 'top' || torn === 'both') && (
        <div className="absolute -top-[8px] left-0 right-0 h-[8px] overflow-hidden">
          <svg width="100%" height="8" preserveAspectRatio="none" viewBox="0 0 400 8">
            <path
              d="M0,8 L0,4 L5,6 L10,3 L15,5 L20,2 L25,6 L30,4 L35,7 L40,3 L45,5 L50,2 L55,6 L60,4 L65,7 L70,3 L75,5 L80,6 L85,4 L90,7 L95,3 L100,5 L105,2 L110,6 L115,4 L120,7 L125,3 L130,5 L135,2 L140,6 L145,4 L150,7 L155,3 L160,5 L165,6 L170,4 L175,7 L180,3 L185,5 L190,2 L195,6 L200,4 L205,7 L210,3 L215,5 L220,2 L225,6 L230,4 L235,7 L240,3 L245,5 L250,6 L255,4 L260,7 L265,3 L270,5 L275,2 L280,6 L285,4 L290,7 L295,3 L300,5 L305,2 L310,6 L315,4 L320,7 L325,3 L330,5 L335,6 L340,4 L345,7 L350,3 L355,5 L360,2 L365,6 L370,4 L375,7 L380,3 L385,5 L390,2 L395,6 L400,4 L400,8 Z"
              fill="#E8DCC8"
            />
          </svg>
        </div>
      )}

      {/* Main paper card */}
      <div 
        className="relative bg-[#E8DCC8] shadow-[4px_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(139, 117, 93, 0.02) 2px,
              rgba(139, 117, 93, 0.02) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(139, 117, 93, 0.02) 2px,
              rgba(139, 117, 93, 0.02) 4px
            ),
            linear-gradient(
              180deg,
              rgba(139, 117, 93, 0.03) 0%,
              transparent 100%
            )
          `
        }}
      >
        {children}
      </div>

      {/* Torn edge bottom */}
      {(torn === 'bottom' || torn === 'both') && (
        <div className="absolute -bottom-[8px] left-0 right-0 h-[8px] overflow-hidden">
          <svg width="100%" height="8" preserveAspectRatio="none" viewBox="0 0 400 8">
            <path
              d="M0,0 L0,4 L5,2 L10,5 L15,3 L20,6 L25,2 L30,4 L35,1 L40,5 L45,3 L50,6 L55,2 L60,4 L65,1 L70,5 L75,3 L80,2 L85,4 L90,1 L95,5 L100,3 L105,6 L110,2 L115,4 L120,1 L125,5 L130,3 L135,6 L140,2 L145,4 L150,1 L155,5 L160,3 L165,2 L170,4 L175,1 L180,5 L185,3 L190,6 L195,2 L200,4 L205,1 L210,5 L215,3 L220,6 L225,2 L230,4 L235,1 L240,5 L245,3 L250,2 L255,4 L260,1 L265,5 L270,3 L275,6 L280,2 L285,4 L290,1 L295,5 L300,3 L305,6 L310,2 L315,4 L320,1 L325,5 L330,3 L335,2 L340,4 L345,1 L350,5 L355,3 L360,6 L365,2 L370,4 L375,1 L380,5 L385,3 L390,6 L395,2 L400,4 L400,0 Z"
              fill="#E8DCC8"
            />
          </svg>
        </div>
      )}

      {/* Decorations */}
      {decoration === 'tape' && (
        <>
          <div 
            className="absolute -top-3 left-8 w-16 h-6 bg-[#D4C4A8] opacity-40 transform -rotate-2"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
            }}
          />
          <div 
            className="absolute -top-3 right-8 w-16 h-6 bg-[#D4C4A8] opacity-40 transform rotate-1"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
            }}
          />
        </>
      )}

      {decoration === 'staple' && (
        <>
          <div className="absolute top-2 left-4">
            <svg width="20" height="8" viewBox="0 0 20 8">
              <path
                d="M2,0 L2,6 M2,6 L18,6 M18,6 L18,0"
                stroke="#4A4A4A"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-2 right-4">
            <svg width="20" height="8" viewBox="0 0 20 8">
              <path
                d="M2,0 L2,6 M2,6 L18,6 M18,6 L18,0"
                stroke="#4A4A4A"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </>
      )}

      {decoration === 'clip' && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <svg width="32" height="16" viewBox="0 0 32 16">
            <ellipse cx="16" cy="8" rx="14" ry="6" fill="#3A3A3A" opacity="0.8"/>
            <ellipse cx="16" cy="7" rx="13" ry="5" fill="#5A5A5A" opacity="0.9"/>
            <rect x="14" y="0" width="4" height="3" fill="#4A4A4A"/>
          </svg>
        </div>
      )}

      {decoration === 'pin' && (
        <div className="absolute -top-2 right-4">
          <svg width="12" height="16" viewBox="0 0 12 16">
            <circle cx="6" cy="4" r="4" fill="#8B7355" opacity="0.8"/>
            <line x1="6" y1="8" x2="6" y2="16" stroke="#4A4A4A" strokeWidth="2"/>
            <circle cx="6" cy="4" r="2" fill="#6B5345"/>
          </svg>
        </div>
      )}
    </div>
  );
}
