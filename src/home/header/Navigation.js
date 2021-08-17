import React from 'react';
import Title from './Title';
import Icons from './Icons';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav-bar">
      <Title></Title>
      <Icons></Icons>
    </div>
  );
};

export default Navigation;
