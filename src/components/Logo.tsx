import { useState } from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  const [imageError, setImageError] = useState(false);

  // If the actual image file isn't found, we render a highly accurate SVG replica
  // of the uploaded logo so it looks perfect out of the box.
  if (imageError) {
    return (
      <svg 
        viewBox="0 0 240 120" 
        className={`bg-[#f6efe8] rounded-md shadow-sm ${className}`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <text 
          x="120" 
          y="65" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="48" 
          fontWeight="900" 
          fill="#d31e25" 
          textAnchor="middle" 
          letterSpacing="1" 
          transform="scale(1.05, 1) translate(-5, 0)"
        >
          JAN'S
        </text>
        <text 
          x="120" 
          y="88" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="13" 
          fontWeight="900" 
          fill="#1a1a1a" 
          textAnchor="middle" 
          letterSpacing="2"
        >
          BROASTED CHICKEN
        </text>
        <text 
          x="120" 
          y="104" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="9" 
          fontWeight="700" 
          fill="#1a1a1a" 
          textAnchor="middle" 
          letterSpacing="2"
        >
          ★ SINCE 1982 ★
        </text>
      </svg>
    );
  }

  return (
    <img 
      src="/logo.png" 
      alt="Jan's Broasted Chicken Logo" 
      className={`object-contain rounded-md ${className}`}
      onError={() => setImageError(true)}
    />
  );
}
