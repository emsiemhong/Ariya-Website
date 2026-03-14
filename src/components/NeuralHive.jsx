import React from 'react';

const NeuralHive = () => {
  const W = 346.41;
  const H = 60;
  
  // Pointy-top hexagon path
  const hexBase = "0,-20 17.32,-10 17.32,10 0,20 -17.32,10 -17.32,-10";

  // Coordinates for a tileable block
  const centers = [
    { x: 17.32, y: 20 }, { x: 51.96, y: 20 }, { x: 86.60, y: 20 }, { x: 121.24, y: 20 }, { x: 155.88, y: 20 },
    { x: 190.53, y: 20 }, { x: 225.17, y: 20 }, { x: 259.81, y: 20 }, { x: 294.45, y: 20 }, { x: 329.09, y: 20 },
    { x: 0, y: 50 }, { x: 34.64, y: 50 }, { x: 69.28, y: 50 }, { x: 103.92, y: 50 }, { x: 138.56, y: 50 },
    { x: 173.21, y: 50 }, { x: 207.85, y: 50 }, { x: 242.49, y: 50 }, { x: 277.13, y: 50 }, { x: 311.77, y: 50 }
  ];

  // 10% Gold (g) = 2, 20% Blue (b) = 4, rest dark (d) = 14
  const types = ['d','d','g','d','d','b','d','d','b','d',
                 'd','b','d','g','d','d','d','d','b','d'];
                 
  // Stagger animations to create a random pulse effect
  const anims = [1,2,3,1,2,3,1,2,3,1, 2,3,1,2,3,1,2,3,1,2];
  
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#2E5C4C] pointer-events-none -z-10" style={{ perspective: '1000px' }}>
      <div 
        className="absolute inset-[-50%] w-[200%] h-[200%] origin-center"
        style={{ 
          transform: 'rotateX(15deg) rotateZ(-5deg)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)'
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="neural-hive" width={W} height={H} patternUnits="userSpaceOnUse">
              {centers.map((c, i) => {
                const t = types[i];
                let fill = '#112c44'; 
                let opacityClass = 'opacity-20';
                
                if (t === 'g') {
                  fill = '#D4AF37'; // Gold
                  opacityClass = `animate-pulse-opacity-${anims[i]}`;
                } else if (t === 'b') {
                  fill = '#1F4E79'; // Royal Blue
                  opacityClass = `animate-pulse-opacity-${anims[i]}`;
                } else {
                  fill = '#112c44'; // Very dark blue
                  opacityClass = 'opacity-30';
                  // Add a slow pulse to some of the dark background tiles
                  if (i % 3 === 0) {
                    opacityClass = `animate-pulse-opacity-${anims[i]}`;
                  }
                }

                return (
                  <polygon 
                    key={i}
                    points={hexBase}
                    fill={fill}
                    className={opacityClass}
                    stroke="#2E5C4C"
                    strokeWidth="2"
                    transform={`translate(${c.x}, ${c.y})`}
                  />
                )
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-hive)" />
        </svg>
      </div>
    </div>
  );
}

export default NeuralHive;
