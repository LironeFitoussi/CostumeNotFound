import { Typography, TypographyProps } from '@mui/material';

interface MatrixTextProps extends TypographyProps {
  isHebrew?: boolean;
}

export const MatrixText = ({ isHebrew, ...props }: MatrixTextProps) => (
  <Typography
    className="matrix-text"
    sx={{
      fontFamily: isHebrew ? "'Miriam Mono CLM', monospace" : "'Share Tech Mono', monospace",
      color: '#00ff00',
      textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
      ...props.sx
    }}
    {...props}
  />
); 