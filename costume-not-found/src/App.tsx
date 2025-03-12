import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Box, ThemeProvider, CssBaseline, Paper } from '@mui/material';
import { MatrixRain } from './components/molecules/MatrixRain';
import { BlurOverlay } from './components/molecules/BlurOverlay';
import { LanguageSwitcher } from './components/organisms/LanguageSwitcher';
import { ErrorContent } from './components/organisms/ErrorContent';
import { MatrixText } from './components/atoms/MatrixText';
import { matrixTheme } from './theme/matrixTheme';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.reloadResources().then(() => {
      const currentLang = i18n.language;
      i18n.changeLanguage(currentLang);
    });
  }, [i18n]);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'fr', 'he'].includes(browserLang)) {
      i18n.changeLanguage(browserLang);
    }
  }, [i18n]);

  return (
    <ThemeProvider theme={matrixTheme}>
      <CssBaseline />
      <MatrixRain />
      <BlurOverlay />
      
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          position: 'relative',
          zIndex: 2,
          p: 0
        }}
      >
        <Container 
          maxWidth={false}
          disableGutters
          sx={{ 
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            p: 0,
            m: 0
          }}
        >
          <Paper 
            elevation={0}
            sx={{ 
              p: { xs: 2, sm: 3 }, 
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              height: '100%',
              justifyContent: 'space-between',
              bgcolor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              background: 'transparent'
            }}
          >
            <LanguageSwitcher 
              currentLanguage={i18n.language}
              onLanguageChange={(lng) => i18n.changeLanguage(lng)}
            />

            <ErrorContent 
              message={t('message')}
              clever={t('clever')}
              megilatEsther={t('megilatEsther')}
              isHebrew={i18n.language === 'he'}
            />
            
            <MatrixText 
              variant="body2" 
              isHebrew={i18n.language === 'he'}
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                textAlign: 'center'
              }}
            >
              Lirone Fitoussi © {new Date().getFullYear()}
            </MatrixText>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App; 