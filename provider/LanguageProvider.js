import React, { createContext, useContext, useState, useEffect } from 'react';
import { setStorageValue, getStorageValue } from '../helper/storage';
import { french, english } from '../helper/LanguageData';

export const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [languageIsLoaded, setLanguageIsLoaded] = useState(false);
  const [language, setLanguage] = useState(english);

  async function getStoredLanguage() {
    const usedLanguage = await getStorageValue("usedLanguage");

    if (usedLanguage && usedLanguage === "fr")
      setLanguage(french);
    else
      setLanguage(english);
  }

  async function getLanguage() {
    getStoredLanguage();
    setLanguageIsLoaded(true);
  }

  useEffect(() => {
    getLanguage();
  }, []);

  function ChangeLanguage(newLanguage) {
    switch(newLanguage) {
      case "fr":
        setLanguage(french);
        break;
      case "en":
        setLanguage(english);
        break;
      default:
        break;
    }
    setStorageValue("usedLanguage", newLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, languageIsLoaded, ChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageProvider;

