import { useState } from 'react';
import './App.css';
import Card from './Component/Card';
import par from './assets/images/facial.jpeg';
import mak from './assets/images/sermake.jpeg';
function App() { 
return (
  <div>
  <Card title="Facial" description="Glow naturally with our premium treatments" src={par}/>
  <Card title="Makeup" description="Perfect look for every occasion" src={mak}/>
  </div>
  );
}

export default App; 
