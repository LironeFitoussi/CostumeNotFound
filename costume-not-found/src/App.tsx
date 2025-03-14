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
          height: '100dvh',
          width: '100dvw',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          position: 'relative',
          zIndex: 2,
          p: 0,
          minHeight: '-webkit-fill-available',
          touchAction: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <Container 
          maxWidth={false}
          disableGutters
          sx={{ 
            height: '100dvh',
            minHeight: '-webkit-fill-available',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            p: 0,
            m: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <Paper 
            elevation={0}
            sx={{ 
              p: 0, 
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 3, sm: 4 },
              height: 'auto',
              width: '100%',
              maxWidth: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              bgcolor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              background: 'transparent',
              my: 'auto'
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
                textAlign: 'center',
                width: '100%',
                mt: 'auto',
                pb: { xs: 1, sm: 2 }
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