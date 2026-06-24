"use client";

import React from 'react';

const NextApp = () => {

  const handleGreet = () => {
    console.log('Hello Next!');
  };

  return (
    <div>
      <h1> Welcome to Next JS! </h1>
      <button onClick={handleGreet}> Click Me </button>
    </div>
  );
};

export default NextApp;