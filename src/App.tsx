import React from 'react';
import { AppCopiesProvider, AppCopies } from './context/appCopiesContext';
import { Page } from './components/Page/Page';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const defaultCopies: AppCopies = {
  title: 'HEY',
  secondTitle: 'WELCOME',
  description: 'There!',
  scrollLabel: 'Scroll down!',
}

export const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="App">
      <AppCopiesProvider data={defaultCopies}>
        <Page />
      </AppCopiesProvider>
    </div>
  );
}
