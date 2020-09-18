import React from 'react';
import { AppCopiesProvider, AppCopies } from './context/appCopiesContext';
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
        <Page />
      </AppCopiesProvider>
    </div>
  );
}
