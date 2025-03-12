import React, { memo } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface MatrixTextProps extends Omit<TypographyProps, 'className'> {
  isHebrew?: boolean;
}

export const MatrixText: React.FC<MatrixTextProps> = memo(
  ({ isHebrew, children, sx, ...props }) => (
    <Typography
      className="matrix-text"
      component="div"
      sx={{
        fontFamily: isHebrew ? "'Miriam Mono CLM', monospace" : "'Share Tech Mono', monospace",
        color: '#00ff00',
        textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
        userSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        ...sx
      }}
      {...props}
    >
      {children}
    </Typography>
  ),
  (prevProps, nextProps) =>
    prevProps.isHebrew === nextProps.isHebrew &&
    prevProps.children === nextProps.children &&
    prevProps.sx === nextProps.sx
); 