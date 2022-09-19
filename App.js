import React from 'react';
import LanguageProvider from './provider/LanguageProvider';
import Root from './components/Root';

export default function App() {
  return (
    <LanguageProvider>
      <Root />
    </LanguageProvider>
  );
}
