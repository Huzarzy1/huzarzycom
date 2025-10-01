import '../styles/Adboard.css';
// import React, { useState } from 'react';
import o12 from '../assets/o12.jpg';
import ipod from '../assets/ipod.jpg';

const Adboard = () => {
  return (
    <aside className="adboard">
      <div className="adboard-content">
        <div className="p-6">
          <h3 className="adboard-title">adBoard</h3>
        </div>

        <div classname="ads">
            <img src={o12} alt="Oceans 12" className="o12" />
            <img src={ipod} alt="iPod Ad" className="ipod" />
        </div>
      </div>
    </aside>
  );
};




export default Adboard;