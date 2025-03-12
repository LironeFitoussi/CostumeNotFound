import { createTheme } from '@mui/material';

export const matrixTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00',
      light: '#00ff9d',
      dark: '#00b300',
    },
    secondary: {
      main: '#39FF14',
      light: '#7fff00',
      dark: '#32CD32',
    },
    background: {
      default: 'transparent',
      paper: 'transparent',
    },
    text: {
      primary: '#00ff00',
      secondary: 'rgba(0, 255, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Share Tech Mono', monospace",
    h1: {
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    body1: {
      letterSpacing: '0.05em',
    },
    body2: {
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          padding: '10px 24px',
          fontSize: '1rem',
          backgroundColor: '#00ff00',
          '&:hover': {
            backgroundColor: '#00b300',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
}); 