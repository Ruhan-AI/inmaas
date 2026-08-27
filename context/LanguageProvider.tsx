'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONTENT_EN } from '@/data/content.en';
import { CONTENT_UR } from '@/data/content.ur';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  isUrdu: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  content: typeof CONTENT_EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('inmaas_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  useEffect(() => {
    const saved = localStorage.getItem('inmaas_lang') as Language | null;
    if (saved === 'ur' || saved === 'en') {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === 'ur' ? 'rtl' : 'ltr';
    }
  }, []);

  const content = language === 'ur' ? CONTENT_UR : CONTENT_EN;

  return (
    <LanguageContext.Provider
      value={{
        language,
        isUrdu: language === 'ur',
        toggleLanguage,
        setLanguage,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
