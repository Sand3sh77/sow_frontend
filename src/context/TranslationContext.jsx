import { createContext, useState, useEffect } from "react";
import { getTranslations } from "../api/translationApi";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});
  const [language, setLanguage] = useState(localStorage.getItem("language") || "english");

  useEffect(() => {
    localStorage.setItem("language", language);
    fetchTranslations(language);
  }, [language]);

  const fetchTranslations = async (lang) => {
    const data = await getTranslations(lang);
    setTranslations(data);
  };

  return (
    <TranslationContext.Provider
      value={{ translations, language, setLanguage, fetchTranslations }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
