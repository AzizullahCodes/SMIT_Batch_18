"use client";

import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/src/utils/firebase';

const NextApp = () => {

  useEffect(() => {
    const fetchCurrentUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // console.log('Auth user: ', user);
        }

        else console.log('No user is available!');
      });
    };

    fetchCurrentUser();
  }, []);

  return (
    <div>
      <h1> Welcome to Next JS! </h1>
    </div>
  );
};

export default NextApp;