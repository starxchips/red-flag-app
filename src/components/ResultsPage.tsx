import { useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import { LaceOverlay } from './LaceOverlay'
import { PaperCard } from './PaperCard'
import { APP_BASE_URL } from '../config/appUrl'

interface ResultsPageProps {
  result: {
    selectedFlags: string[]
    totalPoints: number
    maxPoints: number
    percentage: number
  }
  onRestart: () => void
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
]

export function ResultsPage({ result, onRestart }: ResultsPageProps) {
  const { selectedFlags, percentage } = result

  /* prevent double insert in React strict mode */
  const hasSavedRef = useRef(false)

  useEffect(() => {
    if (hasSavedRef.current) return
    hasSavedRef.current = true

    const saveReflection = async () => {
      const { error } = await supabase.from('reflections').insert({
        percentage,
        selected_flags: selectedFlags,
      })

      if (error) {
        console.error('Supabase insert error:', error)
      }
    }

    saveReflection()
  }, [percentage, selectedFlags])

  const selectedFlagDetails = redFlags.filter(flag =>
    selectedFlags.includes(flag.id)
  )

  const categoryCount = selectedFlagDetails.reduce((acc, flag) => {
    acc[flag.category] = (acc[flag.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const dominantCategory =
    Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || ''

  const totalSelected = selectedFlags.length

  const getTitle = () => {
    if (totalSelected >= 8) return 'A Pattern of Profound Harm'
    if (totalSelected >= 5) return 'Multiple Warning Signs'
    if (dominantCategory === 'manipulation') return 'Subtle Emotional Manipulation'
    if (dominantCategory === 'control') return 'Signs of Control'
    if (dominantCategory === 'volatile') return 'Unpredictable Patterns'
    if (dominantCategory === 'emotional') return 'Emotional Red Flags'
    return 'Warning Signs Observed'
  }

  const getNarrative = () => {
    if (totalSelected >= 8) {
      return 'These patterns form more than a series of difficult moments—they paint a picture of a connection that has been slowly wearing down your sense of safety and self.'
    }
    if (totalSelected >= 5) {
      return 'There is a noticeable thread running through these behaviors—one that suggests you’ve been carrying far more emotional weight than any person should have to.'
    }
    if (dominantCategory === 'manipulation') {
      return 'Manipulation rarely announces itself. It shows up quietly—in the doubts planted in your mind.'
    }
    if (dominantCategory === 'control') {
      return 'Control often masquerades as concern until freedom disappears.'
    }
    if (dominantCategory === 'volatile') {
      return 'Volatility keeps you bracing for impact instead of experiencing calm.'
    }
    if (dominantCategory === 'emotional') {
      return 'Emotional harm lingers quietly in the way you shrink yourself.'
    }
    return 'Even a small collection of red flags can reveal truths worth honoring.'
  }

  const handleShare = async () => {
    const shareText =
      `Relationship Reflection\n\n` +
      `Score: ${percentage}%\n\n` +
      `Patterns:\n` +
      selectedFlagDetails.map(f => `• ${f.text}`).join('\n')

    if (navigator.share) {
      await navigator.share({
        title: 'Relationship Reflection',
        text: shareText,
        url: APP_BASE_URL,
      })
    } else {
      await navigator.clipboard.writeText(
        `${shareText}\n\n${APP_BASE_URL}`
      )
      alert('Link copied to clipboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#5C1A1A] relative overflow-hidden animate-fadeSlow">
      <LaceOverlay />

      <div className="relative z-20 min-h-screen px-6 py-12">

        {/* SCORE */}
        <PaperCard decoration="clip" torn="top" className="w-full max-w-2xl mx-auto mb-6">
          <div className="px-8 py-6 text-center">
            <h3
              className="text-[#2A0A0A] text-xl mb-1"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Reflection Overview
            </h3>
            <p
              className="text-[#5C1A1A] text-4xl font-bold"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {percentage}%
            </p>
          </div>
        </PaperCard>

        {/* TITLE */}
        <PaperCard decoration="pin" torn="both" className="w-full max-w-2xl mx-auto mb-10 transform -rotate-1">
          <div className="px-10 py-12 text-center">
            <h1
              className="text-[#2A0A0A] text-3xl"
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

        {/* FLAGS */}
        {selectedFlagDetails.length > 0 && (
          <PaperCard decoration="clip" torn="bottom" className="w-full max-w-2xl mx-auto mb-10">
            <div className="px-8 py-9">
              <h3
                className="text-[#2A0A0A] mb-6 text-center"
                style={{ fontFamily: 'Libre Baskerville, serif' }}
              >
                Patterns You Marked
              </h3>

              <div className="space-y-4">
                {selectedFlagDetails.map(flag => (
                  <p
                    key={flag.id}
                    className="text-[#2A0A0A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px' }}
                  >
                    {flag.text}
                  </p>
                ))}
              </div>
            </div>
          </PaperCard>
        )}

        {/* BUTTONS */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4">
          <PaperCard>
            <button
              onClick={onRestart}
              className="w-full px-6 py-5"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Another Reflection
            </button>
          </PaperCard>

          <PaperCard>
            <button
              onClick={handleShare}
              className="w-full px-6 py-5"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Share Reflection
            </button>
          </PaperCard>
        </div>
      </div>
    </div>
  )
}
