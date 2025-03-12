import React from 'react';
import { Box } from '@mui/material';
import { LanguageIconButton } from '../atoms/LanguageIconButton';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange
}) => (
  <Box display="flex" justifyContent="center" gap={2}>
    <LanguageIconButton
      language="en"
      isActive={currentLanguage === 'en'}
      label="English"
      flag="🇺🇸"
      onLanguageChange={onLanguageChange}
    />
    <LanguageIconButton
      language="fr"
      isActive={currentLanguage === 'fr'}
      label="Français"
      flag="🇫🇷"
      onLanguageChange={onLanguageChange}
    />
    <LanguageIconButton
      language="he"
      isActive={currentLanguage === 'he'}
      label="עברית"
      flag="🇮🇱"
      onLanguageChange={onLanguageChange}
    />
  </Box>
); 