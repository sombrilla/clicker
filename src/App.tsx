import React from 'react';
import { AppCopiesProvider, AppCopies } from './context/appCopiesContext';
import { AppGenericModalProvider } from './context/appGenericModalContext';
import { Page } from './components/Page/Page';

const defaultCopies: AppCopies = {
  title: 'Hey',
  description: 'There!',
  errorModalButton: 'Open Error Modal',
  successModalButton: 'Open Success Modal',
  errorModal: {
    title: 'Oops!',
    description: 'There was an error.',
    confirm: 'Try Again',
    cancel: 'Close'
  },
  successModal: {
    title: 'Success!',
    description: 'That was a success.',
    cancel: 'Close',
  }
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
