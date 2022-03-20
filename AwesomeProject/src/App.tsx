import React from 'react';
import Navigation from './navigation/Navigation';
import { RecoilRoot } from 'recoil';

const App = () => {
  return(
    <RecoilRoot>
      <Navigation/>
    </RecoilRoot>
  )
};

export default App;
