import React from 'react';
import AmbulanceIcon from './icons/AmbulanceIcon';
import CheckIcon from './icons/CheckIcon';
import FacebookIcon from './icons/FacebookIcon';
import InfoIcon from './icons/InfoIcon';
import InstagramIcon from './icons/InstagramIcon';
import MenuIcon from './icons/MenuIcon';
import TornadoIcon from './icons/TornadoIcon';

const Component = () => {
  return (
    <div>
      <h1>Icon Showcase</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <h2>Ambulance Icon</h2>
          <AmbulanceIcon width="50" height="50" fill="black" />
        </div>
        <div>
          <h2>Check Icon</h2>
          <CheckIcon width="50" height="50" fill="green" />
        </div>
        <div>
          <h2>Facebook Icon</h2>
          <FacebookIcon width="50" height="50" fill="blue" />
        </div>
        <div>
          <h2>Info Icon</h2>
          <InfoIcon width="50" height="50" fill="blue" />
        </div>
        <div>
          <h2>Instagram Icon</h2>
          <InstagramIcon width="50" height="50" fill="purple" />
        </div>
        <div>
          <h2>Menu Icon</h2>
          <MenuIcon width="50" height="50" fill="black" />
        </div>
        <div>
          <h2>Tornado Icon</h2>
          <TornadoIcon width="50" height="50" fill="gray" />
        </div>
      </div>
    </div>
  );
};

export default Component;
