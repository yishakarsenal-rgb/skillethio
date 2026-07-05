import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations, t as translate } from '../i18n/translations';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (k) => k,
});

const STORAGE_KEY = 'skillethio:lang';

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'am') return stored;
  // Default: Amharic, to lead with the local language for Ethiopian students.
  return 'am';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'));
  }, []);

  const t = useCallback(
    (key) => translate(key, lang),
    [lang]
  );

  const value = { lang, setLang, toggleLang, t, translations };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);