import { useState } from 'react';
import { LaceOverlay } from './LaceOverlay';
import { PaperCard } from './PaperCard';
import { X } from 'lucide-react';

interface SelectionPageProps {
  onComplete: (flags: string[]) => void;
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

export function SelectionPage({ onComplete }: SelectionPageProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFlag = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(flagId => flagId !== id)
        : [...prev, id]
    );
  };

  const handleComplete = () => {
    if (selected.length > 0) {
      onComplete(selected);
    }
  };

  return (
    <div className="min-h-screen bg-[#5C1A1A] relative overflow-hidden">
      <LaceOverlay />
      
      <div className="relative z-20 min-h-screen px-6 py-8">
        {/* Header Card */}
        <PaperCard decoration="clip" className="w-full max-w-2xl mx-auto mb-8">
          <div className="px-6 py-8 text-center">
            <h2 className="text-[#2A0A0A] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Select the Signs
            </h2>
            <p className="text-[#4A3A2A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Mark the patterns you've witnessed
            </p>
            {selected.length > 0 && (
              <p className="text-[#5C1A1A] mt-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {selected.length} selected
              </p>
            )}
          </div>
        </PaperCard>

        {/* Selection Grid */}
        <div className="w-full max-w-2xl mx-auto space-y-4 mb-8">
          {redFlags.map((flag, index) => {
            const isSelected = selected.includes(flag.id);
            const decorations: Array<'tape' | 'staple' | 'clip' | 'pin' | 'none'> = ['tape', 'staple', 'pin', 'none'];
            const decoration = decorations[index % decorations.length];
            const rotation = index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : '';
            
            return (
              <PaperCard 
                key={flag.id}
                decoration={decoration}
                torn={index % 4 === 0 ? 'top' : 'none'}
                className={`transform ${rotation} transition-transform duration-200 hover:scale-[1.02]`}
              >
                <button
                  onClick={() => toggleFlag(flag.id)}
                  className="w-full px-6 py-5 text-left relative group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p 
                        className={`${isSelected ? 'text-[#5C1A1A]' : 'text-[#2A0A0A]'} transition-colors`}
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {flag.text}
                      </p>
                      <p 
                        className="text-[#7A6A5A] mt-1 text-sm"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {flag.category}
                      </p>
                    </div>
                    
                    {/* Checkbox */}
                    <div className={`w-5 h-5 border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                      isSelected ? 'border-[#5C1A1A] bg-[#5C1A1A]' : 'border-[#4A3A2A] bg-transparent'
                    }`}>
                      {isSelected && (
                        <X className="w-3 h-3 text-[#E8DCC8]" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                </button>
              </PaperCard>
            );
          })}
        </div>

        {/* Submit Button */}
        {selected.length > 0 && (
          <PaperCard decoration="staple" className="w-full max-w-2xl mx-auto sticky bottom-6">
            <button
              onClick={handleComplete}
              className="w-full px-8 py-6 text-[#2A0A0A] transition-all duration-300 hover:bg-[#DED0B8] active:shadow-inner"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              View Your Archive
            </button>
          </PaperCard>
        )}
      </div>
    </div>
  );
}
