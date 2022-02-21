import React from 'react';
import ComponentShowcase from './ComponentShowcase';
import NftCard from './NftCard/NftCard';

function App() {
  return (
    <ComponentShowcase>
        <NftCard/>
        <NftCard/>
        <NftCard/>
    </ComponentShowcase>
  );
}

export default App;
