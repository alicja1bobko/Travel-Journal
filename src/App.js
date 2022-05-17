import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Travel from './components/Travel';
import data from './data';

export default function App() {
  const travels = data.map((item, index, data) => {
    let isLast = (data.length - 1 === index) ? true : false;
    return (
      <div>
        <Travel
          key={item.id}
          {...item}
          line={isLast}
        />
      </div>
    )
  })
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='travel--list'>
        
        {travels}
        </div>
     </div>
  )
}

  

