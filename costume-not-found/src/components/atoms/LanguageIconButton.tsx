import { IconButton, IconButtonProps, Tooltip, Typography } from '@mui/material';

interface LanguageIconButtonProps extends Omit<IconButtonProps, 'onClick'> {
  language: 'en' | 'fr' | 'he';
  isActive: boolean;
  label: string;
  flag: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageIconButton = ({
  language,
  isActive,
  label,
  flag,
  onLanguageChange,
  ...props
}: LanguageIconButtonProps) => (
  <Tooltip title={label}>
    <IconButton
      onClick={() => onLanguageChange(language)}
      sx={{
        border: isActive ? '2px solid' : '1px solid',
        borderColor: isActive ? 'primary.main' : 'rgba(0, 255, 0, 0.3)',
        backgroundColor: isActive ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
        '&:hover': {
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
        },
        width: '40px',
        height: '40px',
        padding: 0,
        minWidth: '40px',
        minHeight: '40px'
      }}
      {...props}
    >
      <Typography variant="body2" component="span" role="img" aria-label={label} sx={{ fontSize: '1.2rem', lineHeight: 1 }}>
        {flag}
      </Typography>
    </IconButton>
  </Tooltip>
); 