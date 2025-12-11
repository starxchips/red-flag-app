import { LaceOverlay } from './LaceOverlay';
import { PaperCard } from './PaperCard';

interface WelcomePageProps {
  onStart: () => void;
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-[#5C1A1A] relative overflow-hidden">

      <LaceOverlay />
      
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Title Card */}
        <PaperCard decoration="pin" className="w-full max-w-md mb-8 transform -rotate-1">
          <div className="px-8 py-12 text-center">
            <h1 className="text-[#2A0A0A] mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              The Red Flag
            </h1>
            <h2 className="text-[#2A0A0A] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Archive
            </h2>
            <div className="w-24 h-[2px] bg-[#5C1A1A] mx-auto my-6 opacity-40"></div>
            <p className="text-[#4A3A2A] leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              A curated collection of warnings, patterns, and lessons learned. Document the signs you should have seen.
            </p>
          </div>
        </PaperCard>

        {/* Description Card */}
        <PaperCard decoration="tape" torn="top" className="w-full max-w-md mb-8 transform rotate-1">
          <div className="px-8 py-10">
            <p className="text-[#3A2A1A] mb-4 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Every story leaves traces. Some we keep, some we wish we'd noticed sooner.
            </p>
            <p className="text-[#3A2A1A] leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              This is your space to catalog the red flags—those subtle warnings that whispered before they screamed.
            </p>
          </div>
        </PaperCard>

        {/* Button Card */}
        <PaperCard decoration="staple" className="w-full max-w-md transform -rotate-1">
          <button
            onClick={onStart}
            className="w-full px-8 py-6 text-[#2A0A0A] transition-all duration-300 hover:bg-[#DED0B8] active:shadow-inner"
            style={{ fontFamily: 'Libre Baskerville, serif' }}
          >
            Begin Documentation
          </button>
        </PaperCard>

        {/* Decorative element */}
        <div className="mt-12 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path
              d="M30,10 L35,25 L50,30 L35,35 L30,50 L25,35 L10,30 L25,25 Z"
              fill="none"
              stroke="#E8DCC8"
              strokeWidth="1"
            />
            <circle cx="30" cy="30" r="3" fill="#E8DCC8"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
