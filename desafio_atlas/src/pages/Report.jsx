import React from 'react';
import Profile from '../components/profile';
import Repositories from '../components/repositories';
import '../css/report.css';

export default function Report() {
  return (
    <div className="container">  
      <div>
        <Profile />
      </div>
      <div>
        <Repositories />
      </div>
    </div>
  );
}
