import React from 'react';
import './App.css';

const CardOne = () => {
  return (
    <div className="card">
      <img
        src="https://png.pngtree.com/png-clipart/20190123/ourlarge/pngtree-chemistry-class-chemistry-teacher-education-industry-the-scientist-png-image_536186.jpg  "
        alt="Avatar"
        style={{ width: '100%' }}
      />
      <div className="container">
        <h4>
          <b>Atharv</b>
        </h4>
        <p>Learner forever 📚</p>
      </div>
    </div>
  );
};

export default CardOne;
