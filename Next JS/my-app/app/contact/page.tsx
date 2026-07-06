'use client';

import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/src/utils/firebase';

const ContactScreen = () => {
  const [users, setUsers] = useState([]);

  const fetchUsersFromDB = async () => {
    const getUsers = await getDocs(collection(db, 'Users'));
    // console.log('DB Users:', getUsers);

    let targetData: any = [];

    getUsers.forEach((eachUser) => {
      console.log(eachUser.id, '--', eachUser.data());

      const obj = {
        ...eachUser.data(),
        docId: eachUser.id
      };
      targetData.push(obj);
    });
    targetData && setUsers(targetData);
  };

  useEffect(() => {
    fetchUsersFromDB();
  }, []);

  return (
    <div>
      <h1> Contact Screen! </h1>

      <ul>
        {
          users.map((item: any) => {
            return <li key={item.uid}> {item.email} </li>
          })
        }
      </ul>
    </div>
  );
};

export default ContactScreen;