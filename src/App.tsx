import React from 'react';
import TopHeader from './components/Header/TopHeader.tsx';
import BottomHeader from './components/Header/BottomHeader.tsx';
import Home from './components/Home/Home.tsx';


const App: React.FC = () => {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <Home />
    </>
  );
};

export default App;
