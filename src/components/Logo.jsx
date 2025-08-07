import React from 'react';

function Logo({ width = 'fit-content', textColor = '#ffffff' }) {
  const accentColor = textColor === '#ffffff' ? '#60a5fa' : '#3b82f6';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width,
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        textDecoration: 'none',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        viewBox="0 0 24 24"
        width="36"
        fill={textColor} 
      >
        <path d="M3 3v18h18V3H3zm10 13H8v-2h5v2zm3-4H8v-2h8v2zm0-4H8V6h8v2z" />
      </svg>

      <span style={{ fontSize: '1.7rem', fontWeight: 600, color: textColor }}> 
        Mega<span style={{ color: accentColor }}>Blog</span> 
      </span>
    </div>
  );
}

export default Logo;