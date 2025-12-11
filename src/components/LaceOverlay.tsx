export function LaceOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-[0.08] z-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lace-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Mesh background */}
            <path d="M0,0 L200,0 L200,200 L0,200 Z" fill="none" stroke="white" strokeWidth="0.3" opacity="0.15" strokeDasharray="1,1"/>
            
            {/* Diagonal mesh texture */}
            <line x1="0" y1="0" x2="200" y2="200" stroke="white" strokeWidth="0.2" opacity="0.1"/>
            <line x1="0" y1="50" x2="150" y2="200" stroke="white" strokeWidth="0.2" opacity="0.1"/>
            <line x1="50" y1="0" x2="200" y2="150" stroke="white" strokeWidth="0.2" opacity="0.1"/>
            <line x1="200" y1="0" x2="0" y2="200" stroke="white" strokeWidth="0.2" opacity="0.1"/>
            <line x1="150" y1="0" x2="0" y2="150" stroke="white" strokeWidth="0.2" opacity="0.1"/>
            <line x1="200" y1="50" x2="50" y2="200" stroke="white" strokeWidth="0.2" opacity="0.1"/>
            
            {/* Central flower motif */}
            <g transform="translate(100, 100)">
              {/* Main flower with 5 petals */}
              <path d="M0,-15 Q3,-10 0,-5 Q-3,-10 0,-15 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
              <path d="M12,-9 Q10,-4 6,-2 Q10,0 12,-9 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
              <path d="M12,9 Q8,5 6,2 Q10,0 12,9 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
              <path d="M-12,9 Q-8,5 -6,2 Q-10,0 -12,9 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
              <path d="M-12,-9 Q-10,-4 -6,-2 Q-10,0 -12,-9 Z" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
              
              {/* Flower center with stamens */}
              <circle cx="0" cy="0" r="3" fill="none" stroke="white" strokeWidth="0.6" opacity="0.6"/>
              <circle cx="0" cy="0" r="1.5" fill="white" opacity="0.4"/>
              <line x1="0" y1="-1.5" x2="0" y2="-3" stroke="white" strokeWidth="0.4" opacity="0.5"/>
              <line x1="1.3" y1="-0.7" x2="2.6" y2="-1.5" stroke="white" strokeWidth="0.4" opacity="0.5"/>
              <line x1="1.3" y1="0.7" x2="2.6" y2="1.5" stroke="white" strokeWidth="0.4" opacity="0.5"/>
              <line x1="-1.3" y1="0.7" x2="-2.6" y2="1.5" stroke="white" strokeWidth="0.4" opacity="0.5"/>
              <line x1="-1.3" y1="-0.7" x2="-2.6" y2="-1.5" stroke="white" strokeWidth="0.4" opacity="0.5"/>
              
              {/* Delicate leaves around flower */}
              <path d="M-18,0 Q-22,-4 -24,-2 Q-22,0 -18,0 Z" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
              <path d="M18,0 Q22,-4 24,-2 Q22,0 18,0 Z" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
              <path d="M0,-18 Q-4,-22 -2,-24 Q0,-22 0,-18 Z" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
              <path d="M0,18 Q-4,22 -2,24 Q0,22 0,18 Z" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
              
              {/* Leaf veins */}
              <line x1="-20" y1="-1" x2="-23" y2="-1.5" stroke="white" strokeWidth="0.3" opacity="0.4"/>
              <line x1="20" y1="-1" x2="23" y2="-1.5" stroke="white" strokeWidth="0.3" opacity="0.4"/>
            </g>
            
            {/* Corner flower - top left */}
            <g transform="translate(30, 30)">
              <path d="M0,0 Q-5,-8 -2,-10 Q0,-8 2,-10 Q5,-8 0,0 Z" fill="none" stroke="white" strokeWidth="0.7" opacity="0.6"/>
              <circle cx="0" cy="0" r="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <path d="M-8,2 Q-10,0 -8,-2 L-6,0 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <path d="M8,2 Q10,0 8,-2 L6,0 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
            </g>
            
            {/* Corner flower - top right */}
            <g transform="translate(170, 30)">
              <path d="M0,0 Q-5,-8 -2,-10 Q0,-8 2,-10 Q5,-8 0,0 Z" fill="none" stroke="white" strokeWidth="0.7" opacity="0.6"/>
              <circle cx="0" cy="0" r="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <path d="M-8,2 Q-10,0 -8,-2 L-6,0 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
            </g>
            
            {/* Corner flower - bottom left */}
            <g transform="translate(30, 170)">
              <path d="M0,0 Q-5,8 -2,10 Q0,8 2,10 Q5,8 0,0 Z" fill="none" stroke="white" strokeWidth="0.7" opacity="0.6"/>
              <circle cx="0" cy="0" r="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <path d="M8,-2 Q10,0 8,2 L6,0 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
            </g>
            
            {/* Corner flower - bottom right */}
            <g transform="translate(170, 170)">
              <path d="M0,0 Q-5,8 -2,10 Q0,8 2,10 Q5,8 0,0 Z" fill="none" stroke="white" strokeWidth="0.7" opacity="0.6"/>
              <circle cx="0" cy="0" r="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
            </g>
            
            {/* Curved vine connecting elements - left side */}
            <path d="M30,60 Q25,80 30,100 Q35,120 30,140" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" strokeDasharray="2,1"/>
            
            {/* Small leaves along vine */}
            <path d="M27,70 Q24,72 26,74 Z" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
            <path d="M33,90 Q36,92 34,94 Z" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
            <path d="M27,110 Q24,112 26,114 Z" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
            <path d="M33,130 Q36,132 34,134 Z" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
            
            {/* Curved vine - right side */}
            <path d="M170,60 Q175,80 170,100 Q165,120 170,140" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" strokeDasharray="2,1"/>
            
            {/* Small leaves along right vine */}
            <path d="M173,70 Q176,72 174,74 Z" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
            <path d="M167,90 Q164,92 166,94 Z" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
            <path d="M173,110 Q176,112 174,114 Z" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
            
            {/* Small scattered floral elements */}
            <g transform="translate(60, 50)">
              <circle cx="0" cy="0" r="2.5" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.3"/>
              <path d="M-2.5,0 Q-3,-1.5 -2.5,-2" fill="none" stroke="white" strokeWidth="0.3" opacity="0.4"/>
              <path d="M2.5,0 Q3,-1.5 2.5,-2" fill="none" stroke="white" strokeWidth="0.3" opacity="0.4"/>
            </g>
            
            <g transform="translate(140, 50)">
              <circle cx="0" cy="0" r="2.5" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.3"/>
            </g>
            
            <g transform="translate(60, 150)">
              <circle cx="0" cy="0" r="2.5" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
              <path d="M0,-2.5 Q-1.5,-3 -2,-2.5" fill="none" stroke="white" strokeWidth="0.3" opacity="0.4"/>
              <path d="M0,2.5 Q-1.5,3 -2,2.5" fill="none" stroke="white" strokeWidth="0.3" opacity="0.4"/>
            </g>
            
            <g transform="translate(140, 150)">
              <circle cx="0" cy="0" r="2.5" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.3"/>
            </g>
            
            {/* Delicate curved connecting threads */}
            <path d="M30,30 Q50,20 70,25 Q90,30 100,45" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3"/>
            <path d="M170,30 Q150,20 130,25 Q110,30 100,45" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3"/>
            <path d="M30,170 Q50,180 70,175 Q90,170 100,155" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3"/>
            <path d="M170,170 Q150,180 130,175 Q110,170 100,155" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3"/>
            
            {/* Tiny decorative dots simulating lace holes */}
            <circle cx="45" cy="100" r="0.5" fill="white" opacity="0.3"/>
            <circle cx="155" cy="100" r="0.5" fill="white" opacity="0.3"/>
            <circle cx="100" cy="25" r="0.5" fill="white" opacity="0.3"/>
            <circle cx="100" cy="175" r="0.5" fill="white" opacity="0.3"/>
            <circle cx="70" cy="70" r="0.5" fill="white" opacity="0.3"/>
            <circle cx="130" cy="70" r="0.5" fill="white" opacity="0.3"/>
            <circle cx="70" cy="130" r="0.5" fill="white" opacity="0.3"/>
            <circle cx="130" cy="130" r="0.5" fill="white" opacity="0.3"/>
            
            {/* Additional organic flowing curves */}
            <path d="M50,45 Q55,50 50,55" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3"/>
            <path d="M150,45 Q145,50 150,55" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3"/>
            <path d="M50,145 Q55,150 50,155" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3"/>
            <path d="M150,145 Q145,150 150,155" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lace-pattern)"/>
      </svg>
    </div>
  );
}