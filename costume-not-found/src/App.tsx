import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Button, Box, ThemeProvider, createTheme, CssBaseline, IconButton, Tooltip, Paper } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import robotImage from './assets/robot.png';

// Create a theme with Matrix-inspired colors
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // Matrix green
      light: '#00ff9d',
      dark: '#00b300',
    },
    secondary: {
      main: '#39FF14', // Neon green
      light: '#7fff00',
      dark: '#32CD32',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#00ff00',
      secondary: 'rgba(0, 255, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
});

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Force reload translations
  useEffect(() => {
    i18n.reloadResources().then(() => {
      const currentLang = i18n.language;
      i18n.changeLanguage(currentLang);
    });
  }, [i18n]);

  // Detect browser language and set it on component mount
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'fr', 'he'].includes(browserLang)) {
      i18n.changeLanguage(browserLang);
    }
  }, [i18n]);

  // Function to change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.background.default,
          p: { xs: 2, sm: 3 }
        }}
      >
        <Container 
          maxWidth="xs" 
          sx={{ 
            height: '95vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '400px !important'
          }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 1.5, sm: 2 }, 
              borderRadius: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: '100%',
              justifyContent: 'space-between',
              bgcolor: 'background.paper',
              border: '1px solid rgba(0, 255, 0, 0.2)',
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)',
            }}
          >
            {/* Language Switcher with Flags */}
            <Box display="flex" justifyContent="center" gap={2}>
              <Tooltip title="English">
                <IconButton 
                  onClick={() => changeLanguage('en')}
                  sx={{ 
                    border: i18n.language === 'en' ? '2px solid' : '1px solid',
                    borderColor: i18n.language === 'en' ? 'primary.main' : 'rgba(0, 255, 0, 0.3)',
                    backgroundColor: i18n.language === 'en' ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 255, 0, 0.2)',
                    },
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    minWidth: '40px',
                    minHeight: '40px'
                  }}
                >
                  <Typography variant="body2" component="span" role="img" aria-label="English" sx={{ fontSize: '1.2rem', lineHeight: 1 }}>
                    🇺🇸
                  </Typography>
                </IconButton>
              </Tooltip>
              
              <Tooltip title="Français">
                <IconButton 
                  onClick={() => changeLanguage('fr')}
                  sx={{ 
                    border: i18n.language === 'fr' ? '2px solid' : '1px solid',
                    borderColor: i18n.language === 'fr' ? 'primary.main' : 'rgba(0, 255, 0, 0.3)',
                    backgroundColor: i18n.language === 'fr' ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 255, 0, 0.2)',
                    },
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    minWidth: '40px',
                    minHeight: '40px'
                  }}
                >
                  <Typography variant="body2" component="span" role="img" aria-label="Français" sx={{ fontSize: '1.2rem', lineHeight: 1 }}>
                    🇫🇷
                  </Typography>
                </IconButton>
              </Tooltip>
              
              <Tooltip title="עברית">
                <IconButton 
                  onClick={() => changeLanguage('he')}
                  sx={{ 
                    border: i18n.language === 'he' ? '2px solid' : '1px solid',
                    borderColor: i18n.language === 'he' ? 'primary.main' : 'rgba(0, 255, 0, 0.3)',
                    backgroundColor: i18n.language === 'he' ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 255, 0, 0.2)',
                    },
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    minWidth: '40px',
                    minHeight: '40px'
                  }}
                >
                  <Typography variant="body2" component="span" role="img" aria-label="עברית" sx={{ fontSize: '1.2rem', lineHeight: 1 }}>
                    🇮🇱
                  </Typography>
                </IconButton>
              </Tooltip>
            </Box>

            {/* 404 Error Image */}
            <Box 
              sx={{ 
                position: 'relative',
                width: '100%',
                minHeight: '35vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <img 
                src={robotImage}
                alt="404 Robot Error" 
                style={{ 
                  width: 'auto',
                  height: '100%',
                  maxHeight: '35vh',
                  objectFit: 'contain'
                }} 
              />
            </Box>
            
            {/* Main Error Message */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold', 
                  background: 'linear-gradient(45deg, #00ff00 30%, #39FF14 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                  fontSize: { xs: '2.5rem', sm: '3rem' }
                }}
              >
                404
              </Typography>
              <Typography 
                variant="h4"
                sx={{ 
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  mt: 1,
                  color: 'primary.main',
                  textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                {t('message')}
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  mt: 1,
                  fontStyle: 'italic',
                  color: 'text.secondary'
                }}
              >
                {t('clever')}
              </Typography>
            </Box>
            
            {/* Megilat Esther Link with Logo */}
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ my: 1 }}>
              <Button 
                variant="contained" 
                color="primary"
                href="https://mechon-mamre.org/p/pt/pt3301.htm"
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                  },
                }}
                startIcon={<MenuBookIcon />}
              >
                {t('megilatEsther')}
              </Button>
            </Box>

            {/* Copyright */}
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                textAlign: 'center'
              }}
            >
              Lirone Fitoussi © {new Date().getFullYear()}
            </Typography>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App; 