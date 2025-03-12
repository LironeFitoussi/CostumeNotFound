import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define the type for resources
// interface TranslationResources {
//   en: { translation: { message: string; megilatEsther: string } };
//   fr: { translation: { message: string; megilatEsther: string } };
//   he: { translation: { message: string; megilatEsther: string } };
// }

// Import translations
// const resources: TranslationResources = {
const resources: Resource = {
  en: {
    translation: {
      message: "Costume Not Found",
      megilatEsther: "Read the Megilat Esther",
      clever: "I was too busy coding to think of a costume..."
    }
  },
  fr: {
    translation: {
      message: "Costume Non Trouvé",
      megilatEsther: "Lire la Mégilat Esther",
      clever: "J'étais trop occupé à coder pour penser à un déguisement..."
    }
  },
  he: {
    translation: {
      message: "תחפושת לא נמצאה",
      megilatEsther: "קרא את מגילת אסתר",
      clever: "הייתי עסוק מדי בלרשום קוד בשביל לחשוב על תחפושת"
    }
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Fallback language
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n; 