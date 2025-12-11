import { LaceOverlay } from './LaceOverlay';
import { PaperCard } from './PaperCard';

interface ResultsPageProps {
  selectedFlags: string[];
  onRestart: () => void;
}

const redFlags = [
  { id: '1', text: 'Love bombing in early stages', category: 'manipulation' },
  { id: '2', text: 'Isolating from friends and family', category: 'control' },
  { id: '3', text: 'Gaslighting your reality', category: 'manipulation' },
  { id: '4', text: 'Controlling finances entirely', category: 'control' },
  { id: '5', text: 'Constant criticism disguised as jokes', category: 'emotional' },
  { id: '6', text: 'Refusing to take accountability', category: 'emotional' },
  { id: '7', text: 'Monitoring your location constantly', category: 'control' },
  { id: '8', text: 'Dismissing your feelings', category: 'emotional' },
  { id: '9', text: 'Making you feel guilty for boundaries', category: 'manipulation' },
  { id: '10', text: 'Hot and cold behavior patterns', category: 'emotional' },
  { id: '11', text: 'Explosive anger over small things', category: 'volatile' },
  { id: '12', text: 'Jealousy masquerading as love', category: 'control' },
];

export function ResultsPage({ selectedFlags, onRestart }: ResultsPageProps) {
  const selectedFlagDetails = redFlags.filter(flag => selectedFlags.includes(flag.id));
  
  const categoryCount = selectedFlagDetails.reduce((acc, flag) => {
    acc[flag.category] = (acc[flag.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const dominantCategory = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '';
  const totalSelected = selectedFlags.length;

  // Determine title based on selections
  const getTitle = () => {
    if (totalSelected >= 8) return 'A Pattern of Profound Harm';
    if (totalSelected >= 5) return 'Multiple Warning Signs';
    if (dominantCategory === 'manipulation') return 'Subtle Emotional Manipulation';
    if (dominantCategory === 'control') return 'Signs of Control';
    if (dominantCategory === 'volatile') return 'Unpredictable Patterns';
    if (dominantCategory === 'emotional') return 'Emotional Red Flags';
    return 'Warning Signs Observed';
  };

  // Narrative based on selections
  const getNarrative = () => {
    if (totalSelected >= 8) {
      return "What you've documented here is not a collection of isolated incidents, but a tapestry of harm woven with intention. These patterns don't exist in isolation—they compound, overlap, and feed into one another, creating an environment where your sense of self begins to fracture. You may have questioned yourself, wondered if you were being too sensitive, or believed that things would change. But patterns this entrenched rarely shift without intervention. The weight of recognizing this is heavy, but it is also the first step toward reclaiming what was slowly taken from you.";
    }
    if (totalSelected >= 5) {
      return "Multiple signs suggest a relationship dynamic that has moved beyond mere incompatibility into something more troubling. These aren't just personality clashes or misunderstandings—they are behaviors that systematically diminish your autonomy, your voice, and your emotional safety. It's easy to rationalize one or two incidents, to tell yourself that everyone has flaws. But when the pattern repeats, when you find yourself walking on eggshells or editing your authentic self to avoid conflict, something fundamental has shifted. Trust what you've witnessed.";
    }
    if (dominantCategory === 'manipulation') {
      return "Manipulation is insidious because it operates in the space between what is said and what is meant, between gesture and intention. It makes you question your perception, your memory, your worth. The patterns you've identified suggest someone who has learned to use affection, guilt, or confusion as tools of influence. This kind of emotional erosion happens slowly—so slowly that you might not notice until you've already adjusted your entire world to accommodate theirs. Recognizing manipulation is an act of self-preservation.";
    }
    if (dominantCategory === 'control') {
      return "Control often masquerades as care, concern, or protection. But true care doesn't require surveillance, isolation, or the surrender of autonomy. The behaviors you've documented suggest a need to dominate rather than collaborate, to possess rather than partner. Control creates an invisible cage—one that tightens gradually until you find yourself seeking permission for decisions that should be yours alone. Freedom and love are not mutually exclusive; in fact, real love requires both.";
    }
    if (dominantCategory === 'volatile') {
      return "Living with unpredictability creates a constant state of hypervigilance. You learn to read moods, anticipate reactions, adjust your behavior to avoid triggering an outburst. The volatility you've witnessed isn't passion—it's instability dressed up as intensity. It keeps you off-balance, never quite sure where you stand, always bracing for the next shift. This kind of environment erodes your nervous system and your sense of safety. You deserve steadiness, not chaos rebranded as depth.";
    }
    if (dominantCategory === 'emotional') {
      return "Emotional wounds leave scars that don't always show on the surface, but they run deep. The patterns you've identified suggest a relationship where your feelings are minimized, dismissed, or weaponized against you. Over time, this kind of treatment teaches you to doubt your emotional reality, to question whether what you feel is valid or if you're simply 'too much.' But your emotions are not an inconvenience—they are data, messengers, guides. When someone consistently invalidates them, they are telling you that your inner world doesn't matter. It does.";
    }
    return "Even a few red flags deserve attention. Sometimes we minimize what we've experienced, telling ourselves it wasn't 'that bad' or that we're overreacting. But your instinct to document these patterns means something. Trust that instinct. What you've noticed may be early signs of dynamics that could deepen over time, or they may be isolated behaviors worth addressing directly. Either way, you are worthy of relationships where red flags are rare exceptions, not recurring themes.";
  };

  return (
    <div className="min-h-screen bg-[#5C1A1A] relative overflow-hidden">
      <LaceOverlay />
      
      <div className="relative z-20 min-h-screen px-6 py-12">
        
        {/* Title Card - Large and prominent */}
        <PaperCard decoration="pin" torn="both" className="w-full max-w-2xl mx-auto mb-10 transform -rotate-1">
          <div className="px-10 py-12 text-center">
            <div className="mb-4">
              <svg width="60" height="2" viewBox="0 0 60 2" className="mx-auto opacity-40">
                <line x1="0" y1="1" x2="60" y2="1" stroke="#5C1A1A" strokeWidth="1.5"/>
              </svg>
            </div>
            <h1 className="text-[#2A0A0A] mb-3 text-3xl" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              {getTitle()}
            </h1>
            <div className="mt-4">
              <svg width="60" height="2" viewBox="0 0 60 2" className="mx-auto opacity-40">
                <line x1="0" y1="1" x2="60" y2="1" stroke="#5C1A1A" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </PaperCard>

        {/* Narrative Card - Diary-like reflection */}
        <PaperCard decoration="tape" torn="top" className="w-full max-w-2xl mx-auto mb-10 transform rotate-1">
          <div className="px-9 py-10">
            <p 
              className="text-[#2A0A0A] leading-relaxed text-justify indent-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '17px' }}
            >
              {getNarrative()}
            </p>
            <div className="mt-6 text-right">
              <div className="inline-block w-20 h-[1px] bg-[#5C1A1A] opacity-30"></div>
            </div>
          </div>
        </PaperCard>

        {/* Documented Behaviors Card */}
        {selectedFlagDetails.length > 0 && (
          <PaperCard decoration="clip" torn="bottom" className="w-full max-w-2xl mx-auto mb-10">
            <div className="px-8 py-9">
              <h3 
                className="text-[#2A0A0A] mb-6 text-center"
                style={{ fontFamily: 'Libre Baskerville, serif' }}
              >
                Documented Behaviors
              </h3>
              <div className="space-y-4">
                {selectedFlagDetails.map((flag, index) => (
                  <div key={flag.id} className="flex items-start gap-3 border-b border-[#5C1A1A] border-opacity-10 pb-3 last:border-0 last:pb-0">
                    {/* Decorative mark instead of checkmark */}
                    <div className="flex-shrink-0 mt-1">
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="2" fill="#5C1A1A" opacity="0.6"/>
                        <circle cx="6" cy="6" r="4" fill="none" stroke="#5C1A1A" strokeWidth="0.5" opacity="0.4"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p 
                        className="text-[#2A0A0A] leading-relaxed"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px' }}
                      >
                        {flag.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PaperCard>
        )}

        {/* Closing reflection card */}
        <PaperCard decoration="staple" torn="top" className="w-full max-w-2xl mx-auto mb-8 transform -rotate-1">
          <div className="px-9 py-8 text-center">
            <p 
              className="text-[#3A2A1A] leading-relaxed italic"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px' }}
            >
              Recognizing these patterns is an act of courage. You deserve relationships built on respect, safety, and genuine care—not control, confusion, or fear.
            </p>
          </div>
        </PaperCard>

        {/* Action tabs - Paper tab style */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4">
          <PaperCard decoration="none" className="transform -rotate-1 hover:rotate-0 transition-transform duration-200">
            <button
              onClick={onRestart}
              className="w-full px-6 py-5 text-[#2A0A0A] transition-all duration-300 hover:bg-[#DED0B8]"
              style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '15px' }}
            >
              Document Another
            </button>
          </PaperCard>

          <PaperCard decoration="none" className="transform rotate-1 hover:rotate-0 transition-transform duration-200">
            <button
              onClick={onRestart}
              className="w-full px-6 py-5 text-[#2A0A0A] transition-all duration-300 hover:bg-[#DED0B8]"
              style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '15px' }}
            >
              Return to Archive
            </button>
          </PaperCard>
        </div>

        {/* Decorative footer element */}
        <div className="mt-16 flex justify-center opacity-20">
          <svg width="100" height="40" viewBox="0 0 100 40">
            {/* Vintage ornamental divider */}
            <path d="M10,20 Q25,10 50,20 Q75,30 90,20" fill="none" stroke="#E8DCC8" strokeWidth="0.8"/>
            <circle cx="50" cy="20" r="3" fill="none" stroke="#E8DCC8" strokeWidth="0.8"/>
            <line x1="20" y1="25" x2="30" y2="15" stroke="#E8DCC8" strokeWidth="0.5" opacity="0.6"/>
            <line x1="70" y1="15" x2="80" y2="25" stroke="#E8DCC8" strokeWidth="0.5" opacity="0.6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}