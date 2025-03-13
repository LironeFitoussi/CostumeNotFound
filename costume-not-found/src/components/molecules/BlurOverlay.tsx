import React from 'react';

export const BlurOverlay: React.FC = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(8px)',
    zIndex: 1,
    pointerEvents: 'none'
  }} />
); 