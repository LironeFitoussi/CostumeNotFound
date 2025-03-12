import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface MatrixTextProps extends Omit<TypographyProps, 'className'> {
  isHebrew?: boolean;
}

export const MatrixText: React.FC<MatrixTextProps> = ({ 
  isHebrew, 
  children,
  sx,
  ...props 
}) => (
  <Typography
    className="matrix-text"
    sx={{
      fontFamily: isHebrew ? "'Miriam Mono CLM', monospace" : "'Share Tech Mono', monospace",
      color: '#00ff00',
      textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
      ...sx
    }}
    {...props}
  >
    {children}
  </Typography>
); 