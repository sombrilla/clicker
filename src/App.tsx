import React from 'react';
import { AppCopiesProvider, AppCopies } from './context/appCopiesContext';
import { AppGenericModalProvider } from './context/appGenericModalContext';
import { Page } from './components/Page/Page';

const defaultCopies: AppCopies = {
  title: 'Hey',
  description: 'There!',
  modalButton: 'Open Modal',
}

export const App = () => {
  return (
    <div className="App">
      <AppCopiesProvider data={defaultCopies}>
        <AppGenericModalProvider>
          <Page />
        </AppGenericModalProvider>
      </AppCopiesProvider>
    </div>
  );
}
