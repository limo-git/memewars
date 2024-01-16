import React, { useState } from 'react';
import '../styles/progressBar.css';

const Progressbar = () => {
    const [width, setWidth] = useState(0);
  
    const handleButtonClick = (direction) => {
      const newWidth = direction === 'left' ? width - 10 : width + 10;
      setWidth(Math.max(0, Math.min(100, newWidth)));
      document.documentElement.style.setProperty('--left-width', `${newWidth}%`);
    };
  
    return (
        <>
     <div className='progressBar'>
        <div className='left'></div>
        
        <div className='right'></div>
        <div className='buttonFlex'>
        <button className='blueButton' onClick={() => handleButtonClick('left')}>Vote</button>
        <button className='redButton' onClick={() => handleButtonClick('right')}>Vote</button>
        </div>
     </div>

     </>
    );
  };
  
  export default Progressbar;