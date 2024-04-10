import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LlistatTasques from './components/LlistatTasques.jsx';

function App() {

  return (
    <>
      <div className="card">
        <LlistatTasques />
      </div>
    </>
  );
}

export default App;