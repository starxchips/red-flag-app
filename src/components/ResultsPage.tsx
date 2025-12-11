import { LaceOverlay } from './LaceOverlay';
import { PaperCard } from './PaperCard';

interface ResultsPageProps {
  result: {
    selectedFlags: string[];
    totalPoints: number;
    maxPoints: number;
    percentage: number;
  };
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

export function ResultsPage({ result, onRestart }: ResultsPageProps) {
  const { selectedFlags, percentage } = result;

  const selectedFlagDetails = redFlags.filter(flag =>
    selectedFlags.includes(flag.id)
  );

  const categoryCount = selectedFlagDetails.reduce((acc, flag) => {
    acc[flag.category] = (acc[flag.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const dominantCategory =
    Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '';

  const totalSelected = selectedFlags.length;

  // TITLE LOGIC (unchanged)
  const getTitle = () => {
    if (totalSelected >= 8) return 'A Pattern of Profound Harm';
    if (totalSelected >= 5) return 'Multiple Warning Signs';
    if (dominantCategory === 'manipulation') return 'Subtle Emotional Manipulation';
    if (dominantCategory === 'control') return 'Signs of Control';
    if (dominantCategory === 'volatile') return 'Unpredictable Patterns';
    if (dominantCategory === 'emotional') return 'Emotional Red Flags';
    return 'Warning Signs Observed';
  };

  // LONG TEXT (unchanged)
  const getNarrative = () => {
    if (totalSelected >= 8) {
      return "These patterns form more than a series of difficult moments—they paint a picture of a connection that has been slowly wearing down your sense of safety and self. Noticing this is not weakness. It is the moment your clarity becomes louder than the confusion you were taught to accept.";
    }
  
    if (totalSelected >= 5) {
      return "There is a noticeable thread running through these behaviors—one that suggests you’ve been carrying far more emotional weight than any person should have to. These patterns do not appear by accident. They shape how you speak, how you feel, and how small you’ve learned to become just to keep the peace.";
    }
  
    if (dominantCategory === 'manipulation') {
      return "Manipulation rarely announces itself. It shows up quietly—in the doubts planted in your mind, in the apologies that never sound sincere, in the way you’ve been encouraged to question your own memory before questioning their behavior. Seeing this clearly is an act of returning to yourself.";
    }
  
    if (dominantCategory === 'control') {
      return "Control often masquerades as concern. It can look like someone wanting what’s best for you, until you realize that ‘what’s best’ always benefits them. These patterns show a dynamic where your freedom, voice, and autonomy have been slowly crowded out. You deserve space to breathe again.";
    }
  
    if (dominantCategory === 'volatile') {
      return "Volatility keeps you bracing for impact—never sure which version of the other person you’ll encounter. This kind of inconsistency forces you into survival mode, teaching you to predict storms instead of experiencing calm. You deserve steadiness, not emotional weather you must constantly navigate.";
    }
  
    if (dominantCategory === 'emotional') {
      return "Emotional harm lingers not because it is loud, but because it settles into the quiet parts of your life—the way you speak, the way you apologize, the way you shrink yourself without realizing it. These signs reflect that your emotional world has been dismissed or minimized. Your feelings are not too much. They are data, and they matter.";
    }
  
    return "Even a small collection of red flags can reveal truths that were easy to ignore in the moment. Your choice to document them now shows awareness, strength, and a desire for clarity. Trust what you’ve noticed—it is pointing you toward a more honest understanding of your experience.";
  };
  

  return (
    <div className="min-h-screen bg-[#5C1A1A] relative overflow-hidden animate-fadeSlow">
      <LaceOverlay />

      <div className="relative z-20 min-h-screen px-6 py-12">

        {/* 🔥 NEW — PERCENTAGE CARD */}
        <PaperCard decoration="clip" torn="top" className="w-full max-w-2xl mx-auto mb-6">
          <div className="px-8 py-6 text-center">
            <h3
              className="text-[#2A0A0A] text-xl mb-1"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Red Flag Score
            </h3>
            <p
              className="text-[#5C1A1A] text-4xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {percentage}%
            </p>
          </div>
        </PaperCard>

        {/* TITLE CARD */}
        <PaperCard decoration="pin" torn="both" className="w-full max-w-2xl mx-auto mb-10 transform -rotate-1">
          <div className="px-10 py-12 text-center">
            <h1
              className="text-[#2A0A0A] mb-3 text-3xl"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              {getTitle()}
            </h1>
          </div>
        </PaperCard>

        {/* NARRATIVE */}
        <PaperCard decoration="tape" torn="top" className="w-full max-w-2xl mx-auto mb-10 transform rotate-1">
          <div className="px-9 py-10">
            <p
              className="text-[#2A0A0A] leading-relaxed text-justify indent-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '17px' }}
            >
              {getNarrative()}
            </p>
          </div>
        </PaperCard>

        {/* DOCUMENTED BEHAVIORS (unchanged) */}
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
                {selectedFlagDetails.map(flag => (
                  <div key={flag.id} className="flex items-start gap-3 border-b border-[#5C1A1A] border-opacity-10 pb-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="2" fill="#5C1A1A" opacity="0.6" />
                        <circle cx="6" cy="6" r="4" fill="none" stroke="#5C1A1A" strokeWidth="0.5" opacity="0.4" />
                      </svg>
                    </div>

                    <p
                      className="text-[#2A0A0A] leading-relaxed"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px' }}
                    >
                      {flag.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </PaperCard>
        )}

        {/* CLOSING CARD */}
        <PaperCard decoration="staple" torn="top" className="w-full max-w-2xl mx-auto mb-8 transform -rotate-1">
          <div className="px-9 py-8 text-center">
            <p
              className="text-[#3A2A1A] leading-relaxed italic"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px' }}
            >
              Recognizing these patterns is a quiet form of bravery—one that brings you back to yourself.
            </p>
          </div>
        </PaperCard>

        {/* BUTTONS */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4">

          {/* DOCUMENT ANOTHER */}
          <PaperCard decoration="none" className="transform -rotate-1 hover:rotate-0 transition-transform duration-200">
            <button
              onClick={onRestart}
              className="w-full px-6 py-5 text-[#2A0A0A] hover:bg-[#DED0B8]"
              style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '15px' }}
            >
              Document Another
            </button>
          </PaperCard>

          {/* SHARE RESULT */}
          <PaperCard decoration="none" className="transform rotate-1 hover:rotate-0 transition-transform duration-200">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'My Red Flag Result',
                    text: 'Here is my emotional pattern analysis result.',
                    url: window.location.href,
                  });
                } else {
                  alert('Sharing is not supported on this device.');
                }
              }}
              className="w-full px-6 py-5 text-[#2A0A0A] hover:bg-[#DED0B8]"
              style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '15px' }}
            >
              Share Result
            </button>
          </PaperCard>
        </div>
      </div>
    </div>
  );
}
