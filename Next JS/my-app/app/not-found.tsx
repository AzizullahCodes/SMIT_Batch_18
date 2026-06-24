'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return <h1> Page not found! </h1>
};

export default NotFound;