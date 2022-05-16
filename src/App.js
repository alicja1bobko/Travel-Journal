import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Travel from './components/Travel';

export default function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='travel--list'>
        <Travel />
      <Travel />
        <Travel />
        </div>
     </div>
  )
  }
  

