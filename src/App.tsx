import React from 'react';
import TopHeader from './components/Header/TopHeader.tsx';
import BottomHeader from './components/Header/BottomHeader.tsx';
import Home from './components/Home/Home.tsx';
import Footer from './components/Footer/Footer.tsx';


const App: React.FC = () => {
  return (
    <><header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Home />
      <Footer />
    </>
  );
};

export default App;
